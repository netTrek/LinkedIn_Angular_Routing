import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserListService } from './user-list.service';
import { User } from '../../user';

@Component ( {
  selector   : 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ],
  providers  : [ UserListService ]
} )
export class UserListComponent implements OnInit {

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

  @Input()
  users: User[];

  selectedUsr: User;

  constructor ( public userList: UserListService ) {
    console.log ( userList.myServiceValue );
  }

  ngOnInit () {
  }

  onSelectedUsr ( selectedUsr: User ) {
    this.selectedUsr = selectedUsr;
    this.selectUsr.emit ( this.selectedUsr );
  }

}
