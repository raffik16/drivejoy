'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './Features.module.scss';

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Winning Bettors Choose AICalledIT</h2>
        <div className={styles.featureGrid}>
          
          {/* Time Savings */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⏰</div>
            <h3 className={styles.featureTitle}>Save 3+ Hours Daily</h3>
            <p className={styles.featureDescription}>
              Skip the research grind. We spend 6+ hours daily analyzing games so you don't have to.
              Wake up to 5-10 expertly analyzed picks delivered at 8 AM sharp, ready to act on.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ 6+ hours of research per daily report</div>
              <div className={styles.detail}>✓ 5-10 games analyzed across major sports & college</div>
              <div className={styles.detail}>✓ Delivered at 8 AM - act fast on the best lines</div>
            </div>
          </div>

          {/* Proven Results */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏆</div>
            <h3 className={styles.featureTitle}>67% Day 1 Success Rate</h3>
            <p className={styles.featureDescription}>
              We don't just share picks - we share winners. Advanced edge detection, CLV tracking,
              and statistical modeling give you the same advantage sharp bettors pay thousands for.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ Proven 67% success rate from day one</div>
              <div className={styles.detail}>✓ Edge detection on every game analyzed</div>
              <div className={styles.detail}>✓ Professional-grade CLV tracking</div>
            </div>
          </div>


        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Start Winning with 67% Success Rate</h3>
          <p className={styles.ctaText}>
            Save 3+ hours daily and get 5-10 expertly analyzed games delivered at 8 AM. Join now and see results from day one.
          </p>
          <a
            href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => trackCTAClick('features', 'Start Your 3-Day Free Trial')}
          >
            Start Your 3-Day Free Trial
          </a>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            <strong>Smart betting starts with smart limits.</strong> Sports betting should be fun, not stressful. 
            We provide analysis to help you make informed decisions, but all betting carries risk. 
            Never bet more than you can afford to lose. If you're not enjoying it anymore, take a break.
          </p>
          <p>
            <strong>Need help? Call 1-800-GAMBLER</strong>
          </p>
        </div>
      </div>
    </section>
  );
}