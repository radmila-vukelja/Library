import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailResetPass!: string
  
  loggedUsernameNav=''

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.router.navigateByUrl('/register')
  }

  onLogin() {
    this.loginService.validateInput()
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: this.emailResetPass
    });
    dialogRef.afterClosed().subscribe( emailRP => {
      this.emailResetPass = emailRP
      console.log(this.emailResetPass)
    })
  }
}

