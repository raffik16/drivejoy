'use client';

import { Logo } from '@/components/branding/Logo';
import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './HeroBold.module.scss';

const liveCards = [
  { sport: '🏈 NFL', pick: 'Chiefs -3.5', edge: '+2.3%', status: 'EDGE' },
  { sport: '🏀 NBA', pick: 'Over 215.5', edge: '+1.8%', status: 'VALUE' },
  { sport: '⚾ MLB', pick: 'Yankees ML', edge: 'No Edge', status: 'PASS' },
  { sport: '🏒 NHL', pick: 'Under 6.5', edge: '+3.1%', status: 'EDGE' },
  { sport: '⚽ Soccer', pick: 'Draw +240', edge: '+2.7%', status: 'VALUE' }
];

export function HeroBold() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Content */}
          <div className={styles.content}>
            <header className={styles.header}>
              <Logo size="lg" variant="full" />
            </header>

            <div className={styles.titleSection}>
              <div className={styles.eyebrow}>
                <span className={styles.pulse}></span>
                <span>Live Analysis • Updated Daily at 8 AM</span>
              </div>

              <h1 className={styles.title}>
                Stop Guessing.
                <br />
                <span className={styles.titleAccent}>Start Winning.</span>
              </h1>

              <p className={styles.description}>
                Professional-grade betting intelligence powered by advanced statistical models,
                CLV tracking, and edge detection. Join elite bettors who bet smarter, not harder.
              </p>

              <div className={styles.ctaSection}>
                <a
                  href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryCta}
                  onClick={() => trackCTAClick('hero_bold', 'Get Started Free')}
                >
                  Get Started Free
                  <span className={styles.arrow}>→</span>
                </a>
                <p className={styles.trial}>3-day trial • All sports included</p>
              </div>

              <div className={styles.trustBar}>
                <div className={styles.trustItem}>
                  <span className={styles.trustIcon}>🎯</span>
                  <span>67% Success Rate</span>
                </div>
                <div className={styles.trustItem}>
                  <span className={styles.trustIcon}>⚡</span>
                  <span>6+ Hours Daily Research</span>
                </div>
                <div className={styles.trustItem}>
                  <span className={styles.trustIcon}>🏆</span>
                  <span>5 Major Sports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Live Cards */}
          <div className={styles.visual}>
            <div className={styles.cardsContainer}>
              <div className={styles.cardsStack}>
                {liveCards.map((card, index) => (
                  <div
                    key={index}
                    className={styles.card}
                    style={{ '--index': index } as React.CSSProperties}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.sport}>{card.sport}</span>
                      <span className={`${styles.status} ${styles[card.status.toLowerCase()]}`}>
                        {card.status}
                      </span>
                    </div>
                    <div className={styles.pick}>{card.pick}</div>
                    <div className={styles.edge}>{card.edge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
