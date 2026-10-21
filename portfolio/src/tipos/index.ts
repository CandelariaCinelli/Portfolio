/**
 * Tipos e interfaces globales en español para el portafolio de Candelaria Cinelli
 */

export type CategoriaTecnologia = 'backend' | 'frontend' | 'basedatos' | 'herramientas';

export interface HerramientaTecnica {
  id: string;
  nombre: string;
  categoria: CategoriaTecnologia;
  descripcionCorta: string;
  proposito: string;
  iconoNombre: string;
  destacada: boolean;
}

export interface NarrativaProyecto {
  inicio: {
    titulo: string;
    desafio: string;
  };
  desarrollo: {
    titulo: string;
    arquitectura: string;
    aspectosClave: string[];
  };
  desenlace: {
    titulo: string;
    impacto: string;
  };
}

export interface ProyectoArquitectura {
  id: string;
  codigoIdentificador: string;
  titulo: string;
  subtitulo: string;
  etiquetaTipo: string;
  año: string;
  narrativa: NarrativaProyecto;
  tecnologiasFrontend: string[];
  tecnologiasBackend: string[];
  tecnologiasBasesDatos?: string[];
  enlaceRepositorio?: string;
  enlaceDemoEnVivo?: string;
  esDemoInteractivaDisponible?: boolean;
  esArquitecturaBackendDisponible?: boolean;
}

export interface ValorProfesional {
  id: string;
  numero: string;
  titulo: string;
  descripcion: string;
  puntosClave: string[];
  icono: string;
}

export interface ExperienciaLaboral {
  periodo: string;
  rol: string;
  organizacion: string;
  modalidad: string;
  ubicacion: string;
  responsabilidades: string[];
  logrosClave: string[];
}

export interface FormularioContactoDatos {
  nombreCompleto: string;
  correoElectronico: string;
  asunto: string;
  mensaje: string;
}
