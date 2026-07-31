import { Component } from '@angular/core';

type IndicadorTecnico = {
  etiqueta: string;
  codigo: string;
  delay: string;
  rot: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  ty?: string;
  ocultarTablet?: boolean;
  ocultarMovil?: boolean;
};

@Component({
  selector: 'app-puente-tecnico',
  imports: [],
  templateUrl: './puente-tecnico.html',
  styleUrl: './puente-tecnico.scss',
})
export class PuenteTecnico {
  protected readonly indicadores: IndicadorTecnico[] = [
    { etiqueta: 'API REST', codigo: '200', top: '16%', left: '13%', delay: '0.1s', rot: '-5deg' },
    { etiqueta: 'FRONTEND', codigo: 'UI', top: '34%', left: '4%', delay: '0.55s', rot: '3deg' },
    { etiqueta: 'ANGULAR', codigo: 'NG', bottom: '25%', left: '10%', delay: '1.15s', rot: '-2deg' },
    { etiqueta: 'TYPESCRIPT', codigo: 'TS', bottom: '12%', left: '22%', delay: '1.65s', rot: '4deg', ocultarMovil: true },
    { etiqueta: 'NODE.JS', codigo: 'JS', top: '15%', right: '13%', delay: '0.35s', rot: '5deg' },
    { etiqueta: 'EXPRESS', codigo: 'EX', top: '35%', right: '4%', delay: '0.9s', rot: '-3deg' },
    { etiqueta: 'POSTGRESQL', codigo: 'DB', bottom: '24%', right: '9%', delay: '1.35s', rot: '2deg' },
    { etiqueta: 'SUPABASE', codigo: 'SB', bottom: '11%', right: '22%', delay: '1.9s', rot: '-4deg', ocultarMovil: true },
    { etiqueta: 'SEGURIDAD', codigo: 'SEC', top: '52%', left: '18%', delay: '2.15s', rot: '-1deg', ty: '-50%', ocultarTablet: true },
    { etiqueta: 'LINUX', codigo: 'CLI', top: '52%', right: '18%', delay: '2.45s', rot: '2deg', ty: '-50%', ocultarTablet: true },
  ];
}
