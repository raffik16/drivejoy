'use client';

import { LandingContent } from '@/lib/landing/content';
import styles from './StatsVariant.module.scss';

interface StatsVariantProps {
  content: LandingContent;
  variant: 'minimal' | 'bold' | 'data' | 'story' | 'neon' | 'glass' | 'split' | 'card' | 'video' | 'isometric';
  className?: string;
}

export function StatsVariant({ content, variant, className }: StatsVariantProps) {
  const variantClass = styles[variant];

  return (
    <section className={`${styles.stats} ${variantClass} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {content.stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              {stat.description && (
                <div className={styles.statDescription}>{stat.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
