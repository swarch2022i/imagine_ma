import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCollectionsComponent } from './user-collections.component';

const routes: Routes = [
  {
    path: '',
    component: UserCollectionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCollectionRoutingModule { }
