import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/Models/actividad';
import { Docente } from 'src/app/Models/docente';
import { ActividadService } from 'src/app/services/actividad.service';
import { DocenteService } from 'src/app/services/docente.service';
import { TipoActividadService } from 'src/app/services/tipo-actividad.service';
import { ToastAlertService } from 'src/app/services/toast-alert.service';

@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.css']
})
export class AddActividadComponent implements OnInit {

  actividades:[];
  tipos:[];
  identificacionDocente:string;
  formActividad:FormGroup;
  formData:FormGroup;
  identificacionJefeDpto:string;
  constructor(private formBuilder:FormBuilder,
    private tipoActividadService:TipoActividadService,
    private docenteService:DocenteService,
    private actividadService:ActividadService,
    private toastr:ToastAlertService,
    private router:Router) {
    try {
      this.identificacionDocente = this.router.getCurrentNavigation().extras.state.id;
    } catch (error) {
      this.router.navigateByUrl('/listDocente');
    }
  }

  ngOnInit(): void {
    this.initilizeFormGroups();
    this.identificacionJefeDpto=localStorage.getItem("token");

    this.docenteService.GetByIdentificacion(this.identificacionDocente).subscribe(res=>
                                                                          this.setValueFormData(res));
    this.tipoActividadService.getAll().subscribe(res=>this.tipos=res);
  }

  private setValueFormData(docente:Docente){
    this.formData.setValue({
      identificacion: docente.identificacion,
      nombres: docente.nombres,
      apellidos: docente.apellidos
    });
  }
  private initilizeFormGroups(){
    this.formData=this.formBuilder.group({
      identificacion:[''],
      nombres:[''],
      apellidos:[''],
    });
    this.formActividad= this.formBuilder.group({
      horasAsignadas:[0],
      tipoActividadId:[0],
    });
  }
  addActividad(){
    var actividad=new Actividad(this.formActividad.value);
    actividad.identificacionAsignador=this.identificacionJefeDpto;
    actividad.identificacionResponsable=this.identificacionDocente;
    this.actividadService.registerActividad(actividad).subscribe(res=>{
      this.toastr.show(res.messageType,res.message, res.messageType);
      console.log(res);
    },
     error=>{
       error.error.errors.forEach(element => {
         this.toastr.error(element.message);
       });
     });
  }
}
