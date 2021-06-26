export class Docente {

  public constructor(init?: Partial<Docente>) {
      Object.assign(this, init);
  }

  id:number;
  identificacion:string;
  nombres:string;
  apellidos:string;
  email:string
  sexo:string;
  departamentoId:number;
}
