import styles from './SocialProof.module.scss';

export function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        <h2 className={styles.title}>Trusted by Sports Fans Worldwide</h2>
        <div className={styles.testimonials}>
          {/* Testimonials will be added later */}
          <p>Testimonials coming soon...</p>
        </div>
      </div>
    </section>
  );
}