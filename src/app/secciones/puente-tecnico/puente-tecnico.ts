import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-puente-tecnico',
  imports: [],
  templateUrl: './puente-tecnico.html',
  styleUrl: './puente-tecnico.scss',
})
export class PuenteTecnico implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const marco = this.elementRef.nativeElement.querySelector<HTMLElement>('.puente-tecnico__marco');

    if (!marco || typeof IntersectionObserver === 'undefined') {
      marco?.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          marco.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.24 },
    );

    this.observer.observe(marco);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
