export type TipoContactoOrbital = 'enlace' | 'copiar' | 'pendiente';

export interface ContactoOrbital {
  readonly id: 'github' | 'instagram' | 'whatsapp' | 'discord' | 'gmail';
  readonly nombre: string;
  readonly icono: string;
  readonly tipo: TipoContactoOrbital;
  readonly ariaLabel: string;
  readonly tooltip: string;
  readonly retrasoAnimacion: string;
  readonly url?: string;
  readonly valorCopiable?: string;
}
