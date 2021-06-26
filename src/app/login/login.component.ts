import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  dptos:[];
  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      username:[''],
      password:[''],
    });
  }
login(){
  this.authService.login(this.loginForm.value).subscribe(res=>console.log(res));
}


}
