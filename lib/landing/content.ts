/**
 * Centralized content for landing pages
 * Each landing page will use this content with unique SEO-optimized variations
 */

export interface LandingContent {
  id: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary?: string;
  };
  stats: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    icon: string;
    details?: string[];
  }>;
  socialProof: {
    title: string;
    badges: Array<{
      icon: string;
      text: string;
    }>;
  };
  pricing: {
    title: string;
    price: string;
    period: string;
    features: string[];
    tagline: string;
  };
}

// Landing Page 1: Clean Minimal - Focus on simplicity and clarity
export const lp1Content: LandingContent = {
  id: 'clean-minimal',
  seo: {
    title: 'Smart Betting Analysis - Professional Sports Intelligence | DriveJoy',
    description: 'Transform your sports betting strategy with professional-grade statistical analysis. Get daily edge detection, CLV tracking, and expert insights delivered every morning.',
    keywords: ['sports betting analysis', 'betting intelligence', 'statistical modeling', 'edge detection', 'CLV analysis', 'professional betting']
  },
  hero: {
    headline: 'Bet Smarter, Not Harder',
    subheadline: 'Professional statistical analysis and edge detection delivered daily. Make informed decisions with data-driven insights.',
    cta: 'Start Free Trial',
    ctaSecondary: 'See How It Works'
  },
  stats: [
    { value: '3+ Hours', label: 'Saved Daily', description: 'Research automated' },
    { value: '5-10', label: 'Daily Picks', description: 'Expert analyzed games' },
    { value: '8 AM', label: 'Delivery', description: 'Every morning' },
    { value: '67%', label: 'Success Rate', description: 'Day 1 profits' }
  ],
  features: [
    {
      title: 'Advanced Statistical Modeling',
      description: 'Comprehensive analytics featuring edge detection, CLV analysis, Sharpe ratios, and Kelly criterion optimization.',
      icon: '📊',
      details: ['VaR analysis', 'CLV tracking', 'Statistical significance testing']
    },
    {
      title: 'Professional Edge Detection',
      description: 'Sophisticated algorithms identify market inefficiencies, reverse line movement, and sharp money indicators.',
      icon: '⚡',
      details: ['Steam detection', 'Market efficiency scoring', 'Sharp money identification']
    }
  ],
  socialProof: {
    title: 'Trusted by Smart Bettors',
    badges: [
      { icon: '🎓', text: 'Educational Focus' },
      { icon: '📊', text: 'Data-Driven' },
      { icon: '🔍', text: 'Transparent' },
      { icon: '🛡️', text: 'Responsible Gaming' }
    ]
  },
  pricing: {
    title: 'Expert Insider',
    price: '$19.99',
    period: 'month',
    tagline: 'Professional insights delivered daily',
    features: [
      'Daily Morning Email (8 AM)',
      'Expert Pick Analysis (3-5 best bets)',
      'Clear Explanations',
      'All Major Sports Coverage'
    ]
  }
};

// Landing Page 2: Extreme Bold - Aggressive, action-oriented
export const lp2Content: LandingContent = {
  id: 'extreme-bold',
  seo: {
    title: 'Dominate Sports Betting - Aggressive Edge Detection System | DriveJoy',
    description: 'Stop losing money on gut feelings. Access military-grade betting intelligence with advanced algorithms that find hidden value in every matchup.',
    keywords: ['sports betting edge', 'betting system', 'win rate optimization', 'betting strategy', 'profitable betting', 'betting analytics']
  },
  hero: {
    headline: 'Stop Guessing. Start Winning.',
    subheadline: 'Unleash military-grade betting intelligence. Advanced algorithms detect edges the bookmakers don\'t want you to find.',
    cta: 'Claim Your Edge Now',
    ctaSecondary: 'Watch Demo'
  },
  stats: [
    { value: '180+', label: 'Minutes Saved', description: 'Every single day' },
    { value: '10+', label: 'Winning Plays', description: 'Analyzed daily' },
    { value: '6+', label: 'Research Hours', description: 'Done for you' },
    { value: '67%', label: 'Win Rate', description: 'From day one' }
  ],
  features: [
    {
      title: 'Crushing Statistical Models',
      description: 'Military-grade analytics crush bookmaker lines. Edge detection, value identification, and profit optimization working 24/7.',
      icon: '🎯',
      details: ['Aggressive value hunting', 'Real-time line movement', 'Instant edge alerts']
    },
    {
      title: 'Market Domination Tools',
      description: 'Expose market inefficiencies before they disappear. Track sharp money, detect steam moves, and capitalize on reverse line movement.',
      icon: '💪',
      details: ['Sharp action tracking', 'Steam move alerts', 'Market manipulation detection']
    }
  ],
  socialProof: {
    title: 'Join the Winners Circle',
    badges: [
      { icon: '🏆', text: 'Proven Winners' },
      { icon: '💎', text: 'Premium Intelligence' },
      { icon: '🚀', text: 'Fast Results' },
      { icon: '🔥', text: 'Hot Streaks' }
    ]
  },
  pricing: {
    title: 'Winner\'s Package',
    price: '$19.99',
    period: 'month',
    tagline: 'Everything you need to dominate',
    features: [
      'Early Bird Intelligence (8 AM Sharp)',
      'Killer Picks (3-5 Daily Winners)',
      'No-BS Explanations',
      'Full Sports Arsenal'
    ]
  }
};

// Landing Page 3: Data Dashboard - Numbers and metrics focused
export const lp3Content: LandingContent = {
  id: 'data-dashboard',
  seo: {
    title: 'Sports Betting Data Analytics Platform - Real-Time Metrics | DriveJoy',
    description: 'Professional-grade betting analytics platform with real-time metrics, ROI tracking, and quantitative analysis. Make data-driven betting decisions.',
    keywords: ['betting analytics platform', 'sports betting data', 'ROI tracking', 'betting metrics', 'quantitative analysis', 'betting dashboard']
  },
  hero: {
    headline: 'Data-Driven Betting Intelligence',
    subheadline: 'Quantitative analysis meets sports betting. Access real-time metrics, ROI tracking, and statistical models used by professional syndicates.',
    cta: 'Access Dashboard',
    ctaSecondary: 'View Metrics'
  },
  stats: [
    { value: '+12.4%', label: 'Avg ROI', description: 'User returns' },
    { value: '1,247', label: 'Games Analyzed', description: 'Last 30 days' },
    { value: '2.3%', label: 'Avg Edge', description: 'Per qualified bet' },
    { value: '89%', label: 'Confidence', description: 'In top picks' }
  ],
  features: [
    {
      title: 'Quantitative Analysis Suite',
      description: 'Access professional-grade statistical models including regression analysis, Monte Carlo simulations, and Bayesian probability frameworks.',
      icon: '📈',
      details: ['Regression models', 'Monte Carlo simulations', 'Bayesian frameworks']
    },
    {
      title: 'Real-Time Performance Metrics',
      description: 'Track ROI, CLV, Sharpe ratio, and drawdown metrics in real-time. Comprehensive performance dashboards with historical analysis.',
      icon: '📊',
      details: ['Live ROI tracking', 'Historical performance', 'Risk metrics']
    }
  ],
  socialProof: {
    title: 'Built for Data Scientists',
    badges: [
      { icon: '🧮', text: 'Quantitative Models' },
      { icon: '📐', text: 'Statistical Rigor' },
      { icon: '🔬', text: 'Scientific Method' },
      { icon: '💻', text: 'Professional Tools' }
    ]
  },
  pricing: {
    title: 'Analytics Pro',
    price: '$19.99',
    period: 'month',
    tagline: 'Full analytical suite',
    features: [
      'Real-Time Dashboard Access',
      'Advanced Metrics & KPIs',
      'Historical Data Analysis',
      'Comprehensive Reporting'
    ]
  }
};

// Landing Page 4: Storytelling Scroll - Narrative journey
export const lp4Content: LandingContent = {
  id: 'storytelling-scroll',
  seo: {
    title: 'Your Journey to Smarter Sports Betting Starts Here | DriveJoy',
    description: 'Transform from casual bettor to informed strategist. Discover how professional analysis, statistical modeling, and expert insights elevate your betting game.',
    keywords: ['betting journey', 'betting education', 'improve betting', 'betting transformation', 'smart betting guide', 'betting success']
  },
  hero: {
    headline: 'Your Betting Journey Starts Here',
    subheadline: 'Every morning at 8 AM, wake up to professional insights that transform the way you bet. Join thousands making smarter decisions.',
    cta: 'Begin Your Journey',
    ctaSecondary: 'Read Success Stories'
  },
  stats: [
    { value: 'Daily', label: 'Expert Guidance', description: 'Morning delivery' },
    { value: '5 Sports', label: 'Full Coverage', description: 'All major leagues' },
    { value: '3 Days', label: 'Risk-Free Trial', description: 'Test it yourself' },
    { value: 'Unlimited', label: 'Learning', description: 'Continuous education' }
  ],
  features: [
    {
      title: 'From Gut Feelings to Data Confidence',
      description: 'Transform your approach with daily insights that explain not just what to bet, but why. Learn the reasoning behind every recommendation.',
      icon: '🎓',
      details: ['Educational content', 'Clear reasoning', 'Skill development']
    },
    {
      title: 'Growing Your Betting Knowledge',
      description: 'Each day brings new insights about markets, value identification, and risk management. Build expertise that lasts a lifetime.',
      icon: '🌱',
      details: ['Daily learning', 'Skill building', 'Long-term success']
    }
  ],
  socialProof: {
    title: 'Stories of Transformation',
    badges: [
      { icon: '📚', text: 'Continuous Learning' },
      { icon: '🎯', text: 'Goal Achievement' },
      { icon: '🤝', text: 'Community Support' },
      { icon: '✨', text: 'Real Results' }
    ]
  },
  pricing: {
    title: 'Start Your Story',
    price: '$19.99',
    period: 'month',
    tagline: 'Your transformation begins today',
    features: [
      'Daily Morning Insights',
      'Educational Analysis',
      'Expert Guidance',
      'Community Access'
    ]
  }
};

// Landing Page 5: Neon Cyberpunk - Futuristic, tech-forward
export const lp5Content: LandingContent = {
  id: 'neon-cyberpunk',
  seo: {
    title: 'Next-Gen Sports Betting AI - Futuristic Betting Intelligence | DriveJoy',
    description: 'Experience the future of sports betting with AI-powered analytics, algorithmic edge detection, and next-generation betting intelligence systems.',
    keywords: ['AI sports betting', 'algorithmic betting', 'betting AI', 'machine learning betting', 'AI predictions', 'automated betting analysis']
  },
  hero: {
    headline: 'The Future of Betting Intelligence',
    subheadline: 'Next-gen algorithms decode market patterns. AI-powered analysis delivers edge detection at the speed of thought.',
    cta: 'Enter the Future',
    ctaSecondary: 'Explore Tech'
  },
  stats: [
    { value: '24/7', label: 'AI Monitoring', description: 'Never sleeps' },
    { value: '<100ms', label: 'Analysis Speed', description: 'Lightning fast' },
    { value: '1000+', label: 'Data Points', description: 'Per game' },
    { value: 'Real-Time', label: 'Updates', description: 'Instant intel' }
  ],
  features: [
    {
      title: 'AI-Powered Market Analysis',
      description: 'Neural networks process thousands of data points per second, identifying patterns and edges invisible to human analysis.',
      icon: '🤖',
      details: ['Neural networks', 'Pattern recognition', 'Predictive modeling']
    },
    {
      title: 'Algorithmic Edge Detection',
      description: 'Advanced algorithms scan market movements in real-time, detecting inefficiencies and value opportunities before they vanish.',
      icon: '⚡',
      details: ['Real-time scanning', 'Automated detection', 'Instant alerts']
    }
  ],
  socialProof: {
    title: 'Next-Level Technology',
    badges: [
      { icon: '🚀', text: 'Cutting Edge' },
      { icon: '🧠', text: 'AI-Powered' },
      { icon: '⚡', text: 'Lightning Fast' },
      { icon: '🔮', text: 'Predictive' }
    ]
  },
  pricing: {
    title: 'Future Access',
    price: '$19.99',
    period: 'month',
    tagline: 'Next-gen intelligence',
    features: [
      'AI Analysis Pipeline',
      'Real-Time Edge Detection',
      'Algorithmic Insights',
      'Futuristic Dashboard'
    ]
  }
};

// Landing Page 6: Glassmorphism Premium - Luxury, sophisticated
export const lp6Content: LandingContent = {
  id: 'glassmorphism-premium',
  seo: {
    title: 'Premium Sports Betting Intelligence - Luxury Betting Analytics | DriveJoy',
    description: 'Exclusive access to premium betting intelligence. Sophisticated analysis, curated insights, and white-glove service for discerning bettors.',
    keywords: ['premium betting service', 'luxury betting analytics', 'VIP betting', 'exclusive betting insights', 'premium sports analysis', 'high-end betting']
  },
  hero: {
    headline: 'Premium Intelligence, Refined Results',
    subheadline: 'Sophisticated analysis for discerning bettors. Curated insights delivered with precision and elegance every morning.',
    cta: 'Access Premium',
    ctaSecondary: 'Learn More'
  },
  stats: [
    { value: 'Premium', label: 'Quality', description: 'Curated analysis' },
    { value: 'Exclusive', label: 'Insights', description: 'Limited access' },
    { value: 'White-Glove', label: 'Service', description: 'Personal attention' },
    { value: 'Elite', label: 'Results', description: 'Top tier' }
  ],
  features: [
    {
      title: 'Curated Premium Analysis',
      description: 'Handpicked insights combining sophisticated quantitative models with qualitative market assessment. Excellence in every recommendation.',
      icon: '💎',
      details: ['Curated selection', 'Quality focus', 'Premium insights']
    },
    {
      title: 'Sophisticated Market Intelligence',
      description: 'Elegant approach to edge detection. Refined algorithms identify opportunities with precision and discretion.',
      icon: '✨',
      details: ['Refined analysis', 'Precision targeting', 'Sophisticated tools']
    }
  ],
  socialProof: {
    title: 'Elite Membership',
    badges: [
      { icon: '👔', text: 'Professional Grade' },
      { icon: '🎩', text: 'Exclusive Access' },
      { icon: '🏆', text: 'Premium Quality' },
      { icon: '💫', text: 'Refined Service' }
    ]
  },
  pricing: {
    title: 'Premium Access',
    price: '$19.99',
    period: 'month',
    tagline: 'Sophisticated intelligence',
    features: [
      'Curated Daily Insights',
      'Premium Analysis',
      'White-Glove Service',
      'Exclusive Tools'
    ]
  }
};

// Landing Page 7: Split Screen Dynamic - Interactive comparison
export const lp7Content: LandingContent = {
  id: 'split-screen-dynamic',
  seo: {
    title: 'Before vs After - See the DriveJoy Difference in Sports Betting | DriveJoy',
    description: 'Compare betting without and with professional analysis. See how data-driven insights transform your betting strategy and results.',
    keywords: ['betting comparison', 'before after betting', 'betting improvement', 'betting results', 'better betting outcomes', 'betting transformation']
  },
  hero: {
    headline: 'The Difference Is Clear',
    subheadline: 'Compare betting without professional insights versus with expert analysis. The transformation speaks for itself.',
    cta: 'Make the Switch',
    ctaSecondary: 'Compare Now'
  },
  stats: [
    { value: 'Before: Guessing', label: 'After: Knowing', description: 'Clear difference' },
    { value: 'Before: Hours', label: 'After: Minutes', description: 'Time saved' },
    { value: 'Before: Confused', label: 'After: Confident', description: 'Better decisions' },
    { value: 'Before: Losing', label: 'After: Winning', description: 'Better results' }
  ],
  features: [
    {
      title: 'From Chaos to Clarity',
      description: 'Replace endless research and conflicting opinions with clear, data-driven analysis that makes sense.',
      icon: '🎯',
      details: ['Clear insights', 'No confusion', 'Confident decisions']
    },
    {
      title: 'From Guesswork to Strategy',
      description: 'Transform random betting into strategic decision-making backed by professional-grade statistical analysis.',
      icon: '🧩',
      details: ['Strategic approach', 'Data-backed', 'Professional methods']
    }
  ],
  socialProof: {
    title: 'The Transformation',
    badges: [
      { icon: '🔄', text: 'Complete Change' },
      { icon: '📈', text: 'Improved Results' },
      { icon: '💡', text: 'Better Understanding' },
      { icon: '✅', text: 'Proven Method' }
    ]
  },
  pricing: {
    title: 'Transform Today',
    price: '$19.99',
    period: 'month',
    tagline: 'See the difference yourself',
    features: [
      'Professional Analysis',
      'Clear Insights',
      'Better Results',
      'Complete Support'
    ]
  }
};

// Landing Page 8: Card Masonry Grid - Visual, Pinterest-style
export const lp8Content: LandingContent = {
  id: 'card-masonry-grid',
  seo: {
    title: 'Discover Sports Betting Insights - Visual Betting Intelligence | DriveJoy',
    description: 'Explore comprehensive betting insights through intuitive visual interfaces. Discover opportunities, track performance, and make informed decisions.',
    keywords: ['betting insights discovery', 'visual betting analytics', 'betting opportunities', 'sports betting exploration', 'betting intelligence hub', 'betting platform']
  },
  hero: {
    headline: 'Discover Your Betting Edge',
    subheadline: 'Explore comprehensive insights across all major sports. Visual intelligence that makes complex analysis simple and actionable.',
    cta: 'Start Exploring',
    ctaSecondary: 'Browse Features'
  },
  stats: [
    { value: '100+', label: 'Daily Insights', description: 'Fresh content' },
    { value: '5 Sports', label: 'Full Library', description: 'Complete coverage' },
    { value: 'Visual', label: 'Interface', description: 'Easy to understand' },
    { value: 'Organized', label: 'Structure', description: 'Find anything' }
  ],
  features: [
    {
      title: 'Visual Intelligence Hub',
      description: 'Browse through beautifully organized insights. Visual layouts make it easy to find exactly what you need, when you need it.',
      icon: '🎨',
      details: ['Visual organization', 'Easy navigation', 'Quick access']
    },
    {
      title: 'Comprehensive Coverage',
      description: 'Every major sport, every important game, every valuable insight organized in one intuitive platform.',
      icon: '🗂️',
      details: ['Complete coverage', 'All sports', 'Every game']
    }
  ],
  socialProof: {
    title: 'Explore Intelligence',
    badges: [
      { icon: '🎯', text: 'Easy Discovery' },
      { icon: '📱', text: 'Mobile Friendly' },
      { icon: '🔍', text: 'Quick Search' },
      { icon: '📌', text: 'Save Favorites' }
    ]
  },
  pricing: {
    title: 'Full Access',
    price: '$19.99',
    period: 'month',
    tagline: 'Explore everything',
    features: [
      'Complete Sports Library',
      'Visual Dashboard',
      'Easy Navigation',
      'Unlimited Access'
    ]
  }
};

// Landing Page 9: Video Hero Modern - Cinematic, engaging
export const lp9Content: LandingContent = {
  id: 'video-hero-modern',
  seo: {
    title: 'Watch Professional Sports Betting Analysis in Action | DriveJoy',
    description: 'Experience professional betting analysis in action. See how expert insights, statistical models, and edge detection work together to find value.',
    keywords: ['betting analysis video', 'sports betting demo', 'betting tutorial', 'watch betting analysis', 'betting walkthrough', 'betting education video']
  },
  hero: {
    headline: 'See Intelligence in Action',
    subheadline: 'Watch how professional analysis identifies value, detects edges, and delivers winning insights every single morning.',
    cta: 'Watch Demo',
    ctaSecondary: 'Start Free Trial'
  },
  stats: [
    { value: 'Watch', label: 'Live Analysis', description: 'See it work' },
    { value: 'Learn', label: 'The Process', description: 'Understand why' },
    { value: 'Apply', label: 'Daily', description: 'Use insights' },
    { value: 'Win', label: 'More Often', description: 'Better results' }
  },
  features: [
    {
      title: 'Transparent Process',
      description: 'See exactly how professional analysis works. Watch as algorithms detect edges, models identify value, and insights are delivered.',
      icon: '🎥',
      details: ['Live demonstrations', 'Clear explanations', 'Full transparency']
    },
    {
      title: 'Educational Experience',
      description: 'Learn by watching. Understanding the process makes you a better bettor, and we show you everything.',
      icon: '📺',
      details: ['Video content', 'Step-by-step', 'Expert guidance']
    }
  ],
  socialProof: {
    title: 'Experience the Difference',
    badges: [
      { icon: '👁️', text: 'Full Transparency' },
      { icon: '🎬', text: 'Video Learning' },
      { icon: '📖', text: 'Educational' },
      { icon: '🎓', text: 'Expert Taught' }
    ]
  },
  pricing: {
    title: 'Video Access',
    price: '$19.99',
    period: 'month',
    tagline: 'See everything',
    features: [
      'Daily Video Analysis',
      'Expert Walkthroughs',
      'Educational Content',
      'Complete Access'
    ]
  }
};

// Landing Page 10: 3D Isometric - Playful, engaging
export const lp10Content: LandingContent = {
  id: '3d-isometric',
  seo: {
    title: 'Fun & Engaging Sports Betting Analysis - Smart Betting Made Simple | DriveJoy',
    description: 'Sports betting analysis doesn\'t have to be boring. Enjoy engaging, easy-to-understand insights that make smart betting fun and profitable.',
    keywords: ['fun betting analysis', 'easy betting', 'simple betting insights', 'engaging sports betting', 'beginner friendly betting', 'betting made simple']
  },
  hero: {
    headline: 'Smart Betting, Simply Better',
    subheadline: 'Who said betting analysis has to be boring? Get professional insights delivered in an engaging, easy-to-understand format every morning.',
    cta: 'Get Started',
    ctaSecondary: 'See It Live'
  },
  stats: [
    { value: 'Simple', label: 'Easy to Use', description: 'No complexity' },
    { value: 'Fun', label: 'Engaging', description: 'Enjoy the process' },
    { value: 'Smart', label: 'Professional', description: 'Expert quality' },
    { value: 'Better', label: 'Results', description: 'More wins' }
  ],
  features: [
    {
      title: 'Professional Analysis, Zero Complexity',
      description: 'Get sophisticated insights without the jargon. We make professional analysis accessible, engaging, and actually fun to read.',
      icon: '🎮',
      details: ['Simple language', 'Clear insights', 'No confusion']
    },
    {
      title: 'Engaging Daily Experience',
      description: 'Look forward to your morning insights. Beautiful presentation, clear recommendations, and an experience you\'ll actually enjoy.',
      icon: '🎪',
      details: ['Beautiful design', 'Fun to use', 'Daily excitement']
    }
  ],
  socialProof: {
    title: 'Join the Fun',
    badges: [
      { icon: '🎉', text: 'Engaging' },
      { icon: '😊', text: 'User Friendly' },
      { icon: '🎨', text: 'Beautiful' },
      { icon: '🚀', text: 'Simple' }
    ]
  },
  pricing: {
    title: 'Simple Start',
    price: '$19.99',
    period: 'month',
    tagline: 'Professional insights, simply delivered',
    features: [
      'Easy Morning Emails',
      'Clear Explanations',
      'Fun Experience',
      'Professional Quality'
    ]
  }
};

// Export all content
export const landingPageContents = {
  lp1: lp1Content,
  lp2: lp2Content,
  lp3: lp3Content,
  lp4: lp4Content,
  lp5: lp5Content,
  lp6: lp6Content,
  lp7: lp7Content,
  lp8: lp8Content,
  lp9: lp9Content,
  lp10: lp10Content
};
