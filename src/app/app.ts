import { Component } from '@angular/core';
import { Encabezado } from './disposicion/encabezado/encabezado';
import { Inicio } from './secciones/inicio/inicio';
import { VistaPrevia } from './secciones/vista-previa/vista-previa';

@Component({
  selector: 'app-root',
  imports: [Encabezado, Inicio, VistaPrevia],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
