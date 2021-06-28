import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanAccionService } from 'src/app/services/plan-accion.service';

@Component({
  selector: 'app-add-acciones-realizadas',
  templateUrl: './add-acciones-realizadas.component.html',
  styleUrls: ['./add-acciones-realizadas.component.css']
})
export class AddAccionesRealizadasComponent implements OnInit {

  actividadId:number;
  plan;
  constructor(private planAccionService:PlanAccionService, private router:Router) {
    try {
      this.actividadId = this.router.getCurrentNavigation().extras.state.id;
    } catch (error) {
      this.router.navigateByUrl('/listPlan');
    }
   }

  ngOnInit(): void {
    this.planAccionService.getByActividad(this.actividadId).subscribe(res=>console.log(res));
  }

}
