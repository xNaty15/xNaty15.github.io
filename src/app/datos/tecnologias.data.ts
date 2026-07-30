import { Tecnologia } from '../modelos/tecnologia.model';

export const tecnologiasSuperior: Tecnologia[] = [
  { nombre: 'Angular', categoria: 'Frontend', imagen: 'assets/imagenes/angular.ico' },
  { nombre: 'TypeScript', categoria: 'Lenguaje', imagen: 'assets/imagenes/typescript.png' },
  { nombre: 'CSS / SCSS', categoria: 'Estilos', imagen: 'assets/imagenes/css-3.png' },
  { nombre: 'Node.js', categoria: 'Backend', imagen: 'assets/imagenes/nodejs.png' },
  { nombre: 'Express', categoria: 'Backend', imagen: 'assets/imagenes/express.png' },
  { nombre: 'PostgreSQL', categoria: 'Base de datos', imagen: 'assets/imagenes/postgre.png' },
];

export const tecnologiasInferior: Tecnologia[] = [
  { nombre: 'MySQL', categoria: 'Base de datos', imagen: 'assets/imagenes/mysql.png' },
  { nombre: 'Supabase', categoria: 'Backend / Base de datos', imagen: 'assets/imagenes/supabase.png' },
  { nombre: 'Docker', categoria: 'Infraestructura', imagen: 'assets/imagenes/docker.png' },
  { nombre: 'Git', categoria: 'Control de versiones', imagen: 'assets/imagenes/git.png' },
  { nombre: 'Linux', categoria: 'Sistemas', imagen: 'assets/imagenes/linux.png' },
  { nombre: 'Python', categoria: 'Lenguaje', imagen: 'assets/imagenes/python.png' },
];
