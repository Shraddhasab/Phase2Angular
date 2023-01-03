import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appGetValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: GetValidatorDirective,
    multi: true
  }]
})
export class GetValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let num1= +control.value;
    if(isNaN(num1)){
      return {'gve':true,"Error not a number, Required Value":10};
    }
    if(num1 <= +10){
      return {'gve':true,"Error not a number, Required Value":10};
    }



    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
