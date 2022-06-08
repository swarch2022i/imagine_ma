import { SoapRoutingModule } from './soap-routing.module';
import { SoapComponent } from './soap.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SoapComponent],
  imports: [CommonModule, IonicModule, SoapRoutingModule],
})
export class SoapModule {}
