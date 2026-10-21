import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle2, Copy, Check, ArrowUpRight, Sparkles } from './IconosPersonalizados';
import { DATOS_PERFIL } from '../datos/datosPortafolio';
import { FormularioContactoDatos } from '../tipos';

/**
 * Sección Contacto en Español
 * Tarjeta de contacto minimalista con formulario y copiado rápido
 */

export const SeccionContacto: React.FC = () => {
  const [datosFormulario, setDatosFormulario] = useState<FormularioContactoDatos>({
    nombreCompleto: '',
    correoElectronico: '',
    asunto: '',
    mensaje: ''
  });
  const [correoCopiado, setCorreoCopiado] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState<string | null>(null);

  const copiarCorreo = () => {
    navigator.clipboard.writeText(DATOS_PERFIL.contacto.correo);
    setCorreoCopiado(true);
    setTimeout(() => setCorreoCopiado(false), 2500);
  };

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setErrorEnvio(null);

    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8787'}/api/contactos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosFormulario)
      });

      if (!respuesta.ok) {
        setErrorEnvio('No fue posible guardar el mensaje. Verificá que la API y PostgreSQL estén activos.');
        return;
      }

      setFormularioEnviado(true);
      setDatosFormulario({
        nombreCompleto: '',
        correoElectronico: '',
        asunto: '',
        mensaje: ''
      });
    } catch {
      setErrorEnvio('No fue posible conectar con la API de contacto.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#F9F6F0] border-t border-[#261C14]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Encabezado */}
        <div className="max-w-2xl space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D27D2D] font-mono block">
            05 // Contacto Directo & Propuestas
          </span>
          <h2
            id="titulo-seccion-contacto"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261C14] tracking-tight"
          >
            Iniciemos una Conversación
          </h2>
          <p className="text-sm sm:text-base text-[#261C14]/70 font-sans leading-relaxed">
            ¿Tenés un proyecto en mente, una vacante para desarrollador Full-Stack o querés charlar sobre arquitectura de software? Estoy a disposición.
          </p>
        </div>

        {/* Tarjeta de Contacto Principal (Minimalista y Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Columna Izquierda: Tarjetas de Información de Contacto */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Tarjeta de Correo Electrónico Principal */}
            <div className="p-6 rounded-lg bg-white border border-[#261C14]/10 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copiarCorreo}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border border-[#261C14]/10 hover:border-[#D27D2D] text-xs font-mono uppercase tracking-wider text-[#261C14] hover:text-[#D27D2D] transition-colors cursor-pointer"
                  title="Copiar correo al portapapeles"
                >
                  {correoCopiado ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{correoCopiado ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#261C14]/60 font-bold">
                  CORREO ELECTRÓNICO
                </p>
                <a
                  href={`mailto:${DATOS_PERFIL.contacto.correo}`}
                  className="font-serif text-lg font-bold text-[#261C14] hover:text-[#D27D2D] transition-colors block mt-0.5"
                >
                  {DATOS_PERFIL.contacto.correo}
                </a>
              </div>
              <p className="text-xs text-[#261C14]/70">
                Respuesta garantizada en menos de 24 horas hábiles.
              </p>
            </div>

            {/* Tarjeta de Ubicación y Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-lg bg-white border border-[#261C14]/10 shadow-sm space-y-2">
                <div className="p-2 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D] w-fit">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#261C14]/60 font-bold">UBICACIÓN</p>
                  <p className="font-serif font-bold text-sm text-[#261C14]">
                    {DATOS_PERFIL.ubicacion.ciudad}, {DATOS_PERFIL.ubicacion.provincia}
                  </p>
                  <p className="text-xs text-[#261C14]/70">Argentina (GMT-3)</p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#261C14]/10 shadow-sm space-y-2">
                <div className="p-2 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D] w-fit">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#261C14]/60 font-bold">TELÉFONO</p>
                  <p className="font-mono font-bold text-sm text-[#261C14]">
                    {DATOS_PERFIL.contacto.telefono}
                  </p>
                  <p className="text-xs text-[#261C14]/70">Llamadas o WhatsApp</p>
                </div>
              </div>

            </div>

            {/* Redes y Perfiles Profesionales */}
            <div className="p-5 rounded-lg bg-white border border-[#261C14]/10 shadow-sm space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#261C14]/60 font-bold">
                PERFILES EN PLATAFORMAS PROFESIONALES
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={DATOS_PERFIL.contacto.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-between p-3 rounded-sm bg-[#F9F6F0] hover:bg-[#D27D2D]/10 border border-[#261C14]/10 text-xs font-mono text-[#261C14] hover:text-[#D27D2D] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#D27D2D]" />
                    <span className="font-semibold">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={DATOS_PERFIL.contacto.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-between p-3 rounded-sm bg-[#F9F6F0] hover:bg-[#D27D2D]/10 border border-[#261C14]/10 text-xs font-mono text-[#261C14] hover:text-[#D27D2D] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#261C14]" />
                    <span className="font-semibold">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario de Mensaje */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-[#261C14]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#261C14]/10">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#261C14]">
                    Enviar Mensaje Directo
                  </h3>
                  <p className="text-xs font-sans text-[#261C14]/70">
                    Completá el formulario para coordinar una reunión o entrevista técnica.
                  </p>
                </div>
                <div className="p-2 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
                  <Send className="w-4 h-4" />
                </div>
              </div>

              {formularioEnviado ? (
                <div className="p-6 rounded-md bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    ¡Mensaje registrado con éxito!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Gracias por ponerte en contacto. Candelaria revisará tu mensaje y se comunicará a la brevedad.
                  </p>
                  <button
                    onClick={() => setFormularioEnviado(false)}
                    className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-sm text-xs font-mono uppercase tracking-wider cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={manejarEnvio} className="space-y-4">
                  {errorEnvio && (
                    <p className="rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                      {errorEnvio}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="nombreCompleto" className="text-xs font-mono font-medium text-[#261C14]">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombreCompleto"
                        name="nombreCompleto"
                        required
                        value={datosFormulario.nombreCompleto}
                        onChange={manejarCambio}
                        placeholder="Ej. Martín Gómez"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#F9F6F0] border border-[#261C14]/15 focus:border-[#D27D2D] focus:bg-white text-xs font-sans text-[#261C14] placeholder-[#261C14]/40 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="correoElectronico" className="text-xs font-mono font-medium text-[#261C14]">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="correoElectronico"
                        name="correoElectronico"
                        required
                        value={datosFormulario.correoElectronico}
                        onChange={manejarCambio}
                        placeholder="Ej. contacto@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#F9F6F0] border border-[#261C14]/15 focus:border-[#D27D2D] focus:bg-white text-xs font-sans text-[#261C14] placeholder-[#261C14]/40 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="asunto" className="text-xs font-mono font-medium text-[#261C14]">
                      Asunto de la Consulta *
                    </label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      required
                      value={datosFormulario.asunto}
                      onChange={manejarCambio}
                      placeholder="Ej. Propuesta para rol Full-Stack Java / React"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#F9F6F0] border border-[#261C14]/15 focus:border-[#D27D2D] focus:bg-white text-xs font-sans text-[#261C14] placeholder-[#261C14]/40 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="mensaje" className="text-xs font-mono font-medium text-[#261C14]">
                      Mensaje o Descripción del Proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      value={datosFormulario.mensaje}
                      onChange={manejarCambio}
                      placeholder="Hola Candelaria, nos gustaría conversar sobre..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#F9F6F0] border border-[#261C14]/15 focus:border-[#D27D2D] focus:bg-white text-xs font-sans text-[#261C14] placeholder-[#261C14]/40 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={cargando}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#D27D2D] hover:bg-[#b8671e] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-xs transition-all duration-200 cursor-pointer active:scale-98"
                    >
                      {cargando ? (
                        <span>Enviando mensaje...</span>
                      ) : (
                        <>
                          <span>Enviar Mensaje</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#261C14]/10 flex items-center justify-between text-[11px] font-mono text-[#261C14]/60">
              <span>🔒 Privacidad garantizada</span>
              <span>Río Tercero, Córdoba</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
