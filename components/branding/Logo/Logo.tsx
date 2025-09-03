import styles from './Logo.module.scss';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'wordmark';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}

export function Logo({ 
  size = 'md', 
  variant = 'full', 
  theme = 'auto',
  className 
}: LogoProps) {
  const logoClasses = [
    styles.logo,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`theme-${theme}`],
    className
  ].filter(Boolean).join(' ');


  const LogoWordmark = () => (
    <div className={styles.logoWordmark}>
      <span className={styles.ai}>AI</span>
      <span className={styles.called}>Called</span>
      <span className={styles.it}>IT</span>
    </div>
  );

  return (
    <div className={logoClasses}>
      {(variant === 'full' || variant === 'wordmark') && <LogoWordmark />}
    </div>
  );
}