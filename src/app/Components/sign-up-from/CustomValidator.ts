import {AbstractControl,ValidationErrors} from '@angular/forms'

export function CustomValidator(g: AbstractControl): ValidationErrors | null {

    const err= g.get('password')?.value === g.get('confirmPassword')?.value
       ? null : {'mismatch': true};
   console.log(err);
   return err
 }