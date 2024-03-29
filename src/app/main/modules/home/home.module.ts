import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImageModule } from '../../components/image/image.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, IonicModule, HomeRoutingModule, ImageModule],
})
export class HomeModule {}
