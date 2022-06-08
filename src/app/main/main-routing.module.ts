import { AuthGuard } from './../core/auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'upload',
        loadChildren: () =>
          import('./modules/upload-image/upload-image.module').then(
            (m) => m.UploadModule
          ),
      },
      {
        path: 'collection',
        loadChildren: () =>
          import('./modules/collection/collection.module').then(
            (m) => m.CollectionModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./modules/search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'soap',
        loadChildren: () =>
          import('./modules/soap/soap.module').then((m) => m.SoapModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
