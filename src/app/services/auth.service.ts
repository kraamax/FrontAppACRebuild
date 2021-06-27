import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Docente } from '../Models/docente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentRole=new Subject<string>();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
  }
  login(loginModel):Observable<any>{
    return this.http.post(this.baseUrl+'/api/Auth/login',loginModel,httpOptions);
  }
  getRol(){
    this.currentRole.next(localStorage.getItem('role'));
   }
   setUserLoggedIn(token, role){
    localStorage.setItem('token',token);
    localStorage.setItem('role',role);

   }
}
