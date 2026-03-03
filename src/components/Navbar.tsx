import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      return;
    }

    rafRef.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToFooter = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const footer = document.getElementById('footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const footer = document.getElementById('footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: t('nav.signature'), href: '/signature' },
    { name: t('nav.urban'), href: '/urban' },
    { name: t('nav.trackrecord'), href: '/track-record' },
    { name: t('nav.intelligence'), href: '/intelligence', highlight: true },
    { name: t('nav.method'), href: '/method' },
    { name: t('nav.about'), href: '/about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transform-gpu will-change-transform transition-all duration-500 ease-out ${
          isScrolled ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'
          }`}>
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity duration-300 z-10"
            >
              <span className={`font-sans font-bold tracking-[0.15em] uppercase text-white transition-all duration-500 ease-out ${
                isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'
              }`}>
                TRAVELLI
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm hover:text-[#A68966] transition-colors duration-300 ease-out tracking-wider uppercase ${
                    location.pathname === link.href ? 'text-[#A68966]' : 'text-white/80'
                  } ${link.highlight ? 'font-bold text-[#A68966] drop-shadow-[0_0_8px_rgba(166,137,102,0.5)]' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={scrollToFooter}
                className="text-sm hover:text-[#A68966] transition-colors duration-300 ease-out tracking-wider uppercase text-white/80"
              >
                {t('nav.contact')}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('IT')}
                  className={`text-sm px-2 py-1 transition-colors duration-300 ease-out ${
                    language === 'IT' ? 'text-[#A68966] font-semibold' : 'text-white/60'
                  }`}
                >
                  IT
                </button>
                <span className="text-white/40">|</span>
                <button
                  onClick={() => setLanguage('EN')}
                  className={`text-sm px-2 py-1 transition-colors duration-300 ease-out ${
                    language === 'EN' ? 'text-[#A68966] font-semibold' : 'text-white/60'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 hover:text-[#A68966] transition-colors duration-300 ease-out z-10"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-[#1A1A1A] z-40 md:hidden transform-gpu will-change-transform"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              <Link
                to="/"
                className="text-[#A68966] text-3xl font-light tracking-wider uppercase hover:text-white transition-colors duration-300 ease-out"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-3xl font-light tracking-wider uppercase transition-colors duration-300 ease-out ${
                    location.pathname === link.href ? 'text-white' : 'text-[#A68966] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={scrollToFooter}
                className="text-[#A68966] text-3xl font-light tracking-wider uppercase hover:text-white transition-colors duration-300 ease-out"
              >
                {t('nav.contact')}
              </button>

              <div className="flex items-center space-x-4 pt-8">
                <button
                  onClick={() => setLanguage('IT')}
                  className={`text-lg px-3 py-2 transition-colors duration-300 ease-out ${
                    language === 'IT' ? 'text-white font-semibold' : 'text-[#A68966]'
                  }`}
                >
                  IT
                </button>
                <span className="text-[#A68966]">|</span>
                <button
                  onClick={() => setLanguage('EN')}
                  className={`text-lg px-3 py-2 transition-colors duration-300 ease-out ${
                    language === 'EN' ? 'text-white font-semibold' : 'text-[#A68966]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
