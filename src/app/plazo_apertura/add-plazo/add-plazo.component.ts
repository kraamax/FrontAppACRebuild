import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlazoApertura } from 'src/app/Models/plazo-apertura';
import { PlazoAperturaService } from 'src/app/services/plazo-apertura.service';
import { ToastAlertService } from 'src/app/services/toast-alert.service';

@Component({
  selector: 'app-add-plazo',
  templateUrl: './add-plazo.component.html',
  styleUrls: ['./add-plazo.component.css']
})
export class AddPlazoComponent implements OnInit {

  formPlazo:FormGroup;
  plazoApertura:PlazoApertura;
  jefeDptoId:string;
  constructor(private formBuilder:FormBuilder,private plazoAperturaService:PlazoAperturaService, private toastr:ToastAlertService) { }

  ngOnInit(): void {
    this.formPlazo= this.formBuilder.group({
      fechaInicio:[''],
      fechaFin:[''],
    });
    this.jefeDptoId=localStorage.getItem('token');
    this.getCurrentPlazoApertura();
  }

  private getCurrentPlazoApertura(){
    this.plazoAperturaService.getCurrentByJefeDpto(this.jefeDptoId).subscribe(res=>{
      this.setValueToForm(res);
    });
  }

  private setValueToForm(plazo:PlazoApertura){
    this.formPlazo.setValue({
      fechaInicio: plazo.fechaInicio.split("T")[0],
      fechaFin: plazo.fechaFin.split("T")[0]
    });
  }
  updateApertura(){
    this.plazoApertura=new PlazoApertura(this.formPlazo.value);
    this.plazoApertura.identificacionCreador=this.jefeDptoId;
    console.log(this.plazoApertura);
    this.plazoAperturaService.registerPlazo(this.plazoApertura).subscribe(res=>{
      this.toastr.show(res.messageType,res.message,res.messageType);
      this.setValueToForm(this.plazoApertura);
    },
    error=>{
      error.error.errors.forEach(element => {
        this.toastr.error( element.message);
      });
    });
  }

}
