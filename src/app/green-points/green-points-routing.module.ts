import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreenPointsPage } from './green-points.page';

const routes: Routes = [
  {
    path: '',
    component: GreenPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreenPointsPageRoutingModule {}
