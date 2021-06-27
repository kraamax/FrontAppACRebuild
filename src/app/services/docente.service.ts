import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../Models/docente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
  }
  postDocente(docente:Docente):Observable<any>{
    return this.http.post(this.baseUrl+'/api/docente',docente,httpOptions);
  }
  GetAll():Observable<any>{
    return this.http.get(this.baseUrl+'/api/docente/GetAll',httpOptions);
  }
  GetByDpto(dptoId):Observable<any>{
    return this.http.get(this.baseUrl+'/api/docente/GetByDpto/'+dptoId,httpOptions);
  }
  GetByIdentificacion(id):Observable<any>{
    return this.http.get(this.baseUrl+'/api/Docente/GetByIdentificacion/'+id,httpOptions);
  }
}
