import { Logo } from '@/components/branding/Logo';
import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Logo size="md" variant="full" theme="dark" />
            <p className={styles.brandTagline}>
              Daily email newsletter with expert sports betting analysis
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/terms" className={styles.link}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className={styles.link}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund" className={styles.link}>
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Support</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="mailto:support@aicalledit.com" className={styles.link}>
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="mailto:privacy@aicalledit.com" className={styles.link}>
                    Privacy Requests
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Responsible Gaming</h4>
              <ul className={styles.linkList}>
                <li>
                  <a 
                    href="https://www.ncpgambling.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Problem Gambling Help
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:1-800-522-4700" 
                    className={styles.link}
                  >
                    1-800-GAMBLER
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.disclaimers}>
            <p className={styles.disclaimer}>
              <strong>21+ Only.</strong> Sports betting involves risk. Never bet more than you can afford to lose.
            </p>
            <p className={styles.disclaimer}>
              We provide email-delivered analysis and education only. No guarantees of results. 
              Past performance does not predict future outcomes.
            </p>
            <p className={styles.disclaimer}>
              <strong>Email Service:</strong> Our service is delivered exclusively via daily email newsletters. 
              We do not provide web platforms, apps, or live support systems.
            </p>
          </div>
          
          <div className={styles.copyright}>
            <p>© {currentYear} AICalledIT. All rights reserved.</p>
            <p className={styles.location}>Delaware, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}