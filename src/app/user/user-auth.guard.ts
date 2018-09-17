import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { HomeComponent } from '../home/home/home.component';

@Injectable ( {
  providedIn: 'root'
} )
export class UserAuthGuard implements CanActivate, CanActivateChild, CanDeactivate<HomeComponent> {

  constructor ( private userService: UserService, private router: Router ) {
  }

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    if ( ! this.userService.loggedIn ) {
      this.router.navigate ( [ '/home' ] );
    }
    return true;
  }

  canActivateChild ( childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate ( component: HomeComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    return component.cookieAccepted;
  }
}
