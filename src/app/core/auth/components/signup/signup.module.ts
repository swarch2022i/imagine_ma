import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupComponent } from './signup.component';
import { SignupPageRoutingModule } from './signup-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupPageRoutingModule,
    HttpClientModule
  ]
})
export class SignupModule { }
