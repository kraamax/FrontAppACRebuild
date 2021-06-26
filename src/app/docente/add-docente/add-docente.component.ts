import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/Models/docente';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent implements OnInit {

  formDocente:FormGroup;
  dptos:[];
  constructor(private formBuilder:FormBuilder,
              private departamentoService:DepartamentoService,
              private docenteService:DocenteService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.formDocente= this.formBuilder.group({
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
    var docente=new Docente(this.formDocente.value);
    console.log(docente);
    this.docenteService.postDocente(docente).subscribe(res=>{
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
