'use client';

import { LandingContent } from '@/lib/landing/content';
import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './PricingVariant.module.scss';

interface PricingVariantProps {
  content: LandingContent;
  variant: 'minimal' | 'bold' | 'data' | 'story' | 'neon' | 'glass' | 'split' | 'card' | 'video' | 'isometric';
  className?: string;
}

export function PricingVariant({ content, variant, className }: PricingVariantProps) {
  const variantClass = styles[variant];
  const { pricing } = content;

  return (
    <section className={`${styles.pricing} ${variantClass} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.pricingCard}>
          <div className={styles.header}>
            <h3 className={styles.title}>{pricing.title}</h3>
            <p className={styles.tagline}>{pricing.tagline}</p>
            <div className={styles.priceWrapper}>
              <span className={styles.price}>{pricing.price}</span>
              <span className={styles.period}>/{pricing.period}</span>
            </div>
          </div>

          <ul className={styles.features}>
            {pricing.features.map((feature, index) => (
              <li key={index} className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => trackCTAClick(`pricing-${variant}`, 'Start 3-Day Free Trial')}
          >
            Start 3-Day Free Trial
          </a>

          <p className={styles.note}>No credit card required • Cancel anytime</p>
        </div>

        <div className={styles.disclaimer}>
          <p>
            <strong>Important:</strong> We help you make smarter bets, but can't guarantee wins.
            Sports betting always has risk. Your success depends on your decisions and how you
            manage your money. Past wins don't promise future wins.
          </p>
        </div>
      </div>
    </section>
  );
}
