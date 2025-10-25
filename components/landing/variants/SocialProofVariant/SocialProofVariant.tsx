'use client';

import { LandingContent } from '@/lib/landing/content';
import styles from './SocialProofVariant.module.scss';

interface SocialProofVariantProps {
  content: LandingContent;
  variant: 'minimal' | 'bold' | 'data' | 'story' | 'neon' | 'glass' | 'split' | 'card' | 'video' | 'isometric';
  className?: string;
}

export function SocialProofVariant({ content, variant, className }: SocialProofVariantProps) {
  const variantClass = styles[variant];

  return (
    <section className={`${styles.socialProof} ${variantClass} ${className || ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.socialProof.title}</h2>

        <div className={styles.badges}>
          {content.socialProof.badges.map((badge, index) => (
            <div key={index} className={styles.badge}>
              <div className={styles.icon}>{badge.icon}</div>
              <div className={styles.text}>{badge.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
