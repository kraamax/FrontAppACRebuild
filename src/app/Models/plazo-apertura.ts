export class PlazoApertura {

  public constructor(init?: Partial<PlazoApertura>) {
    Object.assign(this, init);
  }

  identificacionCreador:string;
  fechaInicio:string;
  fechaFin:string;
}
