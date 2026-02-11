import { Metadata } from 'next';
import { lp2Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp2Content.seo.title,
  description: lp2Content.seo.description,
  keywords: lp2Content.seo.keywords,
};

export default function LP2Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp2Content} variant="bold" />
      <StatsVariant content={lp2Content} variant="bold" />
      <FeaturesVariant content={lp2Content} variant="bold" />
      <SocialProofVariant content={lp2Content} variant="bold" />
      <PricingVariant content={lp2Content} variant="bold" />
    </main>
  );
}
