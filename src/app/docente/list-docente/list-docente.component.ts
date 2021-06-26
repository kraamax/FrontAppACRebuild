import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-list-docente',
  templateUrl: './list-docente.component.html',
  styleUrls: ['./list-docente.component.css']
})
export class ListDocenteComponent implements OnInit {

  docentes:[];
  constructor(private docenteService:DocenteService) { }

  ngOnInit(): void {
    this.docenteService.GetAll().subscribe(res=>this.docentes=res);
  }

  goToAddDocente(){}
}
