import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadService } from 'src/app/services/actividad.service';
import { AuthService } from 'src/app/services/auth.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-list-plan-accion',
  templateUrl: './list-plan-accion.component.html',
  styleUrls: ['./list-plan-accion.component.css']
})
export class ListPlanAccionComponent implements OnInit {

  identificacionDocente:string;
  actividades:[];
  constructor(private actividadService:ActividadService,private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.validateLogin();
    this.identificacionDocente=localStorage.getItem("token");
    this.actividadService.getByDocente(this.identificacionDocente).subscribe(res=>this.actividades=res);
  }

  gotToAddPlan(id){
    this.router.navigate(['/addPlan'], { state: { id: id} });
  }
  gotToRegisterRealizadas(id){
    this.router.navigate(['/plan/addAccionesRealizadas'], { state: { id: id} });
  }

}
