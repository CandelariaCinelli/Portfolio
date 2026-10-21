import React, { useState } from 'react';
import { LISTA_PROYECTOS } from '../datos/datosPortafolio';
import { TarjetaProyectoCarrito } from './TarjetaProyectoCarrito';
import { TarjetaProyectoUsuarios } from './TarjetaProyectoUsuarios';
import { TarjetaProyectoCiudadana } from './TarjetaProyectoCiudadana';
import { Layers, Terminal, Sparkles, Filter } from './IconosPersonalizados';

/**
 * Sección Proyectos: Arquitectura Full-Stack en Español
 * Muestra las tarjetas con narrativa técnica (Inicio, Desarrollo, Desenlace)
 */

interface SeccionProyectosProps {
  alAbrirDemoCarrito: () => void;
  alAbrirModalArquitectura: (tituloProyecto?: string, idProyecto?: string) => void;
}

export const SeccionProyectos: React.FC<SeccionProyectosProps> = ({
  alAbrirDemoCarrito,
  alAbrirModalArquitectura
}) => {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState<string>('todos');

  const proyectosFiltrados = LISTA_PROYECTOS.filter((proyecto) => {
    if (filtroSeleccionado === 'todos') return true;
    if (filtroSeleccionado === 'backend') return proyecto.tecnologiasBackend.length > 0;
    if (filtroSeleccionado === 'frontend') return proyecto.tecnologiasFrontend.length > 0;
    return true;
  });

  const proyectoCarrito = LISTA_PROYECTOS.find((p) => p.codigoIdentificador === 'TarjetaProyectoCarrito')!;
  const proyectoUsuarios = LISTA_PROYECTOS.find((p) => p.codigoIdentificador === 'TarjetaProyectoUsuarios')!;
  const proyectoCiudadana = LISTA_PROYECTOS.find((p) => p.codigoIdentificador === 'TarjetaProyectoCiudadana')!;

  return (
    <section id="proyectos" className="py-20 md:py-28 bg-[#F9F6F0] border-t border-[#261C14]/10 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D27D2D] font-mono block">
              01 // Proyectos Destacados
            </span>
            <h2
              id="titulo-seccion-proyectos"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261C14] tracking-tight"
            >
              Arquitectura y Código
            </h2>
            <p className="text-sm sm:text-base text-[#261C14]/70 font-sans leading-relaxed">
              Cada solución documentada mediante una narrativa estructurada: el desafío inicial, las decisiones de arquitectura e implementación, y el impacto medible.
            </p>
          </div>

          {/* Filtros de proyectos Sleek */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-sm border border-[#261C14]/10 self-start md:self-auto">
            <button
              onClick={() => setFiltroSeleccionado('todos')}
              className={`px-3.5 py-1.5 rounded-xs text-[11px] font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                filtroSeleccionado === 'todos'
                  ? 'bg-[#261C14] text-white shadow-xs'
                  : 'text-[#261C14]/70 hover:text-[#261C14]'
              }`}
            >
              Todos ({LISTA_PROYECTOS.length})
            </button>
            <button
              onClick={() => setFiltroSeleccionado('backend')}
              className={`px-3.5 py-1.5 rounded-xs text-[11px] font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                filtroSeleccionado === 'backend'
                  ? 'bg-[#261C14] text-white shadow-xs'
                  : 'text-[#261C14]/70 hover:text-[#261C14]'
              }`}
            >
              Spring Boot
            </button>
            <button
              onClick={() => setFiltroSeleccionado('frontend')}
              className={`px-3.5 py-1.5 rounded-xs text-[11px] font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                filtroSeleccionado === 'frontend'
                  ? 'bg-[#261C14] text-white shadow-xs'
                  : 'text-[#261C14]/70 hover:text-[#261C14]'
              }`}
            >
              React y SPA
            </button>
          </div>
        </div>

        {/* Grilla de Tarjetas de Proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tarjeta 1: Carrito de Compras */}
          {proyectoCarrito && (filtroSeleccionado === 'todos' || filtroSeleccionado === 'frontend') && (
            <TarjetaProyectoCarrito
              proyecto={proyectoCarrito}
              alAbrirDemo={alAbrirDemoCarrito}
            />
          )}

          {/* Tarjeta 2: Gestión de Usuarios Full-Stack */}
          {proyectoUsuarios && (filtroSeleccionado === 'todos' || filtroSeleccionado === 'backend') && (
            <TarjetaProyectoUsuarios
              proyecto={proyectoUsuarios}
              alAbrirArquitectura={() => alAbrirModalArquitectura(proyectoUsuarios.titulo, proyectoUsuarios.id)}
            />
          )}

          {/* Tarjeta 3: App de Participación Ciudadana */}
          {proyectoCiudadana && (filtroSeleccionado === 'todos' || filtroSeleccionado === 'frontend') && (
            <div className="lg:col-span-2">
              <TarjetaProyectoCiudadana
                proyecto={proyectoCiudadana}
                alAbrirArquitectura={() => alAbrirModalArquitectura(proyectoCiudadana.titulo, proyectoCiudadana.id)}
              />
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
