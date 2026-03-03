/*
  # Add Track Record Fields

  1. Changes
    - Add `category` field (Restauro Conservativo / Residenziale)
    - Add `line` field (Prestige / Living)
    - Add `year_completed` field for completion year
    - Add `context_it` and `context_en` for project context
    - Add `challenge_it` and `challenge_en` for project challenges
    - Add `solution_it` and `solution_en` for solutions implemented
    - Add `gallery_images` array for additional photos
    - Add `timeline` JSONB for project milestones
    
  2. Security
    - No RLS changes needed as projects table already has RLS enabled
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'category'
  ) THEN
    ALTER TABLE projects ADD COLUMN category text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'line'
  ) THEN
    ALTER TABLE projects ADD COLUMN line text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'year_completed'
  ) THEN
    ALTER TABLE projects ADD COLUMN year_completed text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'context_it'
  ) THEN
    ALTER TABLE projects ADD COLUMN context_it text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'context_en'
  ) THEN
    ALTER TABLE projects ADD COLUMN context_en text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'challenge_it'
  ) THEN
    ALTER TABLE projects ADD COLUMN challenge_it text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'challenge_en'
  ) THEN
    ALTER TABLE projects ADD COLUMN challenge_en text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'solution_it'
  ) THEN
    ALTER TABLE projects ADD COLUMN solution_it text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'solution_en'
  ) THEN
    ALTER TABLE projects ADD COLUMN solution_en text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'gallery_images'
  ) THEN
    ALTER TABLE projects ADD COLUMN gallery_images text[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'timeline'
  ) THEN
    ALTER TABLE projects ADD COLUMN timeline jsonb;
  END IF;
END $$;