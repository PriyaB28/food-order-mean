import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/user-login';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/user-register';
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  toastrService = inject(ToastrService);
  userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  userObservable!: Observable<User>;
  constructor() {
    this.userObservable = this.userSubject.asObservable();
  }

  getUser():User{
   return this.userSubject.value
  }

  login(userlogin: IUserLogin) {
    return this.http.post<User>(USER_LOGIN_URL, userlogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
          this.setUserToLocalStorage(user);
          this.toastrService.success('welcome', 'User Logged in ' + user.name);
        },
        error: (err) => {
          this.toastrService.error('User not found', 'Login Failed');
        },
      })
    );
  }

  register(userRegister: IUserRegister) {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      catchError((error) => {
        if (error.status === 400) {
          this.toastrService.error(
            `Bad request. ${error.error.message}.`,
            'Registration Failed'
          );
        } else if (error.status === 401) {
          this.toastrService.error(
            'Unauthorized. Please check your credentials.',
            'Registration Failed'
          );
        } else if (error.status === 409) {
          this.toastrService.error(
            'Email already exists. Please try a different email.',
            'Registration Failed'
          );
        } else if (error.status === 500) {
          this.toastrService.error(
            'Internal server error. Please try again later.',
            'Registration Failed'
          );
        } else {
          this.toastrService.error(
            'An unexpected error occurred',
            'Registration Failed'
          );
        }
        return throwError(error);
      }),
      tap({
        next: (user) => {
          // this.userSubject.next(user);
          // this.setUserToLocalStorage(user);
          this.toastrService.success(
            'welcome',
            'User Registered in ' + user.name
          );
        },
      })
    );
  }

  setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  getUserFromLocalStorage(): User {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user) as User;
    }
    return new User();
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    this.toastrService.success('User Logged out');
    // window.location.reload();
  }
}
