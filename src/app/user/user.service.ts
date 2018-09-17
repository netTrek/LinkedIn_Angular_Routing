import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { User } from './user';
import { first, switchMap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  private data: User[] = [
    { age: 12, name: 'Peter Müller' },
    { age: 22, name: 'Frank Müller' },
    { age: 33, name: 'Heike Müller' },
    { age: 44, name: 'Saban Ünlü' }
  ];

  loggedIn = true;

  constructor () {
  }

  getUserByName ( name: string ): User | undefined {
    return this.data.find ( value => {
      return value.name === name;
    } );
  }

  getUsers (): Observable<User[]> {
    return interval ( 250 )
      .pipe (
        first (),
        switchMap ( next => {
          return of ( this.data );
        } )
      );
  }

}
