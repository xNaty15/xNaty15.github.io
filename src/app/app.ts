import { Component } from '@angular/core';
import { Encabezado } from './disposicion/encabezado/encabezado';
import { ContactoOrbital } from './secciones/contacto-orbital/contacto-orbital';
import { Inicio } from './secciones/inicio/inicio';
import { PuenteTecnico } from './secciones/puente-tecnico/puente-tecnico';
import { VistaPrevia } from './secciones/vista-previa/vista-previa';

@Component({
  selector: 'app-root',
  imports: [Encabezado, Inicio, PuenteTecnico, VistaPrevia, ContactoOrbital],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
