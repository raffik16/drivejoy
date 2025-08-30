import styles from './Features.module.scss';

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>How We Help You Win</h2>
        <div className={styles.featureGrid}>
          
          {/* Daily Email Service */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📧</div>
            <h3 className={styles.featureTitle}>Daily Email Analysis</h3>
            <p className={styles.featureDescription}>
              Wake up to expert sports betting analysis delivered to your inbox every morning. 
              We break down the best games across all major sports and explain why they're 
              worth betting on - no confusing jargon, just clear insights.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ Delivered every morning</div>
              <div className={styles.detail}>✓ Easy to understand analysis</div>
              <div className={styles.detail}>✓ Best games identified</div>
              <div className={styles.detail}>✓ Smart bet sizing suggestions</div>
              <div className={styles.detail}>✓ All major sports covered</div>
              <div className={styles.detail}>✓ Clear reasoning behind picks</div>
            </div>
          </div>

          {/* Injury & Weather Intelligence */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🩹</div>
            <h3 className={styles.featureTitle}>Injury & Weather Intel</h3>
            <p className={styles.featureDescription}>
              Get the latest injury reports, weather conditions, and lineup changes 
              that most bettors miss. We track the details that can make or break 
              your bets before the lines move.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ Real-time injury updates</div>
              <div className={styles.detail}>✓ Weather impact analysis</div>
              <div className={styles.detail}>✓ Lineup change alerts</div>
              <div className={styles.detail}>✓ Travel schedule factors</div>
              <div className={styles.detail}>✓ Rest advantage tracking</div>
              <div className={styles.detail}>✓ Referee/umpire tendencies</div>
            </div>
          </div>

          {/* Data-Driven Analysis */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3 className={styles.featureTitle}>Data-Driven Insights</h3>
            <p className={styles.featureDescription}>
              Our analysis is based on real data, not hunches. We look at stats, trends, 
              and patterns to find the best betting opportunities.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ Stats-based analysis</div>
              <div className={styles.detail}>✓ Historical trends tracked</div>
              <div className={styles.detail}>✓ Pattern recognition</div>
              <div className={styles.detail}>✓ Numbers over gut feelings</div>
              <div className={styles.detail}>✓ Clear data explanations</div>
              <div className={styles.detail}>✓ No emotional betting</div>
            </div>
          </div>

          {/* Educational Focus */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3 className={styles.featureTitle}>Learn While You Bet</h3>
            <p className={styles.featureDescription}>
              We don't just tell you what to bet - we explain why. Learn 
              how the pros think, track your results, and become a smarter 
              bettor over time.
            </p>
            <div className={styles.featureDetails}>
              <div className={styles.detail}>✓ We explain our reasoning</div>
              <div className={styles.detail}>✓ Track your wins and losses</div>
              <div className={styles.detail}>✓ Bet responsibly</div>
              <div className={styles.detail}>✓ Get better over time</div>
            </div>
          </div>

        </div>
        
        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            <strong>Important:</strong> Sports betting involves risk of loss. 
            We provide analysis and education, not guarantees. Individual results vary. 
            Bet responsibly and never risk more than you can afford to lose.
          </p>
        </div>
      </div>
    </section>
  );
}