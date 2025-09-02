'use client';

import { useState, useEffect } from 'react';
import { WaitlistModal } from '@/components/waitlist/WaitlistModal/WaitlistModal';
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
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % demoCards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Main Headlines */}
            <div className={styles.headlines}>
              <h1 className={styles.title}>
                Professional-Grade{' '}
                <span className={styles.highlight}>Betting Intelligence</span>
              </h1>
              <p className={styles.subtitle}>
                Advanced statistical analysis and edge detection delivered daily at 8 AM. 
                Sophisticated modeling, CLV analysis, and professional-level insights for serious bettors.
              </p>
            </div>

            {/* Live Stats Preview - Desktop */}
            <div className={`${styles.liveStats} ${styles.desktopStats}`}>
              <div className={styles.stat}>
                <span className={styles.statValue}>Daily</span>
                <span className={styles.statLabel}>Expert Analysis</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>5</span>
                <span className={styles.statLabel}>Major Sports</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>2-Day</span>
                <span className={styles.statLabel}>Free Trial</span>
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
                <span className={styles.statValue}>Daily</span>
                <span className={styles.statLabel}>Expert Analysis</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>5</span>
                <span className={styles.statLabel}>Major Sports</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>2-Day</span>
                <span className={styles.statLabel}>Free Trial</span>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className={styles.cta}>
              <button 
                className={styles.primaryButton}
                onClick={() => setIsWaitlistOpen(true)}
              >
                <span>Start Your 48-Hour Free Trial</span>
              </button>
              <p className={styles.ctaNote}>
                Get real daily emails • No credit card required
              </p>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.indicator}>
                <span className={styles.icon}>📊</span>
                <span>Statistical modeling & VaR analysis</span>
              </div>
              <div className={styles.indicator}>
                <span className={styles.icon}>⚡</span>
                <span>Edge detection & CLV optimization</span>
              </div>
              <div className={styles.indicator}>
                <span className={styles.icon}>🎯</span>
                <span>Professional-grade research</span>
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

      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}