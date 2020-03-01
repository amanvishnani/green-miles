import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreenPointsPageRoutingModule } from './green-points-routing.module';

import { GreenPointsPage, PopComponent } from './green-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreenPointsPageRoutingModule
  ],
  declarations: [GreenPointsPage, PopComponent]
})
export class GreenPointsPageModule {}
