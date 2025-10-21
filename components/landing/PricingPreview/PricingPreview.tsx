'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './PricingPreview.module.scss';

export function PricingPreview() {
  return (
    <section className={styles.pricingPreview}>
      <div className={styles.container}>
        <h2 className={styles.title}>Start Winning for Just $19.99/Month</h2>
        
        <div className={styles.pricingCards}>
          <div className={`${styles.card} ${styles.featured} ${styles.single}`}>
            <div className={styles.cardHeader}>
              <h3>Expert Insider</h3>
              <p className={styles.tagline}>Join 1000+ members winning consistently</p>
              <p className={styles.price}>$19.99<span className={styles.period}>/month</span></p>
              <p className={styles.savings}>Less than the cost of ONE losing bet</p>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>
                Save 3+ hours daily with professional analysis delivered to your inbox at 8 AM.
                Get 5-10 expertly analyzed games across all major sports with a 67% success rate.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>✓ Save 3+ Hours Daily - Research done for you</div>
                <div className={styles.feature}>✓ 5-10 Games Analyzed Daily across major sports & college</div>
                <div className={styles.feature}>✓ 6+ Hours of Analysis Time per report</div>
                <div className={styles.feature}>✓ 67% Day 1 Success Rate - Proven results</div>
                <div className={styles.feature}>✓ Advanced Edge Detection & CLV Tracking</div>
                <div className={styles.feature}>✓ Cancel Anytime, No Questions Asked</div>
              </div>
              <a
                href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
                onClick={() => trackCTAClick('pricing_card', 'Claim Your 3-Day Free Trial')}
              >
                Claim Your 3-Day Free Trial
              </a>
              <p className={styles.guarantee}>Instant access • Cancel anytime</p>
            </div>
          </div>
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