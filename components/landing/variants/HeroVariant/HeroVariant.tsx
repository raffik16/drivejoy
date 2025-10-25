'use client';

import { LandingContent } from '@/lib/landing/content';
import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './HeroVariant.module.scss';

interface HeroVariantProps {
  content: LandingContent;
  variant: 'minimal' | 'bold' | 'data' | 'story' | 'neon' | 'glass' | 'split' | 'card' | 'video' | 'isometric';
  className?: string;
}

export function HeroVariant({ content, variant, className }: HeroVariantProps) {
  const variantClass = styles[variant];

  return (
    <section className={`${styles.hero} ${variantClass} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            {content.hero.headline}
          </h1>
          <p className={styles.subheadline}>
            {content.hero.subheadline}
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
              onClick={() => trackCTAClick('hero', content.hero.cta)}
            >
              {content.hero.cta}
            </a>
            {content.hero.ctaSecondary && (
              <button className={styles.secondaryCta}>
                {content.hero.ctaSecondary}
              </button>
            )}
          </div>

          <div className={styles.trustLine}>
            <span>3-day free trial</span>
            <span>•</span>
            <span>Cancel anytime</span>
            <span>•</span>
            <span>No credit card required</span>
          </div>
        </div>

        {variant !== 'minimal' && (
          <div className={styles.visual}>
            <div className={styles.visualContent}>
              {/* Variant-specific visual content */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
