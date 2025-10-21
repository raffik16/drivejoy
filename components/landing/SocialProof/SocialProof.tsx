'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './SocialProof.module.scss';

export function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        <h2 className={styles.title}>Real Results, Real Value</h2>

        <div className={styles.testimonials}>
          {/* Testimonials will be added when we have real customer feedback */}
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>⏰</div>
            <div className={styles.badgeText}>Save 3+ Hours Daily</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>📊</div>
            <div className={styles.badgeText}>6+ Hours Research Per Report</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🎯</div>
            <div className={styles.badgeText}>5-10 Games Analyzed Daily</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🏆</div>
            <div className={styles.badgeText}>67% Success Rate</div>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            <strong>Disclaimer:</strong> Individual results vary. Sports betting involves risk of loss.
            Testimonials reflect user experience with our analysis, not gambling outcomes.
            Past performance does not guarantee future results. Bet responsibly.
          </p>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Start Winning Today with 67% Success Rate</h3>
          <p className={styles.ctaText}>
            Save 3+ hours daily. Get 5-10 expertly analyzed games at 8 AM. Try free for 3 days.
          </p>
          <a
            href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => trackCTAClick('social_proof', 'Claim Your Free Trial')}
          >
            Claim Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}