import styles from './PricingPreview.module.scss';

export function PricingPreview() {
  return (
    <section className={styles.pricingPreview}>
      <div className={styles.container}>
        <h2 className={styles.title}>Simple, Transparent Pricing</h2>
        <div className={styles.pricingCards}>
          <div className={styles.card}>
            <h3>Single Sport</h3>
            <p className={styles.price}>$39.99/month</p>
            <p>Choose 1 sport</p>
          </div>
          <div className={styles.card}>
            <h3>Multi-Sport</h3>
            <p className={styles.price}>$89.99/month</p>
            <p>Choose 2-5 sports</p>
          </div>
        </div>
      </div>
    </section>
  );
}