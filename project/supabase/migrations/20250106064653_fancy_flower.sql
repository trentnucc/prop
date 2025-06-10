/*
  # Demo Requests Schema

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `phone` (text)
      - `preferred_date` (date)
      - `preferred_time` (time)
      - `notes` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on demo_requests table
    - Add policies for admin access
*/

CREATE TABLE demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time time NOT NULL,
  notes text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow admins to manage all demo requests
CREATE POLICY "Admins can manage demo requests"
  ON demo_requests
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin');

-- Allow creation of demo requests by anyone
CREATE POLICY "Anyone can create demo requests"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);