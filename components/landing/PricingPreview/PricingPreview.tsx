import styles from './PricingPreview.module.scss';

export function PricingPreview() {
  return (
    <section className={styles.pricingPreview}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pick Your Plan</h2>
        
        <div className={styles.pricingCards}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Daily Email</h3>
              <p className={styles.price}>$39.99<span className={styles.period}>/month</span></p>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>
                Expert analysis delivered to your inbox every morning
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>✓ Daily morning emails</div>
                <div className={styles.feature}>✓ All major sports covered</div>
                <div className={styles.feature}>✓ Game breakdowns made simple</div>
                <div className={styles.feature}>✓ Best bets identified</div>
                <div className={styles.feature}>✓ Smart betting amounts</div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.cardHeader}>
              <h3>Premium Plan</h3>
              <p className={styles.price}>$89.99<span className={styles.period}>/month</span></p>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.description}>
                Comprehensive daily analysis covering all major sports
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>✓ All sports included</div>
                <div className={styles.feature}>✓ More games analyzed</div>
                <div className={styles.feature}>✓ Detailed breakdowns</div>
                <div className={styles.feature}>✓ Best value bets highlighted</div>
                <div className={styles.feature}>✓ Priority email delivery</div>
                <div className={styles.feature}>✓ Everything in Daily Plan</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.guarantee}>
          <div className={styles.guaranteeContent}>
            <h4>Try Free for 2 Days</h4>
            <p>
              See what we're all about with no commitment. We give you research and advice, 
              but you make your own betting decisions. Results depend on your choices.
            </p>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            <strong>Important:</strong> We help you make smarter bets, but can't guarantee wins. 
            Sports betting always has risk. Your success depends on your decisions and how you 
            manage your money. Past wins don't promise future wins.
          </p>
        </div>
      </div>
    </section>
  );
}