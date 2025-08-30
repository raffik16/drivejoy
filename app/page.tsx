import { Hero } from '@/components/landing/Hero/Hero';
import { StatsBar } from '@/components/landing/StatsBar/StatsBar';
import { SocialProof } from '@/components/landing/SocialProof/SocialProof';
import { Features } from '@/components/landing/Features/Features';
import { PricingPreview } from '@/components/landing/PricingPreview/PricingPreview';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <StatsBar />
      <SocialProof />
      <Features />
      <PricingPreview />
    </main>
  );
}
