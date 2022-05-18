import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CollectionComponent } from './collection.component';

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, IonicModule],
  exports: [CollectionComponent],
})
export class CollectionModule { }
