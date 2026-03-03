import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageContent, useIntelligenceFeatures } from '../hooks/useProjects';
import Footer from '../components/Footer';

export default function Intelligence() {
  const { language } = useLanguage();
  const { content, loading: contentLoading } = usePageContent('intelligence');
  const { features, loading: featuresLoading } = useIntelligenceFeatures();

  const getContent = (key: string, fallback: string = '') => {
    const item = content[key];
    if (!item) return fallback;
    return language === 'en' && item.content_en ? item.content_en : item.content;
  };

  const getIconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon || Icons.Box;
  };

  const getFeatureGradient = (index: number) => {
    const gradients = [
      { from: 'from-blue-500', to: 'to-cyan-600', glow: 'shadow-blue-500/50', bg: 'from-blue-500/10' },
      { from: 'from-amber-500', to: 'to-orange-600', glow: 'shadow-amber-500/50', bg: 'from-amber-500/10' },
      { from: 'from-emerald-500', to: 'to-teal-600', glow: 'shadow-emerald-500/50', bg: 'from-emerald-500/10' },
      { from: 'from-[#A68966]', to: 'to-[#8F7555]', glow: 'shadow-[#A68966]/50', bg: 'from-[#A68966]/10' },
    ];
    return gradients[index % gradients.length];
  };

  if (contentLoading || featuresLoading) {
    return (
      <div className="bg-[#0A0F1C] min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0D1424]/95 to-[#0A0F1C]" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A68966' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A68966]/10 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-8 px-8 py-3 border border-[#A68966]/40 rounded-full bg-[#A68966]/10 backdrop-blur-md"
          >
            <span className="text-sm tracking-[0.4em] uppercase text-[#A68966] font-bold">
              {getContent('hero_badge', 'INTELLIGENCE')}
            </span>
          </motion.div>

          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {getContent('hero_title', 'Travelli Intelligence')}
          </h1>

          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-[#A68966] to-transparent mx-auto mb-10" />

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            {getContent('hero_subtitle', 'Tecnologia nativa per il lusso contemporaneo')}
          </p>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#A68966]/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-[#A68966] rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0F1C] via-[#0D1424] to-[#0A0F1C]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6 px-6 py-2 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-sm tracking-[0.3em] uppercase text-blue-400 font-semibold">
                {getContent('section_badge', 'NATIVO')}
              </span>
            </div>

            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              {getContent('section_description', 'L\'intelligenza integrata che definisce il futuro dell\'ospitalità')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 px-6 lg:px-12 bg-[#0A0F1C]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A68966] rounded-full filter blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {getContent('features_title', 'I Quattro Pilastri')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = getIconComponent(feature.icon);
              const gradient = getFeatureGradient(index);
              const title = language === 'en' && feature.title_en ? feature.title_en : feature.title;
              const description = language === 'en' && feature.description_en ? feature.description_en : feature.description;

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.bg} to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#A68966]/50 transition-all duration-500 h-full">
                    <div className={`w-20 h-20 mb-8 bg-gradient-to-br ${gradient.from} ${gradient.to} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${gradient.glow}`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#0D1424]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A68966]/5 rounded-full filter blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {getContent('cta_text', 'Scopri come Travelli Intelligence può trasformare i tuoi progetti')}
          </h2>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#A68966] to-[#8F7555] rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-50" />
              <button className="relative px-12 py-5 bg-gradient-to-r from-[#A68966] to-[#8F7555] text-white font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-[#A68966]/50 transition-all duration-500 border border-[#A68966]/50">
                {getContent('cta_button', 'Contattaci')}
              </button>
            </div>
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
