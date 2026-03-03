/*
  # Create newsletter subscriptions table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null) - Subscriber email address
      - `subscribed_at` (timestamptz) - Subscription timestamp
      - `ip_address` (text, optional) - IP address for tracking
      - `user_agent` (text, optional) - User agent for tracking
      - `is_active` (boolean) - Active subscription status

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for public insert (anyone can subscribe)
    - Add policy for authenticated users to read subscription data

  3. Indexes
    - Unique index on email to prevent duplicates
    - Index on subscribed_at for time-based queries
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
  ON newsletter_subscriptions(email);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at 
  ON newsletter_subscriptions(subscribed_at DESC);