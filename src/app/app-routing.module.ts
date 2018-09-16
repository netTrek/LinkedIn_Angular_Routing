import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { UserComponent } from './user/user/user.component';
import { ContactComponent } from './contact/contact/contact.component';
import { MapComponent } from './contact/contact/map/map.component';
import { FormComponent } from './contact/contact/form/form.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent,
    data: {
      header: 'Mitarbeiter',
      subheader: 'netTrek',
      description: 'Lorem ipsum voluptatum.',
      userlist: [
        {age: 12, name: 'Peter Müller'},
        {age: 22, name: 'Frank Müller'},
        {age: 33, name: 'Heike Müller'},
        {age: 44, name: 'Saban Ünlü'}
      ]
    }},
  { path: 'user/:name', component: UserDetailsComponent},
  { path: 'contact', component: ContactComponent ,
  children: [
    { path: '', redirectTo: 'map', pathMatch: 'full' },
    { path: 'map', component: MapComponent },
    { path: 'form', component: FormComponent },
  ]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
