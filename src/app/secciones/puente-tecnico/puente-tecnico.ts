import { Component } from '@angular/core';

type IndicadorTecnico = {
  etiqueta: string;
};

@Component({
  selector: 'app-puente-tecnico',
  imports: [],
  templateUrl: './puente-tecnico.html',
  styleUrl: './puente-tecnico.scss',
})
export class PuenteTecnico {
  protected readonly indicadores: IndicadorTecnico[] = [
    { etiqueta: 'construyendo soluciones web' },
    { etiqueta: 'automatizando procesos' },
    { etiqueta: 'explorando ciberseguridad' },
    { etiqueta: 'aprendiendo constantemente' },
  ];
}
