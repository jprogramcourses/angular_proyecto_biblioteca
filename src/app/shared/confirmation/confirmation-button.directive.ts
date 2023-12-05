import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmationButton]'
})
export class ConfirmationButtonDirective {
  @Input('confirm') exectFunction: Function;

  @HostListener('click', ['$event'])
  confirmacionGuardado(){
    const confirmed = window.confirm('¿Guardar?');
    
    if(confirmed){
      this.exectFunction();
    }
  }

}
