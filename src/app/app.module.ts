import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddDocenteComponent } from './docente/add-docente/add-docente.component';
import { AddJefeDptoComponent } from './jefeDpto/add-jefe-dpto/add-jefe-dpto.component';
import { AddPlazoComponent } from './plazo_apertura/add-plazo/add-plazo.component';
import { AddTipoActividadComponent } from './TipoActividad/add-tipo-actividad/add-tipo-actividad.component';
import { AddActividadComponent } from './Actividad/add-actividad/add-actividad.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr'
import { environment } from 'src/environments/environment';
import { ListDocenteComponent } from './docente/list-docente/list-docente.component';
import { ListJefeDptoComponent } from './jefeDpto/list-jefe-dpto/list-jefe-dpto.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPlanAccionComponent } from './planAccion/add-plan-accion/add-plan-accion.component';
import { ListPlanAccionComponent } from './planAccion/list-plan-accion/list-plan-accion.component';
import { HomeComponent } from './home/home.component';
import { AddAccionesRealizadasComponent } from './planAccion/add-acciones-realizadas/add-acciones-realizadas.component';
import { DialogAddAccionRealizadaComponent } from './planAccion/dialog-add-accion-realizada/dialog-add-accion-realizada.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDocenteComponent,
    AddJefeDptoComponent,
    AddPlazoComponent,
    AddTipoActividadComponent,
    AddActividadComponent,
    NavbarComponent,
    ListDocenteComponent,
    ListJefeDptoComponent,
    LoginComponent,
    AddPlanAccionComponent,
    ListPlanAccionComponent,
    HomeComponent,
    AddAccionesRealizadasComponent,
    DialogAddAccionRealizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton:true
    }),
    NgbModule,
  ],
  entryComponents: [
    DialogAddAccionRealizadaComponent
  ],

  providers: [
    { provide: "BASE_URL", useValue: environment.base_url }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
