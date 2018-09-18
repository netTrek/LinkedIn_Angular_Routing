import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component ( {
  selector   : 'in-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title     = 'LinkedIn';
  showModal = false;

  constructor ( private router: Router ) {
    router.events
          .pipe (
            filter ( event => event instanceof ActivationEnd &&
              event.snapshot.outlet === 'modal' ),
            map ( event => (event as ActivationEnd).snapshot )
          )
          .subscribe (
            next => this.showModal = true
          );
  }

  closeModal () {
    this.router.navigate( [ { outlets: { modal: null } } ] );
    this.showModal = false;
  }
}
