import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUsernameNav = '';
  @Input() loggedUser!: User;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(){
    return this.loginService.loggedIn;
  }

  getUsername(){
    this.loggedUsernameNav = this.loginService.loggedUsername;
    return this.loggedUsernameNav
  }

  clickProfile(loggedUser: User){
    if(this.loginService.loggedIn === true){
      this.router.navigateByUrl('/user-profile')
    }
  }

  clickLogOut() {
    this.router.navigateByUrl('/login')
    this.loginService.loggedIn = false
  }

  clickRegUsers() {
    if(this.loginService.loggedIn === true){
    this.router.navigateByUrl('/registered-users')
    } else {
      alert('You must be logged in first')
    }
  }

  clickLibrary(){
    if(this.loginService.loggedIn === true){
      this.router.navigateByUrl('/home')
    } 
  }
}
