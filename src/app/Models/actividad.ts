export class Actividad {
  public constructor(init?: Partial<Actividad>) {
    Object.assign(this, init);
  }

  id:number;
  tipoActividadId:number;
  identificacionAsignador:string;
  identificacionResponsable:string
  horasAsignadas:number;
}
