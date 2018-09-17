import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashDetailsComponent } from './dash-details/dash-details.component';
import { DashComponent } from './dash/dash.component';

@NgModule ( {
  imports     : [
    CommonModule,
    DashRoutingModule
  ],
  declarations: [DashDetailsComponent, DashComponent]
} )
export class DashModule {

  constructor () {
    console.log ( 'Dash Loaded' );
  }

}
