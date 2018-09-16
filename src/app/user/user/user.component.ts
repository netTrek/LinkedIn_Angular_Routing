import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {

  constructor ( private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit () {
    this.route.fragment.subscribe (
      next => {
        console.log ( next );
      }
    );
  }

  goHome () {
    // this.router.navigateByUrl( '/home' );
    this.router.navigate ( [ '/home' ], {
      fragment: 'test1',
      relativeTo: this.route
    } );
  }
}
