import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

users = []

  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(event:string){
    alert(event);
  }

  addUser(user:{fname:string,lname:string}){

    this.users.push(Object.assign({},user));
 

     
  }

}
