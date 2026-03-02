import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function SignatureCollection() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://i.postimg.cc/BnXn7px0/firenze-per-travelli.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#1A1A1A]" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-6xl md:text-7xl lg:text-8xl font-light text-[#A68966] mb-6 tracking-[0.2em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('signature.title')}
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="text-2xl md:text-3xl lg:text-4xl text-white/80 italic font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('signature.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <p
              className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('signature.intro')}
            </p>
          </motion.div>

          <div className="space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-[500px] overflow-hidden group">
                <img
                  src="https://i.postimg.cc/D0pKqVpG/il-pratello.jpg"
                  alt="Villa il Pratello"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-[#A68966]/20 border border-[#A68966] mb-4">
                  <span className="text-[#A68966] text-sm tracking-widest uppercase">{t('projects.villa.tagline')}</span>
                </div>
                <h2
                  className="text-5xl lg:text-6xl text-[#A68966] font-light tracking-wider"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  VILLA IL PRATELLO
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {t('projects.villa.desc')}
                </p>
                <div className="flex items-center space-x-4 text-white/50">
                  <span className="text-sm tracking-widest uppercase">Firenze</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6 md:order-1">
                <div className="inline-block px-4 py-1 bg-[#A68966]/20 border border-[#A68966] mb-4">
                  <span className="text-[#A68966] text-sm tracking-widest uppercase">{t('projects.casa.tagline')}</span>
                </div>
                <h2
                  className="text-5xl lg:text-6xl text-[#A68966] font-light tracking-wider"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  CASA BECCARI
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {t('projects.casa.desc')}
                </p>
                <div className="flex items-center space-x-4 text-white/50">
                  <span className="text-sm tracking-widest uppercase">Firenze</span>
                </div>
              </div>

              <div className="relative h-[500px] overflow-hidden group md:order-2">
                <img
                  src="https://i.postimg.cc/sxXkf6fs/Beccari.jpg"
                  alt="Casa Beccari"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-24 text-center"
          >
            <button className="group inline-flex items-center space-x-3 bg-[#A68966] text-white px-12 py-5 hover:bg-[#8B6F4E] transition-all duration-500 tracking-widest text-sm uppercase">
              <span>{t('signature.cta')}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-8 text-white/40 text-sm tracking-wider">
              {t('signature.appointment')}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
