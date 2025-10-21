'use client';

import { Logo } from '@/components/branding/Logo';
import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './HeroMinimal.module.scss';

export function HeroMinimal() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo size="lg" variant="full" />
        </header>

        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>✨</span>
            <span>Professional Betting Intelligence</span>
          </div>

          <h1 className={styles.title}>
            Make Smarter Bets
            <br />
            <span className={styles.gradient}>Win More Often</span>
          </h1>

          <p className={styles.subtitle}>
            Advanced statistical analysis and edge detection delivered to your inbox daily at 8 AM.
            Join serious bettors who rely on data, not luck.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
              onClick={() => trackCTAClick('hero_minimal', 'Start Free Trial')}
            >
              Start Free Trial
            </a>
            <div className={styles.ctaNote}>
              <span className={styles.checkmark}>✓</span>
              <span>3-day free trial • No credit card required</span>
            </div>
          </div>

          <div className={styles.quickStats}>
            <div className={styles.quickStat}>
              <div className={styles.statValue}>5+</div>
              <div className={styles.statLabel}>Major Sports</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.quickStat}>
              <div className={styles.statValue}>Daily</div>
              <div className={styles.statLabel}>Expert Analysis</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.quickStat}>
              <div className={styles.statValue}>8 AM</div>
              <div className={styles.statLabel}>Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
