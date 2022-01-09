import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BOOKS } from './mock-book';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'books', component: BookComponent }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book-details', component: BookDetailsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'registered-users', component: RegisteredUsersComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
