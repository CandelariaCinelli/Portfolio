import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin, CheckCircle2, ArrowUpRight, Terminal, Sparkles, Layers, ShieldCheck, Database, Server, Atom, Box, Coffee } from './IconosPersonalizados';
import { DATOS_PERFIL } from '../datos/datosPortafolio';
import fotoPerfil from '../assets/images/foto.png';

/**
 * Sección Inicio (Hero) en Español
 * Estilo Editorial Café Minimalista
 */

interface SeccionInicioProps {
  alAbrirModalCV: () => void;
}

export const SeccionInicio: React.FC<SeccionInicioProps> = ({ alAbrirModalCV }) => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden patron-lino"
    >
      {/* Ambient Blur Circles del tema Sleek Interface */}
      <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#D27D2D]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-[250px] h-[250px] bg-[#261C14]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Información Principal Hero */}
          <div id="ContenedorHero" className="lg:col-span-7 flex flex-col items-start text-left relative">
            
            {/* Corner accent bracket geométrico */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#D27D2D] opacity-35 pointer-events-none"></div>

            {/* Tag / Badge de Ubicación y Estado */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#261C14]/5 border border-[#261C14]/10 text-xs font-mono text-[#261C14] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>{DATOS_PERFIL.ubicacion.textoCompleto}</span>
              <span className="text-[#96867B]">•</span>
              <span className="text-[#D27D2D] font-bold">Disponible</span>
            </div>

            {/* Título Principal Sleek Editorial */}
            <div className="mb-4">
              <h1
                id="titulo-principal-nombre"
                className="revelado-texto font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#261C14] leading-none mb-3"
              >
                Candelaria<br className="hidden sm:inline" /> Cinelli
              </h1>
              <p
                id="subtitulo-profesion"
                className="text-[#D27D2D] font-mono text-sm sm:text-base font-semibold tracking-wide"
              >
                Técnica en Desarrollo de Software | Especialista Full-Stack
              </p>
            </div>

            {/* Frase de Especialidad */}
            <p
              id="frase-especialidad"
              className="text-base sm:text-lg font-sans text-[#261C14]/80 leading-relaxed max-w-xl mb-8"
            >
              "{DATOS_PERFIL.fraseEspecialidad}"
            </p>

            {/* Botones de Acción Sleek Interface */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              {/* BotonDescargarCV Prominente (Canela) */}
              <button
                id="BotonDescargarCV"
                onClick={alAbrirModalCV}
                className="bg-[#D27D2D] text-[#F9F6F0] px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#261C14] transition-all shadow-sm cursor-pointer active:scale-98 inline-flex items-center gap-2"
                aria-label="Descargar curriculum vitae de Candelaria Cinelli"
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </button>

              {/* BotonVerGithub Outlined */}
              <a
                id="BotonVerGithub"
                href={DATOS_PERFIL.contacto.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#261C14] px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#261C14] hover:text-[#F9F6F0] transition-all bg-transparent inline-flex items-center gap-2 text-[#261C14] active:scale-98"
                aria-label="Ver perfil de GitHub de Candelaria Cinelli"
              >
                <Github className="w-4 h-4" />
                <span>Ver GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* Enlace LinkedIn Secundario */}
              <a
                id="enlace-hero-linkedin"
                href={DATOS_PERFIL.contacto.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 border border-[#261C14]/20 hover:border-[#261C14] hover:bg-[#261C14] hover:text-white text-[#261C14] rounded-sm transition-all"
                title="Visitar perfil de LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Herramientas Favoritas Sleek Iconic Pills */}
            <div className="pt-6 border-t border-[#261C14]/10 w-full">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#261C14]/60 mb-3 font-mono font-bold">
                Herramientas Favoritas • Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge-tecnologia inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-sm text-[11px] font-mono text-[#261C14] border border-[#261C14]/10 font-semibold shadow-2xs">
                  <Database className="icono-badge-tecnologia w-3.5 h-3.5 text-[#D27D2D]" />
                  <span>PostgreSQL</span>
                </span>
                <span className="badge-tecnologia inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-sm text-[11px] font-mono text-[#261C14] border border-[#261C14]/10 font-semibold shadow-2xs">
                  <Server className="icono-badge-tecnologia w-3.5 h-3.5 text-[#D27D2D]" />
                  <span>Spring Boot</span>
                </span>
                <span className="badge-tecnologia inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-sm text-[11px] font-mono text-[#261C14] border border-[#261C14]/10 font-semibold shadow-2xs">
                  <Atom className="icono-badge-tecnologia w-3.5 h-3.5 text-[#D27D2D]" />
                  <span>React</span>
                </span>
                <span className="badge-tecnologia inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-sm text-[11px] font-mono text-[#261C14] border border-[#261C14]/10 font-semibold shadow-2xs">
                  <Coffee className="icono-badge-tecnologia w-3.5 h-3.5 text-[#D27D2D]" />
                  <span>Java 21+</span>
                </span>
                <span className="badge-tecnologia inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-sm text-[11px] font-mono text-[#261C14] border border-[#261C14]/10 font-semibold shadow-2xs">
                  <Box className="icono-badge-tecnologia w-3.5 h-3.5 text-[#D27D2D]" />
                  <span>Docker</span>
                </span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Fotográfica y Credencial Editorial */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="marco-fotografico-hover relative w-full max-w-sm">
              
              {/* Marco Fotográfico Principal Sleek */}
              <div className="relative z-10 rounded-lg bg-white p-3 sm:p-4 border border-[#261C14]/10 sombra-editorial group transition-all duration-300 hover:sombra-editorial-hover">
                
                {/* Contenedor de la Imagen con Tonalidad Cálida */}
                <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-[#F3ECE2]">
                  <img
                    src={fotoPerfil}
                    alt="Fotografía profesional de Candelaria Cinelli"
                    id="foto-perfil-candelaria"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Gradiente sutil inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261C14]/35 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Etiqueta flotante en la foto */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-sm bg-[#261C14]/90 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-serif font-semibold">Candelaria Cinelli</p>
                      <p className="text-[11px] font-mono text-white/75">Río Tercero, Córdoba</p>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-xs bg-[#D27D2D] text-white font-bold tracking-wider">
                      Full-Stack
                    </span>
                  </div>
                </div>
              </div>

              {/* Decoración geométrica sutil */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D27D2D]/40 pointer-events-none"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#D27D2D]/40 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
