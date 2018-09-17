import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from '../user';

@Component({
  selector: 'in-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: User;
  private sub: Subscription;

  constructor ( private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit () {
    this.sub = this.route.data.
    subscribe ( next => this.user = next.user as User );
  }


  ngOnDestroy (): void {
    this.sub.unsubscribe ();
  }

}
