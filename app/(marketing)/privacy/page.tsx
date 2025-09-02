import styles from './page.module.scss';

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We collect information you provide directly to us, such as:</p>
            <ul>
              <li>Email address (required for service)</li>
              <li>Name (optional)</li>
              <li>Age verification (21+ requirement)</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Service Information</h3>
            <p>We collect minimal information necessary for email service delivery:</p>
            <ul>
              <li>Email engagement metrics (opens, clicks, unsubscribes)</li>
              <li>Basic delivery information (successful delivery, bounces)</li>
              <li>Subscription management data (start date, billing cycle)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Deliver daily sports analysis newsletters to your email</li>
              <li>Process payments and manage subscription billing</li>
              <li>Send important service updates and support communications</li>
              <li>Improve our email content and analysis quality</li>
              <li>Comply with legal requirements and CAN-SPAM regulations</li>
              <li>Respond to your questions and support requests</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Information Sharing</h2>
            <p>We do not sell, rent, or share your personal information except:</p>
            
            <h3>Service Providers</h3>
            <ul>
              <li><strong>Stripe:</strong> Payment processing (PCI compliant)</li>
              <li><strong>Resend:</strong> Email delivery and engagement tracking</li>
            </ul>

            <h3>Legal Requirements</h3>
            <p>We may disclose information if required by law or to:</p>
            <ul>
              <li>Comply with legal process or government requests</li>
              <li>Protect our rights and property</li>
              <li>Ensure user safety and service security</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              information against unauthorized access, alteration, disclosure, or destruction. 
              This includes:
            </p>
            <ul>
              <li>SSL encryption for all data transmission</li>
              <li>Secure data storage with reputable providers</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. We cannot 
              guarantee absolute security of your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Data Retention</h2>
            <p>We retain your information for as long as:</p>
            <ul>
              <li>Your account is active</li>
              <li>Necessary to provide our services</li>
              <li>Required by law or regulation</li>
              <li>Needed to resolve disputes</li>
            </ul>
            <p>
              You can request deletion of your account and associated data at any time by 
              contacting our support team.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correct:</strong> Update inaccurate or incomplete information</li>
              <li><strong>Delete:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Unsubscribe:</strong> Opt out of marketing emails</li>
              <li><strong>Restrict:</strong> Limit how we use your information</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Email Tracking</h2>
            <p>
              Our email newsletters include standard email tracking to improve service delivery:
            </p>
            <ul>
              <li><strong>Open tracking:</strong> Confirms successful email delivery</li>
              <li><strong>Click tracking:</strong> Measures engagement with email content</li>
              <li><strong>Unsubscribe tracking:</strong> Honors opt-out requests immediately</li>
            </ul>
            <p>
              This tracking is standard for newsletter services and helps ensure proper delivery. 
              Most email clients allow you to block email tracking if desired.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. California Privacy Rights (CCPA)</h2>
            <p>
              California residents have additional rights under the California Consumer Privacy Act:
            </p>
            <ul>
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
            <p>
              <strong>We do not sell personal information.</strong> To exercise these rights, 
              contact us at privacy@aicalledit.com.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. International Users</h2>
            <p>
              Our service is based in the United States. If you access our service from outside 
              the US, you consent to the transfer of your information to the United States, 
              which may have different privacy laws than your jurisdiction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Children's Privacy</h2>
            <p>
              Our service is not intended for anyone under 21 years of age. We do not knowingly 
              collect personal information from individuals under 21. If we discover we have 
              collected information from someone under 21, we will delete it immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy periodically. We will notify you of material 
              changes by email or through our service. Your continued use after changes 
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, contact us:
            </p>
            <p>
              <strong>AICalledIT Privacy Team</strong><br />
              Email: privacy@aicalledit.com<br />
              Subject: Privacy Inquiry
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}