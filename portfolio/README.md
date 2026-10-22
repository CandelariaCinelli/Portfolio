# Portafolio de Candelaria Cinelli

Sitio personal para presentar mi perfil como Técnica en Desarrollo de Software, mis proyectos, tecnologías y canales de contacto. Está construido con React y TypeScript, con componentes modulares y una identidad visual editorial en tonos café cálidos.

## Secciones

En el sitio se presentan, en este orden:

1. **Sobre mí:** perfil profesional, principios de trabajo, enlaces y descarga del currículum.
2. **Proyectos:** cinco aplicaciones con capturas, descripción, tecnologías y enlaces a sus repositorios. Las imágenes se pueden ampliar desde cada tarjeta.
3. **Stack tecnológico:** herramientas agrupadas en Frontend, Backend, Bases de datos, DevOps e Inteligencia Artificial. Esta última sección destaca agentes de IA, programación de skills y SDD (Software Design & Development).
4. **Idiomas:** español nativo e inglés intermedio.
5. **Contacto:** correo, teléfono, ubicación, perfiles profesionales y formulario de contacto.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS 4
- Lucide React para iconografía

## Requisitos

- Node.js y npm

## Instalación y desarrollo

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Vite inicia el servidor de desarrollo en `http://localhost:3000`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Comprueba los tipos de TypeScript. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión de producción. |
| `npm run server` | Inicia el servidor auxiliar definido en `server.cjs`. |

## Estructura principal

```text
src/
├── componentes/       # Navegación y secciones de la página
├── datos/             # Contenido de proyectos, principios y tecnologías
├── assets/images/     # Fotografía del perfil
├── App.tsx            # Composición y orden de las secciones
└── index.css          # Estilos globales y tema visual
assets/                # Imágenes de los proyectos
public/CVDSult.pdf     # Currículum descargable
```

El contenido de los proyectos, sus capturas, tecnologías y enlaces se mantiene en `src/datos/contenidoPortafolio.ts`. Los canales de contacto se configuran en `src/datos/datosPortafolio.ts`.

## Formulario de contacto

El formulario envía los mensajes mediante `POST /api/contactos`. Por defecto intenta conectarse a `http://localhost:8787`; para apuntar a otra instancia se puede definir la variable de entorno `VITE_API_URL`.

## Identidad visual y accesibilidad

La interfaz usa fondos marfil (`#F9F6F0`), tipografía café oscuro (`#261C14`) y acentos canela (`#D27D2D`). La navegación se adapta a pantallas móviles, las imágenes de proyectos disponen de una vista ampliada y los controles principales incluyen etiquetas accesibles.
