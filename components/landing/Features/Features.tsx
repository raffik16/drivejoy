import styles from './Features.module.scss';

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose AICalledIT?</h2>
        <div className={styles.featureGrid}>
          {/* Features will be added later */}
          <p>Features coming soon...</p>
        </div>
      </div>
    </section>
  );
}