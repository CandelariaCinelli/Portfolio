import {
  Atom,
  Box,
  BrainCircuit,
  Bot,
  Code2,
  Coffee,
  Database,
  FileCode2,
  Github,
  GitBranch,
  LayoutGrid,
  Layers3,
  LockKeyhole,
  Network,
  Palette,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  TableProperties,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { categoriasTecnologicas } from '../datos/contenidoPortafolio';

const iconosCategoria = {
  Frontend: Code2,
  Backend: Server,
  'Bases de datos': Database,
  DevOps: GitBranch,
  'Inteligencia Artificial': BrainCircuit,
};

const iconosTecnologia: Record<string, LucideIcon> = {
  React: Atom,
  TypeScript: FileCode2,
  JavaScript: FileCode2,
  Vite: Zap,
  'Tailwind CSS': Palette,
  Bootstrap: LayoutGrid,
  Java: Coffee,
  'Spring Boot': Server,
  'Spring Security': ShieldCheck,
  'APIs REST': Network,
  JWT: LockKeyhole,
  'JPA / Hibernate': Database,
  PostgreSQL: Database,
  SQLite: Database,
  MySQL: Database,
  SQL: TableProperties,
  Git: GitBranch,
  GitHub: Github,
  Docker: Box,
  Postman: Send,
  'Agentes de IA': Bot,
  'Programación de skills': Sparkles,
  'SDD: Software Design & Development': Layers3,
};

/** Selecciona un icono asociado a la tecnología o usa el de su categoría. */
function obtenerIconoTecnologia(tecnologia: string, IconoCategoria: LucideIcon) {
  return iconosTecnologia[tecnologia] ?? IconoCategoria;
}

/** Organiza las tecnologías por área y destaca IA, skills y diseño de software. */
export function SeccionStack() {
  return (
    <section id="stack" className="scroll-mt-20 border-b border-[#261C14]/10 bg-[#F3ECE2]/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#D27D2D]">03 // Stack tecnológico</p>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Herramientas para construir</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#261C14]/70 sm:text-base">
            Tecnologías organizadas por área de trabajo, desde interfaces y servicios hasta datos y entrega.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoriasTecnologicas.map((categoria) => {
            const IconoCategoria = iconosCategoria[categoria.nombre];
            const esCategoriaIA = categoria.nombre === 'Inteligencia Artificial';
            return (
              <article
                key={categoria.nombre}
                className="rounded-lg border border-[#261C14]/10 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
                    <IconoCategoria size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-lg font-bold">{categoria.nombre}</h3>
                  {esCategoriaIA && <Sparkles size={16} className="ml-auto text-[#D27D2D]" aria-hidden="true" />}
                </div>
                {esCategoriaIA && (
                  <p className="mb-4 text-sm leading-relaxed text-[#261C14]/75">
                    Enfoque en agentes de IA, creación y programación de skills, y SDD
                    (Software Design &amp; Development) aplicado al diseño y desarrollo de software.
                  </p>
                )}
                <ul className="flex flex-wrap gap-2">
                  {categoria.tecnologias.map((tecnologia) => {
                    const IconoTecnologia = obtenerIconoTecnologia(tecnologia, IconoCategoria);
                    return (
                      <li
                        key={tecnologia}
                        className="inline-flex items-center gap-1.5 rounded-sm border border-[#261C14]/10 bg-[#F9F6F0] px-2.5 py-1.5 text-xs font-medium text-[#261C14]"
                      >
                        <IconoTecnologia size={13} className="text-[#D27D2D]" aria-hidden="true" />
                        {tecnologia}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
