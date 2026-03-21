import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  BedDouble, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Panel Principal', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'reservas', label: 'Reservas', icon: <CalendarCheck className="w-5 h-5" /> },
    { id: 'habitaciones', label: 'Habitaciones', icon: <BedDouble className="w-5 h-5" /> },
    { id: 'huespedes', label: 'Huéspedes', icon: <Users className="w-5 h-5" /> },
    { id: 'configuracion', label: 'Configuración', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-marbore-dark text-white transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-marbore-gold text-marbore-gold">
              <span className="font-serif font-bold text-sm">M</span>
            </div>
            <span className="font-serif text-xl tracking-widest uppercase text-marbore-gold">Marboré</span>
          </Link>
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === tab.id 
                  ? 'bg-marbore-gold text-white' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Volver a la Web</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm z-10 border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button 
                className="md:hidden text-gray-500 hover:text-gray-700"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-serif text-marbore-dark">
                {tabs.find(t => t.id === activeTab)?.label}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-marbore-light border border-gray-200 flex items-center justify-center text-marbore-dark font-serif font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Dynamic Content Based on Active Tab */}
            {activeTab === 'dashboard' && <DashboardOverview />}
            {activeTab === 'reservas' && <ReservasModule />}
            {activeTab === 'habitaciones' && <HabitacionesModule />}
            {activeTab === 'huespedes' && <HuespedesModule />}
            {activeTab === 'configuracion' && <ConfiguracionModule />}
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

// --- Módulos (Estructura Básica) ---

function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Reservas Hoy" value="12" trend="+2" />
        <StatCard title="Ocupación" value="85%" trend="+5%" />
        <StatCard title="Ingresos (Mes)" value="$24,500" trend="+12%" />
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 flex items-center justify-center text-gray-400">
        [Gráfico de Ocupación Mensual]
      </div>
    </div>
  );
}

function ReservasModule() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Gestión de Reservas</h2>
        <button className="bg-marbore-dark text-white px-4 py-2 rounded-lg text-sm hover:bg-black transition-colors">
          Nueva Reserva
        </button>
      </div>
      <div className="p-6 text-center text-gray-500 py-20">
        [Tabla de Reservas Activas e Históricas]
      </div>
    </div>
  );
}

function HabitacionesModule() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Estado de Habitaciones</h2>
      </div>
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[101, 102, 103, 104, 201, 202, 203, 204].map(room => (
          <div key={room} className="p-4 border rounded-lg text-center hover:border-marbore-gold cursor-pointer transition-colors">
            <span className="block text-xl font-serif text-marbore-dark mb-2">{room}</span>
            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Disponible</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HuespedesModule() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Directorio de Huéspedes</h2>
      </div>
      <div className="p-6 text-center text-gray-500 py-20">
        [Lista de Huéspedes Frecuentes y Actuales]
      </div>
    </div>
  );
}

function ConfiguracionModule() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Configuración del Sistema</h2>
      </div>
      <div className="p-6 text-center text-gray-500 py-20">
        [Ajustes de Tarifas, Usuarios, Políticas]
      </div>
    </div>
  );
}

function StatCard({ title, value, trend }: { title: string, value: string, trend: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-end gap-3">
        <span className="text-3xl font-serif text-marbore-dark">{value}</span>
        <span className="text-sm font-medium text-green-600 mb-1">{trend}</span>
      </div>
    </div>
  );
}
