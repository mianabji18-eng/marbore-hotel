/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
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
  MapPin
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
            {['El Hotel', 'Habitaciones', 'Servicios', 'Galería'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm tracking-widest uppercase hover:text-marbore-gold transition-colors ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <Link to="/dashboard" className={`text-sm tracking-widest uppercase hover:text-marbore-gold transition-colors ${isScrolled ? 'text-marbore-dark' : 'text-white'}`}>
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center z-10">
            <button className="bg-marbore-gold text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-yellow-600 transition-colors">
              Reservar
            </button>
          </div>

          <button className="md:hidden text-white z-10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-marbore-dark' : 'text-white'} /> : <Menu className={isScrolled ? 'text-marbore-dark' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-marbore-light pt-24 px-6 flex flex-col gap-6 md:hidden">
          {['El Hotel', 'Habitaciones', 'Servicios', 'Galería'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-marbore-dark">
              {item}
            </a>
          ))}
          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-marbore-dark">
            Dashboard
          </Link>
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
            Bienvenido a tu refugio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white font-serif text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight"
          >
            MARBORÉ
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 font-serif italic text-xl md:text-2xl"
          >
            Hotel Boutique
          </motion.p>
        </div>
      </section>
      {/* Booking Widget */}
      <section className="relative z-30 -mt-20 max-w-5xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex-1 w-full flex items-center gap-4 border-b md:border-b-0 md:border-r border-marbore-dark/20 pb-4 md:pb-0 md:pr-6">
            <Calendar className="text-marbore-gold w-6 h-6 shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-xs text-marbore-dark/70 uppercase tracking-wider mb-1">Llegada - Salida</span>
              <div className="flex items-center gap-2">
                <input type="date" className="outline-none text-sm font-medium w-full bg-transparent text-marbore-dark cursor-pointer" />
                <span className="text-marbore-dark/50">-</span>
                <input type="date" className="outline-none text-sm font-medium w-full bg-transparent text-marbore-dark cursor-pointer" />
              </div>
            </div>
          </div>
          <GuestSelector />
          <button className="w-full md:w-auto bg-marbore-gold text-white px-8 py-4 rounded-lg text-sm tracking-widest uppercase hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 shrink-0">
            Buscar <ChevronRight className="w-4 h-4" />
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
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-marbore-dark">Una experiencia de confort y elegancia</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Descubra el equilibrio perfecto entre diseño moderno y calidez hogareña. En Marboré Hotel Boutique, cada detalle ha sido cuidadosamente seleccionado para ofrecerle una estancia inolvidable. Disfrute de nuestras instalaciones de primera clase, desde nuestra relajante piscina interior hasta nuestra terraza solárium, todo diseñado para su máximo bienestar.
          </p>
        </motion.div>
      </section>

      {/* Featured Rooms (Editorial Layout) */}
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
              <span className="text-marbore-gold text-xs tracking-[0.2em] uppercase mb-4 block">Alojamiento Premium</span>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">Suite Superior</h3>
              <p className="text-gray-600 mb-8 font-light leading-relaxed">
                Espacios amplios y luminosos con vistas exclusivas. Equipada con cama King size, aire acondicionado, TV de pantalla plana y un baño privado con artículos de aseo gratuitos. El refugio perfecto tras un día de exploración.
              </p>
              <Link to="/habitaciones" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-marbore-dark pb-1 hover:text-marbore-gold hover:border-marbore-gold transition-colors">
                Ver detalles <ChevronRight className="w-4 h-4" />
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
              <span className="text-marbore-gold text-xs tracking-[0.2em] uppercase mb-4 block">Confort Total</span>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">Habitación Triple Estándar</h3>
              <p className="text-gray-600 mb-8 font-light leading-relaxed">
                Diseño íntimo y acogedor. Disfrute de ropa de cama de alta calidad, conexión Wi-Fi gratuita y un ambiente libre de humo para garantizar su descanso absoluto.
              </p>
              <Link to="/habitaciones" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-marbore-dark pb-1 hover:text-marbore-gold hover:border-marbore-gold transition-colors">
                Ver detalles <ChevronRight className="w-4 h-4" />
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
              Ver habitaciones <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-32 bg-marbore-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-marbore-dark">Servicios e Instalaciones</h2>
            <p className="text-gray-500 font-light">Todo lo que necesita para una estancia perfecta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <Wifi />, title: "Conectividad", desc: "Wi-Fi gratuito de alta velocidad en todo el establecimiento." },
              { icon: <Waves />, title: "Bienestar", desc: "Piscina interior abierta todo el año y bañera de hidromasaje/jacuzzi." },
              { icon: <Utensils />, title: "Gastronomía", desc: "Restaurante, bar, desayuno en la habitación y menús para dietas especiales." },
              { icon: <Wind />, title: "Confort", desc: "Aire acondicionado, habitaciones sin humo y servicio de limpieza diario." },
              { icon: <ShieldCheck />, title: "Seguridad", desc: "Recepción 24 horas, cámaras de seguridad y acceso con tarjeta." },
              { icon: <Coffee />, title: "Extras", desc: "Terraza solárium, servicio de conserjería e información turística." }
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
          <h2 className="font-serif text-4xl md:text-5xl">Nuestros Espacios</h2>
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
              Su hotel boutique de confianza. Un oasis de tranquilidad y buen gusto diseñado para hacer de su viaje una experiencia memorable.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>Idiomas: Español, Inglés</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-marbore-gold shrink-0" />
                <span>Cl. 21 #3 - 96, Comuna 2<br/>Santa Marta, Magdalena</span>
              </li>
              <li>Teléfono: +57 300 560 6643</li>
              <li>Email: reservas@marborehotel.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wider">Políticas</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prohibido fumar en todo el alojamiento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">No hay parking disponible</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 tracking-widest uppercase">
          © {new Date().getFullYear()} Marboré Hotel Boutique. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
