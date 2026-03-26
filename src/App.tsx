/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GuestSelector from './components/GuestSelector';
import { 
  Wifi, 
  Coffee, 
  Waves, 
  ShieldCheck, 
  Wind, 
  Utensils, 
  GlassWater,
  Calendar,
  Users,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Globe
} from 'lucide-react';

// --- Placeholder Images ---
// Nota: Reemplaza estas URLs con las rutas de tus imágenes reales subidas al servidor.
const IMAGES = {
  hero: "/hero.jpg",
  room1: "/room1.1.jpg",
  room2: "/room2.jpg",
  pool: "/pool.jpg",
  breakfast: "/breakfast.jpg",
  terrace: "/restaurant.jpg",
  bedroom: "/bedroom.jpg",
  bathroom: "/bathroom.jpg"
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-marbore-light overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <div className="flex items-center gap-2 z-10">
            {/* Logo Icon Mockup */}
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${isScrolled ? 'border-marbore-dark text-marbore-dark' : 'border-white text-white'}`}>
              <span className="font-serif font-bold text-sm">M</span>
            </div>
            <span className={`font-serif text-xl tracking-widest uppercase ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}>
              Marboré
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 w-max">
            {[{key: 'hotel', href: '#el hotel'}, {key: 'rooms', href: '#habitaciones'}, {key: 'services', href: '#servicios'}, {key: 'gallery', href: '#galería'}].map((item) => (
              <a key={item.key} href={item.href} className={`text-sm tracking-widest uppercase hover:text-marbore-gold transition-colors ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}>
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <Link to="/dashboard" className={`text-sm tracking-widest uppercase hover:text-marbore-gold transition-colors ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}>
              {t('nav.dashboard')}
            </Link>
          </div>

          <div className="hidden md:flex items-center z-10 gap-4">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm tracking-widest uppercase hover:text-marbore-gold transition-colors ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}
            >
              <Globe className="w-4 h-4" />
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
            <button className="bg-marbore-gold text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-yellow-600 transition-colors">
              {t('nav.book')}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4 z-10">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm font-bold uppercase hover:text-marbore-gold transition-colors ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}
            >
              <Globe className="w-4 h-4 md:hidden" />
              <span className="sr-only">Toggle Language</span>
            </button>
            <button className="text-white md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className={isScrolled ? 'text-marbore-dark' : 'text-white'} /> : <Menu className={isScrolled ? 'text-marbore-dark' : 'text-white'} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-marbore-light pt-24 px-6 flex flex-col gap-6 md:hidden">
          {[{key: 'hotel', href: '#el hotel'}, {key: 'rooms', href: '#habitaciones'}, {key: 'services', href: '#servicios'}, {key: 'gallery', href: '#galería'}].map((item) => (
            <a key={item.key} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-marbore-dark flex items-center justify-between">
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-marbore-dark">
            {t('nav.dashboard')}
          </Link>
          <button 
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="font-serif text-3xl text-marbore-dark text-left flex items-center gap-4 mt-6"
          >
            <Globe className="w-8 h-8 text-marbore-gold" /> {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={IMAGES.hero} alt="Marboré Hotel Exterior" className="w-full h-full object-cover" />
        </motion.div>
        
        <div className="relative z-20 text-center px-6 mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            {t('hero.welcome')}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white font-serif text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 font-serif italic text-xl md:text-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="relative z-30 -mt-20 max-w-5xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex-1 w-full flex items-center gap-4 border-b md:border-b-0 md:border-r border-marbore-dark/20 pb-4 md:pb-0 md:pr-6">
            <Calendar className="text-marbore-gold w-6 h-6 shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-xs text-marbore-dark/70 uppercase tracking-wider mb-1">{t('booking.checkInOut')}</span>
              <div className="flex items-center gap-2">
                <input type="date" className="outline-none text-sm font-medium w-full bg-transparent text-marbore-dark cursor-pointer" />
                <span className="text-marbore-dark/50">-</span>
                <input type="date" className="outline-none text-sm font-medium w-full bg-transparent text-marbore-dark cursor-pointer" />
              </div>
            </div>
          </div>
          <GuestSelector />
          <button className="w-full md:w-auto bg-marbore-gold text-white px-8 py-4 rounded-lg text-sm tracking-widest uppercase hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 shrink-0">
            {t('booking.search')} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="el hotel" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-marbore-dark">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            {t('about.description')}
          </p>
        </motion.div>
      </section>

      {/* Featured Rooms */}
      <section id="habitaciones" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <span className="text-marbore-gold text-xs tracking-[0.2em] uppercase mb-4 block">{t('featured.premium')}</span>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">{t('featured.suite')}</h3>
              <p className="text-gray-600 mb-8 font-light leading-relaxed">
                {t('featured.suiteDesc')}
              </p>
              <Link to="/habitaciones" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-marbore-dark pb-1 hover:text-marbore-gold hover:border-marbore-gold transition-colors">
                {t('featured.viewDetails')} <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={IMAGES.room1} alt="Suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <span className="text-marbore-gold text-xs tracking-[0.2em] uppercase mb-4 block">{t('featured.comfort')}</span>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">{t('featured.standard')}</h3>
              <p className="text-gray-600 mb-8 font-light leading-relaxed">
                {t('featured.standardDesc')}
              </p>
              <Link to="/habitaciones" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-marbore-dark pb-1 hover:text-marbore-gold hover:border-marbore-gold transition-colors">
                {t('featured.viewDetails')} <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={IMAGES.room2} alt="Habitación Estándar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/habitaciones" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-marbore-dark pb-1 hover:text-marbore-gold hover:border-marbore-gold transition-colors">
              {t('featured.viewAll')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-32 bg-marbore-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-marbore-dark">{t('servicesTitle')}</h2>
            <p className="text-gray-500 font-light">{t('servicesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <Wifi />, title: t('services.connectivity'), desc: t('services.connectivityDesc') },
              { icon: <Waves />, title: t('services.wellness'), desc: t('services.wellnessDesc') },
              { icon: <Utensils />, title: t('services.gastronomy'), desc: t('services.gastronomyDesc') },
              { icon: <Wind />, title: t('services.comfortTitle'), desc: t('services.comfortDesc') },
              { icon: <ShieldCheck />, title: t('services.security'), desc: t('services.securityDesc') },
              { icon: <Coffee />, title: t('services.extras'), desc: t('services.extrasDesc') }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] group-hover:bg-marbore-dark group-hover:shadow-none flex items-center justify-center text-marbore-dark group-hover:text-white mb-6 transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="font-serif text-xl font-semibold mb-3 text-marbore-dark">{service.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Marquee/Grid */}
      <section id="galería" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl">{t('gallery.title')}</h2>
        </div>
        <div className="flex overflow-hidden py-4">
          <div className="flex gap-4 animate-marquee px-4">
            {[
              IMAGES.pool, IMAGES.breakfast, IMAGES.terrace, IMAGES.hero, IMAGES.room1, IMAGES.room2, IMAGES.bedroom, IMAGES.bathroom,
              IMAGES.pool, IMAGES.breakfast, IMAGES.terrace, IMAGES.hero, IMAGES.room1, IMAGES.room2, IMAGES.bedroom, IMAGES.bathroom
            ].map((img, idx) => (
              <div key={idx} className="w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/3] shrink-0 overflow-hidden rounded-xl shadow-md bg-white">
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-marbore-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">
                <span className="font-serif font-bold text-sm">M</span>
              </div>
              <span className="font-serif text-xl tracking-widest uppercase">Marboré</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>{t('footer.languages')}</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wider">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-marbore-gold shrink-0" />
                <span>{t('footer.address_1')}<br/>{t('footer.address_2')}</span>
              </li>
              <li>{t('footer.phone')}</li>
              <li>{t('footer.email')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wider">{t('footer.policies')}</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.noSmoking')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.noParking')}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 tracking-widest uppercase">
          {t('footer.rights')}
        </div>
      </footer>
    </div>
  );
}
