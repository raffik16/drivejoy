import { HeroMinimal } from '@/components/landing1/HeroMinimal/HeroMinimal';
import { StatsGrid } from '@/components/landing1/StatsGrid/StatsGrid';
import { ValueProposition } from '@/components/landing1/ValueProposition/ValueProposition';
import { SimplePricing } from '@/components/landing1/SimplePricing/SimplePricing';
import { ContactForm } from '@/components/shared/ContactForm/ContactForm';
import styles from './page.module.scss';

export default function Landing1Page() {
  return (
    <main className={styles.main}>
      <HeroMinimal />
      <StatsGrid />
      <ValueProposition />
      <SimplePricing />
      <ContactForm />
    </main>
  );
}
