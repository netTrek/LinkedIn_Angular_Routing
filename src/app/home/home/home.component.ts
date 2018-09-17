import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'in-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  cookieAccepted = false;

  private sub1: Subscription;
  private sub2: Subscription;

  constructor( private route: ActivatedRoute, public userService: UserService  ) { }

  ngOnInit() {

    this.sub1 = this.route.params.subscribe( console.log );
    this.sub2 = this.route.paramMap.subscribe( map => {
      if ( map.has( 'test') ) {
        console.log ( 'habe test: ', map.get( 'test') );
      }
    } );

  }

  ngOnDestroy (): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

  acceptCookie () {
    this.cookieAccepted = true;
  }

}
