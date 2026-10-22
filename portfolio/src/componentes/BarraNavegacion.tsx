import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const enlaces = [
  { id: 'sobre-mi', etiqueta: 'Sobre mí' },
  { id: 'proyectos', etiqueta: 'Proyectos' },
  { id: 'stack', etiqueta: 'Stack tecnológico' },
  { id: 'idiomas', etiqueta: 'Idiomas' },
  { id: 'contacto', etiqueta: 'Contacto' },
];

/** Navegación adaptable que enlaza con las cinco secciones principales. */
export function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  /** Cierra el menú móvil después de elegir una sección. */
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#261C14]/10 bg-[#F9F6F0]/95 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8"
      >
        <a href="#sobre-mi" className="font-serif text-lg font-bold text-[#261C14] hover:text-[#D27D2D]">
          Candelaria Cinelli
        </a>
        <button
          type="button"
          className="rounded-sm p-2 text-[#261C14] md:hidden"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          {menuAbierto ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul className={`${menuAbierto ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#261C14]/10 bg-[#F9F6F0] px-6 py-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {enlaces.map((enlace) => (
            <li key={enlace.id}>
              <a
                href={`#${enlace.id}`}
                onClick={cerrarMenu}
                className="block py-2 text-sm font-semibold text-[#261C14]/80 transition-colors hover:text-[#D27D2D]"
              >
                {enlace.etiqueta}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/CVDSult.pdf"
          download="CVDSult.pdf"
          className="hidden items-center gap-2 rounded-sm bg-[#D27D2D] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#261C14] md:inline-flex"
        >
          <Download size={15} />
          Descargar CV
        </a>
      </nav>
      {menuAbierto && (
        <div className="border-b border-[#261C14]/10 bg-[#F9F6F0] px-6 pb-4 md:hidden">
          <a
            href="/CVDSult.pdf"
            download="CVDSult.pdf"
            onClick={cerrarMenu}
            className="inline-flex items-center gap-2 rounded-sm bg-[#D27D2D] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
          >
            <Download size={15} />
            Descargar CV
          </a>
        </div>
      )}
    </header>
  );
}
