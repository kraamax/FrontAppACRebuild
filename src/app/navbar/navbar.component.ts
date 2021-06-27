import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isExpanded:boolean;
  role:string;
  constructor(private authService:AuthService, private router:Router) {
    this.authService.setRol();
    this.role=localStorage.getItem('role');
    this.isExpanded=false;
    this.authService.currentRole.subscribe(res=>{this.role=res;
    console.log(res);});
  }

  ngOnInit(): void {
  }
  toggle(){}
  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
