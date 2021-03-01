import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

 user = {
     fname: '',
     lname:''

  };


@Output() addUser = new EventEmitter<{fname: string,lname:string}>();
   constructor(){}
  ngOnInit(): void{}
addUserObject(user){
  this.addUser.emit(user);
  user.fname='';
  user.lname='';
}

 
}
