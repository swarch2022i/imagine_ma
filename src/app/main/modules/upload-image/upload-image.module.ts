import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadImageComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UploadImageRoutingModule,
  ],
})
export class UploadModule {}
