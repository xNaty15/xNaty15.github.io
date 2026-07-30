import { Component } from '@angular/core';
import { FranjaTecnologias } from '../franja-tecnologias/franja-tecnologias';

@Component({
  selector: 'app-inicio',
  imports: [FranjaTecnologias],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {}
