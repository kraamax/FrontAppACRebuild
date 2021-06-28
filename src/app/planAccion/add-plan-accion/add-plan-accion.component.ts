import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-add-plan-accion',
  templateUrl: './add-plan-accion.component.html',
  styleUrls: ['./add-plan-accion.component.css']
})
export class AddPlanAccionComponent implements OnInit {

  actividadId:number;
  constructor(private router:Router, private actividadService:ActividadService) {
    try {
      this.actividadId = this.router.getCurrentNavigation().extras.state.id;
    } catch (error) {
      this.router.navigateByUrl('/listPlan');
    }
  }

  ngOnInit(): void {
    this.actividadService.get(this.actividadId).subscribe(res=>console.log(res));

  }

}
