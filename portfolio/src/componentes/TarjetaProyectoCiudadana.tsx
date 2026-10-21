import React, { useState } from 'react';
import { Vote, Github, ExternalLink, Layers, CheckCircle2, Atom, Database, Code2 } from './IconosPersonalizados';
import { ProyectoArquitectura } from '../tipos';

/**
 * Tarjeta de Proyecto: App de Participación Ciudadana (TarjetaProyectoCiudadana)
 */

interface TarjetaProyectoCiudadanaProps {
  proyecto: ProyectoArquitectura;
  alAbrirArquitectura: () => void;
}

export const TarjetaProyectoCiudadana: React.FC<TarjetaProyectoCiudadanaProps> = ({
  proyecto,
  alAbrirArquitectura
}) => {
  const [pestañaNarrativa, setPestañaNarrativa] = useState<'inicio' | 'desarrollo' | 'desenlace'>('inicio');

  return (
    <article
      id="TarjetaProyectoCiudadana"
      className="group relative rounded-lg bg-white border border-[#261C14]/10 p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:border-[#D27D2D]/30 hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#D27D2D] flex flex-col justify-between"
    >
      <div>
        {/* Encabezado */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#261C14]/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-md bg-[#D27D2D]/10 text-[#D27D2D] group-hover:bg-[#D27D2D] group-hover:text-white transition-colors duration-300">
              <Vote className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#261C14] group-hover:text-[#D27D2D] transition-colors">
                {proyecto.titulo}
              </h3>
              <p className="text-xs text-[#261C14]/60 font-sans mt-0.5">
                Stack: React, Vite, Node.js
              </p>
            </div>
          </div>
          <span className="text-[10px] bg-[#D27D2D]/10 text-[#D27D2D] px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider">
            {proyecto.etiquetaTipo}
          </span>
        </div>

        {/* Subtítulo */}
        <p className="text-sm font-sans text-[#261C14]/75 my-4 leading-relaxed">
          {proyecto.subtitulo}
        </p>

        {/* Pestañas Narrativas */}
        <div className="mb-4 p-1 rounded-sm bg-[#F9F6F0] border border-[#261C14]/10 flex gap-1">
          <button
            onClick={() => setPestañaNarrativa('inicio')}
            className={`flex-1 py-1.5 px-2 rounded-xs text-[11px] font-mono font-semibold transition-all cursor-pointer ${
              pestañaNarrativa === 'inicio'
                ? 'bg-[#261C14] text-white shadow-xs'
                : 'text-[#261C14]/70 hover:text-[#261C14] hover:bg-white/60'
            }`}
          >
            1. Desafío
          </button>
          <button
            onClick={() => setPestañaNarrativa('desarrollo')}
            className={`flex-1 py-1.5 px-2 rounded-xs text-[11px] font-mono font-semibold transition-all cursor-pointer ${
              pestañaNarrativa === 'desarrollo'
                ? 'bg-[#261C14] text-white shadow-xs'
                : 'text-[#261C14]/70 hover:text-[#261C14] hover:bg-white/60'
            }`}
          >
            2. Arquitectura
          </button>
          <button
            onClick={() => setPestañaNarrativa('desenlace')}
            className={`flex-1 py-1.5 px-2 rounded-xs text-[11px] font-mono font-semibold transition-all cursor-pointer ${
              pestañaNarrativa === 'desenlace'
                ? 'bg-[#261C14] text-white shadow-xs'
                : 'text-[#261C14]/70 hover:text-[#261C14] hover:bg-white/60'
            }`}
          >
            3. Impacto
          </button>
        </div>

        {/* Contenido Narrativo */}
        <div className="p-4 rounded-md bg-[#F9F6F0]/80 border border-[#261C14]/5 min-h-[135px] text-xs sm:text-sm leading-relaxed text-[#261C14]">
          {pestañaNarrativa === 'inicio' && (
            <div className="space-y-2 animacion-contenido-pestana">
              <p className="font-mono font-bold text-[11px] uppercase tracking-wider text-[#D27D2D]">
                {proyecto.narrativa.inicio.titulo}
              </p>
              <p className="text-[#261C14]/80">
                {proyecto.narrativa.inicio.desafio}
              </p>
            </div>
          )}

          {pestañaNarrativa === 'desarrollo' && (
            <div className="space-y-2 animacion-contenido-pestana">
              <p className="font-mono font-bold text-[11px] uppercase tracking-wider text-[#D27D2D]">
                {proyecto.narrativa.desarrollo.titulo}
              </p>
              <p className="text-[#261C14]/80">
                {proyecto.narrativa.desarrollo.arquitectura}
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#261C14]/70 pt-1">
                {proyecto.narrativa.desarrollo.aspectosClave.slice(0, 2).map((aspecto, idx) => (
                  <li key={idx}>{aspecto}</li>
                ))}
              </ul>
            </div>
          )}

          {pestañaNarrativa === 'desenlace' && (
            <div className="space-y-2 animacion-contenido-pestana">
              <p className="font-mono font-bold text-[11px] uppercase tracking-wider text-[#D27D2D]">
                {proyecto.narrativa.desenlace.titulo}
              </p>
              <p className="text-[#261C14]/80">
                {proyecto.narrativa.desenlace.impacto}
              </p>
              {proyecto.narrativa.desenlace.metricas && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proyecto.narrativa.desenlace.metricas.map((metrica, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-800 border border-emerald-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {metrica}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stack */}
        <div className="mt-4 pt-4 border-t border-[#261C14]/10 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#261C14]/60 font-bold w-24 shrink-0 flex items-center gap-1">
              <Atom className="w-3.5 h-3.5 text-[#D27D2D]" />
              Front-End:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {proyecto.tecnologiasFrontend.map((tec, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-sm bg-[#261C14]/5 border border-[#261C14]/5 text-[10px] font-mono text-[#261C14] font-semibold"
                >
                  {tec}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#261C14]/60 font-bold w-24 shrink-0 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#261C14]/70" />
              Back-End:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {proyecto.tecnologiasBackend.map((tec, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-sm bg-[#261C14]/5 border border-[#261C14]/5 text-[10px] font-mono text-[#261C14] font-semibold"
                >
                  {tec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Acciones Sleek */}
      <div className="mt-6 pt-4 border-t border-[#261C14]/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs font-bold text-[#D27D2D] uppercase tracking-wider">
          <a
            href={proyecto.enlaceRepositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center gap-1 hover:text-[#261C14] transition-colors"
          >
            <span>Ver Repositorio</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        
      </div>
    </article>
  );
};
