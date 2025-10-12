// Type definitions for gtag
export type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Button location type for CTA tracking
export type ButtonLocation =
  | 'hero'
  | 'statsbar'
  | 'social_proof'
  | 'features'
  | 'pricing_card'
  | 'pricing_guarantee'
  | 'contact_alt';

/**
 * Track CTA button clicks (consolidated event)
 */
export function trackCTAClick(location: ButtonLocation, buttonText: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      button_location: location,
      button_text: buttonText,
    });
  }
}

/**
 * Track page views (for custom navigation)
 */
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-1BRD3DQ96C', {
      page_path: url,
    });
  }
}

/**
 * Track custom events
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}
