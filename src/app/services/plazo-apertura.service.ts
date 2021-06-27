import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlazoApertura } from '../Models/plazo-apertura';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PlazoAperturaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
  }
  registerPlazo(plazoApertura:PlazoApertura):Observable<any>{
    return this.http.post(this.baseUrl+'/api/PlazoApertura',plazoApertura,httpOptions);
  }
  //GetCurrentByJefeDpto
  getCurrentByJefeDpto(id):Observable<any>{
    return this.http.get(this.baseUrl+'/api/PlazoApertura/GetCurrentByJefeDpto/'+id,httpOptions);
  }
}
