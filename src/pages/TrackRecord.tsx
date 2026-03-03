import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import Footer from '../components/Footer';
import ProjectDetailModal from '../components/ProjectDetailModal';

type ProjectCategory = 'ALL' | 'Restauro Conservativo' | 'Residenziale';

interface Project {
  id: string;
  name: string;
  name_en?: string;
  year_completed?: string;
  category?: string;
  image_url: string;
  location: string;
  location_en?: string;
  description: string;
  description_en?: string;
  context_it?: string;
  context_en?: string;
  challenge_it?: string;
  challenge_en?: string;
  solution_it?: string;
  solution_en?: string;
  gallery_images?: string[];
  timeline?: {
    milestones: Array<{
      date: string;
      title: string;
      title_en: string;
    }>;
  };
}

const FALLBACK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Palazzo della Signoria',
    year_completed: '2010',
    category: 'Restauro Conservativo',
    image_url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    location: 'Firenze Centro',
    description: 'Restauro conservativo di un palazzo storico del XV secolo.',
  },
  {
    id: '2',
    name: 'Le Terrazze',
    year_completed: '2018',
    category: 'Residenziale',
    image_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    location: 'Scandicci (FI)',
    description: 'Complesso residenziale contemporaneo con ampi terrazzi.',
  },
];

export default function TrackRecord() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('collection', 'completed')
          .order('year_completed', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(FALLBACK_PROJECTS);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const filters: { key: ProjectCategory; label: string }[] = [
    { key: 'ALL', label: t('trackrecord.filter.all') },
    { key: 'Restauro Conservativo', label: t('trackrecord.filter.restauro') },
    { key: 'Residenziale', label: t('trackrecord.filter.residenziale') },
  ];

  return (
    <div className="bg-white">
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1600&q=80)',
            filter: 'grayscale(100%)',
            objectFit: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('trackrecord.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('trackrecord.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white shadow-lg overflow-hidden animate-pulse">
                <div className="h-80 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-8 bg-gray-200 rounded w-1/3" />
                  <div className="h-6 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 italic">
              {language === 'en' ? 'No projects available' : 'Nessun progetto disponibile'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const projectName = language === 'en' && project.name_en ? project.name_en : project.name;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                >
                  <div className="relative h-80 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${project.image_url})`,
                        filter: 'grayscale(100%)',
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                      style={{
                        backgroundImage: `url(${project.image_url})`,
                        filter: 'grayscale(0%)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-baseline justify-between mb-2">
                      <span
                        className="text-5xl font-bold opacity-60"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {project.year_completed || '—'}
                      </span>
                      <span className="text-xs tracking-widest uppercase opacity-80">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">
                      {projectName}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
