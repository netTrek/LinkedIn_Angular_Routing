import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { UserComponent } from './user/user/user.component';
import { ContactComponent } from './contact/contact/contact.component';
import { MapComponent } from './contact/contact/map/map.component';
import { FormComponent } from './contact/contact/form/form.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserGuard } from './user/user.guard';
import { UserdetailGuard } from './user/userdetail.guard';
import { UserAuthGuard } from './user/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    canDeactivate: [ UserAuthGuard ] },
  {
    path   : 'user', component: UserComponent,
    canActivate: [ UserAuthGuard ],
    resolve: {
      userlist: UserGuard
    },
    data   : {
      header     : 'Mitarbeiter',
      subheader  : 'netTrek',
      description: 'Lorem ipsum voluptatum.'
    }
  },
  {
    path   : 'user/:name', component: UserDetailsComponent,
    canActivate: [ UserAuthGuard ],
    resolve: {
      user: UserdetailGuard
    }
  },
  {
    path    : 'contact', component: ContactComponent,
    // canActivateChild: [ UserAuthGuard ],
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: 'form', component: FormComponent }
    ]
  },
  // { path: 'dash', loadChildren: './dash/dash.module#DashModule'},
  { path: 'dash', loadChildren: () => import ('./dash/dash.module')
      .then( m => m.DashModule )  },
  { path: '**', component: NotFoundComponent }
];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes, { useHash: false, anchorScrolling: 'enabled' } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
