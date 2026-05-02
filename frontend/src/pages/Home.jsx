import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Server, Moon, Sun, ChevronRight, Terminal } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true); // Iniciamos en modo oscuro por defecto para el estilo Gaming

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-slate-900'}`}>
      
      {/* Navbar Gaming */}
      <nav className={`p-6 flex justify-between items-center max-w-7xl mx-auto w-full border-b ${darkMode ? 'border-cyan-500/20' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter uppercase italic">
            Atención<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Total</span>
          </h1>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-xl transition-all duration-300 ${darkMode ? 'bg-slate-800 hover:bg-slate-700 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'bg-gray-200 hover:bg-gray-300 shadow-inner'}`}
        >
          {darkMode ? <Sun className="w-5 h-5 text-cyan-300" /> : <Moon className="w-5 h-5 text-indigo-600" />}
        </button>
      </nav>

      {/* Hero Section Cyberpunk */}
      <header className="flex-grow flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
        {/* Luces de fondo (Efecto Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-8 border border-cyan-500/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SISTEMA_V2.0_EN_LÍNEA
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
            Gestión de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              Contactos
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Plataforma de soporte impulsada por API RESTful y orquestación Docker.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Botón Principal */}
            <Link to="/dashboard" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-black uppercase tracking-widest text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              Iniciar Sistema
              <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>

            {/* Nuevo Botón: Probar API (Simula Postman) */}
         <a href="http://localhost:3000/api/contacts" target="_blank" rel="noopener noreferrer" 
               className={`group inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-widest transition-all duration-300 border-2 rounded-xl hover:scale-105 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}>
              <Terminal className="w-5 h-5 mr-3" />
              API
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}