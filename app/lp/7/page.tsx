import { Metadata } from 'next';
import { lp7Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp7Content.seo.title,
  description: lp7Content.seo.description,
  keywords: lp7Content.seo.keywords,
};

export default function LP7Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp7Content} variant="split" />
      <StatsVariant content={lp7Content} variant="split" />
      <FeaturesVariant content={lp7Content} variant="split" />
      <SocialProofVariant content={lp7Content} variant="split" />
      <PricingVariant content={lp7Content} variant="split" />
    </main>
  );
}
