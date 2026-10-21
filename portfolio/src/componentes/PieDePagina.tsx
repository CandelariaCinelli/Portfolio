import React from 'react';
import {  Heart, Github, Linkedin, Mail, ArrowUp } from './IconosPersonalizados';
import { DATOS_PERFIL } from '../datos/datosPortafolio';

/**
 * Pie de Página Editorial en Español
 */

interface PieDePaginaProps {
  alAbrirModalCV: () => void;
}

export const PieDePagina: React.FC<PieDePaginaProps> = ({ alAbrirModalCV }) => {
  const subirAlInicio = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="pie-de-pagina" className="bg-[#261C14] text-[#F9F6F0] py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
          
          {/* Columna de Marca y Monograma */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
          
              <div>
                <span className="font-serif font-bold text-lg text-white block">
                  {DATOS_PERFIL.nombreCompleto}
                </span>
                <span className="text-xs font-mono text-[#F9F6F0]/70">
                  {DATOS_PERFIL.profesion}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#F9F6F0]/80 leading-relaxed font-sans max-w-sm">
              "{DATOS_PERFIL.fraseEspecialidad}"
            </p>
          </div>

          {/* Navegación Rápida */}
          <div className="md:col-span-3 space-y-2 text-xs font-mono">
            <p className="text-[#D27D2D] font-bold uppercase tracking-widest mb-2">
              SECCIONES
            </p>
            <ul className="space-y-1.5 text-[#F9F6F0]/80">
              <li><a href="#inicio" className="hover:text-[#D27D2D] transition-colors">01 // Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-[#D27D2D] transition-colors">02 // Proyectos</a></li>
              <li><a href="#sobre-mi" className="hover:text-[#D27D2D] transition-colors">03 // Sobre Mí</a></li>
              <li><a href="#contacto" className="hover:text-[#D27D2D] transition-colors">04 // Contacto</a></li>
              <li className="pt-1">
                <button
                  onClick={alAbrirModalCV}
                  className="text-[#D27D2D] hover:underline cursor-pointer uppercase tracking-wider font-semibold"
                >
                  Descargar CV [PDF]
                </button>
              </li>
            </ul>
          </div>

          {/* Ubicación y Enlaces */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <p className="text-[#D27D2D] font-mono font-bold uppercase tracking-widest">
              UBICACIÓN & REDES
            </p>
            <p className="text-[#F9F6F0]/80 font-sans">
              {DATOS_PERFIL.ubicacion.textoCompleto}
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={DATOS_PERFIL.contacto.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-white/10 hover:bg-[#D27D2D] text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={DATOS_PERFIL.contacto.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-white/10 hover:bg-[#D27D2D] text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${DATOS_PERFIL.contacto.correo}`}
                className="p-2 rounded-sm bg-white/10 hover:bg-[#D27D2D] text-white transition-colors"
                aria-label="Correo"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Barra de Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F9F6F0]/60">
          <p>
            © {new Date().getFullYear()} Candelaria Cinelli. Software Development Technician.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={subirAlInicio}
              className="inline-flex items-center gap-1 text-[#D27D2D] hover:underline cursor-pointer uppercase tracking-wider font-bold"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
