import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/user-login';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
const USER_KEY = 'user'

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

  login(userlogin: IUserLogin) {
    return this.http.post<User>(USER_LOGIN_URL, userlogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
    this.setUserToLocalStorage(user)
          this.toastrService.success('welcome', 'User Logged in ' + user.name);
        },
      })
    );
  }

    setUserToLocalStorage(user:User){
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUserFromLocalStorage():User{
      const user = localStorage.getItem(USER_KEY);
      if(user){
        return JSON.parse(user) as User;
        }
        return new User();
      }
      logout(){
        this.userSubject.next(new User());
        localStorage.removeItem(USER_KEY);
        this.toastrService.success('User Logged out');
      window.location.reload();
      }
}
