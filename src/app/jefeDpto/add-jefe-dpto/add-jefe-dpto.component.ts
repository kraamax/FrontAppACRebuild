import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JefeDpto } from 'src/app/Models/jefe-dpto';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { JefeDptoService } from 'src/app/services/jefe-dpto.service';

@Component({
  selector: 'app-add-jefe-dpto',
  templateUrl: './add-jefe-dpto.component.html',
  styleUrls: ['./add-jefe-dpto.component.css']
})
export class AddJefeDptoComponent implements OnInit {

  formJefeDpto:FormGroup;
  dptos:[];
  constructor(private formBuilder:FormBuilder,
              private departamentoService:DepartamentoService,
              private jefeDptoService:JefeDptoService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.formJefeDpto= this.formBuilder.group({
      identificacion:[''],
      nombres:[''],
      apellidos:[''],
      email:['',[Validators.email]],
      sexo:[''],
      departamentoId:[0],
    });
    this.departamentoService.getDepartamentos().subscribe(res=>this.dptos=res);
  }

  save(){
    var jefeDpto=new JefeDpto(this.formJefeDpto.value);
    console.log(jefeDpto);
    this.jefeDptoService.registerJefeDpto(jefeDpto).subscribe(res=>{
      this.toastr.success(res.mensaje, 'Exito');

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
