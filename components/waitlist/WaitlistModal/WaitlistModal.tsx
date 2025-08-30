'use client';

import { useState } from 'react';
import { Modal } from '@/components/shared/Modal/Modal';
import styles from './WaitlistModal.module.scss';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [source, setSource] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [waitlistData, setWaitlistData] = useState<{
    position: number;
    referralCode: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          referralCode: referralCode || undefined,
          source: source || 'organic',
          utm: {
            source: new URLSearchParams(window.location.search).get('utm_source'),
            medium: new URLSearchParams(window.location.search).get('utm_medium'),
            campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
          }
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setWaitlistData(data);
        setStep('success');
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setStep('form');
    setEmail('');
    setReferralCode('');
    setSource('');
    setWaitlistData(null);
  };

  const copyReferralLink = () => {
    if (waitlistData) {
      const referralUrl = `${window.location.origin}?ref=${waitlistData.referralCode}`;
      navigator.clipboard.writeText(referralUrl);
      alert('Referral link copied to clipboard!');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      {step === 'form' ? (
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>Join the Waitlist</h2>
            <p className={styles.subtitle}>
              Get early access to AI-powered sports predictions
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.input}
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="source" className={styles.label}>
                How did you hear about us? (Optional)
              </label>
              <select
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className={styles.select}
                disabled={isLoading}
              >
                <option value="">Select source</option>
                <option value="social_media">Social Media</option>
                <option value="friend_referral">Friend/Referral</option>
                <option value="google_search">Google Search</option>
                <option value="blog_article">Blog/Article</option>
                <option value="youtube">YouTube</option>
                <option value="podcast">Podcast</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="referralCode" className={styles.label}>
                Referral Code (Optional)
              </label>
              <input
                type="text"
                id="referralCode"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                placeholder="Enter code to skip ahead"
                className={styles.input}
                disabled={isLoading}
              />
              <p className={styles.hint}>
                Have a friend's referral code? Enter it to jump ahead in line!
              </p>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading || !email}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span>
                  Joining waitlist...
                </>
              ) : (
                'Join Waitlist'
              )}
            </button>

            <p className={styles.terms}>
              By joining, you agree to receive emails about AICalledIT updates and early access.
              You can unsubscribe at any time.
            </p>
          </form>
        </div>
      ) : (
        <div className={styles.successContainer}>
          <div className={styles.successIcon}>🎉</div>
          <h2 className={styles.successTitle}>You're On The List!</h2>
          
          <div className={styles.positionCard}>
            <div className={styles.positionNumber}>
              #{waitlistData?.position}
            </div>
            <p className={styles.positionText}>
              Your position on the waitlist
            </p>
          </div>

          <div className={styles.referralSection}>
            <h3 className={styles.referralTitle}>Skip Ahead in Line</h3>
            <p className={styles.referralText}>
              Refer friends to move up faster. Each referral moves you up 100 spots!
            </p>
            
            <div className={styles.referralCode}>
              <div className={styles.codeBox}>
                <span className={styles.codeLabel}>Your Referral Code:</span>
                <span className={styles.code}>{waitlistData?.referralCode}</span>
              </div>
              <button
                onClick={copyReferralLink}
                className={styles.copyButton}
              >
                Copy Link
              </button>
            </div>
          </div>

          <div className={styles.socialShare}>
            <p className={styles.shareText}>Share with friends:</p>
            <div className={styles.shareButtons}>
              <button className={styles.shareButton}>Twitter</button>
              <button className={styles.shareButton}>LinkedIn</button>
              <button className={styles.shareButton}>Facebook</button>
            </div>
          </div>

          <div className={styles.successActions}>
            <button onClick={onClose} className={styles.primaryButton}>
              Got it!
            </button>
            <button onClick={handleReset} className={styles.secondaryButton}>
              Add Another Email
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}