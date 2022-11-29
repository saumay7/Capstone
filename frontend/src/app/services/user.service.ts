import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userSubject = new BehaviorSubject<User>(new User());
public userObservable: Observable<User>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }
  login(userLogin: IUserLogin): Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
      next: (user) =>
      {

      },
      error: (errorResponse) => {

      }
    })); // will show if the login was successful or if there was an error
  }
}
