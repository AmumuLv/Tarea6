import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ResumenLeyva from './pages/ResumenLeyva.jsx';
import ApiTester from './pages/ApiTester.jsx';
import { Shield } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar Global Gaming */}
{/* Navbar Global Gaming Mejorado */}
      <nav className="bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/30 text-white p-5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 shadow-[0_4px_30px_rgba(34,211,238,0.1)]">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Shield className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <h1 className="text-xl font-black italic tracking-widest uppercase">
            Atención<span className="text-cyan-400">Total</span>
          </h1>
        </div>
        
        {/* Enlaces con animación de subrayado Neón */}
{/* Enlaces estilo Cuadros Neón */}
        <div className="flex flex-wrap justify-center gap-4 font-mono text-sm uppercase font-black tracking-wider">
          <Link to="/" className="px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 bg-cyan-950/30 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
            Inicio
          </Link>
          <Link to="/dashboard" className="px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 bg-blue-950/30 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
            Portal
          </Link>
          <Link to="/postman" className="px-4 py-2 rounded-lg border border-purple-500/50 text-purple-400 bg-purple-950/30 hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
            API_Tester
          </Link>
          <Link to="/resumen" className="px-4 py-2 rounded-lg border border-yellow-500/50 text-yellow-400 bg-yellow-950/30 hover:bg-yellow-500/20 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all">
            Resumen
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/postman" element={<ApiTester />} />
        <Route path="/resumen" element={<ResumenLeyva />} />
      </Routes>
    </BrowserRouter>
  );
}