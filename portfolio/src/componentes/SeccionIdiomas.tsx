import { BookOpen, Globe2 } from 'lucide-react';

const idiomas = [
  { nombre: 'Español', nivel: 'Nativo', sigla: 'ES' },
  { nombre: 'Inglés', nivel: 'Intermedio', sigla: 'EN' },
];

/** Muestra los idiomas y el nivel de competencia de forma directa y accesible. */
export function SeccionIdiomas() {
  return (
    <section id="idiomas" className="scroll-mt-20 border-b border-[#261C14]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#D27D2D]">04 // Idiomas</p>
          
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {idiomas.map((idioma) => (
            <article key={idioma.nombre} className="flex items-center gap-4 rounded-lg border border-[#261C14]/10 bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#D27D2D]/10 font-mono font-bold text-[#D27D2D]">
                {idioma.sigla}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold">{idioma.nombre}</h3>
                <p className="text-sm text-[#261C14]/70">{idioma.nivel}</p>
              </div>
              {idioma.nombre === 'Español'
                ? <Globe2 className="text-[#D27D2D]" aria-hidden="true" />
                : <BookOpen className="text-[#D27D2D]" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
