import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(options: Partial<AlertifyOptions>){
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier','position', options.position);
    const msj = alertify[options.messageType](options.message);
    if (options.dismissOthers) {
      msj.dismissOthers();
    }
  }
  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  message: string;
  messageType: MessageType = MessageType.Message;
  position: PositionType = PositionType.BottomRight;
  delay: number = 5;
  dismissOthers: boolean = false;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum PositionType{
  TopCenter = "top-center",
  BottomCenter = "bottom-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left"
}