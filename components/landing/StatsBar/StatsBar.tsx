'use client';

import styles from './StatsBar.module.scss';

interface Stat {
  label: string;
  value: string;
  icon: string;
  change?: string;
}

const liveStats: Stat[] = [
  {
    label: 'Betting Success Rate',
    value: '53%',
    icon: '📈',
    change: 'Long-term average'
  },
  {
    label: 'Games Covered',
    value: '10,000+',
    icon: '⚽',
    change: 'Since we started'
  },
  {
    label: 'Research Systems',
    value: '5',
    icon: '🔬',
    change: 'Different approaches'
  },
  {
    label: 'Factors We Check',
    value: '50+',
    icon: '📋',
    change: 'Per game'
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

      </div>
    </section>
  );
}