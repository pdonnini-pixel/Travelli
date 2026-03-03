import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Home, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useProjects } from '../hooks/useProjects';

const FALLBACK_PROJECTS = [
  {
    id: '1',
    name: 'Villa il Pratello',
    slug: 'villa-il-pratello',
    location: 'Firenze',
    status: 'Completato',
    description: 'Una dimora storica del XVIII secolo completamente rinnovata, che unisce il fascino dell\'architettura classica toscana con comfort e tecnologie moderne.',
    tagline: 'Eleganza Storica',
    image_url: 'https://i.postimg.cc/D0pKqVpG/il-pratello.jpg',
    typology: 'Villa Storica',
    surface_area: '650 mq',
  },
  {
    id: '2',
    name: 'Casa Beccari',
    slug: 'casa-beccari',
    location: 'Firenze',
    status: 'In Vendita',
    description: 'Residenza esclusiva nel cuore di Firenze, dove l\'arte incontra il design contemporaneo. Ogni dettaglio è stato curato per offrire un\'esperienza abitativa unica.',
    tagline: 'Design Contemporaneo',
    image_url: 'https://i.postimg.cc/sxXkf6fs/Beccari.jpg',
    typology: 'Residenza Urbana',
    surface_area: '320 mq',
  },
];

export default function SignatureCollection() {
  const { t, language } = useLanguage();
  const { projects: dbProjects, loading, error } = useProjects('prestige');

  const projects = error || dbProjects.length === 0 ? FALLBACK_PROJECTS : dbProjects;

  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://i.postimg.cc/BnXn7px0/firenze-per-travelli.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#1A1A1A]" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-6xl md:text-7xl lg:text-8xl font-light text-[#A68966] mb-6 tracking-[0.2em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('signature.title')}
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="text-2xl md:text-3xl lg:text-4xl text-white/80 italic font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('signature.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <p
              className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('signature.intro')}
            </p>
          </motion.div>

          {loading ? (
            <div className="space-y-32">
              {[1, 2].map((i) => (
                <div key={i} className="grid md:grid-cols-2 gap-12 items-center animate-pulse">
                  <div className="relative h-[500px] bg-white/5 rounded" />
                  <div className="space-y-6">
                    <div className="h-8 bg-white/5 rounded w-1/3" />
                    <div className="h-16 bg-white/5 rounded w-3/4" />
                    <div className="h-32 bg-white/5 rounded" />
                    <div className="h-6 bg-white/5 rounded w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-white/40 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                {language === 'en' ? 'No projects available at the moment' : 'Nessun progetto disponibile al momento'}
              </p>
            </div>
          ) : (
            <div className="space-y-32">
              {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                const projectName = language === 'en' && project.name_en ? project.name_en : project.name;
                const projectLocation = language === 'en' && project.location_en ? project.location_en : project.location;
                const projectDescription = language === 'en' && project.description_en ? project.description_en : project.description;
                const projectTagline = language === 'en' && project.tagline_en ? project.tagline_en : project.tagline;
                const projectStatus = language === 'en' && project.status_en ? project.status_en : project.status;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div className={`relative h-[500px] overflow-hidden group ${!isEven ? 'md:order-2' : ''}`}>
                      <img
                        src={project.image_url}
                        alt={projectName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className={`space-y-6 ${!isEven ? 'md:order-1' : ''}`}>
                      {projectTagline && (
                        <div className="inline-block px-4 py-1 bg-[#A68966]/20 border border-[#A68966] mb-4">
                          <span className="text-[#A68966] text-sm tracking-widest uppercase">{projectTagline}</span>
                        </div>
                      )}

                      <h2
                        className="text-5xl lg:text-6xl text-[#A68966] font-light tracking-wider"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {projectName.toUpperCase()}
                      </h2>

                      {projectStatus && (
                        <div className="inline-flex items-center px-4 py-2 bg-[#A68966]/10 border border-[#A68966]/40 rounded-full">
                          <span className="text-[#A68966] text-sm font-medium">{projectStatus}</span>
                        </div>
                      )}

                      <p className="text-xl text-white/70 leading-relaxed">
                        {projectDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-white/50">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm tracking-widest uppercase">{projectLocation}</span>
                        </div>
                        {project.typology && (
                          <div className="flex items-center space-x-2">
                            <Home className="w-4 h-4" />
                            <span className="text-sm">{project.typology}</span>
                          </div>
                        )}
                        {project.surface_area && (
                          <div className="flex items-center space-x-2">
                            <Maximize className="w-4 h-4" />
                            <span className="text-sm">{project.surface_area}</span>
                          </div>
                        )}
                      </div>

                      <Link
                        to="/contact"
                        state={{ project: projectName }}
                        className="inline-flex items-center space-x-2 bg-[#A68966] text-white px-8 py-4 hover:bg-[#8B6F4E] transition-all duration-300 group/btn mt-4"
                      >
                        <span className="tracking-wider uppercase text-sm">
                          {language === 'en' ? 'Request Information' : 'Richiedi Informazioni'}
                        </span>
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-24 text-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-3 bg-[#A68966] text-white px-12 py-5 hover:bg-[#8B6F4E] transition-all duration-500 tracking-widest text-sm uppercase"
            >
              <span>{t('signature.cta')}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="mt-8 text-white/40 text-sm tracking-wider">
              {t('signature.appointment')}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
