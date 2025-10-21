'use client';

import styles from './LiveMetrics.module.scss';

const metrics = [
  {
    label: 'Daily Success Rate',
    value: '67%',
    trend: '+12%',
    icon: '📈',
    color: 'success'
  },
  {
    label: 'Hours of Research',
    value: '6+',
    trend: 'Per Day',
    icon: '🔬',
    color: 'primary'
  },
  {
    label: 'Time You Save',
    value: '3+',
    trend: 'Hours Daily',
    icon: '⚡',
    color: 'warning'
  },
  {
    label: 'Sports Covered',
    value: '5',
    trend: 'Major Leagues',
    icon: '🏆',
    color: 'secondary'
  }
];

export function LiveMetrics() {
  return (
    <section className={styles.metrics}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.liveDot}></span>
            <span>Live Performance Metrics</span>
          </div>
          <h2 className={styles.title}>Real Numbers. Real Results.</h2>
          <p className={styles.subtitle}>
            Track record from our beta users who rely on data-driven analysis
          </p>
        </div>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <div key={index} className={`${styles.metricCard} ${styles[metric.color]}`}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{metric.icon}</span>
              </div>
              <div className={styles.metricContent}>
                <div className={styles.value}>{metric.value}</div>
                <div className={styles.label}>{metric.label}</div>
                <div className={styles.trend}>{metric.trend}</div>
              </div>
              <div className={styles.glow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
