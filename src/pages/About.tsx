import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-white mb-12 tracking-wide"
          >
            {t('about.title')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 text-white/80 text-lg leading-relaxed"
          >
            <p>
              {t('about.intro')}
            </p>

            <p>
              {t('about.mission')}
            </p>

            <p>
              {t('about.approach')}
            </p>

            <div className="pt-12">
              <h2 className="text-3xl font-light text-[#A68966] mb-6">
                {t('about.valuesTitle')}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#A68966] mr-3">•</span>
                  <span>{t('about.value1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A68966] mr-3">•</span>
                  <span>{t('about.value2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A68966] mr-3">•</span>
                  <span>{t('about.value3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A68966] mr-3">•</span>
                  <span>{t('about.value4')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
