import { ArrowDown, Download, Github, Layers3, Linkedin, Lightbulb, ShieldCheck } from 'lucide-react';
import fotoPerfil from '../assets/images/foto.png';
import { principios } from '../datos/contenidoPortafolio';
import type { LucideIcon } from 'lucide-react';

const iconosPrincipios = {
  'Arquitectura clara': Layers3,
  'Soluciones centradas en las personas': Lightbulb,
  'Calidad y mejora continua': ShieldCheck,
} satisfies Record<(typeof principios)[number]['titulo'], LucideIcon>;

/** Expone el perfil profesional y los principios que guían el trabajo de desarrollo. */
export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 border-b border-[#261C14]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)] md:gap-16">
          <div>
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#D27D2D]">01 // Sobre mí</p>
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Tecnología con propósito</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#261C14]/75">
              Soy Técnica en Desarrollo de Software y desarrolladora integral. Disfruto diseñar y construir
              aplicaciones web y móviles, desde una arquitectura clara hasta una experiencia sencilla para las personas.
              Me interesa crear soluciones robustas, mantenibles y preparadas para crecer.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#261C14]/70">
              Trabajo principalmente con Java y Spring Boot en backend, y React y TypeScript en frontend. También
              exploro cómo integrar agentes de IA y prácticas de diseño de software en el proceso de desarrollo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#stack"
                className="inline-flex items-center gap-2 rounded-sm bg-[#D27D2D] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#261C14]"
              >
                Conocer mi stack <ArrowDown size={15} />
              </a>
              <a
                href="/CVDSult.pdf"
                download="CVDSult.pdf"
                className="inline-flex items-center gap-2 rounded-sm border border-[#261C14]/20 bg-white px-4 py-3 text-xs font-semibold text-[#261C14] transition-colors hover:border-[#D27D2D] hover:text-[#A85D20]"
              >
                <Download size={16} /> Descargar CV
              </a>
              <a
                href="https://github.com/CandelariaCinelli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar GitHub de Candelaria Cinelli"
                className="inline-flex items-center gap-2 rounded-sm border border-[#261C14]/20 px-4 py-3 text-xs font-semibold text-[#261C14] transition-colors hover:border-[#D27D2D] hover:text-[#D27D2D]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/candelaria-cinelli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar LinkedIn de Candelaria Cinelli"
                className="inline-flex items-center gap-2 rounded-sm border border-[#261C14]/20 px-4 py-3 text-xs font-semibold text-[#261C14] transition-colors hover:border-[#D27D2D] hover:text-[#D27D2D]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-lg border border-[#261C14]/10 bg-white p-3 shadow-sm">
              <img
                src={fotoPerfil}
                alt="Retrato de Candelaria Cinelli"
                className="mx-auto aspect-[4/5] w-full rounded-md bg-[#F3ECE2] object-cover object-center"
                loading="lazy"
              />
              <p className="mt-3 rounded-md bg-[#D27D2D] px-4 py-3 text-center font-serif text-sm font-bold uppercase tracking-wider text-white shadow-sm sm:text-base">
                Técnica en Desarrollo de Software
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {principios.map((principio) => {
            const Icono = iconosPrincipios[principio.titulo];
            return (
              <article key={principio.titulo} className="rounded-lg border border-[#261C14]/10 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
                  <Icono size={20} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold">{principio.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#261C14]/70">{principio.descripcion}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
