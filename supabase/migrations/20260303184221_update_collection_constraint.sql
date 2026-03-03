/*
  # Update Collection Constraint

  1. Changes
    - Drop existing collection check constraint
    - Add new constraint allowing 'prestige', 'urban', and 'completed' values
    
  2. Notes
    - 'completed' collection is for Track Record (completed projects)
*/

ALTER TABLE projects DROP CONSTRAINT IF EXISTS projects_collection_check;

ALTER TABLE projects ADD CONSTRAINT projects_collection_check 
CHECK (collection = ANY (ARRAY['prestige'::text, 'urban'::text, 'completed'::text]));