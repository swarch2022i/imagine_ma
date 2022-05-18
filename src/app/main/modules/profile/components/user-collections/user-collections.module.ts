import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserCollectionsComponent } from './user-collections.component';
import { ImageModule } from 'src/app/main/components/image/image.module';
import { UserCollectionRoutingModule } from './user-collections-routing.module';

@NgModule({
  declarations: [UserCollectionsComponent],
  imports: [CommonModule, IonicModule, ImageModule, UserCollectionRoutingModule],
})
export class UserCollectionsModule { }
