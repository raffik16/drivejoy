import { Metadata } from 'next';
import { lp9Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp9Content.seo.title,
  description: lp9Content.seo.description,
  keywords: lp9Content.seo.keywords,
};

export default function LP9Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp9Content} variant="video" />
      <StatsVariant content={lp9Content} variant="video" />
      <FeaturesVariant content={lp9Content} variant="video" />
      <SocialProofVariant content={lp9Content} variant="video" />
      <PricingVariant content={lp9Content} variant="video" />
    </main>
  );
}
