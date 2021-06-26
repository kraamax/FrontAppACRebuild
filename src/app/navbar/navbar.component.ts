import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isExpanded:boolean;
  role:string;
  constructor(private authService:AuthService) {
    this.isExpanded=false;
    this.authService.currentRole.subscribe(res=>{this.role=res;});
  }

  ngOnInit(): void {
  }
  toggle(){}
}
