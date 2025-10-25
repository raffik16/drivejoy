import { Metadata } from 'next';
import Link from 'next/link';
import { landingPageContents } from '@/lib/landing/content';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Landing Pages Showcase | DriveJoy',
  description: 'Explore our 10 unique landing page designs, each optimized for different audiences and conversion strategies.',
};

const landingPages = [
  {
    id: 1,
    name: 'Clean Minimal',
    description: 'Typography-focused with subtle animations. Perfect for sophisticated audiences who appreciate simplicity.',
    theme: 'minimal',
    color: '#000000'
  },
  {
    id: 2,
    name: 'Extreme Bold',
    description: 'High contrast with aggressive animations. Designed to grab attention and drive immediate action.',
    theme: 'bold',
    color: '#ff6b6b'
  },
  {
    id: 3,
    name: 'Data Dashboard',
    description: 'Chart-heavy, statistics-driven design. Appeals to analytical minds and data enthusiasts.',
    theme: 'data',
    color: '#00c853'
  },
  {
    id: 4,
    name: 'Storytelling Scroll',
    description: 'Narrative-driven with scroll animations. Takes users on a journey from problem to solution.',
    theme: 'story',
    color: '#e74c3c'
  },
  {
    id: 5,
    name: 'Neon Cyberpunk',
    description: 'Dark mode with futuristic vibes. Perfect for tech-savvy, forward-thinking audiences.',
    theme: 'neon',
    color: '#ff0080'
  },
  {
    id: 6,
    name: 'Glassmorphism Premium',
    description: 'Modern glass effects with luxury feel. Appeals to premium, discerning customers.',
    theme: 'glass',
    color: '#667eea'
  },
  {
    id: 7,
    name: 'Split Screen Dynamic',
    description: 'Interactive before/after style. Shows the transformation and comparison visually.',
    theme: 'split',
    color: '#667eea'
  },
  {
    id: 8,
    name: 'Card Masonry Grid',
    description: 'Pinterest-style with micro-interactions. Visual, engaging, and easy to explore.',
    theme: 'card',
    color: '#f093fb'
  },
  {
    id: 9,
    name: 'Video Hero Modern',
    description: 'Cinematic video backgrounds. Immersive experience that builds trust through transparency.',
    theme: 'video',
    color: '#1a1a1a'
  },
  {
    id: 10,
    name: '3D Isometric',
    description: '3D graphics with playful animations. Fun, engaging, and approachable design.',
    theme: 'isometric',
    color: '#667eea'
  }
];

export default function LandingPagesIndex() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>10 Unique Landing Pages</h1>
          <p className={styles.subtitle}>
            Each landing page is uniquely designed with SEO-optimized content, distinct visual styles,
            and custom animations. Built with DRY principles using reusable variant components.
          </p>
        </header>

        <div className={styles.grid}>
          {landingPages.map((lp) => (
            <Link
              key={lp.id}
              href={`/lp/${lp.id}`}
              className={styles.card}
              style={{ '--theme-color': lp.color } as React.CSSProperties}
            >
              <div className={styles.cardNumber}>LP{lp.id}</div>
              <h2 className={styles.cardTitle}>{lp.name}</h2>
              <p className={styles.cardDescription}>{lp.description}</p>
              <div className={styles.cardTheme}>Theme: {lp.theme}</div>
              <div className={styles.cardCta}>
                View Landing Page →
              </div>
            </Link>
          ))}
        </div>

        <section className={styles.features}>
          <h2>Design Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>🎨 10 Unique Designs</h3>
              <p>From clean minimal to extreme bold, each page has its own personality</p>
            </div>
            <div className={styles.feature}>
              <h3>🔄 DRY Architecture</h3>
              <p>Reusable variant components ensure maintainability and consistency</p>
            </div>
            <div className={styles.feature}>
              <h3>✨ Micro-Animations</h3>
              <p>Custom animations for each design style, from subtle to extreme</p>
            </div>
            <div className={styles.feature}>
              <h3>📱 Fully Responsive</h3>
              <p>Perfect experience across all devices and screen sizes</p>
            </div>
            <div className={styles.feature}>
              <h3>🎯 SEO Optimized</h3>
              <p>Unique, keyword-rich content tailored for each landing page</p>
            </div>
            <div className={styles.feature}>
              <h3>⚡ Performance First</h3>
              <p>Optimized animations and code for fast loading times</p>
            </div>
          </div>
        </section>

        <section className={styles.tech}>
          <h2>Technical Implementation</h2>
          <div className={styles.techDetails}>
            <div className={styles.techItem}>
              <strong>Component Architecture:</strong> Variant-based system with HeroVariant, StatsVariant,
              FeaturesVariant, SocialProofVariant, and PricingVariant
            </div>
            <div className={styles.techItem}>
              <strong>Styling:</strong> SCSS Modules with unique variant styles, maintaining DRY principles
            </div>
            <div className={styles.techItem}>
              <strong>Content Management:</strong> Centralized content in TypeScript with type safety
            </div>
            <div className={styles.techItem}>
              <strong>SEO:</strong> Next.js metadata API with unique titles, descriptions, and keywords
            </div>
            <div className={styles.techItem}>
              <strong>Animations:</strong> CSS animations with different timing functions and effects per variant
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
