'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './SocialProof.module.scss';

export function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us</h2>
        
        <div className={styles.testimonials}>
          {/* Testimonials will be added when we have real customer feedback */}
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🎓</div>
            <div className={styles.badgeText}>Educational Focus</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>📊</div>
            <div className={styles.badgeText}>Data-Driven Analysis</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🔍</div>
            <div className={styles.badgeText}>Transparent Methodology</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🛡️</div>
            <div className={styles.badgeText}>Responsible Gaming</div>
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
          <h3 className={styles.ctaTitle}>Ready to Join Winning Bettors?</h3>
          <p className={styles.ctaText}>
            Start with a 3-day free trial. No commitment required.
          </p>
          <a
            href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => trackCTAClick('social_proof', 'Try Risk-Free for 3 Days')}
          >
            Try Risk-Free for 3 Days
          </a>
        </div>
      </div>
    </section>
  );
}