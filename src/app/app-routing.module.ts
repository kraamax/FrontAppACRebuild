import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDocenteComponent } from './docente/add-docente/add-docente.component';
import { AddJefeDptoComponent } from './jefeDpto/add-jefe-dpto/add-jefe-dpto.component';
import { LoginComponent } from './login/login.component';
import { ListDocenteComponent } from './docente/list-docente/list-docente.component';

const routes: Routes = [
  { path: 'addDocente', component: AddDocenteComponent },
  { path: 'addJefeDpto', component: AddJefeDptoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listDocente', component: ListDocenteComponent },

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
