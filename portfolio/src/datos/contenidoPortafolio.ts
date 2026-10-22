import climaImagen from '../../assets/AppClima.jpeg';
import gastosImagen from '../../assets/GestorDeGastos.jpeg';
import almaVotaImagen from '../../assets/AlmaVota.png';
import carritoImagen from '../../assets/Shopping-cart.png';
import usuariosImagen from '../../assets/GestionDeUsuarios.png';

/** Datos de presentación separados de las vistas para facilitar su mantenimiento. */
export const proyectos = [
  {
    titulo: 'Aplicación del Clima',
    descripcion: 'Consulta las condiciones meteorológicas locales con datos de OpenWeatherMap y geolocalización.',
    tecnologias: ['React Native', 'Expo', 'OpenWeatherMap', 'Geolocalización'],
    repositorio: 'https://github.com/CandelariaCinelli/App-clima',
    imagen: climaImagen,
    textoImagen: 'Vista de la aplicación del clima',
  },
  {
    titulo: 'Aplicación de Gestión de Gastos',
    descripcion: 'Ayuda a llevar un control financiero personal mediante el registro y la consulta de gastos.',
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    repositorio: 'https://github.com/CandelariaCinelli/Gestor-de-gastos',
    imagen: gastosImagen,
    textoImagen: 'Vista de la aplicación de gestión de gastos',
  },
  {
    titulo: 'Plataforma AlmaVota',
    descripcion: 'Plataforma de participación ciudadana con portales web, aplicación móvil y autenticación segura.',
    tecnologias: ['Spring Boot', 'JWT', 'React', 'Vite', 'React Native', 'Expo'],
    repositorio: 'https://github.com/CandelariaCinelli/participacion-ciudadana-almafuerte',
    imagen: almaVotaImagen,
    textoImagen: 'Vista de la plataforma AlmaVota',
  },
  {
    titulo: 'Aplicación de Carrito de Compras',
    descripcion: 'Experiencia de compra interactiva para explorar productos y administrar cantidades y totales.',
    tecnologias: ['React', 'JavaScript', 'React Hooks', 'Bootstrap', 'CSS3'],
    repositorio: 'https://github.com/CandelariaCinelli/shopping-cart-project.git',
    imagen: carritoImagen,
    textoImagen: 'Vista de la aplicación de carrito de compras',
  },
  {
    titulo: 'Sistema de Gestión de Usuarios',
    descripcion: 'Aplicación integral para administrar usuarios mediante una API REST y una interfaz web.',
    tecnologias: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'PostgreSQL'],
    repositorio: 'https://github.com/CandelariaCinelli/springboot-react-user-app',
    imagen: usuariosImagen,
    textoImagen: 'Vista del sistema de gestión de usuarios',
  },
] as const;

export const principios = [
  {
    titulo: 'Arquitectura clara',
    descripcion: 'Organizo el código por responsabilidades para mantenerlo comprensible, probado y preparado para evolucionar.',
  },
  {
    titulo: 'Soluciones centradas en las personas',
    descripcion: 'Parto de necesidades concretas y priorizo interfaces intuitivas, accesibles y adaptables.',
  },
  {
    titulo: 'Calidad y mejora continua',
    descripcion: 'Valoro las buenas prácticas, la colaboración y el aprendizaje constante en cada etapa del desarrollo.',
  },
] as const;

/** Tecnologías agrupadas según las cinco categorías requeridas. */
export const categoriasTecnologicas = [
  {
    nombre: 'Frontend',
    tecnologias: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    nombre: 'Backend',
    tecnologias: ['Java', 'Spring Boot', 'Spring Security', 'APIs REST', 'JWT', 'JPA / Hibernate'],
  },
  {
    nombre: 'Bases de datos',
    tecnologias: ['PostgreSQL', 'SQLite', 'MySQL', 'SQL'],
  },
  {
    nombre: 'DevOps',
    tecnologias: ['Git', 'GitHub', 'Docker', 'Postman'],
  },
  {
    nombre: 'Inteligencia Artificial',
    tecnologias: ['Agentes de IA', 'Programación de skills', 'SDD: Software Design & Development'],
  },
] as const;
