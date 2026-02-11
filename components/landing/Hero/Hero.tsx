'use client';

import { useEffect } from 'react';
import { Logo } from '@/components/branding/Logo';
import { trackCTAClick } from '@/lib/analytics/gtag';
import styles from './Hero.module.scss';

const demoCards = [
  {
    sport: '🏈 NFL',
    confidence: '2.3% Edge Detected',
    matchup: 'Chiefs @ Bills',
    pick: 'Chiefs -3.5',
    result: '⚖️ ANALYSIS'
  },
  {
    sport: '🏀 NBA',
    confidence: '1.8% Edge Detected',
    matchup: 'Lakers @ Warriors',
    pick: 'Over 215.5',
    result: '📊 VALUE'
  },
  {
    sport: '⚾ MLB',
    confidence: 'No Edge Found',
    matchup: 'Yankees @ Red Sox',
    pick: 'Yankees ML',
    result: '🚫 PASS'
  },
  {
    sport: '🏒 NHL',
    confidence: '3.1% Edge Detected',
    matchup: 'Rangers @ Bruins',
    pick: 'Under 6.5',
    result: '⚖️ ANALYSIS'
  },
  {
    sport: '⚽ Soccer',
    confidence: '2.7% Edge Detected',
    matchup: 'Chelsea vs Arsenal',
    pick: 'Draw +240',
    result: '📊 VALUE'
  },
  {
    sport: '🏈 NFL',
    confidence: 'Weather Alert',
    matchup: 'Dolphins @ Bills',
    pick: 'Under 42.5',
    result: '🌨️ WEATHER'
  }
];

export function Hero() {
  useEffect(() => {
    // Card animation logic can be added here if needed
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          {/* Header with Logo */}
          <header className={styles.header}>
            <Logo size="lg" variant="full" />
          </header>
          
          <div className={styles.content}>
            {/* Main Headlines */}
            <div className={styles.headlines}>
              <h1 className={styles.title}>
                Stop Guessing.{' '}
                <span className={styles.highlight}>Start Winning.</span>
              </h1>
              <p className={styles.subtitle}>
                Get professional-grade betting intelligence delivered at 8 AM daily. Advanced edge detection,
                statistical modeling, and CLV analysis that gives you the edge sharp bettors use to win consistently.
              </p>
            </div>

            {/* Live Stats Preview - Desktop */}
            <div className={`${styles.liveStats} ${styles.desktopStats}`}>
              <div className={styles.stat}>
                <span className={styles.statValue}>3+ Hours</span>
                <span className={styles.statLabel}>Time Saved Daily</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>5-10</span>
                <span className={styles.statLabel}>Games Analyzed Daily</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>67%</span>
                <span className={styles.statLabel}>Day 1 Success Rate</span>
              </div>
            </div>

            {/* Mobile Demo Cards */}
            <div className={styles.mobileDemoPreview}>
              <div className={styles.predictionsDemo}>
                <div className={styles.marqueeContainer}>
                  {[...demoCards, ...demoCards].map((card, index) => (
                    <div key={index} className={styles.demoCard}>
                      <div className={styles.cardHeader}>
                        <span className={styles.sport}>{card.sport}</span>
                        <span className={styles.confidence}>{card.confidence}</span>
                      </div>
                      <div className={styles.matchup}>
                        <span>{card.matchup}</span>
                      </div>
                      <div className={styles.prediction}>
                        <span className={styles.pick}>{card.pick}</span>
                        <span className={styles.result}>{card.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Stats Preview - Mobile */}
            <div className={`${styles.liveStats} ${styles.mobileStats}`}>
              <div className={styles.stat}>
                <span className={styles.statValue}>3+ Hours</span>
                <span className={styles.statLabel}>Time Saved Daily</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>5-10</span>
                <span className={styles.statLabel}>Games Analyzed Daily</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>67%</span>
                <span className={styles.statLabel}>Day 1 Success Rate</span>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className={styles.cta}>
              <a
                href="https://buy.stripe.com/fZu28sguxdqyakd7tba7C01"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                onClick={() => trackCTAClick('hero', 'Get Your Edge - Start Free Trial')}
              >
                <span>Get Your Edge - Start Free Trial</span>
              </a>
              <p className={styles.ctaNote}>
                3-day free trial • Cancel anytime
              </p>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.indicator}>
                <span className={styles.icon}>⏰</span>
                <span>6+ Hours Research Daily</span>
              </div>
              <div className={styles.indicator}>
                <span className={styles.icon}>📧</span>
                <span>Delivered 8 AM Sharp</span>
              </div>
              <div className={styles.indicator}>
                <span className={styles.icon}>🏆</span>
                <span>67% Win Rate</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={styles.visual}>
            <div className={styles.predictionsDemo}>
              <div className={styles.marqueeContainer}>
                {/* Render 6 cards (2 sets) for seamless looping */}
                {[...demoCards, ...demoCards].map((card, index) => (
                  <div key={index} className={styles.demoCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.sport}>{card.sport}</span>
                      <span className={styles.confidence}>{card.confidence}</span>
                    </div>
                    <div className={styles.matchup}>
                      <span>{card.matchup}</span>
                    </div>
                    <div className={styles.prediction}>
                      <span className={styles.pick}>{card.pick}</span>
                      <span className={styles.result}>{card.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}