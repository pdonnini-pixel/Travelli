import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mb-6 hover:opacity-80 transition-opacity duration-300 cursor-pointer inline-block"
            >
              <span className="font-sans font-bold tracking-[0.15em] uppercase text-white text-xl">
                TRAVELLI
              </span>
            </Link>
            <div className="text-white/60 leading-relaxed mb-6 space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+del+Fornaccio+40+Vallina+50012+Bagno+a+Ripoli+Firenze"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#A68966] transition-colors"
              >
                Via del Fornaccio, 40 – loc. Vallina
                <br />
                50012 Bagno a Ripoli – Firenze
              </a>
              <div className="space-y-1">
                <a
                  href="tel:+390556802423"
                  className="block hover:text-[#A68966] transition-colors"
                >
                  T. 055 6802423
                </a>
                <a
                  href="tel:+393291294978"
                  className="block hover:text-[#A68966] transition-colors"
                >
                  M. 329 1294978
                </a>
              </div>
              <a
                href="mailto:info@travellisrl.com"
                className="block hover:text-[#A68966] transition-colors"
              >
                info@travellisrl.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-[#A68966] bg-bronze-metallic-hover transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-[#A68966] bg-bronze-metallic-hover transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-[#A68966] bg-bronze-metallic-hover transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide uppercase text-[#A68966]">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/signature" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('nav.signature')}
                </Link>
              </li>
              <li>
                <Link to="/urban" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('nav.urban')}
                </Link>
              </li>
              <li>
                <Link to="/track-record" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('nav.trackrecord')}
                </Link>
              </li>
              <li>
                <Link to="/intelligence" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('nav.intelligence')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide uppercase text-[#A68966]">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/method" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('nav.method')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-white/60 hover:text-[#A68966] transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide uppercase text-[#A68966]">Market Insights</h4>
            <p className="text-white/60 mb-4 text-sm">
              {t('footer.insights')}
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#A68966] transition-colors"
              />
              <button
                type="submit"
                className="bg-bronze-metallic bg-bronze-metallic-hover text-white px-4 py-3 transition-colors flex items-center justify-center space-x-2 group"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm tracking-wider uppercase">{t('footer.subscribe')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              © 2026 Travelli SRL - Real Estate Development. {t('footer.vat')} 05411100489
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/40 hover:text-[#A68966] transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-white/40 hover:text-[#A68966] transition-colors">
                {t('footer.cookies')}
              </a>
              <a href="#" className="text-white/40 hover:text-[#A68966] transition-colors">
                {t('footer.legal')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
