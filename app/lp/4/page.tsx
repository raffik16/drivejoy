import { Metadata } from 'next';
import { lp4Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp4Content.seo.title,
  description: lp4Content.seo.description,
  keywords: lp4Content.seo.keywords,
};

export default function LP4Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp4Content} variant="story" />
      <StatsVariant content={lp4Content} variant="story" />
      <FeaturesVariant content={lp4Content} variant="story" />
      <SocialProofVariant content={lp4Content} variant="story" />
      <PricingVariant content={lp4Content} variant="story" />
    </main>
  );
}
