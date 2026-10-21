import React from 'react';
import { LISTA_VALORES } from '../datos/datosPortafolio';
import { IconoDinamico, CheckCircle2 } from './IconosPersonalizados';

/**
 * Subsección: Mis Valores en Español
 * 4 Principios rectores de ingeniería y artesanía de software
 */

export const SeccionValores: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D27D2D] font-mono block">
          02 // Principios Rectores
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#261C14]">
          Valores de Ingeniería y Artesanía
        </h3>
        <p className="text-sm text-[#261C14]/70">
          Principios que guían cada línea de código, decisión de diseño y entrega de software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {LISTA_VALORES.map((valor, index) => {
          // Asignamos una variación estética elegante (uno oscuro contrastante, uno terracota, dos claros minimalistas)
          const esOscuro = index === 0;
          const esTerracota = index === 1;

          if (esOscuro) {
            return (
              <div
                key={valor.id}
                className="p-6 md:p-8 rounded-lg bg-[#261C14] text-[#F9F6F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#D27D2D] font-mono font-bold">
                      {valor.numero} // {valor.titulo}
                    </span>
                    <IconoDinamico nombre={valor.icono} className="w-5 h-5 text-[#D27D2D]" />
                  </div>
                  <h4 className="font-serif italic text-xl md:text-2xl text-[#F9F6F0] mb-3 leading-snug">
                    "{valor.descripcion}"
                  </h4>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {valor.puntosClave.map((punto, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-white/10 text-[10px] font-mono text-white/90"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#D27D2D]" />
                      {punto}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          if (esTerracota) {
            return (
              <div
                key={valor.id}
                className="p-6 md:p-8 rounded-lg bg-[#D27D2D]/10 border border-[#D27D2D]/20 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#D27D2D] font-mono font-bold">
                      {valor.numero} // {valor.titulo}
                    </span>
                    <IconoDinamico nombre={valor.icono} className="w-5 h-5 text-[#D27D2D]" />
                  </div>
                  <p className="font-serif text-lg md:text-xl text-[#261C14] mb-3 leading-snug">
                    {valor.descripcion}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#D27D2D]/20 flex flex-wrap gap-1.5">
                  {valor.puntosClave.map((punto, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-white/80 border border-[#D27D2D]/20 text-[10px] font-mono text-[#261C14]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#D27D2D]" />
                      {punto}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div
              key={valor.id}
              className="p-6 md:p-8 rounded-lg bg-white border border-[#261C14]/10 shadow-sm hover:border-[#D27D2D] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#261C14]/60 font-mono font-bold">
                    {valor.numero} // {valor.titulo}
                  </span>
                  <div className="p-2 rounded-md bg-[#261C14]/5 text-[#D27D2D]">
                    <IconoDinamico nombre={valor.icono} className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#261C14] mb-2">
                  {valor.titulo}
                </h4>
                <p className="text-xs sm:text-sm text-[#261C14]/75 leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#261C14]/10 flex flex-wrap gap-1.5">
                {valor.puntosClave.map((punto, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-[#F9F6F0] border border-[#261C14]/5 text-[10px] font-mono text-[#261C14]"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#D27D2D]" />
                    {punto}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
