import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Calendar, X, AlertCircle } from 'lucide-react';
import GuestSelector from './GuestSelector';

interface RoomData {
  id: number;
  key: string;
  name: string;
  priceRaw: number;
  priceText: string;
  image: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomData: RoomData | null;
}

export default function BookingModal({ isOpen, onClose, roomData }: BookingModalProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState({ rooms: 1, adults: 2, children: 0 });
  const [error, setError] = useState('');

  if (!isOpen || !roomData) return null;

  const handleContinue = () => {
    if (!checkIn || !checkOut || new Date(checkIn) >= new Date(checkOut)) {
      setError(t('bookingModal.errorDates'));
      return;
    }
    setError('');
    
    // Navigate to Reservation page with state
    navigate('/reserva', {
      state: {
        room: roomData,
        dates: { checkIn, checkOut },
        guests
      }
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 font-sans backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-xl overflow-visible shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-serif text-2xl text-marbore-dark">{t('bookingModal.title')}</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-marbore-dark transition-colors rounded-full hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <img src={roomData.image} alt={roomData.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-marbore-dark">{roomData.name}</h3>
              <p className="text-marbore-gold font-medium">{roomData.priceText}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            {/* Check-in */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">{t('bookingModal.checkIn')}</label>
              <div className="relative border border-gray-200 rounded-lg p-3 hover:border-marbore-gold transition-colors">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-8 outline-none text-gray-700 bg-transparent cursor-pointer"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">{t('bookingModal.checkOut')}</label>
              <div className="relative border border-gray-200 rounded-lg p-3 hover:border-marbore-gold transition-colors">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full pl-8 outline-none text-gray-700 bg-transparent cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Guest Selector inside border box */}
          <div className="border border-gray-200 rounded-lg p-4 mb-6 hover:border-marbore-gold transition-colors flex items-center min-h-[5rem]">
            <GuestSelector onChange={setGuests} />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm mb-6 p-3 bg-red-50 rounded-lg">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              {t('bookingModal.cancel')}
            </button>
            <button 
              onClick={handleContinue}
              className="flex-1 bg-marbore-gold text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition-colors uppercase tracking-widest text-sm font-bold shadow-md"
            >
              {t('bookingModal.continue')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
