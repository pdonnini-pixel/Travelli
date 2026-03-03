import { motion } from 'framer-motion';
import { ChevronDown, Cpu, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageContent } from '../hooks/useProjects';

export default function Hero() {
  const { language } = useLanguage();
  const { content, loading } = usePageContent('home');

  const getContent = (key: string, fallback: string) => {
    const item = content[key];
    if (!item) return fallback;
    return language === 'en' && item.content_en ? item.content_en : item.content_it;
  };

  return (
    <section id="home" className="relative min-h-[60vh] md:h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative min-h-[60vh] md:h-screen flex flex-col items-center justify-center text-center px-6 py-12">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl text-white/95 italic font-light mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {getContent('hero_title', 'Dove Innovazione e Tradizione si Incontrano')}
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 px-6 py-3 bg-white/10 backdrop-blur-md border border-[#A68966]/50 rounded-full flex items-center space-x-3 shadow-2xl shadow-[#A68966]/20"
        >
          <Cpu className="w-5 h-5 text-[#A68966]" />
          <span className="text-[#A68966] font-semibold tracking-wider text-sm uppercase">
            {getContent('hero_badge', 'Powered by Travelli Intelligence')}
          </span>
          <Sparkles className="w-5 h-5 text-[#A68966]" />
        </motion.div>

        <motion.a
          href="#signature"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="group border-2 border-white/50 text-white px-8 py-4 hover:border-[#A68966] hover:text-[#A68966] transition-all duration-300 tracking-widest text-sm uppercase"
        >
          {getContent('hero_cta', 'Esplora i Progetti')}
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12"
        >
          <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
