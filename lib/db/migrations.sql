-- AICalledIT Database Schema
-- Created for PostgreSQL

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create enum types
CREATE TYPE subscription_tier AS ENUM ('TRIAL', 'SINGLE_SPORT', 'MULTI_SPORT');
CREATE TYPE subscription_status AS ENUM ('trialing', 'active', 'past_due', 'canceled', 'incomplete', 'incomplete_expired', 'unpaid');
CREATE TYPE sport AS ENUM ('NFL', 'NBA', 'MLB', 'NHL', 'SOCCER');
CREATE TYPE lead_status AS ENUM ('WAITING', 'INVITED', 'ACTIVE', 'CHURNED');

-- Leads table (waitlist management)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  referral_code VARCHAR(20) UNIQUE NOT NULL,
  referred_by VARCHAR(20) REFERENCES leads(referral_code),
  waitlist_position INTEGER UNIQUE NOT NULL,
  source VARCHAR(50) DEFAULT 'organic',
  status lead_status DEFAULT 'WAITING',
  
  -- UTM tracking
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  
  -- Engagement tracking
  emails_opened INTEGER DEFAULT 0,
  emails_clicked INTEGER DEFAULT 0,
  referral_count INTEGER DEFAULT 0,
  skip_credits INTEGER DEFAULT 0,
  social_shares INTEGER DEFAULT 0,
  
  -- Conversion tracking
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  invited_at TIMESTAMP WITH TIME ZONE,
  signed_up_at TIMESTAMP WITH TIME ZONE,
  first_prediction_at TIMESTAMP WITH TIME ZONE,
  upgraded_at TIMESTAMP WITH TIME ZONE,
  
  -- Indexes for performance
  CONSTRAINT leads_email_key UNIQUE (email),
  CONSTRAINT leads_referral_code_key UNIQUE (referral_code),
  CONSTRAINT leads_waitlist_position_key UNIQUE (waitlist_position)
);

-- Create indexes for leads
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_referral_code ON leads(referral_code);
CREATE INDEX IF NOT EXISTS idx_leads_waitlist_position ON leads(waitlist_position);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  lead_id UUID UNIQUE REFERENCES leads(id),
  
  -- Trial management
  trial_start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  trial_end_date TIMESTAMP WITH TIME ZONE,
  has_used_trial BOOLEAN DEFAULT FALSE,
  
  -- Subscription details
  subscription_tier subscription_tier DEFAULT 'TRIAL',
  selected_sports TEXT[] DEFAULT '{}',
  
  -- Usage tracking
  daily_predictions INTEGER DEFAULT 0,
  monthly_predictions INTEGER DEFAULT 0,
  total_predictions INTEGER DEFAULT 0,
  last_prediction_at TIMESTAMP WITH TIME ZONE,
  
  -- Performance tracking
  current_streak INTEGER DEFAULT 0,
  best_streak INTEGER DEFAULT 0,
  accuracy_rate DECIMAL(5,2) DEFAULT 0.00,
  total_wins INTEGER DEFAULT 0,
  total_losses INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login_at TIMESTAMP WITH TIME ZONE,
  
  CONSTRAINT users_email_key UNIQUE (email)
);

-- Create indexes for users
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_trial_end_date ON users(trial_end_date);
CREATE INDEX IF NOT EXISTS idx_users_subscription_tier ON users(subscription_tier);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES users(id),
  
  -- Stripe details
  stripe_customer_id VARCHAR(255) UNIQUE,
  stripe_sub_id VARCHAR(255) UNIQUE,
  stripe_price_id VARCHAR(255),
  
  -- Subscription info
  tier subscription_tier NOT NULL,
  status subscription_status DEFAULT 'trialing',
  selected_sports TEXT[] DEFAULT '{}',
  
  -- Billing periods
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  
  -- Pricing
  amount_cents INTEGER, -- Amount in cents
  currency VARCHAR(3) DEFAULT 'USD',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  cancelled_at TIMESTAMP WITH TIME ZONE,
  
  CONSTRAINT subscriptions_user_id_key UNIQUE (user_id)
);

-- Create indexes for subscriptions
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_customer_id ON subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_tier ON subscriptions(tier);
CREATE INDEX IF NOT EXISTS idx_subscriptions_current_period_end ON subscriptions(current_period_end);

-- Predictions table
CREATE TABLE IF NOT EXISTS predictions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  
  -- Prediction details
  sport sport NOT NULL,
  matchup VARCHAR(200) NOT NULL,
  game_date TIMESTAMP WITH TIME ZONE,
  prediction JSONB NOT NULL,
  confidence DECIMAL(5,2),
  
  -- External service tracking
  external_id VARCHAR(100),
  source VARCHAR(50) DEFAULT 'lindly_sonnet',
  
  -- Betting details (if applicable)
  bet_type VARCHAR(50), -- moneyline, spread, over_under, etc.
  odds VARCHAR(20),
  stake_amount DECIMAL(10,2),
  
  -- Results tracking
  outcome VARCHAR(20), -- WIN, LOSS, PUSH, PENDING, CANCELLED
  is_correct BOOLEAN,
  actual_result JSONB,
  profit_loss DECIMAL(10,2),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved_at TIMESTAMP WITH TIME ZONE,
  
  CONSTRAINT predictions_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create indexes for predictions
CREATE INDEX IF NOT EXISTS idx_predictions_user_id ON predictions(user_id);
CREATE INDEX IF NOT EXISTS idx_predictions_sport ON predictions(sport);
CREATE INDEX IF NOT EXISTS idx_predictions_outcome ON predictions(outcome);
CREATE INDEX IF NOT EXISTS idx_predictions_created_at ON predictions(created_at);
CREATE INDEX IF NOT EXISTS idx_predictions_game_date ON predictions(game_date);
CREATE INDEX IF NOT EXISTS idx_predictions_user_id_created_at ON predictions(user_id, created_at);

-- Events table (for analytics and tracking)
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name VARCHAR(100) NOT NULL,
  
  -- User identification
  user_id UUID REFERENCES users(id),
  lead_id UUID REFERENCES leads(id),
  session_id VARCHAR(100),
  
  -- Event properties
  properties JSONB DEFAULT '{}',
  
  -- Request context
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  
  -- Timestamps
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  CONSTRAINT events_user_or_lead CHECK (user_id IS NOT NULL OR lead_id IS NOT NULL)
);

-- Create indexes for events
CREATE INDEX IF NOT EXISTS idx_events_event_name ON events(event_name);
CREATE INDEX IF NOT EXISTS idx_events_user_id ON events(user_id);
CREATE INDEX IF NOT EXISTS idx_events_lead_id ON events(lead_id);
CREATE INDEX IF NOT EXISTS idx_events_timestamp ON events(timestamp);
CREATE INDEX IF NOT EXISTS idx_events_user_id_timestamp ON events(user_id, timestamp);

-- Email campaigns table
CREATE TABLE IF NOT EXISTS email_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200) NOT NULL,
  subject VARCHAR(300) NOT NULL,
  template_id VARCHAR(100),
  
  -- Targeting
  target_audience JSONB DEFAULT '{}',
  
  -- Scheduling
  scheduled_at TIMESTAMP WITH TIME ZONE,
  sent_at TIMESTAMP WITH TIME ZONE,
  
  -- Stats
  total_recipients INTEGER DEFAULT 0,
  total_sent INTEGER DEFAULT 0,
  total_delivered INTEGER DEFAULT 0,
  total_opened INTEGER DEFAULT 0,
  total_clicked INTEGER DEFAULT 0,
  total_bounced INTEGER DEFAULT 0,
  
  -- Status
  status VARCHAR(20) DEFAULT 'draft', -- draft, scheduled, sending, sent, cancelled
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Email sends table (individual email tracking)
CREATE TABLE IF NOT EXISTS email_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES email_campaigns(id),
  lead_id UUID REFERENCES leads(id),
  user_id UUID REFERENCES users(id),
  
  email VARCHAR(255) NOT NULL,
  
  -- Status tracking
  sent_at TIMESTAMP WITH TIME ZONE,
  delivered_at TIMESTAMP WITH TIME ZONE,
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  bounced_at TIMESTAMP WITH TIME ZONE,
  
  -- External service IDs
  resend_message_id VARCHAR(100),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  CONSTRAINT email_sends_lead_or_user CHECK (lead_id IS NOT NULL OR user_id IS NOT NULL)
);

-- Create indexes for email tracking
CREATE INDEX IF NOT EXISTS idx_email_sends_campaign_id ON email_sends(campaign_id);
CREATE INDEX IF NOT EXISTS idx_email_sends_lead_id ON email_sends(lead_id);
CREATE INDEX IF NOT EXISTS idx_email_sends_user_id ON email_sends(user_id);
CREATE INDEX IF NOT EXISTS idx_email_sends_sent_at ON email_sends(sent_at);

-- Function to update user accuracy after prediction resolution
CREATE OR REPLACE FUNCTION update_user_accuracy()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.outcome IS NOT NULL AND OLD.outcome IS NULL THEN
    -- Update user stats when prediction is resolved
    UPDATE users
    SET 
      total_wins = CASE 
        WHEN NEW.outcome = 'WIN' THEN total_wins + 1 
        ELSE total_wins 
      END,
      total_losses = CASE 
        WHEN NEW.outcome = 'LOSS' THEN total_losses + 1 
        ELSE total_losses 
      END,
      accuracy_rate = (
        SELECT ROUND(
          (COUNT(*) FILTER (WHERE outcome = 'WIN')::DECIMAL / 
           COUNT(*) FILTER (WHERE outcome IN ('WIN', 'LOSS'))::DECIMAL) * 100, 2
        )
        FROM predictions 
        WHERE user_id = NEW.user_id 
        AND outcome IN ('WIN', 'LOSS')
      ),
      current_streak = CASE
        WHEN NEW.outcome = 'WIN' THEN 
          CASE 
            WHEN (SELECT outcome FROM predictions WHERE user_id = NEW.user_id AND id != NEW.id ORDER BY created_at DESC LIMIT 1) = 'WIN'
            THEN current_streak + 1
            ELSE 1
          END
        ELSE 0
      END,
      updated_at = NOW()
    WHERE id = NEW.user_id;
    
    -- Update best streak if current streak is higher
    UPDATE users 
    SET best_streak = GREATEST(best_streak, current_streak)
    WHERE id = NEW.user_id AND current_streak > best_streak;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for accuracy updates
DROP TRIGGER IF EXISTS trigger_update_user_accuracy ON predictions;
CREATE TRIGGER trigger_update_user_accuracy
  AFTER UPDATE ON predictions
  FOR EACH ROW
  EXECUTE FUNCTION update_user_accuracy();

-- Function to generate referral codes
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS TEXT AS $$
DECLARE
  code TEXT;
  exists BOOLEAN;
BEGIN
  LOOP
    -- Generate a random 8-character code
    code := upper(substring(md5(random()::text) from 1 for 8));
    
    -- Check if code already exists
    SELECT EXISTS(SELECT 1 FROM leads WHERE referral_code = code) INTO exists;
    
    -- If code doesn't exist, return it
    IF NOT exists THEN
      RETURN code;
    END IF;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Function to get next waitlist position
CREATE OR REPLACE FUNCTION get_next_waitlist_position()
RETURNS INTEGER AS $$
DECLARE
  next_position INTEGER;
BEGIN
  SELECT COALESCE(MAX(waitlist_position), 0) + 1 INTO next_position FROM leads;
  RETURN next_position;
END;
$$ LANGUAGE plpgsql;

-- Insert default data (optional)
-- This can be used for testing or initial setup

-- Sample sports configuration (you might want to store this in a separate table)
INSERT INTO leads (email, referral_code, waitlist_position, source) 
VALUES ('admin@aicalledit.com', 'ADMIN001', 1, 'internal')
ON CONFLICT (email) DO NOTHING;

-- Create a view for user dashboard stats
CREATE OR REPLACE VIEW user_dashboard_stats AS
SELECT 
  u.id,
  u.email,
  u.subscription_tier,
  u.selected_sports,
  u.daily_predictions,
  u.total_predictions,
  u.current_streak,
  u.best_streak,
  u.accuracy_rate,
  u.trial_end_date,
  s.status as subscription_status,
  s.current_period_end,
  COUNT(p.id) FILTER (WHERE p.created_at >= CURRENT_DATE) as predictions_today,
  COUNT(p.id) FILTER (WHERE p.created_at >= DATE_TRUNC('month', CURRENT_DATE)) as predictions_this_month,
  COUNT(p.id) FILTER (WHERE p.outcome = 'WIN' AND p.created_at >= CURRENT_DATE - INTERVAL '30 days') as wins_last_30_days,
  COUNT(p.id) FILTER (WHERE p.outcome IN ('WIN', 'LOSS') AND p.created_at >= CURRENT_DATE - INTERVAL '30 days') as total_predictions_last_30_days
FROM users u
LEFT JOIN subscriptions s ON u.id = s.user_id
LEFT JOIN predictions p ON u.id = p.user_id
GROUP BY u.id, u.email, u.subscription_tier, u.selected_sports, u.daily_predictions, 
         u.total_predictions, u.current_streak, u.best_streak, u.accuracy_rate, 
         u.trial_end_date, s.status, s.current_period_end;

-- Grant permissions (adjust as needed for your setup)
-- These would typically be run by a database administrator

-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO your_app_user;
-- GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO your_app_user;
-- GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO your_app_user;