import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, OnDestroy {
  private sub1: Subscription;

  constructor ( private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit () {
    this.sub1 = this.route.params.subscribe( console.log );
  }

  goHome () {
    // this.router.navigateByUrl( '/home' );
    this.router.navigate ( [ '/home', 123,  ], {
    } );
  }

  ngOnDestroy (): void {
    this.sub1.unsubscribe();
  }
}
