'use client';

import { useState } from 'react';
import { WaitlistModal } from '@/components/waitlist/WaitlistModal/WaitlistModal';
import styles from './Hero.module.scss';

export function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Main Headlines */}
            <div className={styles.headlines}>
              <h1 className={styles.title}>
                Win More Games with{' '}
                <span className={styles.highlight}>AI-Powered</span>{' '}
                Sports Predictions
              </h1>
              <p className={styles.subtitle}>
                Get expert analysis and winning picks for NFL, NBA, MLB, NHL & Soccer. 
                Join thousands of successful bettors using AI to beat the odds.
              </p>
            </div>

            {/* Live Stats Preview */}
            <div className={styles.liveStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>73%</span>
                <span className={styles.statLabel}>Win Rate This Week</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>12,847</span>
                <span className={styles.statLabel}>Active Members</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>$47K</span>
                <span className={styles.statLabel}>Won Yesterday</span>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className={styles.cta}>
              <button 
                className={styles.primaryButton}
                onClick={() => setIsWaitlistOpen(true)}
              >
                <span>Start Free 2-Day Trial</span>
                <span className={styles.buttonIcon}>🚀</span>
              </button>
              <p className={styles.ctaNote}>
                No credit card required • Cancel anytime
              </p>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.indicator}>
                <span className={styles.icon}>⭐</span>
                <span>4.9/5 rating</span>
              </div>
              <div className={styles.indicator}>
                <span className={styles.icon}>🔒</span>
                <span>Secure & private</span>
              </div>
              <div className={styles.indicator}>
                <span className={styles.icon}>📱</span>
                <span>Works everywhere</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={styles.visual}>
            <div className={styles.predictionsDemo}>
              <div className={styles.demoCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.sport}>🏈 NFL</span>
                  <span className={styles.confidence}>92% Confidence</span>
                </div>
                <div className={styles.matchup}>
                  <span>Chiefs @ Bills</span>
                </div>
                <div className={styles.prediction}>
                  <span className={styles.pick}>Chiefs -3.5</span>
                  <span className={styles.result}>✅ WIN</span>
                </div>
              </div>
              
              <div className={styles.demoCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.sport}>🏀 NBA</span>
                  <span className={styles.confidence}>87% Confidence</span>
                </div>
                <div className={styles.matchup}>
                  <span>Lakers @ Warriors</span>
                </div>
                <div className={styles.prediction}>
                  <span className={styles.pick}>Over 215.5</span>
                  <span className={styles.result}>✅ WIN</span>
                </div>
              </div>
              
              <div className={styles.demoCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.sport}>⚾ MLB</span>
                  <span className={styles.confidence}>84% Confidence</span>
                </div>
                <div className={styles.matchup}>
                  <span>Yankees @ Red Sox</span>
                </div>
                <div className={styles.prediction}>
                  <span className={styles.pick}>Yankees ML</span>
                  <span className={styles.result}>✅ WIN</span>
                </div>
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