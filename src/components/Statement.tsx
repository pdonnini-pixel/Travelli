import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageContent } from '../hooks/useProjects';

export default function Statement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { language } = useLanguage();
  const { content, loading } = usePageContent('home');

  const getContent = (key: string, fallback: string) => {
    const item = content[key];
    if (!item) return fallback;
    return language === 'en' && item.content_en ? item.content_en : item.content;
  };

  if (loading) {
    return (
      <section className="bg-[#1A1A1A] py-16 md:py-32 px-6">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="w-12 h-12 border-4 border-[#A68966]/30 border-t-[#A68966] rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="bg-[#1A1A1A] py-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl lg:text-5xl text-white/90 text-center leading-relaxed font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {getContent('statement', 'Trasformiamo spazi urbani in esperienze di vita uniche, dove ogni dettaglio racconta una storia di eccellenza')}
        </motion.p>
      </div>
    </section>
  );
}
