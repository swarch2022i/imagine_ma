import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'images', pathMatch: 'full' },
      {
        path: 'images',
        loadChildren: () =>
          import('../profile/components/user-images/user-images.module').then((m) => m.UserImagesModule),
      },
      {
        path: 'collections',
        loadChildren: () =>
          import('../profile/components/user-collections/user-collections.module').then((m) => m.UserCollectionsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
