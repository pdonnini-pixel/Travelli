import { motion } from 'framer-motion';
import { Smartphone, Brain, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TravelliIntelligenceSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-[#0A0F1C] via-[#0D1424] to-[#111827]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/95 via-[#0D1424]/90 to-[#111827]/95" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A68966] rounded-full filter blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 border border-[#A68966]/30 rounded-full bg-[#A68966]/10 backdrop-blur-sm">
              <span className="text-sm tracking-[0.3em] uppercase text-[#A68966] font-semibold">
                Tecnologia Proprietaria
              </span>
            </div>
          </motion.div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('intelligence.title')}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('intelligence.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#A68966]/50 transition-all duration-500">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('intelligence.card1.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('intelligence.card1.desc')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#A68966]/50 transition-all duration-500">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('intelligence.card2.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('intelligence.card2.desc')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A68966]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#A68966]/50 transition-all duration-500">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#A68966] to-[#8F7555] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('intelligence.card3.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('intelligence.card3.desc')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="/intelligence"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#A68966] to-[#8F7555] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#A68966]/30 transition-all duration-500 group text-lg font-semibold"
          >
            <span>{t('intelligence.cta')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
