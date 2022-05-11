import { ProfileModule } from './modules/profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ProfileModule,
    IonicModule,
    MainRoutingModule
  ]
})
export class MainModule { }
