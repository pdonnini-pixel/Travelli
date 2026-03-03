import { motion } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&q=80)',
            filter: 'grayscale(40%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('about.title')}
          </h1>
          <div className="h-1 w-32 bg-[#A68966] mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            {t('about.intro')}
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#A68966] mr-4" />
                <span className="text-sm tracking-widest uppercase text-[#A68966]">
                  LA NOSTRA MISSIONE
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Costruiamo Valore Duraturo
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('about.mission')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.approach')}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#A68966]/20 to-transparent rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Travelli Development"
                className="relative rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {t('about.valuesTitle')}
            </h3>
            <div className="h-1 w-24 bg-[#A68966] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-[#A68966]/50 transition-all hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Eccellenza
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t('about.value1')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-[#A68966]/50 transition-all hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Innovazione
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t('about.value2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-[#A68966]/50 transition-all hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Trasparenza
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t('about.value3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-[#A68966]/50 transition-all hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Sostenibilità
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t('about.value4')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-[#A68966] mr-4" />
              <span className="text-sm tracking-widest uppercase text-[#A68966]">
                LEADERSHIP
              </span>
              <div className="h-px w-16 bg-[#A68966] ml-4" />
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              La Famiglia Travelli
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un organico di 50 dipendenti diretti dedicati all'eccellenza
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#A68966]/5 via-white to-white p-8 rounded-xl border-2 border-[#A68966]/30 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center ring-4 ring-[#A68966]/20">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                {t('method.board.roberto.name')}
              </h3>
              <p className="text-[#A68966] font-bold mb-4 tracking-wider uppercase text-sm">
                {t('method.board.roberto.title')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('method.board.roberto.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#A68966]/5 via-white to-white p-8 rounded-xl border-2 border-[#A68966]/30 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[#A68966]/20">
                <img
                  src="https://i.postimg.cc/C5rFH0yK/Enrico-Travelli.jpg"
                  alt="Enrico Travelli"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                {t('method.board.enrico.name')}
              </h3>
              <p className="text-[#A68966] font-bold mb-4 tracking-wider uppercase text-sm">
                {t('method.board.enrico.title')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('method.board.enrico.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#A68966]/5 via-white to-white p-8 rounded-xl border-2 border-[#A68966]/30 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center ring-4 ring-[#A68966]/20">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                {t('method.board.elisa.name')}
              </h3>
              <p className="text-[#A68966] font-bold mb-4 tracking-wider uppercase text-sm">
                {t('method.board.elisa.title')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('method.board.elisa.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-[#A68966] mr-4" />
              <span className="text-sm tracking-widest uppercase text-[#A68966]">
                {t('method.structure.label')}
              </span>
              <div className="h-px w-16 bg-[#A68966] ml-4" />
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('method.structure.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('method.structure.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('method.structure.desc1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('method.structure.desc2')}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#A68966]/20 to-transparent rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Team at work"
                className="relative rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-[#A68966]/50 transition-colors"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                {t('method.structure.benefit1')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('method.structure.benefit1.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-[#A68966]/50 transition-colors"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                {t('method.structure.benefit2')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('method.structure.benefit2.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-[#A68966]/50 transition-colors"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                {t('method.structure.benefit3')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('method.structure.benefit3.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-[#A68966] mr-4" />
              <span className="text-sm tracking-widest uppercase text-[#A68966]">
                I NUMERI
              </span>
              <div className="h-px w-16 bg-[#A68966] ml-4" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Travelli in Cifre
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-5xl font-bold text-[#A68966] mb-4">30+</div>
              <div className="text-xl font-semibold text-[#1A1A1A] mb-2">Anni di Esperienza</div>
              <p className="text-gray-600">Dal 1994 nel settore immobiliare</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-5xl font-bold text-[#A68966] mb-4">50</div>
              <div className="text-xl font-semibold text-[#1A1A1A] mb-2">Dipendenti Diretti</div>
              <p className="text-gray-600">Team interno stabile e dedicato</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-5xl font-bold text-[#A68966] mb-4">100%</div>
              <div className="text-xl font-semibold text-[#1A1A1A] mb-2">Consegne in Tempo</div>
              <p className="text-gray-600">Garanzia di qualità e puntualità</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/95 to-[#1A1A1A]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Costruiamo insieme il tuo futuro
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Dalla tradizione artigianale all'innovazione tecnologica, ogni progetto Travelli è un'opera d'eccellenza progettata per durare nel tempo.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
