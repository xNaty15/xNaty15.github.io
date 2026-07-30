import { EnlaceNavegacion } from '../modelos/enlace-navegacion.model';

export const enlacesNavegacion: EnlaceNavegacion[] = [
  { etiqueta: 'Inicio', destino: '#inicio', habilitado: true },
  { etiqueta: 'Sobre mí', habilitado: false },
  { etiqueta: 'Tecnologías', habilitado: false },
  { etiqueta: 'Proyectos', habilitado: false },
  { etiqueta: 'Laboratorio', habilitado: false },
  { etiqueta: 'Contacto', destino: '#contacto', habilitado: true },
];
