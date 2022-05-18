import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserImagesComponent } from './user-images.component';

const routes: Routes = [
  {
    path: '',
    component: UserImagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserImagesRoutingModule { }
