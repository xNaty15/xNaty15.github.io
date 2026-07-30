import { Component } from '@angular/core';
import { enlacesNavegacion } from '../../datos/navegacion.data';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss',
})
export class Encabezado {
  protected readonly enlaces = enlacesNavegacion;
}
