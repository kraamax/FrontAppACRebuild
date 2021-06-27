import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service';
import { JefeDptoService } from 'src/app/services/jefe-dpto.service';

@Component({
  selector: 'app-list-docente',
  templateUrl: './list-docente.component.html',
  styleUrls: ['./list-docente.component.css']
})
export class ListDocenteComponent implements OnInit {

  docentes:[];
  constructor(private jefeDptoService:JefeDptoService,private docenteService:DocenteService, private router:Router) { }

  ngOnInit(): void {
    this.jefeDptoService.getById(localStorage.getItem('token')).subscribe(res=>{
      this.docenteService.GetByDpto(res.departamento.id).subscribe(res=>this.docentes=res)});
  }

  goToAddDocente(){}
  gotToAddActividad(identificacion){
    this.router.navigate(['/addActividad'], { state: { id: identificacion} });
  }
}
