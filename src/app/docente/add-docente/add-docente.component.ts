import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/Models/docente';
import { AuthService } from 'src/app/services/auth.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DocenteService } from 'src/app/services/docente.service';
import { JefeDptoService } from 'src/app/services/jefe-dpto.service';
import { ToastAlertService } from 'src/app/services/toast-alert.service';

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent implements OnInit {

  formDocente:FormGroup;
  dptos:[];
  identificacionJefeDpto;
  departamentoId:number;
  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private departamentoService:DepartamentoService,
              private docenteService:DocenteService,
              private jefeDptoService:JefeDptoService,
              private toastr:ToastAlertService) { }

  ngOnInit(): void {
    this.departamentoId=0;
    this.authService.validateLogin();
    this.identificacionJefeDpto=localStorage.getItem("token");
    this.jefeDptoService.getById(this.identificacionJefeDpto).subscribe(res=>this.departamentoId=res.departamento.id);
    this.formDocente= this.formBuilder.group({
      identificacion:[''],
      nombres:[''],
      apellidos:[''],
      email:['',[Validators.email]],
      sexo:[''],
    });
    this.departamentoService.getDepartamentos().subscribe(res=>this.dptos=res);
  }

  save(){
    var docente=new Docente(this.formDocente.value);
    docente.departamentoId=this.departamentoId;
    console.log(docente);
    this.docenteService.postDocente(docente).subscribe(res=>{

      this.toastr.show(res.messageType,res.mensaje, res.messageType);

      console.log(res);
    },
     error=>{
       error.error.errors.forEach(element => {
         this.toastr.error( element.message);
       });
     }
    )
  }
}
