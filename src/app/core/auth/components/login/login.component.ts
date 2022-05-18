/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public toastController: ToastController
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
        this.router.navigateByUrl('/home');
        this.toastSuccess('Login success.');
      },(error)=>{
        console.log('error sending query', error);
        this.toastError('Username or paswword incorrect.');
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
      });

    }else{
      //que hacer cuando no esta logeado
      console.log('no logeado');
    }
  }

  async toastError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'danger',
      icon: 'ban',
      translucent: false,
      cssClass: 'ion-text-center',
    });
    toast.present();
  }



  async toastSuccess(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'success',
      icon: 'checkbox-outline',
      translucent: false,
      cssClass: 'ion-text-center',
    });
    toast.present();
  }
}
