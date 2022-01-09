import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 public loggedIn = false
 public loggedUsername =''
 public loggedUser!: User

  constructor(private router: Router) { }

  validateInput() {

    let usernameIn = (<HTMLInputElement>document.getElementById('usernameInput')).value;
    let passwordIn = (<HTMLInputElement>document.getElementById('passwordInput')).value;

    if (usernameIn.length === 0) {
      alert('Please, enter your username')
    } else if (passwordIn.length === 0) {
      alert('Enter your password, please')
    } else {
      this.authenticate()
    }
  }


  authenticate() {

    let usernameIn = (<HTMLInputElement>document.getElementById('usernameInput')).value;
    let passwordIn = (<HTMLInputElement>document.getElementById('passwordInput')).value;

    let userList
    

    let userListstr = localStorage.getItem('userList')
    if (userListstr !== null) {
      userList = JSON.parse(userListstr);
      //console.log(userList)
    }

    for (let i = 0; i <= userList.length - 1; i++) {

      let user = (userList[i].username);
      let pass = (userList[i].password);
      this.loggedUser = userList[i]
      //console.log(this.loggedUser)

      //console.log(user, pass)

      if (user === usernameIn && pass === passwordIn) {
        this.loggedIn = true;
        this.loggedUsername = user
        let loggedUserString = JSON.stringify(this.loggedUser)
        localStorage.setItem('loggedUser', loggedUserString)
        //console.log(this.loggedUsername)
        setTimeout( () => {
          this.router.navigateByUrl('/home');
        }, 1000);


        break;
      } else if (user === usernameIn && pass !== passwordIn) {
        alert('Wrong password')
        break
      }
    }

  }
}
