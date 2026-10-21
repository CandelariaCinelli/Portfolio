import React, { useState, useEffect } from 'react';
import {  Download, Mail, Github, Linkedin, Menu, X, ArrowUpRight } from './IconosPersonalizados';
import { DATOS_PERFIL } from '../datos/datosPortafolio';

/**
 * Barra de Navegación Fija en Español
 * Estilo Café Minimalista & Editorial Tech
 */

interface BarraNavegacionProps {
  alAbrirModalCV: () => void;
}

export const BarraNavegacion: React.FC<BarraNavegacionProps> = ({ alAbrirModalCV }) => {
  const [desplazado, setDesplazado] = useState(false);
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  useEffect(() => {
    const manejarDesplazamiento = () => {
      if (window.scrollY > 20) {
        setDesplazado(true);
      } else {
        setDesplazado(false);
      }

      const secciones = ['inicio', 'proyectos', 'sobre-mi', 'contacto'];
      const scrollActual = window.scrollY + 120;

      for (const seccion of secciones) {
        const elemento = document.getElementById(seccion);
        if (elemento) {
          const top = elemento.offsetTop;
          const height = elemento.offsetHeight;
          if (scrollActual >= top && scrollActual < top + height) {
            setSeccionActiva(seccion);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', manejarDesplazamiento);
    return () => window.removeEventListener('scroll', manejarDesplazamiento);
  }, []);

  const enlacesNavegacion = [
    { id: 'inicio', etiqueta: 'Inicio', href: '#inicio' },
    { id: 'proyectos', etiqueta: 'Proyectos', href: '#proyectos' },
    { id: 'sobre-mi', etiqueta: 'Sobre Mí', href: '#sobre-mi' },
    { id: 'contacto', etiqueta: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="barra-navegacion-superior"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        desplazado
          ? 'bg-[#F9F6F0]/90 backdrop-blur-md border-b border-[#E5DACB]/80 py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Identidad editorial sin monograma */}
        <a
          href="#inicio"
          id="enlace-logo-inicio"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Ir al inicio del portafolio"
        >
          <div className="flex flex-col">
            <span className="font-serif italic text-lg sm:text-xl font-bold text-[#261C14] group-hover:text-[#D27D2D] transition-colors leading-tight">
              Candelaria Cinelli
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#D27D2D] font-bold">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Navegación de Escritorio Fija Arriba a la Derecha */}
        <nav id="navegacion-escritorio" className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
          <ul className="flex items-center gap-8">
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.id}>
                <a
                  href={enlace.href}
                  id={`enlace-nav-${enlace.id}`}
                  className={`relative py-1 transition-colors duration-200 ${
                    seccionActiva === enlace.id
                      ? 'text-[#D27D2D]'
                      : 'text-[#261C14]/80 hover:text-[#D27D2D]'
                  }`}
                >
                  {enlace.etiqueta}
                  {seccionActiva === enlace.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D27D2D]"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-[#261C14]/15"></div>

          {/* Botón Descargar CV CTA Sleek */}
          <button
            id="BotonDescargarCV-Nav"
            onClick={alAbrirModalCV}
            className="inline-flex items-center gap-2 bg-[#D27D2D] text-[#F9F6F0] px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#261C14] transition-all shadow-xs cursor-pointer active:scale-95"
            aria-label="Ver y descargar Curriculum Vitae"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar CV</span>
          </button>
        </nav>

        {/* Botón Menú Móvil */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            id="BotonDescargarCV-Nav-Movil"
            onClick={alAbrirModalCV}
            className="p-2 bg-[#D27D2D] text-[#F9F6F0] rounded-sm text-xs"
            aria-label="Descargar CV"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            id="boton-menu-movil"
            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            className="p-2 text-[#261C14] hover:bg-[#F3ECE2] rounded-sm transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {menuMovilAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {menuMovilAbierto && (
        <div
          id="menu-desplegable-movil"
          className="md:hidden bg-[#F9F6F0] border-b border-[#E5DACB] px-6 py-5 shadow-lg animate-in slide-in-from-top-2"
        >
          <ul className="flex flex-col gap-3.5">
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.id}>
                <a
                  href={enlace.href}
                  onClick={() => setMenuMovilAbierto(false)}
                  className={`block py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                    seccionActiva === enlace.id
                      ? 'bg-[#F3ECE2] text-[#D27D2D] font-semibold'
                      : 'text-[#261C14] hover:bg-[#F3ECE2]/60'
                  }`}
                >
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-[#E5DACB]">
              <button
                onClick={() => {
                  setMenuMovilAbierto(false);
                  alAbrirModalCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#D27D2D] text-white text-sm font-semibold rounded-lg shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Ver y Descargar CV</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
