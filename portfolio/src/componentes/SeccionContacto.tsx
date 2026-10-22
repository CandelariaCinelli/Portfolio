import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { DATOS_PERFIL } from '../datos/datosPortafolio';

interface DatosFormulario {
  nombreCompleto: string;
  correoElectronico: string;
  asunto: string;
  mensaje: string;
}

const formularioVacio: DatosFormulario = {
  nombreCompleto: '',
  correoElectronico: '',
  asunto: '',
  mensaje: '',
};

/** Recupera el contacto anterior: datos directos, redes y formulario de mensajes. */
export function SeccionContacto() {
  const [datosFormulario, setDatosFormulario] = useState<DatosFormulario>(formularioVacio);
  const [correoCopiado, setCorreoCopiado] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState<string | null>(null);

  /** Copia el correo y muestra un error visible si el navegador lo impide. */
  const copiarCorreo = async () => {
    try {
      await navigator.clipboard.writeText(DATOS_PERFIL.contacto.correo);
      setCorreoCopiado(true);
      window.setTimeout(() => setCorreoCopiado(false), 2500);
    } catch {
      setErrorEnvio('No se pudo copiar el correo. Podés seleccionarlo y copiarlo manualmente.');
    }
  };

  /** Mantiene sincronizados los campos del formulario al escribir. */
  const manejarCambio = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDatosFormulario((actuales) => ({
      ...actuales,
      [evento.target.name]: evento.target.value,
    }));
  };

  /** Envía el formulario a la API de contacto y comunica el resultado. */
  const manejarEnvio = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setCargando(true);
    setErrorEnvio(null);

    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8787'}/api/contactos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosFormulario),
      });

      if (!respuesta.ok) {
        setErrorEnvio('No fue posible guardar el mensaje. Intentá nuevamente o escribime por correo.');
        return;
      }

      setFormularioEnviado(true);
      setDatosFormulario(formularioVacio);
    } catch {
      setErrorEnvio('No fue posible conectar con el formulario. Podés escribirme directamente por correo.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-[#261C14]/10 bg-[#F9F6F0] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#D27D2D]">05 // Contacto</p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#261C14] sm:text-4xl">
            Iniciemos una conversación
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#68574B] sm:text-base">
            ¿Tenés un proyecto en mente o querés conversar sobre una oportunidad? Estoy a disposición.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="space-y-3 rounded-lg border border-[#261C14]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-sm bg-[#D27D2D]/10 p-2.5 text-[#D27D2D]">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <button
                  type="button"
                  onClick={copiarCorreo}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-[#261C14]/10 px-3 py-1.5 text-xs font-semibold text-[#261C14] transition-colors hover:border-[#D27D2D] hover:text-[#A85D20]"
                >
                  {correoCopiado ? <Check size={14} /> : <Copy size={14} />}
                  {correoCopiado ? 'Copiado' : 'Copiar correo'}
                </button>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#68574B]">
                  Correo electrónico
                </p>
                <a
                  href={`mailto:${DATOS_PERFIL.contacto.correo}`}
                  className="mt-1 block break-all font-serif text-lg font-bold text-[#261C14] transition-colors hover:text-[#A85D20]"
                >
                  {DATOS_PERFIL.contacto.correo}
                </a>
              </div>
              <p className="text-xs text-[#68574B]">Escribime directamente para iniciar una conversación.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="space-y-2 rounded-lg border border-[#261C14]/10 bg-white p-5 shadow-sm">
                <span className="inline-flex rounded-sm bg-[#D27D2D]/10 p-2 text-[#D27D2D]">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#68574B]">Ubicación</p>
                <p className="font-serif text-sm font-bold text-[#261C14]">
                  {DATOS_PERFIL.ubicacion.ciudad}, {DATOS_PERFIL.ubicacion.provincia}
                </p>
                <p className="text-xs text-[#68574B]">Argentina (GMT-3)</p>
              </article>
              <article className="space-y-2 rounded-lg border border-[#261C14]/10 bg-white p-5 shadow-sm">
                <span className="inline-flex rounded-sm bg-[#D27D2D]/10 p-2 text-[#D27D2D]">
                  <Phone size={17} aria-hidden="true" />
                </span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#68574B]">Teléfono</p>
                <a
                  href={`https://wa.me/${DATOS_PERFIL.contacto.telefono.replace(/\D/g, '')}`}
                  className="font-mono text-sm font-bold text-[#261C14] transition-colors hover:text-[#A85D20]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {DATOS_PERFIL.contacto.telefonoVisual}
                </a>
                <p className="text-xs text-[#68574B]">Llamadas o WhatsApp</p>
              </article>
            </div>

            <div className="space-y-3 rounded-lg border border-[#261C14]/10 bg-white p-5 shadow-sm">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#68574B]">
                Perfiles profesionales
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={DATOS_PERFIL.contacto.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-between rounded-sm border border-[#261C14]/10 bg-[#F9F6F0] p-3 text-xs text-[#261C14] transition-colors hover:border-[#D27D2D] hover:text-[#A85D20]"
                >
                  <span className="inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={DATOS_PERFIL.contacto.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-between rounded-sm border border-[#261C14]/10 bg-[#F9F6F0] p-3 text-xs text-[#261C14] transition-colors hover:border-[#D27D2D] hover:text-[#A85D20]"
                >
                  <span className="inline-flex items-center gap-2"><Github size={16} /> GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#261C14]/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#261C14]/10 pb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#261C14]">Enviar mensaje directo</h3>
                <p className="mt-1 text-xs text-[#68574B]">Completá el formulario y me pondré en contacto.</p>
              </div>
              <span className="rounded-sm bg-[#D27D2D]/10 p-2 text-[#D27D2D]">
                <Send size={17} aria-hidden="true" />
              </span>
            </div>

            {formularioEnviado ? (
              <div className="space-y-3 rounded-md border border-emerald-200 bg-emerald-50 p-6 text-center">
                <CheckCircle2 className="mx-auto text-emerald-600" size={36} />
                <h4 className="font-serif text-lg font-bold text-emerald-900">¡Mensaje enviado con éxito!</h4>
                <p className="text-xs text-emerald-800">Gracias por ponerte en contacto. Te responderé a la brevedad.</p>
                <button
                  type="button"
                  onClick={() => setFormularioEnviado(false)}
                  className="rounded-sm bg-emerald-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-800"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={manejarEnvio} className="space-y-4">
                {errorEnvio && (
                  <p role="alert" className="rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                    {errorEnvio}
                  </p>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="nombreCompleto" className="text-xs font-medium text-[#261C14]">Nombre completo *</label>
                    <input
                      type="text"
                      id="nombreCompleto"
                      name="nombreCompleto"
                      required
                      value={datosFormulario.nombreCompleto}
                      onChange={manejarCambio}
                      placeholder="Ej. Martín Gómez"
                      className="w-full rounded-sm border border-[#261C14]/15 bg-[#F9F6F0] px-3.5 py-2.5 text-xs text-[#261C14] outline-none transition-colors placeholder:text-[#68574B]/60 focus:border-[#D27D2D] focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="correoElectronico" className="text-xs font-medium text-[#261C14]">Correo electrónico *</label>
                    <input
                      type="email"
                      id="correoElectronico"
                      name="correoElectronico"
                      required
                      value={datosFormulario.correoElectronico}
                      onChange={manejarCambio}
                      placeholder="contacto@empresa.com"
                      className="w-full rounded-sm border border-[#261C14]/15 bg-[#F9F6F0] px-3.5 py-2.5 text-xs text-[#261C14] outline-none transition-colors placeholder:text-[#68574B]/60 focus:border-[#D27D2D] focus:bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="asunto" className="text-xs font-medium text-[#261C14]">Asunto *</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    value={datosFormulario.asunto}
                    onChange={manejarCambio}
                    placeholder="Motivo de tu consulta"
                    className="w-full rounded-sm border border-[#261C14]/15 bg-[#F9F6F0] px-3.5 py-2.5 text-xs text-[#261C14] outline-none transition-colors placeholder:text-[#68574B]/60 focus:border-[#D27D2D] focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="mensaje" className="text-xs font-medium text-[#261C14]">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    value={datosFormulario.mensaje}
                    onChange={manejarCambio}
                    placeholder="Contame brevemente en qué puedo ayudarte..."
                    className="w-full resize-y rounded-sm border border-[#261C14]/15 bg-[#F9F6F0] px-3.5 py-2.5 text-xs text-[#261C14] outline-none transition-colors placeholder:text-[#68574B]/60 focus:border-[#D27D2D] focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={cargando}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#D27D2D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#A85D20] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  {cargando ? 'Enviando mensaje…' : 'Enviar mensaje'}
                  {!cargando && <Send size={14} />}
                </button>
              </form>
            )}
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#261C14]/10 pt-4 text-[11px] text-[#68574B]">
              <span>Privacidad respetada</span>
              <span>Río Tercero, Córdoba</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
