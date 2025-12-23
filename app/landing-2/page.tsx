import { HeroBold } from '@/components/landing2/HeroBold/HeroBold';
import { LiveMetrics } from '@/components/landing2/LiveMetrics/LiveMetrics';
import { BenefitsShowcase } from '@/components/landing2/BenefitsShowcase/BenefitsShowcase';
import { DynamicPricing } from '@/components/landing2/DynamicPricing/DynamicPricing';
import { ContactForm } from '@/components/shared/ContactForm/ContactForm';
import styles from './page.module.scss';

export default function Landing2Page() {
  return (
    <main className={styles.main}>
      <HeroBold />
      <LiveMetrics />
      <BenefitsShowcase />
      <DynamicPricing />
      <ContactForm />
    </main>
  );
}
