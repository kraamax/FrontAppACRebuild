import { Component, OnInit } from '@angular/core';
import { JefeDptoService } from 'src/app/services/jefe-dpto.service';

@Component({
  selector: 'app-list-jefe-dpto',
  templateUrl: './list-jefe-dpto.component.html',
  styleUrls: ['./list-jefe-dpto.component.css']
})
export class ListJefeDptoComponent implements OnInit {

  jefes:[];
  constructor(private jefeDptoService:JefeDptoService) { }

  ngOnInit(): void {
    this.jefeDptoService.getAllJefeDpto().subscribe(res=>this.jefes=res);
  }

}
