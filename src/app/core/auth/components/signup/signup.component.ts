/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { confirmedValidator } from '../../confirmed.validator';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.isLogin();
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
      this.router.navigateByUrl('/auth/login');
      this.toastSuccess('Acoount create correctly');
    }, (error) =>{
      console.log('error sending query',error);
      this.toastError('Usename alredy exists');
    });
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
