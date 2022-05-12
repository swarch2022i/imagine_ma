import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';

@NgModule({
  declarations: [UploadImageComponent],
  imports: [CommonModule, IonicModule, UploadImageRoutingModule],
})
export class UploadModule {}
