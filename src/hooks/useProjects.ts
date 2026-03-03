import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface Project {
  id: string;
  name: string;
  name_en?: string;
  slug: string;
  collection: 'prestige' | 'urban';
  location: string;
  location_en?: string;
  status?: string;
  status_en?: string;
  description: string;
  description_en?: string;
  tagline?: string;
  tagline_en?: string;
  image_url: string;
  typology?: string;
  surface_area?: string;
  is_featured: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export function useProjects(collection?: 'prestige' | 'urban') {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('projects')
          .select('*')
          .order('order_index', { ascending: true });

        if (collection) {
          query = query.eq('collection', collection);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;

        setProjects(data || []);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [collection]);

  return { projects, loading, error };
}
