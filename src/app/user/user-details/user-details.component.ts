import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'in-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  username: string;
  private sub: Subscription;

  constructor ( private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit () {
    this.sub = this.route.paramMap.
      pipe(
        filter( paramMap => paramMap.has ('name')),
      map( paramMap => paramMap.get( 'name') )
      ).
    subscribe ( next => this.username = next );
  }


  ngOnDestroy (): void {
    this.sub.unsubscribe ();
  }

}
