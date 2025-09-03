import styles from './page.module.scss';

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Service Description</h2>
            <p>
              AICalledIT provides sports betting analysis, insights, and educational content exclusively 
              through daily email newsletters. We do NOT operate as a sportsbook, facilitate gambling, 
              or handle any betting transactions. Our service is purely educational and analytical in nature, 
              delivered directly to your email inbox.
            </p>
            <p>
              <strong>Email-Only Service:</strong> Our entire service is delivered via email. We do not 
              provide web dashboards, mobile apps, or platform access beyond email delivery.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Age Requirements</h2>
            <p>
              You must be at least 21 years old to use our service. By creating an account, you 
              represent and warrant that you are 21 years of age or older. We reserve the right 
              to verify your age at any time and may suspend or terminate your account if we 
              cannot verify your eligibility.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Email Service Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Providing and maintaining a valid, accessible email address</li>
              <li>Checking your email regularly for service communications</li>
              <li>Managing your email settings to receive our newsletters</li>
              <li>Notifying us immediately of email address changes</li>
              <li>Monitoring spam/junk folders for our emails</li>
            </ul>
            <p>
              <strong>Email Delivery:</strong> We are not responsible for email delivery failures due to 
              spam filters, full inboxes, incorrect email addresses, or third-party email service interruptions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Subscription Terms</h2>
            <p>
              Our email newsletter subscription automatically renews monthly unless cancelled. By subscribing, 
              you authorize us to charge your payment method for the recurring subscription fee. 
              You can cancel your subscription at any time by contacting support at support@aicalledit.com.
            </p>
            <p>
              <strong>Auto-Renewal:</strong> Subscriptions automatically renew on the same day 
              each month. You will be charged the then-current subscription fee plus any applicable taxes.
            </p>
            <p>
              <strong>Service Delivery:</strong> Your subscription begins with the first email newsletter 
              delivered to your registered email address. Daily emails are typically sent each morning.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. No Guarantee of Results</h2>
            <div className={styles.warning}>
              <h3>IMPORTANT DISCLAIMER</h3>
              <p>
                <strong>We provide analysis and educational content only. We do NOT guarantee 
                profits, wins, or any specific results from using our service.</strong> Sports 
                betting involves substantial risk of financial loss. Most sports bettors lose 
                money over time. Any performance statistics we share represent historical data 
                and do not predict future results.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>6. Prohibited Uses</h2>
            <p>You may not:</p>
            <ul>
              <li>Share your account credentials with others</li>
              <li>Resell or redistribute our content without permission</li>
              <li>Use our service for any illegal gambling activities</li>
              <li>Attempt to reverse engineer or copy our analysis methods</li>
              <li>Use automated systems to access our service</li>
              <li>Harass or abuse our support team or other users</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Intellectual Property</h2>
            <p>
              All content, analysis, methodologies, and materials provided through our service 
              are owned by AICalledIT and protected by copyright, trademark, and other intellectual 
              property laws. You may use our content for personal, non-commercial purposes only.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AICALLEDIT SHALL NOT BE LIABLE FOR ANY 
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT 
              NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES 
              RESULTING FROM YOUR USE OF OUR SERVICE.
            </p>
            <p>
              Our total liability to you for any claims related to our service shall not exceed 
              the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless AICalledIT and its officers, 
              directors, employees, and agents from any claims, damages, losses, or expenses 
              arising from your use of our service, your violation of these terms, or your 
              betting activities.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Termination</h2>
            <p>
              Either party may terminate this agreement at any time. We may suspend or terminate 
              your access immediately if you violate these terms. Upon termination, you will 
              lose access to our service, but these terms will remain in effect for resolved 
              matters.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our service shall be resolved through 
              binding arbitration in accordance with the rules of the American Arbitration 
              Association. You waive any right to participate in a class action lawsuit or 
              class-wide arbitration.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California, without regard 
              to conflict of law principles. Any legal action must be brought in the state 
              or federal courts located in California.
            </p>
          </section>

          <section className={styles.section}>
            <h2>13. Changes to Terms</h2>
            <p>
              We may update these terms at any time. We will notify you of material changes 
              by email or through our service. Your continued use after changes constitutes 
              acceptance of the new terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>14. Contact Information</h2>
            <p>
              If you have questions about these terms, please contact us at:
            </p>
            <p>
              <strong>AICalledIT Support</strong><br />
              Email: support@aicalledit.com
            </p>
          </section>

          <div className={styles.finalDisclaimer}>
            <h3>Responsible Gambling Notice</h3>
            <p>
              Sports betting should be for entertainment only. Never bet more than you can 
              afford to lose. If you or someone you know has a gambling problem, help is 
              available:
            </p>
            <p>
              <strong>National Problem Gambling Helpline: 1-800-522-4700</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}