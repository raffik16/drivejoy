import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { query, transaction } from '@/lib/db/connection';

// Validation schema
const joinWaitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
  referralCode: z.string().optional(),
  source: z.string().default('organic'),
  utm: z.object({
    source: z.string().nullable().optional(),
    medium: z.string().nullable().optional(),
    campaign: z.string().nullable().optional(),
  }).optional(),
});

function generateReferralCode(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = joinWaitlistSchema.parse(body);
    const { email, referralCode, source, utm } = validatedData;

    // Use transaction for atomicity
    const result = await transaction(async (client) => {
      // Check if email already exists
      const existingLead = await client.query(
        'SELECT id, email, waitlist_position, referral_code FROM leads WHERE email = $1',
        [email]
      );

      if (existingLead.rows.length > 0) {
        const existing = existingLead.rows[0];
        return {
          position: existing.waitlist_position,
          referralCode: existing.referral_code,
          message: 'Email already registered'
        };
      }

      // Validate referral code if provided
      let referrer = null;
      let skipCredits = 0;
      
      if (referralCode) {
        const referrerResult = await client.query(
          'SELECT id, referral_code FROM leads WHERE referral_code = $1',
          [referralCode]
        );
        
        if (referrerResult.rows.length > 0) {
          referrer = referrerResult.rows[0];
          skipCredits = 100; // Skip 100 positions for valid referral
        }
      }

      // Get next waitlist position
      const positionResult = await client.query(
        'SELECT COALESCE(MAX(waitlist_position), 0) + 1 as next_position FROM leads'
      );
      const basePosition = positionResult.rows[0].next_position;
      const finalPosition = Math.max(1, basePosition - skipCredits);

      // Generate unique referral code
      let newReferralCode: string;
      let codeExists = true;
      let attempts = 0;
      
      while (codeExists && attempts < 10) {
        newReferralCode = generateReferralCode();
        const codeCheck = await client.query(
          'SELECT id FROM leads WHERE referral_code = $1',
          [newReferralCode]
        );
        codeExists = codeCheck.rows.length > 0;
        attempts++;
      }

      if (codeExists) {
        throw new Error('Unable to generate unique referral code');
      }

      // Insert new lead
      const insertResult = await client.query(`
        INSERT INTO leads (
          email, 
          referral_code, 
          referred_by, 
          waitlist_position, 
          source,
          utm_source,
          utm_medium,
          utm_campaign,
          skip_credits
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id, waitlist_position, referral_code
      `, [
        email,
        newReferralCode!,
        referrer?.referral_code || null,
        finalPosition,
        source,
        utm?.source || null,
        utm?.medium || null,
        utm?.campaign || null,
        skipCredits
      ]);

      const newLead = insertResult.rows[0];

      // Update referrer's referral count if applicable
      if (referrer) {
        await client.query(
          'UPDATE leads SET referral_count = referral_count + 1 WHERE id = $1',
          [referrer.id]
        );
      }

      // TODO: Send welcome email here
      // await sendWelcomeEmail(email, newLead.waitlist_position, newLead.referral_code);

      return {
        position: newLead.waitlist_position,
        referralCode: newLead.referral_code,
        message: 'Successfully joined waitlist'
      };
    });

    return NextResponse.json(result, { status: 201 });

  } catch (error) {
    console.error('Waitlist join error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    // Get current waitlist stats
    const statsResult = await query(`
      SELECT 
        COUNT(*) as total_signups,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as signups_today,
        AVG(referral_count) as avg_referrals
      FROM leads
    `);

    const stats = statsResult.rows[0];

    return NextResponse.json({
      status: 'healthy',
      waitlist_stats: {
        total_signups: parseInt(stats.total_signups),
        signups_today: parseInt(stats.signups_today),
        avg_referrals: parseFloat(stats.avg_referrals || 0).toFixed(2)
      }
    });
  } catch (error) {
    console.error('Waitlist health check error:', error);
    return NextResponse.json(
      { error: 'Service unavailable' },
      { status: 503 }
    );
  }
}