import { Metadata } from 'next';
import { lp3Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp3Content.seo.title,
  description: lp3Content.seo.description,
  keywords: lp3Content.seo.keywords,
};

export default function LP3Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp3Content} variant="data" />
      <StatsVariant content={lp3Content} variant="data" />
      <FeaturesVariant content={lp3Content} variant="data" />
      <SocialProofVariant content={lp3Content} variant="data" />
      <PricingVariant content={lp3Content} variant="data" />
    </main>
  );
}
