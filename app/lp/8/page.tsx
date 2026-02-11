import { Metadata } from 'next';
import { lp8Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp8Content.seo.title,
  description: lp8Content.seo.description,
  keywords: lp8Content.seo.keywords,
};

export default function LP8Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp8Content} variant="card" />
      <StatsVariant content={lp8Content} variant="card" />
      <FeaturesVariant content={lp8Content} variant="card" />
      <SocialProofVariant content={lp8Content} variant="card" />
      <PricingVariant content={lp8Content} variant="card" />
    </main>
  );
}
