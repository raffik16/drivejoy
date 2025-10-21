'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './SimplePricing.module.scss';

export function SimplePricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.subtitle}>
            Start with a 3-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className={styles.pricingCard}>
          <div className={styles.badge}>Most Popular</div>

          <div className={styles.cardHeader}>
            <h3 className={styles.planName}>Expert Insider</h3>
            <p className={styles.planDescription}>
              Professional betting insights delivered daily
            </p>
          </div>

          <div className={styles.priceSection}>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>19.99</span>
              <span className={styles.period}>/month</span>
            </div>
          </div>

          <ul className={styles.features}>
            <li className={styles.feature}>
              <span className={styles.checkIcon}>✓</span>
              <span>Daily Morning Email (8 AM delivery)</span>
            </li>
            <li className={styles.feature}>
              <span className={styles.checkIcon}>✓</span>
              <span>Expert Pick Analysis (3-5 best bets daily)</span>
            </li>
            <li className={styles.feature}>
              <span className={styles.checkIcon}>✓</span>
              <span>Clear Explanations (Why each pick makes sense)</span>
            </li>
            <li className={styles.feature}>
              <span className={styles.checkIcon}>✓</span>
              <span>All Major Sports (NFL, NBA, MLB, NHL, Soccer)</span>
            </li>
            <li className={styles.feature}>
              <span className={styles.checkIcon}>✓</span>
              <span>Advanced Statistical Analysis & Edge Detection</span>
            </li>
            <li className={styles.feature}>
              <span className={styles.checkIcon}>✓</span>
              <span>CLV Tracking & Kelly Criterion Optimization</span>
            </li>
          </ul>

          <a
            href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => trackCTAClick('pricing_simple', 'Start 3-Day Free Trial')}
          >
            Start 3-Day Free Trial
          </a>

          <p className={styles.guarantee}>
            Cancel anytime • No commitment • Full access during trial
          </p>
        </div>

        <div className={styles.disclaimer}>
          <p>
            <strong>Important:</strong> We help you make smarter bets, but can't guarantee wins.
            Sports betting always has risk. Your success depends on your decisions and how you
            manage your money. Past wins don't promise future wins.
          </p>
        </div>
      </div>
    </section>
  );
}
