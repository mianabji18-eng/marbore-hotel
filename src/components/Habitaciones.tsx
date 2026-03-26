import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Wifi, 
  Wind, 
  ChevronLeft,
  ChevronRight,
  Bath,
  Tv,
  Coffee,
  Armchair,
  Users,
  MapPin,
  ShowerHead,
  Globe
} from 'lucide-react';

const IMAGES = {
  hero: "/hero.jpg",
  room1: "/room1.1.jpg",
  suites1: "/suites1.jpg",
  suites2: "/suites2.jpg",
  suites3: "/suites3.jpg",
  suites4: "/suites4.jpg",
  suites5: "/suites5.jpg",
  standart1: "/standart1.jpg",
  standart2: "/standart2.jpg",
  standart3: "/standart3.jpg",
  standart4: "/standart4.jpg",
  superior1: "/superior1.jpg",
  superior2: "/superior2.jpg",
  dobles1: "/dobles1.jpg",
  dobles2: "/dobles2.jpg",
  dobles3: "/dobles3.jpg",
  room2: "/room2.jpg",
  bedroom: "/bedroom.jpg",
  bathroom: "/bathroom.jpg"
};

const ROOMS_BASE = [
  {
    id: 1,
    key: "room1",
    capacity: 2,
    images: [IMAGES.room1, IMAGES.bedroom, IMAGES.suites1, IMAGES.suites2, IMAGES.suites3, IMAGES.suites4, IMAGES.suites5],
    amenities: [<Wifi size={18} />, <Wind size={18} />, <Bath size={18} />, <ShowerHead size={18} />, <Tv size={18} />, <Coffee size={18} />, <Armchair size={18} />]
  },
  {
    id: 2,
    key: "room2",
    capacity: 3,
    images: [IMAGES.room2, IMAGES.standart1, IMAGES.standart2, IMAGES.standart3, IMAGES.standart4],
    amenities: [<Wifi size={18} />, <Wind size={18} />, <ShowerHead size={18} />,  <Tv size={18} />, <Coffee size={18} />]
  },
  {
    id: 3,
    key: "room3",
    capacity: 2,
    images: [IMAGES.superior1, IMAGES.superior2, IMAGES.bathroom],
    amenities: [<Wifi size={18} />, <Wind size={18} />, <ShowerHead size={18} />,  <Tv size={18} />, <Coffee size={18} />, <Armchair size={18} />]
  },
  {
    id: 4,
    key: "room4",
    capacity: 2,
    images: [IMAGES.dobles1, IMAGES.dobles2, IMAGES.dobles3],
    amenities: [<Wifi size={18} />, <Wind size={18} />, <ShowerHead size={18} />,  <Tv size={18} />, <Coffee size={18} />]
  }
];

const RoomCard: React.FC<{ roomBase: any, idx: number }> = ({ roomBase, idx }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const roomText = t(`roomsPage.roomsList.${roomBase.key}`, { returnObjects: true }) as any;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % roomBase.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + roomBase.images.length) % roomBase.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      className="flex flex-col group"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6 relative group/gallery bg-gray-100">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentImageIndex}
            src={roomBase.images[currentImageIndex]} 
            alt={`${roomText.name} - ${currentImageIndex + 1}`} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover group-hover/gallery:scale-105 transition-transform duration-700" 
          />
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        {roomBase.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-all shadow-md z-10"
              aria-label={t('roomsPage.imagePrev')}
            >
              <ChevronLeft size={20} className="text-marbore-dark" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-all shadow-md z-10"
              aria-label={t('roomsPage.imageNext')}
            >
              <ChevronRight size={20} className="text-marbore-dark" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {roomBase.images.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentImageIndex 
                      ? 'bg-white w-5' 
                      : 'bg-white/50 hover:bg-white/90'
                  }`}
                  aria-label={`${t('roomsPage.goToImage')} ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-3 group/tooltip z-20">
          <span className="font-serif text-marbore-dark font-medium">{roomText.price}</span>
          <div className="h-4 w-[1px] bg-marbore-dark/20" />
          <div className="flex items-center gap-1.5 text-marbore-dark cursor-help">
            <Users size={16} />
            <span className="font-medium text-sm">{roomBase.capacity}</span>
          </div>
          
          {/* Tooltip */}
          <div className="absolute top-full mt-2 right-0 bg-marbore-dark text-white text-xs px-3 py-2 rounded shadow-xl opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 transform translate-y-1 group-hover/tooltip:translate-y-0">
            {roomText.capacityText}
            {/* Arrow up */}
            <div className="absolute -top-1 right-8 w-2 h-2 bg-marbore-dark transform rotate-45" />
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <span className="text-marbore-gold text-xs tracking-[0.2em] uppercase mb-2 block">
          {roomText.type}
        </span>
        <h3 className="font-serif text-3xl mb-4 text-marbore-dark">{roomText.name}</h3>
        <p className="text-gray-600 mb-6 font-light leading-relaxed flex-1">
          {roomText.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3 text-marbore-dark/60">
            {roomBase.amenities.map((icon: any, i: number) => (
              <span key={i} className="hover:text-marbore-gold transition-colors">{icon}</span>
            ))}
          </div>
          <button className="bg-marbore-dark text-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-marbore-gold transition-colors rounded">
            {t('roomsPage.book')}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Habitaciones() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Link to="/" className="flex items-center gap-2 z-10 hover:opacity-80 transition-opacity">
            <ChevronLeft className={isScrolled ? 'text-marbore-dark' : 'text-white'} />
            <span className={`font-serif text-sm tracking-widest uppercase ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}>
              {t('roomsPage.backHome')}
            </span>
          </Link>
          
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-max">
            <span className={`font-serif text-xl tracking-widest uppercase ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}>
              {t('roomsPage.title')}
            </span>
          </div>

          <div className="flex items-center z-10">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm tracking-widest uppercase hover:text-marbore-gold transition-colors ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}
            >
              <Globe className="w-4 h-4" />
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={IMAGES.hero} alt="Marboré Hotel Habitaciones" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-20 text-center px-6 mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-serif text-4xl md:text-6xl mb-4 tracking-tight"
          >
            {t('roomsPage.heroTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/80 font-light text-lg tracking-widest uppercase"
          >
            {t('roomsPage.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {ROOMS_BASE.map((roomBase, idx) => (
            <RoomCard key={roomBase.id} roomBase={roomBase} idx={idx} />
          ))}
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
