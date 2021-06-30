import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/Models/actividad';
import { ItemPlan } from 'src/app/Models/item-plan';
import { PlanAccionService } from 'src/app/services/plan-accion.service';
import { ToastAlertService } from 'src/app/services/toast-alert.service';
import { DialogAddAccionRealizadaComponent } from '../dialog-add-accion-realizada/dialog-add-accion-realizada.component';

@Component({
  selector: 'app-add-acciones-realizadas',
  templateUrl: './add-acciones-realizadas.component.html',
  styleUrls: ['./add-acciones-realizadas.component.css']
})
export class AddAccionesRealizadasComponent implements OnInit {

  actividadId:number;
  plan;
  descripcion;
  ruta;
  constructor(private planAccionService:PlanAccionService,
              private router:Router,
              private toastr:ToastAlertService,
              public dialog: MatDialog) {
    try {
      this.actividadId = this.router.getCurrentNavigation().extras.state.id;
    } catch (error) {
      this.router.navigateByUrl('/listPlan');
    }
   }
   openDialog(itemId,descripcionPlaneada): void {
    const dialogRef = this.dialog.open(DialogAddAccionRealizadaComponent, {
      data: {ruta: this.ruta, descripcion: this.descripcion, id:itemId, planeada:descripcionPlaneada}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.descripcion=result.descripcion;
      this.ruta=result.ruta;
      var item=new ItemPlan();
      item.accionRealizada_Descripcion=this.descripcion;
      item.accionRealizada_evidencia_Ruta=this.ruta;
      item.accionPlaneada_Descripcion=result.planeada;
      item.id=result.id;
      this.modifyItem(item);
    });
  }
  ngOnInit(): void {
    this.inicializarPlan();
    this.planAccionService.getByActividad(this.actividadId).subscribe(res=>this.plan=res);
  }
  modifyItem(item:ItemPlan){

    this.planAccionService.modifyItem(item).subscribe(res=>{
      console.log(res);
      this.toastr.show(res.messageType,res.message,res.messageType);
      this.planAccionService.getByActividad(this.actividadId).subscribe(res=>this.plan=res);
    },error=>{
      error.error.errors.forEach(element => {
        this.toastr.error(element.message);
      });
    }
    );
  }
  inicializarPlan(){
    this.plan={
      actividad:{
                tipoActividad:{
                                nombreActividad:""
                              }
                },
              };
  }
  /*this.plan={
    actividad:{
              tipoActividad:{
                              nombreActividad:""
                            }
              },
    items: [
      {
        accionPlaneada: {
          descripcion: ""
        },
        accionRealizada: {
          evidencia: {
            ruta: "",
            fechaCarga: ""
          },
          descripcion: ""
        },
        // "planAccionId": 1,
        //"id": 1
      }
    ],
  };*/
}
