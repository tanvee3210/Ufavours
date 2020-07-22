import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimevalidationPage } from './timevalidation.page';

const routes: Routes = [
  {
    path: '',
    component: TimevalidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimevalidationPageRoutingModule {}
