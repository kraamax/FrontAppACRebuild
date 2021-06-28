import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemPlan } from 'src/app/Models/item-plan';
import { PlanAccion } from 'src/app/Models/plan-accion';
import { TipoActividad } from 'src/app/Models/tipo-actividad';
import { ActividadService } from 'src/app/services/actividad.service';
import { PlanAccionService } from 'src/app/services/plan-accion.service';
import { ToastAlertService } from 'src/app/services/toast-alert.service';

@Component({
  selector: 'app-add-plan-accion',
  templateUrl: './add-plan-accion.component.html',
  styleUrls: ['./add-plan-accion.component.css']
})
export class AddPlanAccionComponent implements OnInit {

  actividadId:number;
  acciones:ItemPlan[];
  actividad:any;
  descripcion:string;
  constructor(private router:Router,
    private actividadService:ActividadService,
     private planAccionService:PlanAccionService,
     private toastr:ToastAlertService) {
    try {
      this.actividadId = this.router.getCurrentNavigation().extras.state.id;
    } catch (error) {
      this.router.navigateByUrl('/listPlan');
    }
  }

  ngOnInit(): void {
    this.actividadService.get(this.actividadId).subscribe(res=>this.actividad=res);
    this.acciones=[];
  }
  addAccion(){
    var item=new ItemPlan();
    item.accionPlaneada_Descripcion=this.descripcion;
    if(!this.alreadyExist(this.acciones,item)){
      this.acciones.push(item);
    };
  }

  alreadyExist(array:ItemPlan[], item:ItemPlan){
    return array.find(x=>x.accionPlaneada_Descripcion==item.accionPlaneada_Descripcion)!=null;
  }

  eliminarAccion(item){
    this.acciones=this.acciones.filter(x => x != item);
  }
  registrarPlan(){
    var plan=new PlanAccion();
    plan.actividadId=this.actividadId;
    plan.items=this.acciones;
    var ret = "data-123".replace('data-','');
    this.planAccionService.registerPlan(plan).subscribe(res=>{
      var mensaje=res.message.replace("Error: ",'');
      this.toastr.show(res.messageType,mensaje,res.messageType);
      },
      error=>{
        error.error.errors.forEach(element => {
          this.toastr.error(element.message);
        });
      });

  }

}
