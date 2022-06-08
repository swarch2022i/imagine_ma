import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoapComponent } from './soap.component';

const routes: Routes = [
  {
    path: '',
    component: SoapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoapRoutingModule {}
