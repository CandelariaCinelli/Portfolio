import React, { useState } from 'react';
import { LISTA_HERRAMIENTAS } from '../datos/datosPortafolio';
import { IconoDinamico, Code2, Server, Atom, Database, Box, Coffee, Lock, ShieldCheck, Sparkles, CheckCircle2, ArrowUpRight } from './IconosPersonalizados';
import { CategoriaTecnologia } from '../tipos';

/**
 * Subsección: Tecnologías & Herramientas Icónicas
 * Presentación visual emblemática de Java, Spring Boot, React, PostgreSQL, Docker, etc.
 */

export const SeccionHerramientas: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<'todas' | CategoriaTecnologia>('todas');

  const categorias = [
    { id: 'todas', etiqueta: 'Todas las Tecnologías', icono: Code2, count: LISTA_HERRAMIENTAS.length },
    { id: 'backend', etiqueta: 'Backend (Java / Spring)', icono: Server, count: LISTA_HERRAMIENTAS.filter(h => h.categoria === 'backend').length },
    { id: 'frontend', etiqueta: 'Frontend (React / JS)', icono: Atom, count: LISTA_HERRAMIENTAS.filter(h => h.categoria === 'frontend').length },
    { id: 'basedatos', etiqueta: 'Bases de Datos', icono: Database, count: LISTA_HERRAMIENTAS.filter(h => h.categoria === 'basedatos').length },
    { id: 'herramientas', etiqueta: 'DevOps & Tooling', icono: Box, count: LISTA_HERRAMIENTAS.filter(h => h.categoria === 'herramientas').length },
  ];

  // 4 Pilares Fundamentales del Core Stack
  const pilaresFundamentales = [
    {
      titulo: "Java 21 y Spring Boot 3 y 4",
      rol: "Backend & APIs REST",
      icono: Server,
      color: "bg-[#D27D2D] text-white",
      borderAccent: "border-l-4 border-l-[#D27D2D]",
      badges: ["Spring Security", "JWT", "JPA/Hibernate"],
      resumen: "Backend y APIs REST"
    },
    {
      titulo: "React 18 y TypeScript",
      rol: "Frontend SPA Dinámico",
      icono: Atom,
      color: "bg-[#261C14] text-[#D27D2D]",
      borderAccent: "border-l-4 border-l-[#261C14]",
      badges: ["Context API", "React Hooks", "ES6+"],
      resumen: "Interfaces SPA dinámicas"
    },
    {
      titulo: "PostgreSQL y Modelado Relacional",
      rol: "Persistencia & Datos",
      icono: Database,
      color: "bg-[#261C14] text-white",
      borderAccent: "border-l-4 border-l-[#D27D2D]",
      badges: ["SQL Puro", "Índices", "Mapeo ORM"],
      resumen: "Persistencia y datos relacionales"
    },
    {
      titulo: "Testing Riguroso y DevOps",
      rol: "Calidad de Software",
      icono: ShieldCheck,
      color: "bg-[#D27D2D] text-white",
      borderAccent: "border-l-4 border-l-[#261C14]",
      badges: ["JUnit 5", "Mockito", "Docker Containers"],
      resumen: "Calidad y despliegue"
    }
  ];

  const herramientasFiltradas = LISTA_HERRAMIENTAS.filter((herramienta) => {
    if (categoriaActiva === 'todas') return true;
    return herramienta.categoria === categoriaActiva;
  });

  return (
    <div className="space-y-10">
      
      {/* Encabezado de la Subsección */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D27D2D] font-mono block">
            03 // Stack Tecnológico
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#261C14]">
            Tecnologías y Herramientas de Ingeniería
          </h3>
          <p className="text-sm text-[#261C14]/70 max-w-2xl">
            Dominio técnico consolidado en el ecosistema Java empresarial y frontend moderno, respaldado por prácticas de código limpio y testing continuo.
          </p>
        </div>
      </div>

      {/* Bento Grid: 4 Pilares del Core Stack Emblemático */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pilaresFundamentales.map((pilar, idx) => {
          const IconoPilar = pilar.icono;
          return (
            <div
              key={idx}
              className={`p-5 rounded-lg bg-white border border-[#261C14]/10 ${pilar.borderAccent} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${pilar.color} shadow-xs group-hover:scale-105 transition-transform`}>
                    <IconoPilar className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D27D2D] font-bold">
                    Pilar 0{idx + 1}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#261C14]/60 font-semibold block">
                    {pilar.rol}
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#261C14] group-hover:text-[#D27D2D] transition-colors">
                    {pilar.titulo}
                  </h4>
                </div>

                <p className="text-xs text-[#261C14]/75 leading-relaxed font-sans">
                  {pilar.resumen}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#261C14]/10 flex flex-wrap gap-1.5">
                {pilar.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2 py-0.5 rounded-xs bg-[#261C14]/5 text-[#261C14] text-[10px] font-mono font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Barra de Filtros por Categoría */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#261C14]/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#261C14]">
              Explorar Catálogo Completo:
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D] font-bold">
              {herramientasFiltradas.length} Herramientas
            </span>
          </div>

          {/* Botones de Filtro */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-sm border border-[#261C14]/10">
            {categorias.map((cat) => {
              const Icono = cat.icono;
              const esActivo = categoriaActiva === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id as any)}
                  className={`px-3 py-1.5 rounded-xs text-[11px] font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    esActivo
                      ? 'bg-[#261C14] text-white shadow-xs'
                      : 'text-[#261C14]/70 hover:text-[#261C14] hover:bg-[#F3ECE2]'
                  }`}
                >
                  <Icono className={`w-3.5 h-3.5 ${esActivo ? 'text-[#D27D2D]' : 'text-[#261C14]/60'}`} />
                  <span>{cat.etiqueta}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grilla Icónica de Herramientas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {herramientasFiltradas.map((herramienta) => (
            <div
              key={herramienta.id}
              className="p-5 rounded-lg bg-white border border-[#261C14]/10 hover:border-[#D27D2D] shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Marca de agua decorativa sutil con la categoría */}
              <div className="absolute top-2 right-2 opacity-5 pointer-events-none font-mono text-3xl font-bold uppercase text-[#261C14]">
                {herramienta.categoria}
              </div>

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#F9F6F0] border border-[#261C14]/10 text-[#D27D2D] group-hover:bg-[#D27D2D] group-hover:text-white transition-colors flex items-center justify-center shadow-xs shrink-0">
                      <IconoDinamico nombre={herramienta.iconoNombre} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#261C14] group-hover:text-[#D27D2D] transition-colors leading-tight">
                        {herramienta.nombre}
                      </h4>
                      <span className="text-[10px] font-mono text-[#261C14]/60 uppercase tracking-widest block mt-0.5">
                        {herramienta.categoria}
                      </span>
                    </div>
                  </div>

                </div>

                <p className="text-xs text-[#261C14]/75 leading-relaxed mb-3 font-sans">
                  {herramienta.descripcionCorta}
                </p>
              </div>

              <div className="pt-3 border-t border-[#261C14]/10 bg-[#F9F6F0]/50 -mx-5 -mb-5 px-5 pb-4 mt-2">
                <div className="flex items-start gap-1.5 text-[11px] font-mono text-[#261C14]/80">
                  <span className="text-[#D27D2D] font-bold shrink-0">★</span>
                  <span><strong className="text-[#261C14] font-semibold">Aplicación:</strong> {herramienta.proposito}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
