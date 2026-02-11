import { Metadata } from 'next';
import { lp1Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp1Content.seo.title,
  description: lp1Content.seo.description,
  keywords: lp1Content.seo.keywords,
};

export default function LP1Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp1Content} variant="minimal" />
      <StatsVariant content={lp1Content} variant="minimal" />
      <FeaturesVariant content={lp1Content} variant="minimal" />
      <SocialProofVariant content={lp1Content} variant="minimal" />
      <PricingVariant content={lp1Content} variant="minimal" />
    </main>
  );
}
