import { Metadata } from 'next';
import { lp5Content } from '@/lib/landing/content';
import { HeroVariant } from '@/components/landing/variants/HeroVariant';
import { StatsVariant } from '@/components/landing/variants/StatsVariant';
import { FeaturesVariant } from '@/components/landing/variants/FeaturesVariant';
import { SocialProofVariant } from '@/components/landing/variants/SocialProofVariant';
import { PricingVariant } from '@/components/landing/variants/PricingVariant';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: lp5Content.seo.title,
  description: lp5Content.seo.description,
  keywords: lp5Content.seo.keywords,
};

export default function LP5Page() {
  return (
    <main className={styles.main}>
      <HeroVariant content={lp5Content} variant="neon" />
      <StatsVariant content={lp5Content} variant="neon" />
      <FeaturesVariant content={lp5Content} variant="neon" />
      <SocialProofVariant content={lp5Content} variant="neon" />
      <PricingVariant content={lp5Content} variant="neon" />
    </main>
  );
}
