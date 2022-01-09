import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public loggedUser!: User

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserDetails()
  }


  getUserDetails(){
    let loggedUser = localStorage.getItem('loggedUser')
    if(loggedUser !== null){
      let loggedUserObj = JSON.parse(loggedUser)
      this.loggedUser = loggedUserObj
    }
    console.log(this.loggedUser)
  }

  onBack() {
    this.router.navigateByUrl('/home')
  }

}
