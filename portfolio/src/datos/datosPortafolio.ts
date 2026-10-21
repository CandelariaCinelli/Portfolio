import { ProyectoArquitectura, HerramientaTecnica, ValorProfesional, ExperienciaLaboral } from '../tipos';

/**
 * Datos estructurados y textos del portafolio en español
 * Perfil profesional de Candelaria Cinelli
 */

export const DATOS_PERFIL = {
  nombreCompleto: "Candelaria Cinelli",
  edad: 32,
  profesion: "Técnica en Desarrollo de Software",
  especialidad: "Especialista Full-Stack",
  fraseEspecialidad: "Creando soluciones robustas de extremo a extremo con arquitectura limpia.",
  resumenProfesional: "Estudiante avanzada de la Tecnicatura en Desarrollo de Software en la Universidad Nacional de Córdoba con sólida experiencia práctica en desarrollo backend con Java y Spring Boot, y frontend dinámico con React. Especializada en arquitecturas limpias por capas, seguridad JWT, bases de datos PostgreSQL y pruebas de software automatizadas.",
  ubicacion: {
    ciudad: "Río Tercero",
    provincia: "Córdoba",
    pais: "Argentina",
    textoCompleto: "Río Tercero, Córdoba, Argentina"
  },
  contacto: {
    correo: "caande.cba@gmail.com",
    telefono: "+54 351 2723233",
    telefonoVisual: "351 272-3233",
    linkedinUrl: "https://linkedin.com/in/candelaria-cinelli/",
    githubUrl: "https://github.com/CandelariaCinelli",
    ubicacionGoogleMaps: "https://maps.google.com/?q=Rio+Tercero+Cordoba+Argentina"
  },
  metricasClave: [

    { valor: "+100", etiqueta: "Ventas Digitales", detalle: "Emprendimiento propio" },
    { valor: "Full-Stack", etiqueta: "Especialidad", detalle: "Java y React" }
  ]
};

export const LISTA_PROYECTOS: ProyectoArquitectura[] = [
  {
    id: "proyecto-carrito",
    codigoIdentificador: "TarjetaProyectoCarrito",
    titulo: "Aplicación SPA Carrito de Compras",
    subtitulo: "Single Page Application con gestión de estado avanzada y persistencia",
    etiquetaTipo: "Frontend React y Persistencia",
    año: "2026",
    narrativa: {
      inicio: {
        titulo: "El Desafío (Inicio)",
        desafio: "Desarrollar una aplicación de comercio digital ágil, intuitiva y tolerante a fallos que permita a los usuarios gestionar su compra en tiempo real sin recargas innecesarias de página, manteniendo el estado de cantidades y precios de forma confiable."
      },
      desarrollo: {
        titulo: "Arquitectura y Solución (Desarrollo)",
        arquitectura: "Construida bajo el paradigma de componentes funcionales de React, aprovechando React Context API y hooks personalizados para una sincronización reactiva del carrito, cálculo automático de importes y almacenamiento local estructurado.",
        aspectosClave: [
          "Manejo centralizado de catálogo de productos, cantidades y totales de compra",
          "Mecanismo reactivo de alta, baja, modificación y validación de stock disponible",
          "Diseño responsivo y adaptativo desarrollado con Bootstrap y estilos personalizados",
          "Persistencia de sesión en el navegador garantizando retención de estado"
        ]
      },
      desenlace: {
        titulo: "Impacto y Resultado (Desenlace)",
        impacto: "Una experiencia de usuario instantánea y fluida con cero tiempos de espera en cálculo de totales, interfaz clara accesible y modularidad de componentes lista para escalar a pasarelas de pago.",
        
      }
    },
    tecnologiasFrontend: ["React", "Bootstrap", "JavaScript ES6+", "CSS3", "React Hooks"],
    tecnologiasBackend: ["React Context API", "Persistencia Local", "Estado Global"],
    enlaceRepositorio: "https://github.com/CandelariaCinelli/shopping-cart-project",
    enlaceDemoEnVivo: "#demo-carrito",
    esDemoInteractivaDisponible: false,
    esArquitecturaBackendDisponible: true
  },
  {
    id: "proyecto-usuarios",
    codigoIdentificador: "TarjetaProyectoUsuarios",
    titulo: "Gestión de Usuarios Full-Stack",
    subtitulo: "API REST segura y panel administrativo con arquitectura multicapa",
    etiquetaTipo: "Full-Stack Java y Spring Boot",
    año: "2026",
    narrativa: {
      inicio: {
        titulo: "El Desafío (Inicio)",
        desafio: "Implementar un sistema robusto de administración de identidades y usuarios empresariales que cumpla con los estándares más estrictos de seguridad, autorización basada en roles (RBAC) y alta velocidad de procesamiento en base de datos relacional."
      },
      desarrollo: {
        titulo: "Arquitectura y Solución (Desarrollo)",
        arquitectura: "Arquitectura en capas (Controlador REST -> Servicio de Negocio -> Repositorio Spring Data JPA -> PostgreSQL) con autenticación JWT sin estado, cifrado de credenciales con BCrypt y manejo de excepciones global.",
        aspectosClave: [
          "Autenticación segura con Spring Security y tokens firmados JWT con tiempo de expiración",
          "Control de acceso basado en roles (Administrador, Operador, Usuario estándar)",
          "Mapeo objeto-relacional de alto rendimiento mediante JPA y Hibernate con PostgreSQL",
          "Suite de pruebas automatizadas con JUnit 5 y Mockito logrando 80% de cobertura de código",
          "Panel administrativo reactivo en frontend con React, validación de formularios y React Router"
        ]
      },
      desenlace: {
        titulo: "Impacto y Resultado (Desenlace)",
        impacto: "Tiempos de respuesta de base de datos inferiores a 200 ms en consultas complejas y transacciones seguras con total trazabilidad y desacoplamiento estructural.",
        
      }
    },
    tecnologiasFrontend: ["React", "React Hooks", "Redux", "React Router", "Consumo REST"],
    tecnologiasBackend: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "Hibernate"],
    tecnologiasBasesDatos: ["PostgreSQL", "SQL Relacional"],
    enlaceRepositorio: "https://github.com/CandelariaCinelli/springboot-react-user-app",
    esDemoInteractivaDisponible: false,
    esArquitecturaBackendDisponible: true
  },
  {
    id: "proyecto-ciudadana",
    codigoIdentificador: "TarjetaProyectoCiudadana",
    titulo: "App de Participación Ciudadana",
    subtitulo: "Proyecto en construcción para Almafuerte, basado en la plataforma AlmaVota",
    etiquetaTipo: "Full-Stack en construcción",
    año: "2026 - Actualidad",
    narrativa: {
      inicio: {
        titulo: "El Desafío (Inicio)",
        desafio: "Proyecto en construcción basado en AlmaVota para gestionar iniciativas y votaciones de participación ciudadana en Almafuerte."
      },
      desarrollo: {
        titulo: "Arquitectura y Solución (Desarrollo)",
        arquitectura: "La implementación parte del proyecto AlmaVota, con backend Spring Boot y frontend React, y se encuentra en construcción.",
        aspectosClave: [
          "Diseño de arquitectura de servicios asíncronos para absorber picos de tráfico en votación",
          "Dashboard de visualización de estadísticas y avances de propuestas en tiempo real",
          "Modelado de datos estricto para evitar duplicidad o manipulación de resultados"
        ]
      },
      desenlace: {
        titulo: "Impacto y Resultado (Desenlace)",
        impacto: "Un modelo de software público moderno que democratiza la toma de decisiones comunitarias con total integridad y simpleza para cualquier ciudadano.",
      
      }
    },
    tecnologiasFrontend: ["React", "Tailwind CSS", "Visualización de Datos"],
    tecnologiasBackend: ["Spring Boot", "Java", "APIs Asíncronas", "JPA/Hibernate"],
    tecnologiasBasesDatos: ["PostgreSQL", "Transacciones ACID"],
    enlaceRepositorio: "https://github.com/CandelariaCinelli/participacion-ciudadana-almafuerte",
    esDemoInteractivaDisponible: false,
    esArquitecturaBackendDisponible: true
  }
];

export const LISTA_VALORES: ValorProfesional[] = [
  {
    id: "valor-arquitectura",
    numero: "01",
    titulo: "Arquitectura Limpia y Desacoplamiento",
    descripcion: "Estructuración en capas bien definidas que separan la lógica de negocio, la persistencia y la presentación. Código legible, fácil de mantener y preparado para evolucionar.",
    puntosClave: ["Diseño guiado por responsabilidades", "Inversión de dependencias", "Mantenibilidad a largo plazo"],
    icono: "Layers"
  },
  {
    id: "valor-calidad",
    numero: "02",
    titulo: "Calidad de Código y Testing Riguroso",
    descripcion: "El testing automatizado no es opcional: con JUnit 5 y Mockito aseguro más del 80% de cobertura, previniendo regresiones y garantizando contratos de API estables.",
    puntosClave: ["Pruebas unitarias y de integración", "Manejo exhaustivo de errores", "Tiempos de respuesta <200ms"],
    icono: "ShieldCheck"
  },
  {
    id: "valor-usuario",
    numero: "03",
    titulo: "Enfoque Centrado en el Usuario",
    descripcion: "La excelencia técnica en el backend cobra vida a través de interfaces intuitivas, rápidas y accesibles. Cada pantalla debe ser clara, sin fricciones ni sobrecarga cognitiva.",
    puntosClave: ["Experiencias fluidas y reactivas", "Accesibilidad y contraste WCAG", "Diseño responsivo impecable"],
    icono: "Sparkles"
  },
  {
    id: "valor-proactividad",
    numero: "04",
    titulo: "Mentalidad Emprendedora y Solución Práctica",
    descripcion: "Más de 9 años liderando mi propio emprendimiento me otorgaron visión de negocio, pragmatismo, orientación a resultados tangibles y capacidad para conectar tecnología con necesidades reales.",
    puntosClave: ["Orientación al valor de negocio", "Comunicación empática", "Resolución autónoma de problemas"],
    icono: "Compass"
  }
];

export const LISTA_HERRAMIENTAS: HerramientaTecnica[] = [
  // Backend
  {
    id: "java",
    nombre: "Java",
    categoria: "backend",
    descripcionCorta: "Lenguaje principal para desarrollo backend robusto y estructurado.",
    proposito: "Programación orientada a objetos, tipos seguros y lógica de negocio empresarial.",
    iconoNombre: "Coffee",
    destacada: true
  },
  {
    id: "spring-boot",
    nombre: "Spring Boot",
    categoria: "backend",
    descripcionCorta: "Framework predilecto para microservicios y APIs REST escalables.",
    proposito: "Inyección de dependencias, configuración ágil y despliegue modular.",
    iconoNombre: "Server",
    destacada: true
  },
  {
    id: "spring-security",
    nombre: "Spring Security y JWT",
    categoria: "backend",
    descripcionCorta: "Capa de seguridad, autorización RBAC y tokens criptográficos.",
    proposito: "Protección de endpoints, hashing de credenciales y sesiones sin estado.",
    iconoNombre: "Lock",
    destacada: true
  },
  {
    id: "jpa-hibernate",
    nombre: "JPA / Hibernate",
    categoria: "backend",
    descripcionCorta: "Mapeo objeto-relacional y persistencia declarativa de datos.",
    proposito: "Consultas optimizadas, relaciones entre entidades y transaccionalidad.",
    iconoNombre: "Database",
    destacada: true
  },
  {
    id: "junit-mockito",
    nombre: "JUnit 5 y Mockito",
    categoria: "backend",
    descripcionCorta: "Pruebas unitarias e integración con cobertura del 80%.",
    proposito: "Aseguramiento de calidad, mocks de servicios y validación continua.",
    iconoNombre: "CheckCircle2",
    destacada: true
  },

  // Frontend
  {
    id: "react",
    nombre: "React",
    categoria: "frontend",
    descripcionCorta: "Biblioteca para interfaces de usuario dinámicas y reactivas.",
    proposito: "Componentes reutilizables, hooks personalizados y renderizado óptimo.",
    iconoNombre: "Atom",
    destacada: true
  },
  {
    id: "javascript",
    nombre: "JavaScript (ES6+)",
    categoria: "frontend",
    descripcionCorta: "Programación moderna con asincronía, promesas y módulos.",
    proposito: "Lógica interactiva del lado del cliente y consumo de APIs REST.",
    iconoNombre: "FileCode2",
    destacada: true
  },
  {
    id: "redux-context",
    nombre: "Redux y Context API",
    categoria: "frontend",
    descripcionCorta: "Gestión global predecible del estado en aplicaciones complejas.",
    proposito: "Flujo unidireccional de datos y sincronización de componentes.",
    iconoNombre: "Cpu",
    destacada: false
  },
  {
    id: "bootstrap-tailwind",
    nombre: "Bootstrap y Tailwind CSS",
    categoria: "frontend",
    descripcionCorta: "Sistemas de diseño responsivos y maquetación de alto nivel.",
    proposito: "Estilizado semántico, grids adaptables y accesibilidad visual.",
    iconoNombre: "Layout",
    destacada: false
  },

  // Bases de Datos
  {
    id: "postgresql",
    nombre: "PostgreSQL",
    categoria: "basedatos",
    descripcionCorta: "Motor relacional potente, confiable y de alto rendimiento.",
    proposito: "Modelado relacional, integridad referencial y consultas complejas.",
    iconoNombre: "DatabaseZap",
    destacada: true
  },
  {
    id: "mysql-sql",
    nombre: "MySQL y SQL",
    categoria: "basedatos",
    descripcionCorta: "Diseño de esquemas, normalización y optimización de índices.",
    proposito: "Transacciones CRUD eficientes y consistencia de datos.",
    iconoNombre: "TableProperties",
    destacada: false
  },

  // Herramientas & DevOps
  {
    id: "git-github",
    nombre: "Git y GitHub",
    categoria: "herramientas",
    descripcionCorta: "Control de versiones distribuido y flujos de trabajo colaborativos.",
    proposito: "Gestión de ramas, revisiones de código e integración continua.",
    iconoNombre: "GitBranch",
    destacada: true
  },
  {
    id: "docker",
    nombre: "Docker",
    categoria: "herramientas",
    descripcionCorta: "Contenedores para entornos reproducibles y despliegue ágil.",
    proposito: "Empaquetado de aplicaciones Spring Boot y bases de datos PostgreSQL.",
    iconoNombre: "Box",
    destacada: true
  },
  {
    id: "postman",
    nombre: "Postman",
    categoria: "herramientas",
    descripcionCorta: "Pruebas exhaustivas, documentación y diseño de APIs REST.",
    proposito: "Validación de contratos, simulación de cargas y tests de endpoints.",
    iconoNombre: "Send",
    destacada: true
  },
  {
    id: "aws-cloud",
    nombre: "AWS (EC2 y S3)",
    categoria: "herramientas",
    descripcionCorta: "Infraestructura cloud para cómputo y almacenamiento seguro.",
    proposito: "Despliegue de instancias y almacenamiento de recursos estáticos.",
    iconoNombre: "Cloud",
    destacada: false
  }
];

export const EXPERIENCIA_EMPRENDIMIENTO: ExperienciaLaboral = {
  periodo: "2015 - Actualidad",
  rol: "Fundadora y Directora de Operaciones",
  organizacion: "Emprendimiento de Marroquinería de Diseño",
  modalidad: "Comercio Electrónico y Producción",
  ubicacion: "Río Tercero, Córdoba",
  responsabilidades: [
    "Gestión integral de más de 100 ventas concretadas a través de plataformas de e-commerce y canales digitales.",
    "Publicación, curaduría visual y optimización SEO de más de 50 productos en catálogo online.",
    "Implementación e integración de herramientas digitales para el seguimiento de inventarios, despachos y control de pedidos.",
    "Atención personalizada a clientes, resolución de contingencias y fidelización comercial."
  ],
  logrosClave: [
    "Desarrollo de una mentalidad orientada al usuario y al producto final",
    "Capacidad de gestión autónoma de proyectos y plazos de entrega",
    "Visión práctica para traducir requerimientos funcionales en soluciones concretas"
  ]
};

export const EDUCACION_FORMACION = {
  carrera: "Tecnicatura en Desarrollo de Software",
  institucion: "Universidad Nacional de Córdoba (UNC)",
  estado: "En curso (Avanzada)",
  materiasRelevantes: [
    "Programación Orientada a Objetos",
    "Estructuras de Datos y Algoritmos",
    "Bases de Datos Relacionales",
    "Sistemas Operativos y Redes",
    "Ingeniería de Software"
  ],
  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "Intermedio en desarrollo técnico" }
  ]
};
