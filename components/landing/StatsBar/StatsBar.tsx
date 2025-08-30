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

const recentActivity = [
  '🏈 Ravens +3.5 looks good - injury report favorable',
  '🏀 Lakers/Warriors Under 228.5 - pace data suggests low scoring',
  '⚾ Yankees/Red Sox - no clear advantage, skip this one',
  '🏒 Devils ML - home ice + goalie matchup favors them',
  '⚽ Chelsea vs Arsenal - draw has value at those odds',
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