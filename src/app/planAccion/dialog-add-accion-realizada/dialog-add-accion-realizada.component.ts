import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-accion-realizada',
  templateUrl: './dialog-add-accion-realizada.component.html',
  styleUrls: ['./dialog-add-accion-realizada.component.css']
})
export class DialogAddAccionRealizadaComponent implements OnInit {
  descripcion;
  ruta;
  constructor(
    public dialogRef: MatDialogRef<DialogAddAccionRealizadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
