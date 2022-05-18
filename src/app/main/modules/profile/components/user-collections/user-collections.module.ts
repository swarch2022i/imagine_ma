import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserCollectionsComponent } from './user-collections.component';
import { CollectionModule } from 'src/app/main/components/collection/colection.module';
import { UserCollectionRoutingModule } from './user-collections-routing.module';

@NgModule({
  declarations: [UserCollectionsComponent],
  imports: [
    CommonModule,
    IonicModule,
    CollectionModule,
    UserCollectionRoutingModule
  ],
})
export class UserCollectionsModule { }
