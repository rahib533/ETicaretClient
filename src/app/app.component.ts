import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrOptions } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor (private toaster: CustomToastrService){
    toaster.message({
      message: 'CustomToastrService message',
      title: 'CustomToastrService title',
      messageType: ToastrMessageType.Success
    })
  }
}