import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CollectionComponent } from './collection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionRoutingModule } from './collection-routing.module';

@NgModule({
  declarations: [CollectionComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CollectionRoutingModule,
  ],
})
export class CollectionModule {}
