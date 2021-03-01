import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
@Input() users;
@Output() deleteUser = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(user){
   
      this.users =   this.users.filter(a=>a !== user);
      this.deleteUser.emit('deleteed success');
  }
}


