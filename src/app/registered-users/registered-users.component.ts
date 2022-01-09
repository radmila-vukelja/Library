import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth', 'email', 'username', 'password']
  dataSource = this.getUsers()

  constructor() { }

  ngOnInit(): void {
  }

  getUsers(){
  let userList = localStorage.getItem('userList')
  let userObjects

  if(userList !== null){
  userObjects = JSON.parse(userList)
  }

  console.log(userObjects)
  return userObjects
  }

}
