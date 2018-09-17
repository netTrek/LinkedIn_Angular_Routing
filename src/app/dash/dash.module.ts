import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';

@NgModule ( {
  imports     : [
    CommonModule,
    DashRoutingModule
  ],
  declarations: []
} )
export class DashModule {

  constructor () {
    console.log ( 'Dash Loaded' );
  }

}
