-- Create Projects Table
--
-- 1. New Tables
--    - projects: Stores all real estate projects (Prestige and Urban collections)
--
-- 2. Security
--    - Enable RLS on projects table
--    - Add policy for public read access (projects are public content)

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  name_en text,
  slug text UNIQUE NOT NULL,
  collection text NOT NULL CHECK (collection IN ('prestige', 'urban')),
  location text NOT NULL,
  location_en text,
  status text,
  status_en text,
  description text NOT NULL,
  description_en text,
  tagline text,
  tagline_en text,
  image_url text NOT NULL,
  typology text,
  surface_area text,
  is_featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are publicly readable"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);