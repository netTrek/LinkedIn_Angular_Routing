import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DashDetailsComponent } from './dash-details/dash-details.component';

const routes: Routes = [
  { path: '', component: DashComponent, pathMatch: 'full' },
  { path: 'detail', component: DashDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
