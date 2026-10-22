import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Atom,
  CloudSun,
  Code2,
  Database,
  Expand,
  Github,
  KeyRound,
  MapPin,
  Server,
  Smartphone,
  X,
} from 'lucide-react';
import type { MouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import { proyectos } from '../datos/contenidoPortafolio';

const iconosTecnologia: Record<string, LucideIcon> = {
  'React Native': Smartphone,
  Expo: Atom,
  OpenWeatherMap: CloudSun,
  Geolocalización: MapPin,
  TypeScript: Code2,
  SQLite: Database,
  'Spring Boot': Server,
  JWT: KeyRound,
  React: Atom,
  Vite: Code2,
  JavaScript: Code2,
  'React Hooks': Activity,
  Bootstrap: Code2,
  CSS3: Code2,
  Java: Code2,
  'Spring Security': KeyRound,
  PostgreSQL: Database,
};

/** Muestra tarjetas de proyectos y permite ampliar sus imágenes en un visor. */
export function SeccionProyectos() {
  const [proyectoActivo, setProyectoActivo] = useState<(typeof proyectos)[number] | null>(null);

  useEffect(() => {
    if (!proyectoActivo) return;

    /** Cierra el visor con Escape y evita que el fondo se desplace. */
    const cerrarConEscape = (evento: globalThis.KeyboardEvent) => {
      if (evento.key === 'Escape') setProyectoActivo(null);
    };
    const desbordamientoAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', cerrarConEscape);

    return () => {
      document.body.style.overflow = desbordamientoAnterior;
      window.removeEventListener('keydown', cerrarConEscape);
    };
  }, [proyectoActivo]);

  /** Evita que el enlace externo active además la ampliación de la tarjeta. */
  const detenerAperturaDeTarjeta = (evento: MouseEvent<HTMLAnchorElement>) => {
    evento.stopPropagation();
  };

  return (
    <section id="proyectos" className="scroll-mt-20 border-b border-[#261C14]/10 bg-[#F9F6F0] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#D27D2D]">02 // Proyectos</p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#261C14] sm:text-5xl">Proyectos destacados</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#68574B] sm:text-base">
            Aplicaciones y plataformas que convierten necesidades reales en soluciones digitales.
            Seleccioná una tarjeta para ampliar la imagen.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto, indice) => (
            <article
              key={proyecto.repositorio}
              onClick={() => setProyectoActivo(proyecto)}
              className="group flex cursor-zoom-in flex-col overflow-hidden rounded-lg border border-[#261C14]/10 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D27D2D]/40 hover:shadow-lg"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#F3ECE2] p-4 sm:h-72">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.textoImagen}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  loading={indice < 2 ? 'eager' : 'lazy'}
                />
                <button
                  type="button"
                  onClick={() => setProyectoActivo(proyecto)}
                  aria-label={`Ampliar imagen de ${proyecto.titulo}`}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-sm border border-[#261C14]/10 bg-[#F9F6F0]/95 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#261C14] shadow-sm transition-colors hover:border-[#D27D2D] hover:text-[#A85D20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D27D2D]"
                >
                  <Expand size={13} className="text-[#D27D2D]" />
                  Ampliar imagen
                </button>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-bold text-[#261C14] transition-colors group-hover:text-[#A85D20]">
                  {proyecto.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#68574B]">{proyecto.descripcion}</p>
                <ul aria-label={`Tecnologías de ${proyecto.titulo}`} className="mt-4 flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tecnologia) => {
                    const IconoTecnologia = iconosTecnologia[tecnologia] ?? Code2;
                    return (
                      <li
                        key={tecnologia}
                        className="inline-flex items-center gap-1.5 rounded-sm border border-[#261C14]/10 bg-[#F9F6F0] px-2 py-1 text-[11px] font-medium text-[#68574B]"
                      >
                        <IconoTecnologia size={13} className="text-[#B8671E]" aria-hidden="true" />
                        {tecnologia}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href={proyecto.repositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={detenerAperturaDeTarjeta}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#261C14] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F9F6F0] transition-colors hover:bg-[#A85D20]"
                  aria-label={`Ver el repositorio de ${proyecto.titulo} en GitHub`}
                >
                  <Github size={16} />
                  Ver repositorio
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {proyectoActivo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#261C14]/85 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onClick={(evento) => {
            if (evento.target === evento.currentTarget) setProyectoActivo(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-proyecto-ampliado"
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-[#F9F6F0]/20 bg-[#F9F6F0] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#261C14]/10 px-5 py-4 sm:px-6">
              <div>
                <h2 id="titulo-proyecto-ampliado" className="font-serif text-lg font-bold text-[#261C14] sm:text-xl">
                  {proyectoActivo.titulo}
                </h2>
                <p className="mt-1 text-xs text-[#68574B]">Vista ampliada del proyecto</p>
              </div>
              <button
                type="button"
                onClick={() => setProyectoActivo(null)}
                aria-label="Cerrar imagen ampliada"
                autoFocus
                className="rounded-sm border border-[#261C14]/10 bg-white p-2 text-[#261C14] transition-colors hover:bg-[#F3ECE2]"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#F3ECE2] p-3 sm:p-6">
              <img
                src={proyectoActivo.imagen}
                alt={proyectoActivo.textoImagen}
                className="max-h-[72vh] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
