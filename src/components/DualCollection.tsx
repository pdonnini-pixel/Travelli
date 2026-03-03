import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageContent, useProjects } from '../hooks/useProjects';
import { Link } from 'react-router-dom';

export default function DualCollection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const { content, loading: contentLoading } = usePageContent('home');
  const { projects, loading: projectsLoading } = useProjects();

  const getContent = (key: string, fallback: string) => {
    const item = content[key];
    if (!item) return fallback;
    return language === 'en' && item.content_en ? item.content_en : item.content_it;
  };

  const prestigeProject = projects.find(p => p.collection === 'prestige' && p.is_featured);
  const urbanProject = projects.find(p => p.collection === 'urban' && p.is_featured);

  const prestigeImage = prestigeProject?.image_url || 'https://i.postimg.cc/D0pKqVpG/il-pratello.jpg';
  const urbanImage = urbanProject?.image_url || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop';

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
            backgroundImage: `url(${prestigeImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex flex-col justify-center px-12 lg:px-20 py-24">
          <div className="max-w-lg">
            <h3 className="text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
              {getContent('signature_title', 'PRESTIGE')}
            </h3>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              {getContent('signature_desc', 'Lusso senza compromessi, dove ogni dettaglio è curato per offrire un\'esperienza abitativa esclusiva')}
            </p>
            <div className="flex items-center space-x-2 mb-8 px-4 py-2 bg-[#A68966]/20 border border-[#A68966]/50 rounded-full w-fit backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-[#A68966]" />
              <span className="text-[#A68966] text-sm font-semibold">
                {getContent('tech_badge', 'AI-Enhanced Living')}
              </span>
            </div>
            <Link
              to="/signature"
              className="bg-bronze-metallic bg-bronze-metallic-hover text-white px-8 py-4 transition-all duration-300 flex items-center space-x-2 group/btn w-fit"
            >
              <span className="tracking-wider uppercase text-sm">{getContent('signature_cta', 'Scopri Prestige')}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
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
            backgroundImage: `url(${urbanImage})`,
          }}
        >
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="relative h-full flex flex-col justify-center px-12 lg:px-20 py-24">
          <div className="max-w-lg">
            <h3 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
              {getContent('urban_title', 'LIVING')}
            </h3>
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              {getContent('urban_desc', 'Vita contemporanea nel cuore della città, progettata per chi cerca dinamismo e comfort')}
            </p>
            <div className="flex items-center space-x-2 mb-8 px-4 py-2 bg-[#A68966]/10 border border-[#A68966]/60 rounded-full w-fit backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-[#A68966]" />
              <span className="text-[#A68966] text-sm font-semibold">
                {getContent('tech_badge', 'AI-Enhanced Living')}
              </span>
            </div>
            <Link
              to="/urban"
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 flex items-center space-x-2 group/btn w-fit"
            >
              <span className="tracking-wider uppercase text-sm">{getContent('urban_cta', 'Scopri Urban Flow')}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
