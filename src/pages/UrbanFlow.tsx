import { motion } from 'framer-motion';
import { Leaf, Wifi, Bike, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function UrbanFlow() {
  const { t } = useLanguage();

  const projects = [
    {
      name: 'IL BORGO IMPRUNETA',
      location: 'Impruneta (FI)',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      statusKey: 'projects.borgo.tagline',
      descKey: 'projects.borgo.desc',
    },
  ];

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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-[#4682B4] text-[#4682B4] hover:bg-[#4682B4] hover:text-white transition-all duration-300 font-medium tracking-wider"
              >
                <span>{t('urban.cta')}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
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
              {t('urban.section.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('urban.section.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 right-6 bg-emerald-500 text-white px-6 py-3 text-sm font-bold shadow-lg">
                    {t(project.statusKey)}
                  </div>
                </div>

                <div className="p-10 space-y-6">
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-[#4682B4] font-semibold text-lg tracking-wide">
                      {project.location}
                    </p>
                  </div>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    {t(project.descKey)}
                  </p>

                  <div className="pt-6">
                    <button className="inline-flex items-center space-x-3 px-8 py-4 bg-[#4682B4] text-white hover:bg-[#365F8C] transition-all duration-300 font-semibold tracking-wider shadow-lg hover:shadow-xl">
                      <span>{t('urban.project.cta')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <button className="inline-flex items-center space-x-3 px-10 py-4 border-2 border-[#4682B4] text-[#4682B4] hover:bg-[#4682B4] hover:text-white transition-all duration-300 text-lg font-semibold tracking-wider">
              <span>{t('urban.visit.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
