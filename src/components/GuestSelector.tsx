import React, { useState, useRef, useEffect } from 'react';
import { Users, Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GuestSelectorProps {
  onChange?: (guests: { rooms: number; adults: number; children: number }) => void;
}

export default function GuestSelector({ onChange }: GuestSelectorProps = {}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    onChange?.({ rooms, adults, children });
  }, [rooms, adults, children, onChange]);

  const popoverRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  const togglePopover = () => setIsOpen(!isOpen);

  // Text representation for the trigger
  const summaryText = `${t('guest.adults', { count: adults })}, ${children === 0 ? t('guest.children_zero') : t('guest.children', { count: children })}`;

  return (
    <div className="relative flex-1 w-full" ref={popoverRef}>
      <div 
        className="flex items-center gap-4 cursor-pointer border-b md:border-b-0 md:border-r border-marbore-dark/20 pb-4 md:pb-0 md:pr-6 w-full h-full"
        onClick={togglePopover}
      >
        <Users className="text-marbore-gold w-6 h-6 shrink-0" />
        <div className="flex flex-col w-full">
          <span className="text-xs text-marbore-dark/70 uppercase tracking-wider mb-1">{t('guest.title')}</span>
          <div className="outline-none text-sm font-medium w-full bg-transparent text-marbore-dark">
            {summaryText}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 md:-left-4 mt-6 w-80 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] z-50 p-6 border border-gray-100 font-sans">
          {/* Arrow pointing up */}
          <div className="absolute -top-2 left-12 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 transform"></div>
          
          <div className="relative z-10 flex flex-col gap-6">
            {/* Habitación */}
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-gray-800 tracking-wide">{t('guest.room')}</span>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                  disabled={rooms <= 1}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${rooms <= 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-blue-600 hover:border-blue-600'}`}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center font-bold text-lg text-gray-800">{rooms}</span>
                <button 
                  onClick={() => setRooms(rooms + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 text-blue-600 flex items-center justify-center hover:border-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Adultos */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-800 tracking-wide">{t('guest.adults')}</span>
                <span className="text-sm text-gray-500 font-light mt-0.5">{t('guest.adultsDesc')}</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  disabled={adults <= 1}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${adults <= 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-blue-600 hover:border-blue-600'}`}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center font-bold text-lg text-gray-800">{adults}</span>
                <button 
                  onClick={() => setAdults(adults + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 text-blue-600 flex items-center justify-center hover:border-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Niños */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-800 tracking-wide">{t('guest.childrenLabel')}</span>
                <span className="text-sm text-gray-500 font-light mt-0.5">{t('guest.childrenDesc')}</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  disabled={children <= 0}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${children <= 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-blue-600 hover:border-blue-600'}`}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center font-bold text-lg text-gray-800">{children}</span>
                <button 
                  onClick={() => setChildren(children + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 text-blue-600 flex items-center justify-center hover:border-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
