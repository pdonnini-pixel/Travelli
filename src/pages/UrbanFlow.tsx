import { motion } from 'framer-motion';
import { Leaf, Wifi, Bike, ArrowRight, MapPin, Home, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useProjects } from '../hooks/useProjects';

const FALLBACK_PROJECTS = [
  {
    id: '1',
    name: 'Il Borgo Impruneta',
    slug: 'il-borgo-impruneta',
    location: 'Impruneta (FI)',
    status: 'In Consegna 2026',
    description: 'Un complesso residenziale innovativo che unisce la tradizione del borgo toscano con le più moderne tecnologie smart home.',
    tagline: 'Living Sostenibile',
    image_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    typology: 'Residenziale Misto',
    surface_area: 'Da 80 a 250 mq',
  },
];

export default function UrbanFlow() {
  const { t, language } = useLanguage();
  const { projects: dbProjects, loading, error } = useProjects('urban');

  const projects = error || dbProjects.length === 0 ? FALLBACK_PROJECTS : dbProjects;

  const features = [
    {
      icon: Leaf,
      titleKey: 'urban.feature.sustainability',
      descKey: 'urban.feature.sustainability.desc',
    },
    {
      icon: Wifi,
      titleKey: 'urban.feature.smart',
      descKey: 'urban.feature.smart.desc',
    },
    {
      icon: Bike,
      titleKey: 'urban.feature.mobility',
      descKey: 'urban.feature.mobility.desc',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2400&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight">
              {t('urban.title')}
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light">
              {t('urban.subtitle')}
            </p>

            <div className="pt-8">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-[#4682B4] text-[#4682B4] hover:bg-[#4682B4] hover:text-white transition-all duration-300 font-medium tracking-wider"
                >
                  <span>{t('urban.cta')}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Contemporary Residences' : 'Residenze Contemporanee'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('urban.section.subtitle')}
            </p>
          </motion.div>

          {loading ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white overflow-hidden shadow-2xl animate-pulse">
                  <div className="h-96 bg-gray-200" />
                  <div className="p-10 space-y-6">
                    <div className="h-10 bg-gray-200 rounded w-3/4" />
                    <div className="h-6 bg-gray-200 rounded w-1/2" />
                    <div className="h-24 bg-gray-200 rounded" />
                    <div className="h-12 bg-gray-200 rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400 italic">
                {language === 'en' ? 'No projects available at the moment' : 'Nessun progetto disponibile al momento'}
              </p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              {projects.map((project, index) => {
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
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group"
                  >
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={projectName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {projectStatus && (
                        <div className="absolute top-6 right-6 bg-emerald-500 text-white px-6 py-3 text-sm font-bold shadow-lg">
                          {projectStatus}
                        </div>
                      )}
                      {projectTagline && (
                        <div className="absolute top-6 left-6 bg-[#4682B4] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                          {projectTagline}
                        </div>
                      )}
                    </div>

                    <div className="p-10 space-y-6">
                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-3">
                          {projectName}
                        </h3>
                        <div className="flex items-center space-x-2 text-[#4682B4] font-semibold text-lg">
                          <MapPin className="w-5 h-5" />
                          <span className="tracking-wide">{projectLocation}</span>
                        </div>
                      </div>

                      <p className="text-xl text-gray-600 leading-relaxed">
                        {projectDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-gray-500">
                        {project.typology && (
                          <div className="flex items-center space-x-2">
                            <Home className="w-5 h-5" />
                            <span className="text-sm font-medium">{project.typology}</span>
                          </div>
                        )}
                        {project.surface_area && (
                          <div className="flex items-center space-x-2">
                            <Maximize className="w-5 h-5" />
                            <span className="text-sm font-medium">{project.surface_area}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-6">
                        <Link
                          to="/contact"
                          state={{ project: projectName }}
                          className="inline-flex items-center space-x-3 px-8 py-4 bg-[#4682B4] text-white hover:bg-[#365F8C] transition-all duration-300 font-semibold tracking-wider shadow-lg hover:shadow-xl"
                        >
                          <span>{language === 'en' ? 'Request Information' : 'Richiedi Informazioni'}</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('urban.concept.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('urban.concept.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4682B4] text-white rounded-full">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 px-10 py-4 border-2 border-[#4682B4] text-[#4682B4] hover:bg-[#4682B4] hover:text-white transition-all duration-300 text-lg font-semibold tracking-wider"
            >
              <span>{t('urban.visit.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
