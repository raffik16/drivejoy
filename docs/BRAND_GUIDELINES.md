# Brand Guidelines - Sports Analytics Platform

## Logo Design Concepts

### 1. PredictIQ (Recommended)
**Concept**: Data visualization merged with sports elements
- **Icon**: Hexagonal container with data bars forming a graph, overlaid with subtle ball seam
- **Message**: Intelligence, data-driven insights, sports focus
- **Best for**: Professional, B2B appeal, serious sports analysts

### 2. ClutchAI
**Concept**: Lightning bolt through target rings
- **Icon**: Concentric target circles with lightning bolt centerpiece
- **Message**: Precision, high-stakes moments, energy
- **Best for**: Exciting, dramatic appeal, casual sports fans

### 3. WinSignal
**Concept**: Signal waves forming trophy shape
- **Icon**: Ascending signal waves that create trophy silhouette
- **Message**: Victory, communication, achievement
- **Best for**: Success-oriented, aspirational users

### 4. SportIQ (Alternative)
**Concept**: Neural network nodes forming sports ball
- **Icon**: Connected nodes creating ball shape with AI network
- **Message**: Machine learning, connectivity, sports intelligence
- **Best for**: Tech-savvy audience, AI enthusiasts

## Color Palettes

### Primary Palette (PredictIQ)
```scss
$primary-gradient-start: #4F46E5; // Indigo-600
$primary-gradient-end: #7C3AED;   // Purple-600
$text-primary: #111827;           // Gray-900
$text-secondary: #6B7280;         // Gray-500
$background: #FFFFFF;             // White
$surface: #F9FAFB;                // Gray-50
```

### Alternative Palettes

**ClutchAI - Energy & Urgency**
```scss
$gradient-start: #DC2626;  // Red-600
$gradient-end: #F97316;    // Orange-500
```

**WinSignal - Success & Growth**
```scss
$gradient-start: #059669;  // Emerald-600
$gradient-end: #14B8A6;    // Teal-500
```

**SportIQ - Trust & Intelligence**
```scss
$gradient-start: #0EA5E9;  // Sky-500
$gradient-end: #6366F1;    // Indigo-500
```

## Typography

### Primary Font Stack
```scss
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;
```

### Font Weights
- **Logo Wordmark**: 700 (Bold) for main, 400 (Regular) for tagline
- **Headings**: 600-800
- **Body Text**: 400-500
- **Emphasis**: 600

### Letter Spacing
- **Logo**: -0.02em (tight)
- **Tagline**: 0.02em (slightly loose)
- **Headings**: -0.01em
- **Body**: 0

## Logo Usage Guidelines

### Minimum Sizes
- **Full Logo**: 120px width minimum
- **Icon Only**: 24px minimum
- **Favicon**: 16px (simplified version)

### Clear Space
- Maintain clear space equal to the height of the 'I' in the wordmark
- Never place other elements within this zone

### Placement Strategy

#### Header/Navigation
```tsx
<header>
  <Logo variant="full" size="md" theme="auto" />
</header>
```

#### Mobile Header
```tsx
<header>
  <Logo variant="icon" size="sm" theme="auto" />
</header>
```

#### Footer
```tsx
<footer>
  <Logo variant="full" size="lg" theme="dark" />
</footer>
```

#### App Dashboard
```tsx
<aside>
  <Logo variant="icon" size="md" theme="auto" />
</aside>
```

## Responsive Logo System

### Breakpoint Behavior
```scss
// Desktop (>1024px)
- Full logo with tagline
- Size: lg or xl

// Tablet (768px - 1024px)  
- Full logo without tagline
- Size: md

// Mobile (<768px)
- Icon only in header
- Full logo in footer
- Size: sm or xs
```

### Implementation in Next.js

```tsx
// components/Header.tsx
import Logo from '@/components/branding/Logo';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo 
        variant="full" 
        size="md" 
        theme="auto"
        className={styles.headerLogo}
      />
    </header>
  );
}
```

## SVG Optimization

### File Structure
```
components/
└── branding/
    └── Logo/
        ├── Logo.tsx          // React component
        ├── Logo.module.scss  // Scoped styles
        ├── index.ts          // Exports
        └── logos/            // Optional static SVGs
            ├── logo-full.svg
            ├── logo-icon.svg
            └── logo-wordmark.svg
```

### Performance Considerations
- Inline SVG for dynamic theming and animations
- Optimized path data (simplified curves)
- CSS-based animations for smooth performance
- Lazy loading for non-critical logo variations

## Dark Mode Support

### Automatic Theme Detection
```scss
@media (prefers-color-scheme: dark) {
  // Increase brightness of gradients
  // Invert text colors
  // Add subtle glow effects
}
```

### Manual Theme Control
```tsx
<Logo theme="dark" />  // Force dark theme
<Logo theme="light" /> // Force light theme
<Logo theme="auto" />  // System preference
```

## Animation Guidelines

### Subtle Animations
- **Hover**: Scale 1.05, rotate 5deg
- **Loading**: Pulse opacity 0.7-1.0
- **Data Bars**: Staggered height animation
- **Signal Waves**: Sequential opacity pulse

### Performance
- Use CSS transforms only
- Limit to 60fps animations
- Disable on reduced-motion preference
- Keep total animation < 3 seconds

## Brand Application Examples

### Marketing Site
- Hero: Extra large (xl) with animations
- Navigation: Medium (md) static
- Footer: Large (lg) with tagline

### Application
- Sidebar: Icon only (sm)
- Dashboard header: Full logo (md)
- Loading screen: Animated icon (lg)
- Email templates: Static PNG fallback

### Social Media
- Profile picture: Icon only (square crop)
- Cover images: Full logo on brand gradient
- Post watermarks: Semi-transparent icon

## File Exports

### Required Formats
1. **SVG**: Primary format (scalable, themeable)
2. **PNG**: Fallback for emails (2x, 3x resolutions)
3. **ICO**: Favicon (16x16, 32x32, 48x48)
4. **Apple Touch Icon**: 180x180 PNG
5. **OG Image**: 1200x630 with logo

### Naming Convention
```
logo-[variant]-[theme]-[size].[format]
Examples:
- logo-full-light-lg.svg
- logo-icon-dark-sm.png
- logo-wordmark-auto-md.svg
```

## Quality Checklist

- [ ] Works on light and dark backgrounds
- [ ] Readable at all specified sizes
- [ ] Animations are smooth and purposeful
- [ ] Accessible color contrast (WCAG AA)
- [ ] File sizes optimized (<10KB SVG)
- [ ] Consistent across all platforms
- [ ] Properly aligned and balanced
- [ ] Clear reproduction in grayscale
- [ ] No trademark conflicts
- [ ] Memorable and distinctive

## Next Steps for Implementation

1. **Choose Primary Brand**: Select from PredictIQ, ClutchAI, or WinSignal
2. **Generate Static Assets**: Export PNG, ICO, and social media versions
3. **Update Metadata**: Add favicon, apple-touch-icon, og:image
4. **Implement Theme Toggle**: Add user preference for light/dark mode
5. **Create Email Templates**: Design HTML email headers with PNG fallback
6. **Test Across Devices**: Verify rendering on various screens and browsers

This comprehensive brand guide ensures consistent, professional logo implementation across all touchpoints of the sports analytics platform.