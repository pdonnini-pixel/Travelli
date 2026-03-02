import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Statement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-[#1A1A1A] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl lg:text-5xl text-white/90 text-center leading-relaxed font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t('home.intro')}
        </motion.p>
      </div>
    </section>
  );
}
