import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserImagesComponent } from './user-images.component';
import { ImageModule } from 'src/app/main/components/image/image.module';
import { UserImagesRoutingModule } from './user-images-routing.module';

@NgModule({
  declarations: [UserImagesComponent],
  imports: [
    CommonModule,
    IonicModule,
    ImageModule,
    UserImagesRoutingModule],
})
export class UserImagesModule { }
