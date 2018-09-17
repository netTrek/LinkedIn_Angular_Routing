import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { UserModule } from './user/user.module';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NotFoundModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor ( private router: Router ) {
    router.events
          .pipe(
            filter( events => events instanceof ActivationEnd )
          )
          .subscribe( console.log );
  }

}



