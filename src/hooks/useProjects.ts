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

export interface PageContent {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_it: string;
  content_en?: string;
  order_index: number;
}

export interface IntelligenceFeature {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  icon: string;
  order_index: number;
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

export function usePageContent(page: string) {
  const [content, setContent] = useState<Record<string, PageContent>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('page_content')
          .select('*')
          .eq('page', page)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        const contentMap: Record<string, PageContent> = {};
        data?.forEach((item) => {
          contentMap[item.content_key] = item;
        });

        setContent(contentMap);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching page content:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [page]);

  return { content, loading, error };
}

export function useIntelligenceFeatures() {
  const [features, setFeatures] = useState<IntelligenceFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchFeatures() {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('intelligence_features')
          .select('*')
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setFeatures(data || []);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching intelligence features:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatures();
  }, []);

  return { features, loading, error };
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  request_type: string;
  project_id?: string;
  message: string;
  budget_range?: string;
}

export function useSubmitContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContact = async (data: ContactSubmission) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (submitError) throw submitError;

      setSuccess(true);
    } catch (err) {
      setError(err as Error);
      console.error('Error submitting contact form:', err);
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading, error, success };
}

export function useSubmitNewsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const submitNewsletter = async (email: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      setIsDuplicate(false);

      const { error: submitError } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (submitError) {
        if (submitError.code === '23505') {
          setIsDuplicate(true);
        } else {
          throw submitError;
        }
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError(err as Error);
      console.error('Error submitting newsletter:', err);
    } finally {
      setLoading(false);
    }
  };

  return { submitNewsletter, loading, error, success, isDuplicate };
}
