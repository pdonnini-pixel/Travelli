import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    id: 1,
    title: 'VILLA IL PRATELLO',
    location: 'Firenze',
    statusKey: 'projects.signature.status',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop',
    size: 'large',
    link: '/signature',
  },
  {
    id: 2,
    title: 'IL BORGO IMPRUNETA',
    location: 'Impruneta (FI)',
    statusKey: 'projects.borgo.tagline',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    size: 'medium',
    link: '/urban',
  },
  {
    id: 3,
    title: 'CASA BECCARI',
    location: 'Firenze',
    statusKey: 'projects.signature.status',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
    size: 'medium',
    link: '/signature',
  },
];

const getBadgeStyles = (status: string) => {
  switch (status) {
    case 'SIGNATURE COLLECTION':
      return 'bg-gradient-to-r from-[#A68966] to-[#8B6F4E] text-white border border-[#A68966]';
    case 'IN CONSEGNA 2026':
      return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white';
    default:
      return 'bg-gray-600 text-white';
  }
};

export default function ProjectGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-6xl font-bold text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t('projects.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-600 mb-16 text-lg"
        >
          {t('projects.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} to={project.link}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative group overflow-hidden cursor-pointer ${
                  project.size === 'large' ? 'md:col-span-2 h-96' : 'h-96'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div className="flex justify-end">
                    <span
                      className={`${getBadgeStyles(t(project.statusKey))} px-4 py-2 text-xs font-semibold tracking-widest uppercase shadow-lg`}
                    >
                      {t(project.statusKey)}
                    </span>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-[#A68966]" />
                      <span className="text-sm text-[#A68966] tracking-wider uppercase">{project.location}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
