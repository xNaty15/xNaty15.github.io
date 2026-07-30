import { Component, OnDestroy, signal } from '@angular/core';
import { contactosOrbitales } from '../../datos/contactos-orbitales.data';
import { ContactoOrbital as ContactoOrbitalModel } from '../../modelos/contacto-orbital.model';

@Component({
  selector: 'app-contacto-orbital',
  imports: [],
  templateUrl: './contacto-orbital.html',
  styleUrl: './contacto-orbital.scss',
})
export class ContactoOrbital implements OnDestroy {
  protected readonly contactos = contactosOrbitales;
  protected readonly mensajeCopiado = signal('');

  private temporizadorEstado?: number;

  ngOnDestroy(): void {
    if (this.temporizadorEstado !== undefined) {
      window.clearTimeout(this.temporizadorEstado);
    }
  }

  protected async copiarDiscord(contacto: ContactoOrbitalModel): Promise<void> {
    if (contacto.tipo !== 'copiar' || contacto.valorCopiable === undefined) {
      return;
    }

    const copiado = await this.copiarTexto(contacto.valorCopiable);
    this.mensajeCopiado.set(copiado ? 'Usuario de Discord copiado' : `Usuario de Discord: ${contacto.valorCopiable}`);

    if (this.temporizadorEstado !== undefined) {
      window.clearTimeout(this.temporizadorEstado);
    }

    this.temporizadorEstado = window.setTimeout(() => {
      this.mensajeCopiado.set('');
    }, 3200);
  }

  private async copiarTexto(texto: string): Promise<boolean> {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(texto);
        return true;
      } catch {
        // Continúa con el respaldo compatible con navegadores sin permiso de Clipboard API.
      }
    }

    const area = document.createElement('textarea');
    area.value = texto;
    area.setAttribute('readonly', '');
    area.style.left = '-9999px';
    area.style.position = 'fixed';
    area.style.top = '0';
    document.body.appendChild(area);
    area.select();

    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      area.remove();
    }
  }
}
