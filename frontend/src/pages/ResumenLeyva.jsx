import React from 'react';
import { BookOpen, Server, CheckCircle2, Target, Code2 } from 'lucide-react';

export default function ResumenLeyva() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-6 md:p-12 font-mono">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Título Principal */}
        <header className="border-b border-slate-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 uppercase tracking-widest flex items-center gap-4">
            <BookOpen className="w-10 h-10 text-yellow-400" />
            Reporte Técnico: Leyva Calderon
          </h2>
          <p className="mt-4 text-slate-400 text-lg">Documentación del proyecto HT-04 para el curso PIAD-527.</p>
        </header>

        {/* Sección: El Problema y la Solución */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden hover:border-red-500/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2"><Target className="w-6 h-6"/> El Caso Práctico</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              La empresa <strong>"Atención Total"</strong>, dedicada a servicios de soporte, tenía un sistema de administración de contactos obsoleto que impedía la integración con nuevas aplicaciones.
              El objetivo era modernizar esta infraestructura para permitir consultas eficientes y facilitar la escalabilidad.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden hover:border-green-500/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
            <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2"><CheckCircle2 className="w-6 h-6"/> Cumplimiento del Proyecto</h3>
            <p className="text-sm leading-relaxed text-slate-400 mb-2">
              Este proyecto web cumple a la perfección con los requerimientos porque:
            </p>
            <ul className="text-sm text-slate-400 list-disc list-inside space-y-2 ml-2">
              <li>Se desarrolló una <strong>API REST con Node JS</strong> conectada a MongoDB.</li>
              <li>Se implementaron los métodos HTTP necesarios (GET, POST).</li>
              <li>Todo el ecosistema fue <strong>contenedorizado con Docker</strong>, garantizando que funcione de manera uniforme.</li>
            </ul>
          </div>
        </div>

        {/* NUEVA SECCIÓN: Tecnologías Utilizadas */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
          <h3 className="text-3xl font-black text-cyan-400 mb-8 uppercase tracking-wider text-center">Tecnologías Utilizadas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Cuadro 1: El Stack */}
            <div className="bg-slate-950 p-6 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)] relative group hover:border-purple-500/60 transition-all">
              <div className="absolute -top-3 -right-3 bg-purple-900 p-2 rounded-lg border border-purple-500/50">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4 uppercase tracking-widest">El Stack de Desarrollo</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><strong className="text-white">React:</strong> Usado para construir toda esta interfaz visual (Frontend) interactiva y moderna.</li>
                <li><strong className="text-white">Node.js + Express:</strong> Es el motor del Backend. Crea la API RESTful que recibe las peticiones de la web.</li>
                <li><strong className="text-white">MongoDB:</strong> Nuestra base de datos NoSQL donde se guardan permanentemente los contactos registrados.</li>
              </ul>
            </div>

            {/* Cuadro 2: Docker */}
            <div className="bg-slate-950 p-6 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] relative group hover:border-blue-500/60 transition-all">
              <div className="absolute -top-3 -right-3 bg-blue-900 p-2 rounded-lg border border-blue-500/50">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-blue-400 mb-4 uppercase tracking-widest">Infraestructura Docker</h4>
              <p className="text-sm leading-relaxed text-slate-400 mb-3">
                <strong>¿Qué es Docker?</strong> Es una herramienta que "empaqueta" nuestro código y la base de datos en <em>contenedores</em> aislados.
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                <strong>¿Cómo lo usamos?</strong> Mediante un archivo <code className="text-blue-300">docker-compose.yml</code> unimos dos contenedores: uno con nuestra API de Node.js y otro con MongoDB. Así aseguramos que el sistema "Atención Total" funcione sin errores en cualquier computadora.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}