'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './DynamicPricing.module.scss';

export function DynamicPricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>One Plan. Full Access.</h2>
          <p className={styles.subtitle}>
            No tricks. No tiers. Everything included.
          </p>
        </div>

        <div className={styles.pricingWrapper}>
          <div className={styles.pricingCard}>
            <div className={styles.cardGlow}></div>

            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Limited Time Offer</span>
            </div>

            <div className={styles.priceDisplay}>
              <div className={styles.priceTag}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>19</span>
                <span className={styles.cents}>.99</span>
              </div>
              <div className={styles.period}>per month</div>
            </div>

            <div className={styles.trial}>
              <span className={styles.trialHighlight}>Start with 3-day FREE trial</span>
              <p className={styles.trialNote}>No credit card required</p>
            </div>

            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Daily Morning Email</strong>
                  <p>Delivered at 8 AM sharp</p>
                </div>
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>5-10 Expert Picks Daily</strong>
                  <p>Across all major sports</p>
                </div>
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Advanced Analytics</strong>
                  <p>CLV, Sharpe ratios, Kelly criterion</p>
                </div>
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Edge Detection</strong>
                  <p>Steam & line movement alerts</p>
                </div>
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>All Sports Included</strong>
                  <p>NFL, NBA, MLB, NHL, Soccer</p>
                </div>
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Cancel Anytime</strong>
                  <p>No long-term commitment</p>
                </div>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              onClick={() => trackCTAClick('pricing_dynamic', 'Start Free Trial Now')}
            >
              Start Free Trial Now
              <span className={styles.arrow}>→</span>
            </a>

            <div className={styles.guarantee}>
              <p>💯 3-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            <strong>Bet Responsibly:</strong> Sports betting involves risk. We provide analysis
            to help inform your decisions, but cannot guarantee wins. Never bet more than you can
            afford to lose. Past performance doesn't guarantee future results.
          </p>
          <p className={styles.helpline}>
            Need help? <strong>Call 1-800-GAMBLER</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
