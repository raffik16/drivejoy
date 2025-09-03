'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/branding/Logo/Logo';
import styles from './page.module.scss';

export default function LogoShowcase() {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [selectedSize, setSelectedSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  const [selectedVariant, setSelectedVariant] = useState<'full' | 'icon' | 'wordmark'>('full');

  const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = ['xs', 'sm', 'md', 'lg', 'xl'];
  const variants: Array<'full' | 'icon' | 'wordmark'> = ['full', 'icon', 'wordmark'];
  const themes: Array<'light' | 'dark' | 'auto'> = ['light', 'dark', 'auto'];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Logo Design Showcase</h1>
        <p>Sports Analytics Platform Brand Identity</p>
      </header>

      {/* Interactive Controls */}
      <section className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Theme:</label>
          <div className={styles.buttonGroup}>
            {themes.map(theme => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={selectedTheme === theme ? styles.active : ''}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.controlGroup}>
          <label>Size:</label>
          <div className={styles.buttonGroup}>
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? styles.active : ''}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.controlGroup}>
          <label>Variant:</label>
          <div className={styles.buttonGroup}>
            {variants.map(variant => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={selectedVariant === variant ? styles.active : ''}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Logo Display */}
      <section className={styles.mainDisplay}>
        <div className={styles.logoWrapper}>
          <Logo 
            variant={selectedVariant} 
            theme={selectedTheme} 
            size={selectedSize} 
          />
        </div>
      </section>

      {/* Logo Concepts Grid */}
      <section className={styles.concepts}>
        <h2>Logo Concepts</h2>
        <div className={styles.conceptGrid}>
          <div className={styles.conceptCard}>
            <h3>PredictIQ</h3>
            <p>Data-driven intelligence</p>
            <div className={styles.logoBox}>
              <Logo variant="full" theme="auto" size="lg" />
            </div>
            <div className={styles.colorPalette}>
              <div style={{ background: '#4F46E5' }} />
              <div style={{ background: '#7C3AED' }} />
              <div style={{ background: '#111827' }} />
              <div style={{ background: '#F9FAFB' }} />
            </div>
          </div>

          <div className={styles.conceptCard}>
            <h3>ClutchAI</h3>
            <p>High-stakes precision</p>
            <div className={styles.logoBox}>
              {/* Would show ClutchAI variant */}
              <Logo variant="full" theme="auto" size="lg" />
            </div>
            <div className={styles.colorPalette}>
              <div style={{ background: '#DC2626' }} />
              <div style={{ background: '#F97316' }} />
              <div style={{ background: '#111827' }} />
              <div style={{ background: '#F9FAFB' }} />
            </div>
          </div>

          <div className={styles.conceptCard}>
            <h3>WinSignal</h3>
            <p>Victory analytics</p>
            <div className={styles.logoBox}>
              {/* Would show WinSignal variant */}
              <Logo variant="full" theme="auto" size="lg" />
            </div>
            <div className={styles.colorPalette}>
              <div style={{ background: '#059669' }} />
              <div style={{ background: '#14B8A6' }} />
              <div style={{ background: '#111827' }} />
              <div style={{ background: '#F9FAFB' }} />
            </div>
          </div>

          <div className={styles.conceptCard}>
            <h3>SportIQ</h3>
            <p>Neural sports intelligence</p>
            <div className={styles.logoBox}>
              {/* Would show SportIQ variant */}
              <Logo variant="full" theme="auto" size="lg" />
            </div>
            <div className={styles.colorPalette}>
              <div style={{ background: '#0EA5E9' }} />
              <div style={{ background: '#6366F1' }} />
              <div style={{ background: '#111827' }} />
              <div style={{ background: '#F9FAFB' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className={styles.sizeComparison}>
        <h2>Size Scale</h2>
        <div className={styles.sizeGrid}>
          {sizes.map(size => (
            <div key={size} className={styles.sizeItem}>
              <Logo variant="icon" theme="auto" size={size} />
              <span>{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className={styles.usage}>
        <h2>Usage Examples</h2>
        
        <div className={styles.usageExample}>
          <h3>Navigation Header</h3>
          <div className={styles.mockHeader}>
            <Logo variant="full" theme="light" size="md" />
            <nav>
              <a>Features</a>
              <a>Pricing</a>
              <a>About</a>
              <button>Get Started</button>
            </nav>
          </div>
        </div>

        <div className={styles.usageExample}>
          <h3>Mobile Header</h3>
          <div className={styles.mockMobileHeader}>
            <Logo variant="icon" theme="light" size="sm" />
            <button className={styles.menuButton}>☰</button>
          </div>
        </div>

        <div className={styles.usageExample}>
          <h3>App Sidebar</h3>
          <div className={styles.mockSidebar}>
            <Logo variant="icon" theme="dark" size="md" />
            <div className={styles.sidebarItem}>Dashboard</div>
            <div className={styles.sidebarItem}>Predictions</div>
            <div className={styles.sidebarItem}>Analytics</div>
          </div>
        </div>

        <div className={styles.usageExample}>
          <h3>Footer</h3>
          <div className={styles.mockFooter}>
            <Logo variant="full" theme="dark" size="lg" />
            <p>© 2024 Sports Analytics Platform. All rights reserved.</p>
          </div>
        </div>
      </section>

      {/* Theme Comparison */}
      <section className={styles.themeComparison}>
        <h2>Theme Variants</h2>
        <div className={styles.themeGrid}>
          <div className={styles.themeCard} data-theme="light">
            <h3>Light Theme</h3>
            <Logo variant="full" theme="light" size="md" />
          </div>
          <div className={styles.themeCard} data-theme="dark">
            <h3>Dark Theme</h3>
            <Logo variant="full" theme="dark" size="md" />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className={styles.typography}>
        <h2>Typography</h2>
        <div className={styles.typeSpecimen}>
          <div className={styles.fontDisplay}>
            <h3>Inter Bold - Logo Wordmark</h3>
            <div className={styles.sampleText} style={{ fontWeight: 700 }}>
              PredictIQ
            </div>
          </div>
          <div className={styles.fontDisplay}>
            <h3>Inter Regular - Tagline</h3>
            <div className={styles.sampleText} style={{ fontWeight: 400, fontSize: '14px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              AI Sports Analytics
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Code */}
      <section className={styles.implementation}>
        <h2>Implementation</h2>
        <div className={styles.codeBlock}>
          <pre>
{`import Logo from '@/components/branding/Logo';

// Basic usage
<Logo />

// With options
<Logo 
  variant="full"   // 'full' | 'icon' | 'wordmark'
  theme="auto"     // 'light' | 'dark' | 'auto'
  size="md"        // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
/>

// Responsive example
<>
  {/* Desktop */}
  <Logo variant="full" size="lg" className="hidden md:block" />
  
  {/* Mobile */}
  <Logo variant="icon" size="sm" className="block md:hidden" />
</>`}
          </pre>
        </div>
      </section>
    </div>
  );
}