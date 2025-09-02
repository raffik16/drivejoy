import styles from './Features.module.scss';

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Professional-Grade Daily Analysis</h2>
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