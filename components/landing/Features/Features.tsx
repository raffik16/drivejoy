'use client';

import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './Features.module.scss';

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Winning Bettors Choose AICalledIT</h2>
        <div className={styles.featureGrid}>
          
          {/* Daily Email Service */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3 className={styles.featureTitle}>Advanced Statistical Modeling</h3>
            <p className={styles.featureDescription}>
              Comprehensive daily reports featuring edge detection, CLV analysis, Sharpe ratios, 
              and Kelly criterion optimization. Professional-level insights delivered at 8 AM daily.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ VaR analysis and portfolio risk metrics</div>
              <div className={styles.detail}>✓ Closing Line Value (CLV) tracking</div>
              <div className={styles.detail}>✓ Statistical significance testing</div>
            </div>
          </div>

          {/* Technical Analysis */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Edge Detection & Market Analysis</h3>
            <p className={styles.featureDescription}>
              Sophisticated algorithms identify reverse line movement, steam detection, 
              and market inefficiencies. Advanced analytics typically reserved for professional operations.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ Steam and reverse line movement alerts</div>
              <div className={styles.detail}>✓ Market efficiency scoring</div>
              <div className={styles.detail}>✓ Sharp money identification</div>
            </div>
          </div>


        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Join 1000+ Winning Bettors</h3>
          <p className={styles.ctaText}>
            Get the same professional intelligence sharp bettors use. Start your free 3-day trial now.
          </p>
          <a
            href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => trackCTAClick('features', 'Start Winning Today - Free Trial')}
          >
            Start Winning Today - Free Trial
          </a>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            <strong>Smart betting starts with smart limits.</strong> Sports betting should be fun, not stressful. 
            We provide analysis to help you make informed decisions, but all betting carries risk. 
            Never bet more than you can afford to lose. If you're not enjoying it anymore, take a break.
          </p>
          <p>
            <strong>Need help? Call 1-800-GAMBLER</strong>
          </p>
        </div>
      </div>
    </section>
  );
}