import { motion } from 'framer-motion';
import { Users, Award, CheckCircle2, Shield, TrendingUp, Search, Pencil, Hammer, BadgeDollarSign, Building2, ClipboardCheck, ShoppingCart, PenTool, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

export default function Method() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      <section className="relative min-h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80)',
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
            {t('method.hero.title')}
          </h1>
          <div className="h-1 w-32 bg-[#A68966] mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            {t('method.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="py-12 md:py-24 px-6 lg:px-12 bg-white">
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
                {t('method.governance.label')}
              </span>
              <div className="h-px w-16 bg-[#A68966] ml-4" />
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('method.governance.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('method.board.subtitle')}
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

      <section className="py-12 md:py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
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
                {t('method.team.label')}
              </span>
              <div className="h-px w-16 bg-[#A68966] ml-4" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('method.team.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('method.team.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg border border-gray-300 hover:border-[#A68966]/50 transition-all hover:shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {t('method.team.coo.title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('method.team.coo.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-300 hover:border-[#A68966]/50 transition-all hover:shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {t('method.team.pm.title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('method.team.pm.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg border border-gray-300 hover:border-[#A68966]/50 transition-all hover:shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {t('method.team.sales.title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('method.team.sales.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-lg border border-gray-300 hover:border-[#A68966]/50 transition-all hover:shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {t('method.team.procurement.title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('method.team.procurement.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg border border-gray-300 hover:border-[#A68966]/50 transition-all hover:shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {t('method.team.design.title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('method.team.design.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-lg border border-gray-300 hover:border-[#A68966]/50 transition-all hover:shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {t('method.team.safety.title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('method.team.safety.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-6 lg:px-12 bg-white">
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

      <section className="py-12 md:py-24 px-6 lg:px-12 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
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
                {t('method.process.label')}
              </span>
              <div className="h-px w-16 bg-[#A68966] ml-4" />
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('method.process.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('method.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('method.process.step1')}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t('method.process.step1.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <Pencil className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('method.process.step2')}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t('method.process.step2.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('method.process.step3')}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t('method.process.step3.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#A68966] to-[#8B7355] rounded-full flex items-center justify-center">
                <BadgeDollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('method.process.step4')}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t('method.process.step4.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
