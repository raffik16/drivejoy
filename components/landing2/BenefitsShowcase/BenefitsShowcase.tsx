'use client';

import styles from './BenefitsShowcase.module.scss';

const benefits = [
  {
    title: 'Advanced Statistical Analysis',
    description: 'Professional-grade CLV analysis, Sharpe ratios, Kelly criterion, VaR analysis, and portfolio risk metrics.',
    icon: '📊',
    highlights: ['CLV Tracking', 'Sharpe Ratios', 'Kelly Criterion', 'VaR Analysis']
  },
  {
    title: 'Edge Detection System',
    description: 'Sophisticated algorithms detect steam, reverse line movement, and market inefficiencies before the crowd.',
    icon: '⚡',
    highlights: ['Steam Detection', 'Line Movement', 'Market Efficiency', 'Sharp Money']
  },
  {
    title: 'Daily Morning Delivery',
    description: 'Wake up to comprehensive analysis at 8 AM. Everything you need, when you need it.',
    icon: '📧',
    highlights: ['8 AM Delivery', '5-10 Daily Picks', 'Clear Explanations', 'All Sports']
  },
  {
    title: 'Multi-Sport Coverage',
    description: 'NFL, NBA, MLB, NHL, and Soccer. All major leagues analyzed with the same rigorous methodology.',
    icon: '🏆',
    highlights: ['5 Major Sports', 'College Games', 'Year-Round', 'Consistent Quality']
  }
];

export function BenefitsShowcase() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Everything You Need to Win</h2>
          <p className={styles.subtitle}>
            Professional-grade tools and analysis in an easy-to-understand format
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.cardInner}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>{benefit.icon}</span>
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
                <div className={styles.highlights}>
                  {benefit.highlights.map((highlight, idx) => (
                    <span key={idx} className={styles.highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
