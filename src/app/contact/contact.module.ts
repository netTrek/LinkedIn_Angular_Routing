import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ContactComponent, children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: 'form', component: FormComponent }
    ]
  }
];

@NgModule ( {
  imports     : [
    CommonModule,
    RouterModule.forChild ( routes )
  ],
  declarations: [ ContactComponent,
                  MapComponent,
                  FormComponent
  ],
  exports     : [ ContactComponent ]
} )
export class ContactModule {
}
