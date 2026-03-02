import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, Building2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const steps = [
  {
    icon: Search,
    titleKey: 'method.acquisition',
    descKey: 'method.acquisition.desc',
  },
  {
    icon: PenTool,
    titleKey: 'method.design',
    descKey: 'method.design.desc',
  },
  {
    icon: Building2,
    titleKey: 'method.construction',
    descKey: 'method.construction.desc',
  },
  {
    icon: TrendingUp,
    titleKey: 'method.management',
    descKey: 'method.management.desc',
  },
];

export default function Method() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="metodo" ref={ref} className="py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-6xl font-bold text-center mb-4 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t('method.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/70 mb-20 text-lg max-w-3xl mx-auto"
        >
          {t('method.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 border-2 border-[#A68966] flex items-center justify-center group-hover:bg-[#A68966] transition-colors duration-300">
                    <Icon className="w-10 h-10 text-[#A68966] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t(step.titleKey)}
                </h3>
                <p className="text-white/70 leading-relaxed">{t(step.descKey)}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block border-t border-[#A68966] pt-8">
            <p className="text-white/60 text-sm tracking-widest uppercase mb-2">{t('method.since')}</p>
            <p className="text-5xl font-bold text-[#A68966]" style={{ fontFamily: "'Playfair Display', serif" }}>
              €250M+
            </p>
            <p className="text-white/70 mt-2">{t('method.value')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
