import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { User } from './user';
import { first, switchMap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  constructor () {
  }

  getUsers (): Observable<User[]> {
    return interval ( 1500 )
      .pipe (
        first (),
        switchMap ( next => {
          return of ( [
            { age: 12, name: 'Peter Müller' },
            { age: 22, name: 'Frank Müller' },
            { age: 33, name: 'Heike Müller' },
            { age: 44, name: 'Saban Ünlü' }
          ] );
        } )
      );
  }

}
