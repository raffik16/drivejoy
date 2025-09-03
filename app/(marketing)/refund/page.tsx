import styles from './page.module.scss';

export default function RefundPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Refund Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Free Trial Period</h2>
            <p>
              We offer a 3-day free trial for all new subscribers. During this 
              period, you will receive our daily email newsletters at no charge. You can 
              cancel anytime during the trial without being charged.
            </p>
            <p>
              <strong>Trial Delivery:</strong> Your trial begins with the first email newsletter 
              sent to your registered email address.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7-Day Money-Back Guarantee</h2>
            <p>
              If you're not satisfied with our service, you can request a full refund 
              within 7 days of your first paid subscription charge. This applies to 
              your first month only.
            </p>
            
            <h3>What's Covered:</h3>
            <ul>
              <li>First-time subscribers only</li>
              <li>Full refund of the first month's subscription fee</li>
              <li>Request must be made within 7 days of initial charge</li>
              <li>Account will be cancelled immediately upon refund</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Monthly Email Subscriptions</h2>
            <p>
              Monthly subscription fees are charged in advance for each billing period. 
              If you cancel your email newsletter subscription:
            </p>
            <ul>
              <li>You continue receiving daily emails until the end of your billing period</li>
              <li>No refund for partial months (except during 7-day guarantee period)</li>
              <li>Your subscription will not renew for the next billing cycle</li>
              <li>You can resubscribe at any time to resume email delivery</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How to Request a Refund</h2>
            <p>To request a refund during the eligible period:</p>
            <ol className={styles.steps}>
              <li>Email us at <strong>support@aicalledit.com</strong></li>
              <li>Include "Refund Request" in the subject line</li>
              <li>Provide your account email address</li>
              <li>Briefly explain your reason for the refund (optional but helpful)</li>
            </ol>
            <p>
              We typically process refund requests within 2-3 business days. Refunds 
              are issued to the original payment method and may take 5-10 business 
              days to appear on your statement.
            </p>
          </section>

          <section className={styles.section}>
            <h2>What's Not Covered</h2>
            <p>Refunds are not available for:</p>
            <ul>
              <li>Subscriptions active for more than 7 days (after first month)</li>
              <li>Partial month cancellations (except during guarantee period)</li>
              <li>Email delivery failures due to spam filters or user email issues</li>
              <li>Service suspensions due to Terms of Service violations</li>
              <li>Requests made more than 7 days after initial charge</li>
              <li>Chargebacks or disputed payments (contact us first)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Important Disclaimers</h2>
            <div className={styles.warning}>
              <h3>No Performance Guarantees</h3>
              <p>
                <strong>Refunds are not available based on betting performance or losses.</strong> 
                Our service provides analysis and education only. We do not guarantee wins, 
                profits, or any specific outcomes. Sports betting involves risk, and most 
                bettors lose money over time.
              </p>
            </div>
            <p>
              Refund eligibility is based solely on service satisfaction within the 
              specified time periods, not on betting results or financial outcomes 
              from using our analysis.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Processing Time</h2>
            <p>
              <strong>Review:</strong> Refund requests are typically reviewed within 1 business day
            </p>
            <p>
              <strong>Processing:</strong> Approved refunds are processed within 2-3 business days
            </p>
            <p>
              <strong>Credit/Debit Cards:</strong> 5-10 business days to appear on statement
            </p>
            <p>
              <strong>PayPal:</strong> 1-3 business days
            </p>
          </section>

          <section className={styles.section}>
            <h2>Cancellation vs. Refunds</h2>
            <h3>Cancellation (No Refund):</h3>
            <ul>
              <li>Cancel anytime by contacting support@aicalledit.com</li>
              <li>Continue receiving emails until end of billing period</li>
              <li>No charges for future billing cycles</li>
              <li>Can resubscribe later to resume email delivery</li>
            </ul>

            <h3>Refund (7-Day Guarantee):</h3>
            <ul>
              <li>Must contact support directly</li>
              <li>Available only within 7 days of first charge</li>
              <li>Immediate termination of email delivery</li>
              <li>Full refund of first month's fee</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Contact Information</h2>
            <p>For refund requests or questions about this policy:</p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> support@aicalledit.com</p>
              <p><strong>Subject Line:</strong> Refund Request (for faster processing)</p>
              <p><strong>Response Time:</strong> Within 24 hours during business days</p>
            </div>
          </section>

          <div className={styles.reminder}>
            <h3>Remember: Try Our Free Trial First!</h3>
            <p>
              The best way to evaluate our email newsletter service is during the 3-day free trial. 
              You can review our daily analysis, email content quality, and delivery reliability 
              without any commitment. Cancel before the trial ends to avoid any charges.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}