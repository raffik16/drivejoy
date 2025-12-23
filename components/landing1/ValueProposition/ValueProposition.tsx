'use client';

import styles from './ValueProposition.module.scss';

const benefits = [
  {
    title: 'Advanced Statistical Modeling',
    description: 'Professional-grade CLV analysis, Sharpe ratios, and Kelly criterion optimization delivered in easy-to-understand format.',
    icon: '📊',
    features: [
      'VaR analysis & portfolio risk metrics',
      'Closing Line Value tracking',
      'Statistical significance testing'
    ]
  },
  {
    title: 'Edge Detection & Market Analysis',
    description: 'Sophisticated algorithms identify reverse line movement, steam detection, and market inefficiencies before the crowd.',
    icon: '⚡',
    features: [
      'Steam & reverse line movement alerts',
      'Market efficiency scoring',
      'Sharp money identification'
    ]
  }
];

export function ValueProposition() {
  return (
    <section className={styles.value}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Professional Analysis, Simplified</h2>
          <p className={styles.subtitle}>
            Advanced betting intelligence typically reserved for professional operations,
            delivered to your inbox every morning at 8 AM.
          </p>
        </div>

        <div className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{benefit.icon}</span>
                </div>
                <div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </div>
              <ul className={styles.featureList}>
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.responsibility}>
          <div className={styles.responsibilityCard}>
            <h3 className={styles.responsibilityTitle}>Bet Responsibly</h3>
            <p className={styles.responsibilityText}>
              We provide analysis to help you make informed decisions, but all betting carries risk.
              Never bet more than you can afford to lose. If you're not enjoying it anymore, take a break.
            </p>
            <p className={styles.helpline}>
              <strong>Need help? Call 1-800-GAMBLER</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
