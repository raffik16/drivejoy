'use client';

import { LandingContent } from '@/lib/landing/content';
import styles from './FeaturesVariant.module.scss';

interface FeaturesVariantProps {
  content: LandingContent;
  variant: 'minimal' | 'bold' | 'data' | 'story' | 'neon' | 'glass' | 'split' | 'card' | 'video' | 'isometric';
  className?: string;
}

export function FeaturesVariant({ content, variant, className }: FeaturesVariantProps) {
  const variantClass = styles[variant];

  return (
    <section className={`${styles.features} ${variantClass} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {content.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
              {feature.details && feature.details.length > 0 && (
                <ul className={styles.details}>
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
