import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JefeDpto } from '../Models/jefe-dpto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JefeDptoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
  }
  registerJefeDpto(jefeDpto:JefeDpto):Observable<any>{
    return this.http.post(this.baseUrl+'/api/jefeDpto',jefeDpto,httpOptions);
  }

}
