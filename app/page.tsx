import { Hero } from '@/components/landing/Hero/Hero';
import { StatsBar } from '@/components/landing/StatsBar/StatsBar';
import { SocialProof } from '@/components/landing/SocialProof/SocialProof';
import { Features } from '@/components/landing/Features/Features';
import { PricingPreview } from '@/components/landing/PricingPreview/PricingPreview';
import { ContactForm } from '@/components/shared/ContactForm/ContactForm';
import styles from './page.module.scss';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aicalledit.com/#organization",
        "name": "AICalledIT",
        "url": "https://aicalledit.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aicalledit.com/logo.png"
        },
        "description": "Professional-grade sports betting intelligence platform offering advanced statistical analysis and edge detection.",
        "sameAs": [
          "https://twitter.com/aicalledit",
          "https://facebook.com/aicalledit"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://aicalledit.com/#website",
        "url": "https://aicalledit.com",
        "name": "AICalledIT",
        "publisher": {
          "@id": "https://aicalledit.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://aicalledit.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aicalledit.com/#webpage",
        "url": "https://aicalledit.com",
        "name": "AICalledIT - Professional Sports Betting Analysis & Predictions",
        "isPartOf": {
          "@id": "https://aicalledit.com/#website"
        },
        "description": "Win more with professional-grade sports betting intelligence. Advanced edge detection, CLV analysis, and statistical modeling for NFL, NBA, MLB, NHL & Soccer.",
        "breadcrumb": {
          "@id": "https://aicalledit.com/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aicalledit.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://aicalledit.com",
              "name": "Home"
            }
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Sports Betting Analysis",
        "provider": {
          "@id": "https://aicalledit.com/#organization"
        },
        "areaServed": "US",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sports Betting Intelligence Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Expert Insider - Daily Sports Betting Analysis",
                "description": "Professional betting insights delivered daily with expert analysis for all major sports"
              },
              "price": "19.99",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "19.99",
                "priceCurrency": "USD",
                "billingDuration": "P1M"
              },
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What sports are covered by AICalledIT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AICalledIT provides professional betting analysis for NFL, NBA, MLB, NHL, and Soccer. Daily analysis is delivered at 8 AM with edge detection and statistical modeling."
            }
          },
          {
            "@type": "Question",
            "name": "How does the free trial work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Get full access to all features for 3 days completely free. No credit card required for the trial. Cancel anytime during or after the trial period."
            }
          },
          {
            "@type": "Question",
            "name": "What makes AICalledIT different from other sports betting services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AICalledIT offers professional-grade analysis including advanced edge detection, CLV (Closing Line Value) tracking, statistical modeling, and market inefficiency identification typically reserved for professional betting operations."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className={styles.main}>
        <Hero />
        <StatsBar />
        <SocialProof />
        <Features />
        <PricingPreview />
        <ContactForm />
      </main>
    </>
  );
}
