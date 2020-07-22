import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimevalidationPageRoutingModule } from './timevalidation-routing.module';

import { TimevalidationPage } from './timevalidation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimevalidationPageRoutingModule
  ],
  declarations: [TimevalidationPage]
})
export class TimevalidationPageModule {}
