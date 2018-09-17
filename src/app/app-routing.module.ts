import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { UserComponent } from './user/user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserGuard } from './user/user.guard';
import { UserdetailGuard } from './user/userdetail.guard';
import { UserAuthGuard } from './user/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path         : 'home', component: HomeComponent,
    canDeactivate: [ UserAuthGuard ]
  },
  {
    path       : 'user', component: UserComponent,
    canActivate: [ UserAuthGuard ],
    resolve    : {
      userlist: UserGuard
    },
    data       : {
      header     : 'Mitarbeiter',
      subheader  : 'netTrek',
      description: 'Lorem ipsum voluptatum.'
    }
  },
  {
    path       : 'user/:name', component: UserDetailsComponent,
    canActivate: [ UserAuthGuard ],
    resolve    : {
      user: UserdetailGuard
    }
  },
  {
    path: 'contact', loadChildren: './contact/contact.module#ContactModule'
  },
  { path: 'dash', loadChildren: './dash/dash.module#DashModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes, {
    useHash: false, anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules/*, enableTracing: true*/
  } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
