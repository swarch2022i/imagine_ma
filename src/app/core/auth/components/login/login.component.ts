/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  flag: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLogin();
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
        localStorage.setItem('ACCESS_TOKEN', data['login']['token']);
        localStorage.setItem('ID_USER', data['login']['id']);
      },(error)=>{
        console.log('error sending query', error);
      });;
  }

  signout(){
    this.authService.signout();
  }

  isLogin(){
    if(this.authService.isLogin()){
      this.authService.userById(localStorage.getItem('ID_USER'), localStorage.getItem('ACCESS_TOKEN'))
      .subscribe(({data})=>{
        //que hacer cuando esta logeado
        console.log('logeado');
        this.router.navigateByUrl('/home');
      }, (error)=>{
        //que hacer cuando no esta logeado
        console.log('nologeado');
        this.flag=false;
      });

    }else{
      //que hacer cuando no esta logeado
      console.log('no logeado');
      this.flag=false;
    }
  }

  test() {
  }
}
