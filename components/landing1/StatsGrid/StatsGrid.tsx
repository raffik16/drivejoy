'use client';

import styles from './StatsGrid.module.scss';

const stats = [
  {
    icon: '⚡',
    value: '3+ Hours',
    label: 'Time Saved Daily',
    description: 'Comprehensive research done for you every morning'
  },
  {
    icon: '🎯',
    value: '67%',
    label: 'Day 1 Success',
    description: 'First-day success rate from our beta users'
  },
  {
    icon: '📊',
    value: '5-10',
    label: 'Daily Picks',
    description: 'Carefully analyzed opportunities across all sports'
  },
  {
    icon: '🔬',
    value: '6+ Hours',
    label: 'Analysis Time',
    description: 'Professional-level research behind every pick'
  }
];

export function StatsGrid() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Numbers Speak</h2>
          <p className={styles.subtitle}>
            Real metrics from real bettors using our analysis
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.icon}>{stat.icon}</div>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
