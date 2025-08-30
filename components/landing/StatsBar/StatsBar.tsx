'use client';

import { useEffect, useState } from 'react';
import styles from './StatsBar.module.scss';

interface Stat {
  label: string;
  value: string;
  icon: string;
  change?: string;
}

const liveStats: Stat[] = [
  {
    label: 'Win Rate (30 Days)',
    value: '73.4%',
    icon: '📈',
    change: '+5.2%'
  },
  {
    label: 'Active Members',
    value: '12,847',
    icon: '👥',
    change: '+327 today'
  },
  {
    label: 'Profit Generated',
    value: '$2.1M',
    icon: '💰',
    change: '+$47K yesterday'
  },
  {
    label: 'Predictions Made',
    value: '45,692',
    icon: '🎯',
    change: '+1,234 today'
  }
];

const recentActivity = [
  '🏈 Chiefs -3.5 ✅ WIN - 2 min ago',
  '🏀 Lakers Over 215.5 ✅ WIN - 5 min ago',
  '⚾ Yankees ML ✅ WIN - 8 min ago',
  '🏒 Bruins -1.5 ✅ WIN - 12 min ago',
  '⚽ Man City -0.5 ✅ WIN - 15 min ago',
];

export function StatsBar() {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % recentActivity.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

        {/* Live Activity Feed */}
        <div className={styles.activityFeed}>
          <div className={styles.activityHeader}>
            <span className={styles.liveIndicator}>
              <span className={styles.liveDot}></span>
              Live Activity
            </span>
          </div>
          <div className={styles.activityContent}>
            {recentActivity[currentActivityIndex]}
          </div>
        </div>
      </div>
    </section>
  );
}