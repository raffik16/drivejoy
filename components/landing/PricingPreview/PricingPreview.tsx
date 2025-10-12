'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './PricingPreview.module.scss';

export function PricingPreview() {
  return (
    <section className={styles.pricingPreview}>
      <div className={styles.container}>
        <h2 className={styles.title}>Choose Your Advantage</h2>
        
        <div className={styles.pricingCards}>
          <div className={`${styles.card} ${styles.featured} ${styles.single}`}>
            <div className={styles.cardHeader}>
              <h3>Expert Insider</h3>
              <p className={styles.tagline}>Professional betting insights delivered daily</p>
              <p className={styles.price}>$19.99<span className={styles.period}>/month</span></p>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>
                Wake up to winning insights. Expert analysis delivered to your inbox every morning 
                with clear explanations you can actually understand.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>✓ Daily Morning Email (8 AM delivery)</div>
                <div className={styles.feature}>✓ Expert Pick Analysis (3-5 best bets daily)</div>
                <div className={styles.feature}>✓ Clear Explanations (Why each pick makes sense)</div>
                <div className={styles.feature}>✓ All Major Sports (NFL, NBA, MLB, NHL, Soccer)</div>
              </div>
              <a
                href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
                onClick={() => trackCTAClick('pricing_card', 'Start 3-Day Free Trial')}
              >
                Start 3-Day Free Trial
              </a>
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