import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDocenteComponent } from './docente/add-docente/add-docente.component';
import { AddJefeDptoComponent } from './jefeDpto/add-jefe-dpto/add-jefe-dpto.component';
import { LoginComponent } from './login/login.component';
import { ListDocenteComponent } from './docente/list-docente/list-docente.component';
import { ListJefeDptoComponent } from './jefeDpto/list-jefe-dpto/list-jefe-dpto.component';
import { AddPlazoComponent } from './plazo_apertura/add-plazo/add-plazo.component';
import { AddActividadComponent } from './Actividad/add-actividad/add-actividad.component';
import { ListPlanAccionComponent } from './planAccion/list-plan-accion/list-plan-accion.component';
import { HomeComponent } from './home/home.component';
import { AddPlanAccionComponent } from './planAccion/add-plan-accion/add-plan-accion.component';
import { AddAccionesRealizadasComponent } from './planAccion/add-acciones-realizadas/add-acciones-realizadas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addDocente', component: AddDocenteComponent },
  { path: 'addJefeDpto', component: AddJefeDptoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listDocente', component: ListDocenteComponent },
  { path: 'listJefeDpto', component: ListJefeDptoComponent },
  { path: 'addPlazo', component: AddPlazoComponent },
  { path: 'addActividad', component: AddActividadComponent },
  { path: 'listPlan', component: ListPlanAccionComponent },
  { path: 'addPlan', component: AddPlanAccionComponent },
  { path: 'plan/addAccionesRealizadas', component: AddAccionesRealizadasComponent },




];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
