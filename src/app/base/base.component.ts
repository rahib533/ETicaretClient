import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService){

  }

  showSpinner(type:SpinnerType){
    this.spinner.show(type)

    setTimeout(() => {
      this.hideSpinner(type)
    }, 5000);
  }

  hideSpinner(type:SpinnerType){
    this.spinner.hide(type)
  }
}

export enum SpinnerType{
  BallAtom = 'spin1',
  BallScaleMultiple = 'spin2',
  BallSpinClockwiseFadeRotating = 'spin3'
}