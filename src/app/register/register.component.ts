import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: User;

  localUsers = new Array


  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }



  onRegister() {

    //get all input data
    let name = (<HTMLInputElement>document.getElementById('fname')).value;
    let surname = (<HTMLInputElement>document.getElementById('lname')).value;
    let strDate = (<HTMLInputElement>document.getElementById('date')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let username = (<HTMLInputElement>document.getElementById('username')).value;
    let password = (<HTMLInputElement>document.getElementById('password')).value;

    //check if empty or too short

    if (name.length === 0) {
      alert('You must submit your first name.')
    } else if (name.length <= 2) {
      alert('Your name must be longer than 2 characters')
    } else if (surname.length === 0) {
      alert('You must submit your last name.')
    } else if (surname.length <= 2) {
      alert('Your last name must be longer than 2 characters')
    } else if (strDate === null) {
      alert('You must submit your date of birth')
    } else if (email.length === 0) {
      alert('You must submit your email address.')
    } else if (username.length === 0) {
      alert('You must choose your user name.')
    } else if (password.length === 0) {
      alert('You must define your password.')
    } else {

      let date = new Date(strDate)

      this.user = ({ userId: this.generateString(10), firstName: name, lastName: surname, dateOfBirth: date, email: email, username: username, password: password })

      this.router.navigateByUrl('/home')
      this.saveToLocalStorage(this.user)


    }

    

  }

  saveToLocalStorage(user: User) {

    let getList = localStorage.getItem('userList')
    if(getList !== null) {
      this.localUsers = JSON.parse(getList);
      //let lsUser = localStorage.setItem('user', JSON.stringify(user))
        this.localUsers.push(user)
    } else if (getList === null) {
      this.localUsers[0] = user
    }

    let setList = localStorage.setItem('userList', JSON.stringify(this.localUsers))

  }


  generateString(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

}
