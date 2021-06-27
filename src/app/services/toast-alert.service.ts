import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ToastAlertService {

  constructor(private toastr:ToastrService) {}

  show(type,message, tittle? ){
    type=type.toUpperCase();
    switch (type) {
      case "ERROR":
        this.toastr.error(message,tittle);
        break;

      case "OK":
        this.toastr.success(message,tittle);
        break;

      case "INFO":
        this.toastr.info(message,tittle);
        break;

      default:
        this.toastr.error(message,tittle);
        break;
    }
  }
  error(message, tittle?){
        this.toastr.error(message,tittle);
  }
}
