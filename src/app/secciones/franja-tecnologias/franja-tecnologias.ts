import { Component } from '@angular/core';
import { tecnologiasInferior, tecnologiasSuperior } from '../../datos/tecnologias.data';

@Component({
  selector: 'app-franja-tecnologias',
  imports: [],
  templateUrl: './franja-tecnologias.html',
  styleUrl: './franja-tecnologias.scss',
})
export class FranjaTecnologias {
  protected readonly tecnologiasSuperior = tecnologiasSuperior;
  protected readonly tecnologiasInferior = tecnologiasInferior;
}
