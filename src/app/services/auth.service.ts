import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router:Router ) {
  }
  login(loginModel):Observable<any>{
    return this.http.post(this.baseUrl+'/api/Auth/login',loginModel,httpOptions);
  }
  setRol(){
     this.currentRole.next(localStorage.getItem('role'));
   }
   setUserLoggedIn(token, role){
    localStorage.setItem('token',token);
    localStorage.setItem('role',role);
    this.setRol();
   }
   validateLogin():boolean{
     var isLoggedIn= localStorage.getItem('token')!=null;
     if(isLoggedIn==false){
       this.router.navigateByUrl("/login");
     }
     return isLoggedIn;
   }
   logOut(){
      localStorage.clear();
      this.setRol();
   }
}
