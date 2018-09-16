import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../user';

@Component ( {
  selector   : 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit {

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

  @Input ()
  user: User;

  @Input ()
  data: any;

  @Input ()
  @HostBinding ( 'class.user-name' )
  isSelected = false;

  constructor () {
  }

  ngOnInit () {
  }

  @HostListener ( 'click' )
  selectUser () {
    this.selectUsr.emit ( this.user );
  }
}
