import { Metadata } from 'next';
import { lp6Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp6Content.seo.title,
  description: lp6Content.seo.description,
  keywords: lp6Content.seo.keywords,
};

export default function LP6Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp6Content} variant="glass" />
      <StatsVariant content={lp6Content} variant="glass" />
      <FeaturesVariant content={lp6Content} variant="glass" />
      <SocialProofVariant content={lp6Content} variant="glass" />
      <PricingVariant content={lp6Content} variant="glass" />
    </main>
  );
}
