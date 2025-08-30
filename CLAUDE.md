# CLAUDE.md - AICalledIT Development Guide

## Project Overview
AICalledIT is a growth-optimized sports analytics platform with a waitlist-first launch strategy. The platform uses external AI services (Lindly.ai + Sonnet) for predictions to keep AI processing off-server.

## Tech Stack
- **Framework**: Next.js 15.4.6 with App Router and Turbopack
- **Language**: TypeScript (strict mode)
- **Styling**: SCSS Modules with parent-child scoped approach
- **Database**: PostgreSQL with direct SQL queries (no ORM)
- **Authentication**: NextAuth.js for user management
- **Email**: Resend for transactional emails
- **Payments**: Stripe with subscription management
- **External AI**: Lindly.ai + Sonnet for predictions (off-server)

## Subscription Tiers & Pricing

### Free Trial
- **Duration**: 2 days full access
- **Access**: All sports available
- **Auto-conversion**: To selected plan or expires

### Single Sport - $39.99/month
- Choose 1 sport (NFL, NBA, MLB, NHL, Soccer)
- Unlimited predictions for selected sport
- Daily analysis and insights
- Email alerts
- Accuracy tracking
- Mobile access

### Multi-Sport Package - $89.99/month
- Choose 2-5 sports (custom selection)
- Unlimited predictions across selected sports
- Cross-sport analysis
- Priority support
- Advanced analytics
- Early access to features
- Custom alerts

## Project Structure

```
aicalledit/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── page.module.scss            # Landing styles
│   ├── layout.tsx                  # Root layout
│   ├── globals.scss                # Global styles & utilities
│   ├── (marketing)/                # Marketing pages
│   │   ├── pricing/
│   │   └── about/
│   ├── (auth)/                     # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── (app)/                      # Protected app pages
│   │   ├── dashboard/
│   │   ├── predictions/
│   │   ├── performance/
│   │   └── settings/
│   ├── waitlist/
│   │   ├── success/
│   │   └── position/
│   └── api/
│       ├── waitlist/
│       ├── predictions/
│       ├── stripe/
│       └── auth/
├── components/
│   ├── landing/
│   │   ├── Hero/
│   │   ├── StatsBar/
│   │   └── SocialProof/
│   ├── waitlist/
│   │   ├── WaitlistForm/
│   │   └── ReferralCard/
│   ├── subscription/
│   │   ├── PricingCards/
│   │   └── SportSelector/
│   ├── predictions/
│   │   ├── PredictionCard/
│   │   ├── PredictionModal/
│   │   └── PerformanceChart/
│   └── shared/
│       ├── Button/
│       ├── Card/
│       ├── Modal/
│       └── Input/
├── lib/
│   ├── db/
│   │   ├── connection.ts           # PostgreSQL connection
│   │   ├── queries.ts              # SQL queries
│   │   └── migrations.sql          # Database schema
│   ├── email/
│   │   ├── client.ts               # Resend client
│   │   └── templates/
│   ├── external/
│   │   └── predictions.ts          # External AI service interface
│   ├── stripe/
│   │   └── client.ts              # Stripe client
│   └── utils/
│       ├── validation.ts           # Zod schemas
│       └── referral.ts             # Referral code generation
├── styles/
│   ├── variables.scss              # SCSS variables & CSS custom properties
│   ├── mixins.scss                 # Reusable SCSS mixins
│   └── breakpoints.scss            # Responsive breakpoints
└── types/
    ├── database.ts                 # Database type definitions
    ├── subscription.ts             # Subscription types
    └── prediction.ts               # Prediction types
```

## Development Guidelines

### Code Style
- **TypeScript**: Use strict mode, explicit types
- **SCSS Modules**: Each component has its own `.module.scss` file
- **No Inline Styles**: Except for dynamic values (JavaScript-calculated)
- **Parent-Child Scoping**: Nest styles max 3 levels deep
- **BEM-like Naming**: Use descriptive class names

### SCSS Architecture
1. **Variables**: Define all design tokens in `styles/variables.scss`
2. **Mixins**: Reusable patterns in `styles/mixins.scss`
3. **Scoping**: Component styles in `.module.scss` files
4. **Utilities**: Global utility classes in `globals.scss`

### Component Structure
```
ComponentName/
├── ComponentName.tsx              # Component logic
├── ComponentName.module.scss      # Scoped styles
├── ComponentName.test.tsx         # Unit tests (optional)
└── index.ts                       # Export barrel
```

### Database Conventions
- **Direct SQL**: No ORM, use native PostgreSQL queries
- **Prepared Statements**: Always use parameterized queries
- **Transactions**: Use for multi-step operations
- **Migrations**: Store in `lib/db/migrations.sql`
- **Types**: Define database types in `types/database.ts`

### API Routes
- **Validation**: Use Zod for all input validation
- **Error Handling**: Consistent error response format
- **HTTP Status**: Use appropriate status codes
- **Rate Limiting**: Implement for sensitive endpoints
- **CORS**: Configure for API routes

## Database Schema

### Core Tables
```sql
-- Leads (waitlist)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  referral_code VARCHAR(20) UNIQUE NOT NULL,
  referred_by VARCHAR(20),
  waitlist_position INTEGER UNIQUE NOT NULL,
  source VARCHAR(50) DEFAULT 'organic',
  emails_opened INTEGER DEFAULT 0,
  referral_count INTEGER DEFAULT 0,
  skip_credits INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  invited_at TIMESTAMP WITH TIME ZONE,
  signed_up_at TIMESTAMP WITH TIME ZONE
);

-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  lead_id UUID REFERENCES leads(id),
  trial_start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  trial_end_date TIMESTAMP WITH TIME ZONE,
  has_used_trial BOOLEAN DEFAULT FALSE,
  subscription_tier VARCHAR(20) DEFAULT 'TRIAL',
  selected_sports TEXT[] DEFAULT '{}',
  daily_predictions INTEGER DEFAULT 0,
  total_predictions INTEGER DEFAULT 0,
  last_prediction_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES users(id),
  stripe_customer_id VARCHAR(255) UNIQUE,
  stripe_sub_id VARCHAR(255) UNIQUE,
  stripe_price_id VARCHAR(255),
  tier VARCHAR(20) NOT NULL,
  status VARCHAR(30) DEFAULT 'trialing',
  selected_sports TEXT[] DEFAULT '{}',
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  cancelled_at TIMESTAMP WITH TIME ZONE
);

-- Predictions
CREATE TABLE predictions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  sport VARCHAR(20) NOT NULL,
  matchup VARCHAR(200) NOT NULL,
  prediction JSONB NOT NULL,
  confidence DECIMAL(5,2),
  external_id VARCHAR(100),
  source VARCHAR(50) DEFAULT 'lindly_sonnet',
  outcome VARCHAR(20),
  is_correct BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Environment Variables

### Required Variables
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aicalledit"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Email
RESEND_API_KEY="re_xxxxxxxxxx"

# Stripe
STRIPE_SECRET_KEY="sk_test_xxxxxxxxxx"
STRIPE_WEBHOOK_SECRET="whsec_xxxxxxxxxx"
STRIPE_SINGLE_SPORT_PRICE_ID="price_xxxxxxxxxx"
STRIPE_MULTI_SPORT_PRICE_ID="price_xxxxxxxxxx"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Optional Variables
```env
# External Prediction Service (if needed)
PREDICTION_SERVICE_URL="https://your-lindly-endpoint"
PREDICTION_SERVICE_KEY="your-api-key"

# Analytics
MIXPANEL_TOKEN="xxxxxxxxxx"
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"

# Monitoring
SENTRY_DSN="https://xxxxxxxxxx@sentry.io/xxxxxxxxxx"
```

## Common Development Tasks

### Starting Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint (if configured)
npm run type-check   # Run TypeScript compiler check
```

### Database Operations
```bash
# Connect to local PostgreSQL
psql -h localhost -U username -d aicalledit

# Run migrations
psql -h localhost -U username -d aicalledit -f lib/db/migrations.sql

# Backup database
pg_dump -h localhost -U username aicalledit > backup.sql

# Restore database
psql -h localhost -U username -d aicalledit < backup.sql
```

### Adding New Components
1. Create component directory in appropriate location
2. Add TypeScript component file
3. Add SCSS module with scoped styles
4. Add index.ts export
5. Import styles using CSS Modules
6. Use mixins from `styles/mixins.scss`

### Adding New API Routes
1. Create route in `app/api/`
2. Add Zod validation schema
3. Implement proper error handling
4. Add rate limiting if needed
5. Test with different HTTP methods

### Adding New Database Tables
1. Add SQL to `lib/db/migrations.sql`
2. Define TypeScript types in `types/database.ts`
3. Create query functions in `lib/db/queries.ts`
4. Update database connection if needed

## Deployment

### Vercel Deployment
1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Configure build settings (Next.js preset)
4. Set up custom domain
5. Configure PostgreSQL database (Neon, Supabase, or Railway)

### Environment Setup
1. Production PostgreSQL database
2. Stripe live keys
3. Production email configuration
4. Custom domain configuration
5. SSL certificate (automatic with Vercel)

## Performance Guidelines

### SCSS Optimization
- Use CSS custom properties for theming
- Minimize nested selectors (max 3 levels)
- Use mixins for repeated patterns
- Leverage CSS Modules for scoping

### Component Optimization
- Use Server Components by default
- Client Components only when needed
- Implement proper loading states
- Lazy load heavy components
- Optimize images with next/image

### Database Optimization
- Add indexes for frequently queried columns
- Use prepared statements
- Implement connection pooling
- Cache expensive queries
- Use database transactions appropriately

## Security Best Practices

### General Security
- Never expose API keys in client code
- Validate all user inputs with Zod
- Use CSRF protection
- Implement rate limiting
- Sanitize database queries (use parameterized queries)

### Authentication
- Use secure session management
- Implement proper logout
- Add email verification
- Use strong password requirements (if applicable)
- Consider 2FA for admin accounts

## Growth Features Implementation

### Waitlist System
- Email capture with validation
- Referral code generation
- Position tracking
- Skip-the-line rewards
- Email automation sequences

### Viral Mechanics
- Social sharing buttons
- Referral tracking
- Reward tiers
- Leaderboards
- Gamification elements

### Subscription Management
- Trial period handling
- Upgrade/downgrade flows
- Usage limit enforcement
- Payment failure handling
- Cancellation management

## Success Metrics by Phase

### Phase 1: Waitlist (Week 1)
- Target: 1,000 email signups
- Conversion rate: >2% (visitors to signups)
- Referral rate: >20% of signups refer others
- Page load time: <2 seconds

### Phase 2: Beta Launch (Week 2-3)
- Target: 100 active beta users
- Activation rate: >50% (signups to first prediction)
- Daily active users: >30%
- Trial to paid conversion: >10%

### Phase 3: Growth Mode (Week 4+)
- Target: 1,000 paying users
- Monthly churn rate: <5%
- Average revenue per user: $50+
- Customer acquisition cost: <$30

This documentation provides a comprehensive guide for developing and scaling the AICalledIT platform with clean, maintainable code and excellent user experience.