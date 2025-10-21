'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './StatsBar.module.scss';

interface Stat {
  label: string;
  value: string;
  icon: string;
  change?: string;
}

const liveStats: Stat[] = [
  {
    label: 'Time Saved Daily',
    value: '3+ Hours',
    icon: '⚡',
    change: 'Research done for you'
  },
  {
    label: 'Daily In-depth Analysis',
    value: '5-10',
    icon: '⚽',
    change: 'Games analyzed across major sports and college'
  },
  {
    label: 'Analysis Time',
    value: '6+ Hours',
    icon: '🔬',
    change: 'Research done for you daily'
  },
  {
    label: 'Day 1 Profits',
    value: '67%',
    icon: '📋',
    change: 'Success Rate'
  }
];


export function StatsBar() {

  return (
    <section className={styles.statsBar}>
      <div className={styles.container}>
        {/* Main Stats Grid */}
        <div className={styles.statsGrid}>
          {liveStats.map((stat, index) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                {stat.change && (
                  <div className={styles.statChange}>{stat.change}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Join 1000+ members getting 5-10 winning picks delivered at 8 AM daily
          </p>
          <a
            href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => trackCTAClick('statsbar', 'Start Your 3-Day Free Trial')}
          >
            Start Your 3-Day Free Trial
          </a>
        </div>

      </div>
    </section>
  );
}