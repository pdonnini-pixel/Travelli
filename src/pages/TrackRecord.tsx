import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

type ProjectCategory = 'ALL' | 'RESTAURO' | 'RESIDENZIALE';

interface Project {
  id: number;
  year: string;
  name: string;
  category: ProjectCategory;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    year: '2010',
    name: 'Palazzo della Signoria',
    category: 'RESTAURO',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 2,
    year: '2018',
    name: 'Le Terrazze',
    category: 'RESIDENZIALE',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 3,
    year: '2005',
    name: 'Villa Antica',
    category: 'RESTAURO',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    id: 4,
    year: '2015',
    name: 'Residenza Firenze Centro',
    category: 'RESIDENZIALE',
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  },
  {
    id: 5,
    year: '2012',
    name: 'Palazzo Storico Rinascimentale',
    category: 'RESTAURO',
    imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
  },
  {
    id: 6,
    year: '2020',
    name: 'Urban Living Complex',
    category: 'RESIDENZIALE',
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
  },
  {
    id: 7,
    year: '2008',
    name: 'Convento San Francesco',
    category: 'RESTAURO',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
  },
  {
    id: 8,
    year: '2022',
    name: 'Vista Moderna',
    category: 'RESIDENZIALE',
    imageUrl: 'https://images.unsplash.com/photo-1600607688960-e095ff83135b?w=800&q=80',
  },
];

export default function TrackRecord() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('ALL');
  const { t } = useLanguage();

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const filters: { key: ProjectCategory; label: string }[] = [
    { key: 'ALL', label: t('trackrecord.filter.all') },
    { key: 'RESTAURO', label: t('trackrecord.filter.restauro') },
    { key: 'RESIDENZIALE', label: t('trackrecord.filter.residenziale') },
  ];

  return (
    <div className="bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    filter: 'grayscale(100%)',
                  }}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
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
                    {project.year}
                  </span>
                  <span className="text-xs tracking-widest uppercase opacity-80">
                    {project.category === 'RESTAURO'
                      ? t('trackrecord.category.restauro')
                      : t('trackrecord.category.residenziale')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
