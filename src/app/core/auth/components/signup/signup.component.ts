/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { confirmedValidator } from '../../confirmed.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    },{
      validator: confirmedValidator('password', 'confirmPassword')
    });
  }

  signUp(){
    this.authService.signup(
      this.signupForm.controls['username'].value,
      this.signupForm.controls['password'].value,
      this.signupForm.controls['confirmPassword'].value,
    ).subscribe(({data})=>{
      console.log('data', data);
    }, (error) =>{
      console.log('error sending query',error);
    });
  }

}
