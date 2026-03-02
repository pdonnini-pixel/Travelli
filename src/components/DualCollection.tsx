import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DualCollection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="grid md:grid-cols-2 min-h-screen">
      <motion.div
        id="signature"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative bg-[#1A1A1A] overflow-hidden group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              'url(https://i.postimg.cc/K8fqs7DT/Travelli_home_signature.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex flex-col justify-center px-12 lg:px-20 py-24">
          <div className="max-w-lg">
            <h3 className="text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('collection.signature.title')}
            </h3>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              {t('collection.signature.desc')}
            </p>
            <div className="flex items-center space-x-2 mb-8 px-4 py-2 bg-[#A68966]/20 border border-[#A68966]/50 rounded-full w-fit backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-[#A68966]" />
              <span className="text-[#A68966] text-sm font-semibold">
                {t('collection.techBadge')}
              </span>
            </div>
            <button className="bg-bronze-metallic bg-bronze-metallic-hover text-white px-8 py-4 transition-all duration-300 flex items-center space-x-2 group/btn">
              <span className="tracking-wider uppercase text-sm">{t('collection.signature.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        id="urban"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative bg-[#F2F2F2] overflow-hidden group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              'url(https://i.postimg.cc/c17Qmxmx/Travelli_Rosai_Urban.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="relative h-full flex flex-col justify-center px-12 lg:px-20 py-24">
          <div className="max-w-lg">
            <h3 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('collection.urban.title')}
            </h3>
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              {t('collection.urban.desc')}
            </p>
            <div className="flex items-center space-x-2 mb-8 px-4 py-2 bg-[#A68966]/10 border border-[#A68966]/60 rounded-full w-fit backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-[#A68966]" />
              <span className="text-[#A68966] text-sm font-semibold">
                {t('collection.techBadge')}
              </span>
            </div>
            <button className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 flex items-center space-x-2 group/btn">
              <span className="tracking-wider uppercase text-sm">{t('collection.urban.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
