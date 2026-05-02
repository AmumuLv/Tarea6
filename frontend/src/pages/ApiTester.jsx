import React, { useState } from 'react';
import axios from 'axios';
import { Terminal, Play, Database } from 'lucide-react';

export default function ApiTester() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const testApi = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/api/contacts');
      setResponse(res.data);
    } catch (error) {
      setResponse({ error: "No se pudo conectar con la API." });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8 font-mono text-sm">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl font-black text-purple-500 uppercase tracking-widest mb-6 flex items-center gap-3">
          <Terminal className="w-8 h-8" /> Postman_Sim_v1.0
        </h2>

        {/* Barra de URL estilo Postman */}
        <div className="flex gap-2 mb-6">
          <div className="bg-slate-800 text-cyan-400 font-bold px-4 py-3 rounded-l-lg border border-slate-700 flex items-center">
            GET
          </div>
          <div className="flex-grow bg-slate-900 text-slate-300 px-4 py-3 border-y border-slate-700 flex items-center">
            http://localhost:3000/api/contacts
          </div>
          <button onClick={testApi} className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3 rounded-r-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <Play className="w-4 h-4 fill-current" /> SEND
          </button>
        </div>

        {/* Caja de Respuesta JSON */}
        <div className="bg-[#1e1e1e] border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-slate-900 border-b border-slate-700 px-4 py-2 flex justify-between items-center text-xs text-slate-400">
            <span className="flex items-center gap-2"><Database className="w-4 h-4"/> Response Body (JSON)</span>
            <span>Status: <span className="text-green-400 font-bold">200 OK</span></span>
          </div>
          <div className="p-4 h-96 overflow-y-auto text-green-400">
            {loading ? (
              <span className="animate-pulse">Cargando datos desde la API...</span>
            ) : response ? (
              <pre>{JSON.stringify(response, null, 2)}</pre>
            ) : (
              <span className="text-slate-600">Presiona SEND para obtener los datos de la base de datos MongoDB.</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}