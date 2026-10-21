import React from 'react';
import { EXPERIENCIA_EMPRENDIMIENTO } from '../datos/datosPortafolio';
import { Sparkles, CheckCircle2, ShoppingCart, TrendingUp, Users, ArrowUpRight } from './IconosPersonalizados';

/**
 * Subsección: Toque Personal en Español
 * Destaca la experiencia emprendedora como fundadora de marroquinería de diseño
 */

export const SeccionToquePersonal: React.FC = () => {
  return (
    <div className="p-6 md:p-8 rounded-lg bg-[#D27D2D]/10 border border-[#D27D2D]/20 shadow-sm relative overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D27D2D]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Columna Izquierda: Historia y Métricas */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D27D2D] font-mono block">
            04 // Trayectoria y Emprendimiento
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#261C14]">
            {EXPERIENCIA_EMPRENDIMIENTO.rol}
          </h3>

          <p className="text-xs font-mono text-[#261C14]/70">
            {EXPERIENCIA_EMPRENDIMIENTO.organizacion} • {EXPERIENCIA_EMPRENDIMIENTO.ubicacion} ({EXPERIENCIA_EMPRENDIMIENTO.periodo})
          </p>

          <p className="text-sm text-[#261C14]/85 leading-relaxed">
            Desde 2015 dirijo mi propio emprendimiento de marroquinería en Río Tercero, Córdoba. Esta vivencia no solo fortaleció mi creatividad artesanal, sino que fue el catalizador que me impulsó hacia el desarrollo de software: al digitalizar catálogos, optimizar la experiencia del comprador y gestionar pedidos, descubrí mi pasión por construir sistemas eficientes y elegantes.
          </p>

          {/* Lista de responsabilidades */}
          <div className="space-y-2 pt-2">
            {EXPERIENCIA_EMPRENDIMIENTO.responsabilidades.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#261C14]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D27D2D] mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Tarjetas de Habilidades Transferibles */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-md bg-white/80 border border-[#D27D2D]/20 space-y-1.5 shadow-xs">
            <div className="flex items-center gap-2 text-[#D27D2D]">
              <TrendingUp className="w-4 h-4" />
              <span className="font-mono text-base font-bold">+100 Ventas</span>
            </div>
            <p className="text-xs text-[#261C14] font-bold uppercase tracking-wider">Comercio Digital</p>
            <p className="text-[11px] text-[#261C14]/70">Gestión integral mediante plataformas web y atención omnicanal.</p>
          </div>

          <div className="p-4 rounded-md bg-white/80 border border-[#D27D2D]/20 space-y-1.5 shadow-xs">
            <div className="flex items-center gap-2 text-[#261C14]">
              <ShoppingCart className="w-4 h-4 text-[#D27D2D]" />
              <span className="font-mono text-base font-bold">+50 Artículos</span>
            </div>
            <p className="text-xs text-[#261C14] font-bold uppercase tracking-wider">Catálogo Optimizado</p>
            
          </div>

          <div className="p-4 rounded-md bg-white/80 border border-[#D27D2D]/20 space-y-1.5 sm:col-span-2 shadow-xs">
            <div className="flex items-center gap-2 text-[#D27D2D]">
              <Users className="w-4 h-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">Habilidad Transferible Clave</span>
            </div>
            <p className="text-xs text-[#261C14] font-bold">Visión de Negocio & Empatía con el Usuario</p>
            <p className="text-[11px] text-[#261C14]/70">
              Comprender el negocio desde adentro me permite programar funcionalidades que resuelven problemas genuinos de los usuarios.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
