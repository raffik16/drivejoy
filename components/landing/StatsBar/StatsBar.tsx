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
    label: 'Time Saved Daily',
    value: '3+ Hours',
    icon: '⚡',
    change: 'Research done for you'
  },
  {
    label: 'Daily Analysis',
    value: '15-20',
    icon: '⚽',
    change: 'Games analyzed across major sports'
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

      </div>
    </section>
  );
}