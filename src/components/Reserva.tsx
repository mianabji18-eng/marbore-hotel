import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Info, Check, ShieldCheck, CheckCircle2, MapPin, Globe } from 'lucide-react';

export default function Reserva() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [extras, setExtras] = useState({
    airportPickup: false,
    transport: false,
  });

  const { room, dates, guests } = location.state || {};

  useEffect(() => {
    if (!room) {
      navigate('/habitaciones');
    }
    window.scrollTo(0, 0);
  }, [room, navigate]);

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

  if (!room) return null;

  const checkInDate = new Date(dates.checkIn);
  const checkOutDate = new Date(dates.checkOut);
  const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  const roomTotal = nights * room.priceRaw;
  const extraTotal = (extras.airportPickup ? 30 : 0) + (extras.transport ? 15 : 0);
  const total = roomTotal + extraTotal;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/habitaciones');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-marbore-light flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="font-serif text-3xl text-marbore-dark mb-4">{t('checkout.success')}</h2>
          <p className="text-gray-500 mb-8 font-light">
            Redirigiendo...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-marbore-light font-sans flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-2 z-10 hover:opacity-80 transition-opacity text-marbore-dark">
            <ChevronLeft size={20} />
            <span className="font-serif text-sm tracking-widest uppercase">
              {t('roomsPage.backHome')}
            </span>
          </Link>
          
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-max">
            <span className="font-serif text-xl tracking-widest uppercase text-marbore-dark">
              Marboré
            </span>
          </div>

          <div className="flex items-center z-10">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm tracking-widest uppercase hover:text-marbore-gold transition-colors text-marbore-dark"
            >
              <Globe className="w-4 h-4" />
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 pt-32 pb-20 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-marbore-dark transition-colors text-sm uppercase tracking-widest font-bold mb-6"
          >
            <ChevronLeft size={16} /> Volver
          </button>
          <h1 className="font-serif text-4xl text-marbore-dark">{t('checkout.title')}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            <form id="booking-form" onSubmit={handleConfirm} className="space-y-8">
              
              {/* Guest Details */}
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="font-serif text-2xl text-marbore-dark mb-6">{t('checkout.guestDetails')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('checkout.name')}</label>
                    <input required type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-marbore-gold transition-colors text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('checkout.surname')}</label>
                    <input required type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-marbore-gold transition-colors text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('checkout.email')}</label>
                    <input required type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-marbore-gold transition-colors text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('checkout.phone')}</label>
                    <input required type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-marbore-gold transition-colors text-gray-700" />
                  </div>
                </div>
              </section>

              {/* Payment Section */}
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-marbore-gold" />
                  <h2 className="font-serif text-2xl text-marbore-dark">{t('checkout.payment')}</h2>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('checkout.cardNumber')}</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-marbore-gold transition-colors text-gray-700 font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('checkout.expiry')}</label>
                      <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-marbore-gold transition-colors text-gray-700 font-mono" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('checkout.cvc')}</label>
                      <input required type="text" placeholder="123" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-marbore-gold transition-colors text-gray-700 font-mono" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Terms */}
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <Info className="text-gray-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-marbore-dark mb-2">{t('checkout.terms')}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{t('checkout.termsDesc')}</p>
                  </div>
                </div>
              </section>

            </form>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-marbore-dark text-white rounded-2xl overflow-hidden shadow-xl sticky top-28">
              <div className="h-48 overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-6">{t('checkout.summary')}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm font-light border-b border-white/10 pb-4">
                    <span className="text-gray-400 uppercase tracking-widest">{t('bookingModal.checkIn')}</span>
                    <span>{dates.checkIn}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-light border-b border-white/10 pb-4">
                    <span className="text-gray-400 uppercase tracking-widest">{t('bookingModal.checkOut')}</span>
                    <span>{dates.checkOut}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-light border-b border-white/10 pb-4">
                    <span className="text-gray-400 uppercase tracking-widest">Huéspedes</span>
                    <span>{guests.adults} adultos, {guests.children} niños</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-marbore-gold mb-4">{t('checkout.extras')}</h4>
                  <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${extras.airportPickup ? 'bg-marbore-gold border-marbore-gold' : 'border-gray-500 group-hover:border-white'}`}>
                      {extras.airportPickup && <Check size={14} className="text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={extras.airportPickup} onChange={(e) => setExtras({...extras, airportPickup: e.target.checked})} />
                    <span className="text-sm font-light flex-1">{t('checkout.airportPickup')}</span>
                    <span className="text-sm">+$30</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${extras.transport ? 'bg-marbore-gold border-marbore-gold' : 'border-gray-500 group-hover:border-white'}`}>
                      {extras.transport && <Check size={14} className="text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={extras.transport} onChange={(e) => setExtras({...extras, transport: e.target.checked})} />
                    <span className="text-sm font-light flex-1">{t('checkout.transport')}</span>
                    <span className="text-sm">+$15</span>
                  </label>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4 mb-8">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>{room.name} x {nights} {nights === 1 ? 'noche' : 'noches'}</span>
                    <span>${roomTotal}</span>
                  </div>
                  {extraTotal > 0 && (
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Extras</span>
                      <span>${extraTotal}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-serif text-marbore-gold pt-4">
                    <span>{t('checkout.total')}</span>
                    <span>${total}</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  form="booking-form"
                  className="w-full bg-marbore-gold text-white py-4 rounded-lg uppercase tracking-widest text-sm font-bold hover:bg-yellow-600 transition-colors shadow-lg"
                >
                  {t('checkout.confirm')}
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-marbore-dark text-white py-20 mt-auto">
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
