import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

@Component({
  selector: 'app-sign-up-from',
  templateUrl: './sign-up-from.component.html',
  styleUrls: ['./sign-up-from.component.scss']
})
export class SignUpFromComponent implements OnInit {
  signup={password: '', confirmPassword: ''}
  constructor() { }
  signupForm!: FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      password: new FormControl(this.signup.password,[Validators.min(2)]),
      confirmPassword: new FormControl(this.signup.confirmPassword),
    },{
      validators: CustomValidator}
      );
  }
 


  onSubmit(){
    console.warn(this.signupForm.value);
  }

  get password() { return this.signupForm.get('password'); }

get confirmPassword() { return this.signupForm.get('confirmPassword'); }

}
