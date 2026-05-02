import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Users, Building2, Phone, Mail, Plus, Activity, Terminal } from 'lucide-react';

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '' });
  const [status, setStatus] = useState({ text: 'Iniciando conexión...', ok: false });
  const [darkMode, setDarkMode] = useState(true); // Iniciamos en oscuro

  useEffect(() => {
    fetchContacts();
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/contacts');
      setContacts(res.data);
      setStatus({ text: 'API REST: Conectado', ok: true });
    } catch (error) {
      setStatus({ text: 'API REST: Desconectado', ok: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/contacts', form);
      setForm({ name: '', email: '', phone: '', company: '' });
      fetchContacts();
    } catch (error) {
      alert("Error en la transmisión de datos.");
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-100 text-slate-900'}`}>
      
      {/* Navbar Superior HUD */}
      <nav className={`sticky top-0 z-50 border-b px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur-md ${darkMode ? 'bg-slate-950/80 border-cyan-500/20' : 'bg-white/80 border-gray-300'}`}>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Link to="/" className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] text-cyan-400' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-2xl font-black tracking-widest uppercase italic">PORTAL_ADMIN</h2>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-widest border ${status.ok ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-red-500/10 text-red-500 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]'}`}>
            <Activity className="w-4 h-4" />
            {status.text}
          </div>
          
          {/* Botón directo a la API en el Dashboard */}
          <a href="http://localhost:3000/api/contacts" target="_blank" rel="noopener noreferrer" title="Ver JSON de la API"
             className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border font-bold uppercase tracking-widest text-xs ${darkMode ? 'border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]' : 'border-purple-400 text-purple-600 hover:bg-purple-50'}`}>
            <Terminal className="w-4 h-4" />
            API
          </a>

          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-indigo-600'}`}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        
        {/* Stats HUD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900 border-cyan-500/30 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-500 mb-2">Total Entidades</p>
                <h3 className="text-4xl font-black">{contacts.length}</h3>
              </div>
              <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/30"><Users className="w-6 h-6 text-cyan-400"/></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formulario Gaming */}
          <div className={`p-6 rounded-2xl border h-fit transition-all ${darkMode ? 'bg-slate-900 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)]' : 'bg-white border-gray-200 shadow-md'}`}>
            <h3 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-2 text-purple-500 border-b border-purple-500/20 pb-4">
              <Plus className="w-5 h-5" /> Insertar_Dato
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Nombre_Completo', icon: Users, val: form.name, key: 'name', type: 'text', req: true },
                { label: 'Correo_E', icon: Mail, val: form.email, key: 'email', type: 'email', req: true },
                { label: 'Com_Enlace', icon: Phone, val: form.phone, key: 'phone', type: 'text', req: true },
                { label: 'Corporación', icon: Building2, val: form.company, key: 'company', type: 'text', req: false },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className={`text-xs font-mono font-bold uppercase tracking-widest ${darkMode ? 'text-purple-400' : 'text-gray-500'}`}>{field.label}</label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><field.icon className="h-4 w-4 text-gray-400" /></div>
                    <input type={field.type} required={field.req} value={field.val} onChange={e => setForm({...form, [field.key]: e.target.value})}
                      className={`w-full pl-10 pr-3 py-3 rounded-xl border font-mono focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-700 text-cyan-300 placeholder-slate-600' : 'bg-gray-50 border-gray-300 text-gray-900'}`} 
                      placeholder="..." />
                  </div>
                </div>
              ))}
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black uppercase tracking-widest py-4 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] mt-6">
                Ejecutar POST
              </button>
            </form>
          </div>

          {/* Tabla Terminal */}
          <div className={`lg:col-span-2 rounded-2xl border overflow-hidden transition-all ${darkMode ? 'bg-slate-900 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'bg-white border-gray-200 shadow-md'}`}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`border-b ${darkMode ? 'bg-slate-950 border-cyan-500/20' : 'bg-gray-100 border-gray-200'}`}>
                    <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-cyan-500">ID_Sujeto</th>
                    <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-cyan-500">Contacto</th>
                    <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-cyan-500">Facción</th>
                  </tr>
                </thead>
                <tbody className={`divide-y font-mono ${darkMode ? 'divide-slate-800' : 'divide-gray-200'}`}>
                  {contacts.map(c => (
                    <tr key={c._id} className={`transition-colors ${darkMode ? 'hover:bg-slate-800/80' : 'hover:bg-blue-50'}`}>
                      <td className="px-6 py-4">
                        <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{c.name}</div>
                        <div className={`text-xs mt-1 ${darkMode ? 'text-cyan-400/70' : 'text-gray-500'}`}>{c.email}</div>
                      </td>
                      <td className={`px-6 py-4 text-sm ${darkMode ? 'text-purple-300' : 'text-gray-700'}`}>{c.phone}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border ${c.company ? (darkMode ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-blue-100 text-blue-800 border-blue-200') : (darkMode ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-gray-100 text-gray-600 border-gray-200')}`}>
                          {c.company || 'N/A'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}