import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemPlan } from '../Models/item-plan';
import { PlanAccion } from '../Models/plan-accion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlanAccionService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
  }
  registerPlan(plan:PlanAccion):Observable<any>{
    return this.http.post(this.baseUrl+'/api/PlanAccion',plan,httpOptions);
  }
  getByActividad(id):Observable<any>{
    return this.http.get(this.baseUrl+'/api/PlanAccion/GetByActividad/'+id,httpOptions);
  }
  modifyItem(item:ItemPlan):Observable<any>{
    return this.http.put(this.baseUrl+'/api/ItemPlan',item,httpOptions);
  }
}
