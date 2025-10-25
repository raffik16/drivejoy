import { Metadata } from 'next';
import { lp10Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp10Content.seo.title,
  description: lp10Content.seo.description,
  keywords: lp10Content.seo.keywords,
};

export default function LP10Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp10Content} variant="isometric" />
      <StatsVariant content={lp10Content} variant="isometric" />
      <FeaturesVariant content={lp10Content} variant="isometric" />
      <SocialProofVariant content={lp10Content} variant="isometric" />
      <PricingVariant content={lp10Content} variant="isometric" />
    </main>
  );
}
