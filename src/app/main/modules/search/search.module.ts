import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ImageModule } from '../../components/image/image.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, IonicModule, SearchRoutingModule, ImageModule],
})
export class SearchModule {}
