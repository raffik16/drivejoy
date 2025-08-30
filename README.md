# AICalledIT - AI-Powered Sports Analytics Platform

A growth-optimized sports analytics platform with a waitlist-first launch strategy, built with Next.js 15.4.6 and PostgreSQL.

## 🚀 Features

### Current Implementation (Phase 1)
- **Landing Page** with hero section and live stats
- **Waitlist System** with referral mechanics
- **Viral Growth Features** with referral codes and rewards
- **Clean SCSS Architecture** with scoped styling
- **PostgreSQL Database** with comprehensive schema
- **Responsive Design** optimized for all devices

### Subscription Tiers
- **Free Trial**: 2 days full access
- **Single Sport**: $39.99/month (choose 1 sport)
- **Multi-Sport Package**: $89.99/month (choose 2-5 sports)

### External Integrations
- **AI Predictions**: Lindly.ai + Sonnet (off-server)
- **Email**: Resend for transactional emails
- **Payments**: Stripe with subscription management

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6 with App Router and Turbopack
- **Language**: TypeScript (strict mode)
- **Styling**: SCSS Modules with parent-child scoped approach
- **Database**: PostgreSQL with direct SQL queries
- **Authentication**: NextAuth.js (planned)
- **Email**: Resend (planned)
- **Payments**: Stripe (planned)

## 📁 Project Structure

```
aicalledit/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── page.module.scss            # Landing styles
│   ├── layout.tsx                  # Root layout
│   ├── globals.scss                # Global styles & utilities
│   └── api/
│       └── waitlist/
│           └── join/route.ts       # Waitlist API
├── components/
│   ├── landing/                    # Landing page components
│   │   ├── Hero/
│   │   ├── StatsBar/
│   │   ├── SocialProof/
│   │   ├── Features/
│   │   └── PricingPreview/
│   ├── waitlist/
│   │   └── WaitlistModal/          # Waitlist capture modal
│   └── shared/
│       └── Modal/                  # Reusable modal component
├── lib/
│   └── db/
│       ├── connection.ts           # PostgreSQL connection
│       ├── migrations.sql          # Database schema
│       └── queries.ts              # SQL queries (planned)
├── styles/
│   ├── variables.scss              # SCSS variables & CSS custom properties
│   └── mixins.scss                 # Reusable SCSS mixins
├── CLAUDE.md                       # AI assistant development guide
└── README.md                       # This file
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aicalledit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up PostgreSQL database**
   ```bash
   # Create database
   createdb aicalledit
   
   # Run migrations
   psql -d aicalledit -f lib/db/migrations.sql
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄 Database Setup

The project uses PostgreSQL with a comprehensive schema supporting:

- **Leads Management**: Waitlist with referral tracking
- **User Management**: Trial and subscription handling  
- **Subscription Tiers**: Flexible pricing models
- **Predictions Tracking**: AI-generated predictions storage
- **Event Analytics**: User behavior tracking
- **Email Campaigns**: Automated email workflows

### Required Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aicalledit"

# NextAuth.js (when implemented)
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 🎨 SCSS Architecture

The project uses a clean SCSS architecture with:

- **CSS Custom Properties**: Defined in `styles/variables.scss`
- **Reusable Mixins**: Common patterns in `styles/mixins.scss`
- **Scoped Modules**: Each component has its own `.module.scss` file
- **No Inline Styles**: Except for JavaScript-calculated values
- **Responsive Design**: Mobile-first approach with breakpoint mixins

### Example Component Structure
```
ComponentName/
├── ComponentName.tsx              # Component logic
├── ComponentName.module.scss      # Scoped styles
└── index.ts                       # Export barrel (optional)
```

## 🔥 Key Features Implemented

### 1. Landing Page with Hero Section
- Compelling headline with animated highlights
- Live stats with real-time updates
- Call-to-action with waitlist modal
- Responsive design with mobile optimization

### 2. Waitlist System
- Email capture with validation
- Referral code system for viral growth
- Position tracking and rewards
- Comprehensive form with source tracking

### 3. Viral Mechanics
- Unique referral codes for each signup
- Skip-ahead rewards (100 spots per referral)
- Social sharing integration (planned)
- Referral tracking and analytics

### 4. Database Design
- Comprehensive PostgreSQL schema
- Referral relationship tracking
- User journey analytics
- Subscription management ready

## 📊 Growth Strategy

### Phase 1: Waitlist Building (Current)
- **Target**: 1,000+ email signups
- **Focus**: Viral referral mechanics
- **Metrics**: Conversion rate, referral rate

### Phase 2: Beta Launch (Planned)
- **Target**: 100+ active beta users
- **Focus**: User onboarding and retention
- **Metrics**: Activation rate, engagement

### Phase 3: Monetization (Planned)
- **Target**: Revenue generation
- **Focus**: Subscription conversions
- **Metrics**: Trial-to-paid conversion, churn

## 🛠 Development

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # Run TypeScript compiler check
```

### Code Style Guidelines
- **TypeScript**: Strict mode with explicit types
- **SCSS**: BEM-like naming with CSS Modules
- **Components**: Functional components with hooks
- **Database**: Direct SQL with prepared statements

## 📈 Performance Optimizations

- **Turbopack**: Faster development builds with Next.js 15.4.6
- **CSS Modules**: Scoped styling with automatic optimization
- **Server Components**: Default to server-side rendering
- **Database Indexing**: Optimized queries with proper indexes
- **Image Optimization**: Built-in Next.js image optimization (planned)

## 🔒 Security Best Practices

- **Input Validation**: Zod schemas for all API inputs
- **SQL Injection Prevention**: Parameterized queries
- **Environment Variables**: Secure configuration management
- **Rate Limiting**: API endpoint protection (planned)
- **Authentication**: NextAuth.js integration (planned)

## 📋 TODO / Roadmap

### Immediate (Week 1-2)
- [ ] Email integration with Resend
- [ ] Social sharing functionality
- [ ] Enhanced landing page sections
- [ ] Mobile app-like PWA features

### Short Term (Week 3-4)
- [ ] User authentication with NextAuth.js
- [ ] Dashboard for beta users
- [ ] Basic prediction display
- [ ] Stripe payment integration

### Medium Term (Month 2)
- [ ] AI prediction integration
- [ ] Advanced analytics dashboard
- [ ] Email automation workflows
- [ ] Admin management interface

### Long Term (Month 3+)
- [ ] Mobile app development
- [ ] Advanced growth features
- [ ] A/B testing framework
- [ ] Enterprise features

## 🤝 Contributing

This is a private project. For development questions, refer to `CLAUDE.md` for comprehensive development guidelines.

## 📄 License

Private project - All rights reserved.

---

Built with ❤️ using Next.js 15.4.6, PostgreSQL, and SCSS Modules.
