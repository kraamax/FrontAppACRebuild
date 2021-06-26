export class TipoActividad {
  public constructor(init?: Partial<TipoActividad>) {
    Object.assign(this, init);
  }
  nombre:string;
}
