import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendWelcomeEmail } from '@/lib/email/templates/welcome';

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
    const { email } = validatedData;

    // Generate a simple referral code
    const referralCode = generateReferralCode();
    
    // Generate a random waitlist position for demo
    const position = Math.floor(Math.random() * 1000) + 1;

    // Send welcome email
    const emailResult = await sendWelcomeEmail({
      email,
      waitlistPosition: position,
      referralCode
    });
    
    if (!emailResult.success) {
      console.error('Failed to send welcome email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      position,
      referralCode,
      message: 'Successfully joined waitlist'
    }, { status: 201 });

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
  return NextResponse.json({
    status: 'healthy',
    message: 'Waitlist API is running'
  });
}