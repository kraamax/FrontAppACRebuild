import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../Models/actividad';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
  }
  registerActividad(actividad:Actividad):Observable<any>{
    return this.http.post(this.baseUrl+'/api/Actividad',actividad,httpOptions);
  }
}
