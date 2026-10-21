import React from 'react';
import { SeccionValores } from './SeccionValores';
import { SeccionHerramientas } from './SeccionHerramientas';
import { SeccionToquePersonal } from './SeccionToquePersonal';
import { EDUCACION_FORMACION, DATOS_PERFIL } from '../datos/datosPortafolio';
import { Compass, GraduationCap, Globe2, BookOpen, CheckCircle2 } from './IconosPersonalizados';

/**
 * Sección Sobre Mí en Español
 * Integra Mis Valores, Herramientas Favoritas, Toque Personal y Formación
 */

export const SeccionSobreMi: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-[#F9F6F0] relative border-t border-[#261C14]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-16">
        
        {/* Encabezado Principal de la Sección */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D27D2D] font-mono block">
            02 // Perfil y Metodología
          </span>
          <h2
            id="titulo-seccion-sobre-mi"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261C14] tracking-tight"
          >
            Sobre Mí y Filosofía de Desarrollo
          </h2>
          <p className="text-sm sm:text-base text-[#261C14]/70 font-sans leading-relaxed">
            {DATOS_PERFIL.resumenProfesional}
          </p>
        </div>

        {/* 1. Subsección: Mis Valores */}
        <SeccionValores />

        {/* 2. Subsección: Herramientas Favoritas */}
        <SeccionHerramientas />

        {/* 3. Subsección: Toque Personal (Emprendimiento de Marroquinería) */}
        <SeccionToquePersonal />

        {/* 4. Subsección: Idiomas & Comunicación Técnica */}
        <div className="p-6 md:p-8 rounded-lg bg-white border border-[#261C14]/10 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#261C14]/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D27D2D] font-bold">
                  05 // Comunicación y Alcance
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#261C14]">
                  Idiomas de Trabajo
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono uppercase text-[#261C14]/60 tracking-wider hidden sm:inline-block">
              Capacidad de Colaboración
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EDUCACION_FORMACION.idiomas.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-md bg-[#F9F6F0] border border-[#261C14]/10 flex items-center justify-between gap-4 group hover:border-[#D27D2D] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-white border border-[#261C14]/10 flex items-center justify-center font-serif font-bold text-sm text-[#D27D2D] shadow-xs">
                    {item.idioma === 'Español' ? 'ES' : 'EN'}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#261C14]">
                      {item.idioma}
                    </h4>
                    <p className="text-xs font-mono text-[#261C14]/70">
                      {item.nivel}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-xs bg-[#261C14]/5 border border-[#261C14]/10 text-[11px] font-mono font-semibold text-[#261C14]">
                  {item.idioma === 'Español' ? 'Nativo' : 'Técnico'}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-xs font-mono text-[#261C14]/70 flex items-center gap-2">
            <span className="text-[#D27D2D] font-bold">•</span>
            <span>Lectura, comprensión y redacción fluida de documentación técnica internacional, RFCs y estándares de arquitectura de software.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
