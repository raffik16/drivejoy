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
    label: 'Win Rate',
    value: '53%',
    icon: '📈',
    change: 'Beating the 52.4% break-even'
  },
  {
    label: 'Daily Coverage',
    value: '15-20',
    icon: '⚽',
    change: 'Games across all major sports'
  },
  {
    label: 'Analysis Time',
    value: '4+ Hours',
    icon: '🔬',
    change: 'Research done for you daily'
  },
  {
    label: 'Member Success',
    value: '67%',
    icon: '📋',
    change: 'Show profit after 30 days'
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