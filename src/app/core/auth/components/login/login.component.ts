/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    this.authService.login(
      this.loginForm.controls["username"].value,
      this.loginForm.controls["password"].value
      ).subscribe(({data})=>{
        this.authService.set('ACCESS_TOKEN', data['login']['token']);
        this.authService.set('ID_USER', data['login']['id']);
        this.authService.get('ACCESS_TOKEN').then((val) => {
          console.log('ACCESS_TOKEN:', val);
        });
      },(error)=>{
        console.log('error sending query', error);
      });;
  }

  signout(){
    this.authService.signout();
  }

  async testIsogin(){
    const result = await this.authService.isLogin();
    console.log('result',result);
  }

  test() {
  }
}
