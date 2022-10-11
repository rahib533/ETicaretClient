import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor (private toaster: ToastrService){
    
  }
  message(options: Partial<ToastrOptions>){
    this.toaster[options.messageType](options.message, options.title)
  }
}

export enum ToastrMessageType{
  Success = 'success',
  Info = 'info',
  Error = 'error',
  Warning = 'warning'
}

export class ToastrOptions{
  message: string;
  title: string;
  messageType: ToastrMessageType = ToastrMessageType.Success;
}