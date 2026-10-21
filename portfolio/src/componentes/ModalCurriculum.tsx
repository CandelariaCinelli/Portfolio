import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from './IconosPersonalizados';
import { DATOS_PERFIL, EXPERIENCIA_EMPRENDIMIENTO, EDUCACION_FORMACION } from '../datos/datosPortafolio';

/**
 * Modal Visor de Curriculum Vitae Oficial en Español
 * Formato editorial limpio y listo para impresión/descarga en PDF
 */

interface ModalCurriculumProps {
  estaAbierto: boolean;
  alCerrar: () => void;
}

export const ModalCurriculum: React.FC<ModalCurriculumProps> = ({ estaAbierto, alCerrar }) => {
  const [copiado, setCopiado] = useState(false);

  if (!estaAbierto) return null;

  const copiarResumen = () => {
    const textoCV = `CANDELARIA CINELLI - Técnica en Desarrollo de Software | Especialista Full-Stack
Río Tercero, Córdoba, Argentina | ${DATOS_PERFIL.contacto.telefono} | ${DATOS_PERFIL.contacto.correo}
LinkedIn: ${DATOS_PERFIL.contacto.linkedinUrl} | GitHub: ${DATOS_PERFIL.contacto.githubUrl}

PERFIL PROFESIONAL:
${DATOS_PERFIL.resumenProfesional}

COMPETENCIAS TÉCNICAS:
- Backend: Java, Spring Boot, Spring Security, JPA/Hibernate, APIs REST, JWT, JUnit 5, Mockito.
- Frontend: React, JavaScript ES6+, Redux, Context API, React Hooks, Bootstrap, Tailwind CSS.
- Bases de Datos: PostgreSQL, MySQL, SQL Relacional.
- DevOps y Herramientas: Git, GitHub, Docker, Postman, AWS EC2, AWS S3, Maven.

EDUCACIÓN:
Tecnicatura en Desarrollo de Software - Universidad Nacional de Córdoba (En curso).`;

    navigator.clipboard.writeText(textoCV);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  const imprimirCV = () => {
    window.print();
  };

  return (
    <div
      id="modal-cv-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#261C14]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={alCerrar}
    >
      <div
        id="modal-cv-contenido"
        className="relative w-full max-w-4xl bg-[#F9F6F0] rounded-lg border border-[#261C14]/20 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de Herramientas Superior */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#261C14]/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#D27D2D]/10 text-[#D27D2D]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#261C14]">
                Curriculum Vitae • Candelaria Cinelli
              </h3>
              <p className="text-xs text-[#261C14]/60 font-mono">
                Documento Profesional Oficial • Formato Editorial
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={copiarResumen}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#261C14]/15 hover:border-[#D27D2D] text-xs font-mono uppercase tracking-wider text-[#261C14] hover:text-[#D27D2D] bg-white transition-colors cursor-pointer"
              title="Copiar texto del resumen"
            >
              {copiado ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiado ? 'Copiado' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={imprimirCV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#D27D2D] hover:bg-[#B8671E] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={alCerrar}
              className="p-1.5 rounded-sm text-[#261C14]/60 hover:text-[#261C14] hover:bg-[#261C14]/5 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hoja del Curriculum */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 bg-white space-y-8 print:p-0">
          
          {/* Encabezado del CV */}
          <div className="border-b-2 border-[#261C14] pb-6">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#261C14] tracking-tight uppercase">
              Candelaria Cinelli
            </h1>
            <p className="text-sm md:text-base font-mono text-[#D27D2D] font-semibold mt-1">
              Técnica en Desarrollo de Software | Especialista Full-Stack (Java & React)
            </p>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs font-mono text-[#68574B]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D27D2D]" />
                Río Tercero, Córdoba, Argentina
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#D27D2D]" />
                +54 351 2723233
              </span>
              <span>•</span>
              <a href={`mailto:${DATOS_PERFIL.contacto.correo}`} className="flex items-center gap-1 hover:text-[#D27D2D]">
                <Mail className="w-3.5 h-3.5 text-[#D27D2D]" />
                {DATOS_PERFIL.contacto.correo}
              </a>
              <span>•</span>
              <a href={DATOS_PERFIL.contacto.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#D27D2D]">
                <Linkedin className="w-3.5 h-3.5 text-[#D27D2D]" />
                linkedin.com/in/candelaria-cinelli
              </a>
              <span>•</span>
              <a href={DATOS_PERFIL.contacto.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#D27D2D]">
                <Github className="w-3.5 h-3.5 text-[#D27D2D]" />
                github.com/CandelariaCinelli
              </a>
            </div>
          </div>

          {/* Perfil Profesional */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#261C14] font-bold border-b border-[#E5DACB] pb-1">
              PERFIL PROFESIONAL
            </h2>
            <p className="text-sm text-[#382C23] leading-relaxed text-justify">
              Estudiante avanzada de la Tecnicatura en Desarrollo de Software con sólida experiencia práctica en desarrollo de aplicaciones web y APIs REST. Perfil orientado a Backend Java y desarrollo Full Stack, con conocimientos en Java, Spring Boot, Spring Security, JPA/Hibernate, React, JavaScript, Redux, SQL y herramientas de testing. Experiencia desarrollando arquitecturas por capas, integrando frontend y backend mediante servicios REST y trabajando con autenticación y autorización mediante JWT. Actualmente profundizando el desarrollo Full Stack con React y Spring Boot mediante proyectos prácticos y formación especializada.
            </p>
          </div>

          {/* Competencias Técnicas */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#261C14] font-bold border-b border-[#E5DACB] pb-1">
              COMPETENCIAS TÉCNICAS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#F9F6F0] border border-[#E5DACB]">
                <p className="font-semibold text-[#261C14] mb-1 font-mono">Backend:</p>
                <p className="text-[#68574B]">Java, Spring Boot, Spring Security, Spring Data JPA, JPA/Hibernate, APIs REST, Arquitectura en capas, JWT, CRUD.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F9F6F0] border border-[#E5DACB]">
                <p className="font-semibold text-[#261C14] mb-1 font-mono">Frontend:</p>
                <p className="text-[#68574B]">React, JavaScript ES6+, Redux, React Hooks, Context API, React Router, HTML5, CSS3, Bootstrap, Tailwind.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F9F6F0] border border-[#E5DACB]">
                <p className="font-semibold text-[#261C14] mb-1 font-mono">Bases de Datos & Testing:</p>
                <p className="text-[#68574B]">PostgreSQL, MySQL, SQL | JUnit 5, Mockito, Pruebas unitarias y de integración, Testcontainers.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F9F6F0] border border-[#E5DACB]">
                <p className="font-semibold text-[#261C14] mb-1 font-mono">Herramientas & Cloud:</p>
                <p className="text-[#68574B]">Git, GitHub, Docker, AWS EC2, AWS S3, Postman, Maven.</p>
              </div>
            </div>
          </div>

          {/* Experiencia en Desarrollo */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#261C14] font-bold border-b border-[#E5DACB] pb-1">
              EXPERIENCIA EN DESARROLLO
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex items-center justify-between font-semibold text-[#261C14]">
                  <span>Desarrollo de aplicaciones web y APIs REST</span>
                  <span className="font-mono text-[#D27D2D]">2025 - Actualidad | Remoto</span>
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-[#68574B] leading-relaxed pl-1">
                  <li>Desarrollo de APIs REST con arquitectura en capas utilizando Java y Spring Boot.</li>
                  <li>Implementación de autenticación con Spring Security y JWT y autorización basada en roles (RBAC).</li>
                  <li>Desarrollo de operaciones CRUD y persistencia de datos utilizando JPA/Hibernate con PostgreSQL.</li>
                  <li>Implementación de pruebas unitarias y de integración con JUnit 5 y Mockito, alcanzando cobertura del 80%.</li>
                  <li>Optimización de persistencia de datos, logrando tiempos de respuesta inferiores a 200 ms en operaciones CRUD.</li>
                  <li>Desarrollo de aplicaciones SPA con React para gestión de productos y carrito de compras con estado predecible.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Proyectos Destacados */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#261C14] font-bold border-b border-[#E5DACB] pb-1">
              PROYECTOS DESTACADOS
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex items-center justify-between font-semibold text-[#261C14]">
                  <span>Proyecto Full Stack – React + Spring Boot</span>
                  <span className="font-mono text-[#D27D2D]">2026</span>
                </div>
                <p className="text-[#68574B] mt-0.5">
                  Integración completa frontend-backend con Redux, Spring Boot, JPA/Hibernate y base relacional PostgreSQL con manejo de formularios y validaciones avanzadas.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-semibold text-[#261C14]">
                  <span>App de Participación Ciudadana – Full Stack</span>
                  <span className="font-mono text-[#D27D2D]">2026 - Actualidad</span>
                </div>
                <p className="text-[#68574B] mt-0.5">
                  Diseño de arquitectura Full Stack para la gestión de votaciones ciudadanas en Almafuerte. Proyecto actualmente en construcción.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-semibold text-[#261C14]">
                  <span>SPA de Carrito de Compras – React</span>
                  <span className="font-mono text-[#D27D2D]">2025 - Actualidad</span>
                </div>
                <p className="text-[#68574B] mt-0.5">
                  Single Page Application para gestión reactiva de productos, cantidades y totales mediante Context API y almacenamiento local.
                </p>
              </div>
            </div>
          </div>

          {/* Emprendimiento */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#261C14] font-bold border-b border-[#E5DACB] pb-1">
              EXPERIENCIA EMPRENDEDORA
            </h2>
            <div className="text-xs">
              <div className="flex items-center justify-between font-semibold text-[#261C14]">
                <span>Fundadora – Emprendimiento de Marroquinería de Diseño</span>
                <span className="font-mono text-[#D27D2D]">2015 - Actualidad | Río Tercero</span>
              </div>
              <ul className="list-disc list-inside mt-1.5 space-y-1 text-[#68574B] pl-1">
                <li>Gestión de más de 100 ventas concretadas a través de plataformas digitales.</li>
                <li>Publicación y optimización de catálogo de más de 50 productos.</li>
                <li>Implementación de herramientas digitales para organización de pedidos, inventario y seguimiento.</li>
              </ul>
            </div>
          </div>

          {/* Idiomas */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#261C14] font-bold border-b border-[#E5DACB] pb-1">
              IDIOMAS & COMUNICACIÓN
            </h2>
            <div className="text-xs space-y-1">
              <p className="text-[#68574B]">
                <strong className="text-[#261C14]">Español:</strong> Nativo | <strong className="text-[#261C14]">Inglés:</strong> Intermedio en desarrollo técnico (lectura fluida de documentación técnica y estándares de arquitectura).
              </p>
            </div>
          </div>

        </div>

        {/* Pie del Modal */}
        <div className="px-6 py-3 bg-[#F9F6F0] border-t border-[#E5DACB] flex items-center justify-between text-xs font-mono text-[#68574B]">
          <span>© Candelaria Cinelli • Río Tercero, Córdoba</span>
          <button
            onClick={alCerrar}
            className="px-4 py-1.5 bg-[#261C14] text-white hover:bg-[#D27D2D] rounded-lg transition-colors cursor-pointer"
          >
            Cerrar Visor
          </button>
        </div>

      </div>
    </div>
  );
};
