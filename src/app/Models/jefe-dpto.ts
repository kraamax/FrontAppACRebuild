export class JefeDpto {

  public constructor(init?: Partial<JefeDpto>) {
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
