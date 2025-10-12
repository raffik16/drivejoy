import { resend } from '../client';

interface WelcomeEmailParams {
  email: string;
  waitlistPosition: number;
  referralCode: string;
}

export async function sendWelcomeEmail({ email, waitlistPosition, referralCode }: WelcomeEmailParams) {
  try {
    await resend.emails.send({
      from: 'AICalledIT <hello@aicalledit.com>',
      to: email,
      subject: 'Welcome to AICalledIT - Thanks for joining! 🎯',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to AICalledIT</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333333; background-color: #f8f9fa;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a73e8 0%, #1557b0 100%); padding: 40px 20px; text-align: center;">
            <div style="max-width: 600px; margin: 0 auto;">
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0 0 12px 0;">
                Welcome to AICalledIT
              </h1>
              <p style="color: #e3f2fd; font-size: 16px; margin: 0;">
                Thanks for joining our waitlist!
              </p>
            </div>
          </div>

          <!-- Main Content -->
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; margin-top: -20px; position: relative; z-index: 1; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            

            <div style="padding: 30px 30px 40px 30px;">
              
              <p style="color: #333333; font-size: 16px; margin: 0 0 24px 0;">
                Hi there! We're excited to have you on our waitlist for AICalledIT, our AI-powered sports analytics platform currently in development.
              </p>

              <!-- What We're Building -->
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 24px 0;">
                <h3 style="color: #333333; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                  What We're Building
                </h3>
                
                <div style="margin-bottom: 12px;">
                  <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                    <span style="color: #1a73e8; font-size: 18px; margin-right: 10px;">🤖</span>
                    <div>
                      <strong style="color: #333333;">AI-Powered Analytics:</strong>
                      <span style="color: #666666;"> Using Lindly.ai and Claude Sonnet for sports predictions</span>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                    <span style="color: #0f9d58; font-size: 18px; margin-right: 10px;">🏈</span>
                    <div>
                      <strong style="color: #333333;">Multiple Sports:</strong>
                      <span style="color: #666666;"> NFL, NBA, MLB, NHL, and Soccer coverage</span>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: flex-start;">
                    <span style="color: #f9ab00; font-size: 18px; margin-right: 10px;">💰</span>
                    <div>
                      <strong style="color: #333333;">Simple Pricing:</strong>
                      <span style="color: #666666;"> $19.99/month for all sports coverage</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- What's Next -->
              <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 24px 0;">
                <h3 style="color: #333333; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                  What to Expect
                </h3>
                <ul style="color: #666666; font-size: 14px; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">Development updates as we build the platform</li>
                  <li style="margin-bottom: 8px;">Early access when we launch beta testing</li>
                  <li style="margin-bottom: 8px;">Special packages for waitlist members</li>
                </ul>
              </div>


            </div>
          </div>

          <!-- Footer -->
          <div style="max-width: 600px; margin: 30px auto; padding: 0 30px; text-align: center;">
            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px;">
              <p style="color: #666666; font-size: 14px; margin: 0 0 8px 0;">
                <strong>AICalledIT</strong> - AI-Powered Sports Analytics (In Development)
              </p>
              <p style="color: #999999; font-size: 12px; margin: 0;">
                You're receiving this because you joined our waitlist at 
                <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://aicalledit.com'}" style="color: #1a73e8; text-decoration: none;">aicalledit.com</a>
              </p>
            </div>
          </div>

        </body>
        </html>
      `
    });
    
    return { success: true };
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return { success: false, error };
  }
}