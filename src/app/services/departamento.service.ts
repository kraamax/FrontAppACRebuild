import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
  }

    getDepartamentos():Observable<any>{
      return this.http.get(this.baseUrl+"/api/Departamento/GetAll",httpOptions);
    }
}
