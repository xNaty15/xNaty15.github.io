import { Component, signal } from '@angular/core';
import { FranjaTecnologias } from '../franja-tecnologias/franja-tecnologias';

@Component({
  selector: 'app-inicio',
  imports: [FranjaTecnologias],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
  protected readonly animandoHover = signal(false);
  private hoverFallback?: ReturnType<typeof setTimeout>;

  protected activarHoverRetrato(): void {
    const sinHover =
      typeof window !== 'undefined' && window.matchMedia?.('(hover: none)').matches;

    if (this.animandoHover() || sinHover) {
      return;
    }

    this.animandoHover.set(true);
    this.hoverFallback = setTimeout(() => this.limpiarHoverRetrato(), 1800);
  }

  protected finalizarHoverRetrato(event: AnimationEvent): void {
    const objetivo = event.target as HTMLElement;

    if (this.animandoHover() && objetivo.classList.contains('hero__callout--student')) {
      this.limpiarHoverRetrato();
    }
  }

  private limpiarHoverRetrato(): void {
    if (this.hoverFallback) {
      clearTimeout(this.hoverFallback);
      this.hoverFallback = undefined;
    }

    this.animandoHover.set(false);
  }
}
