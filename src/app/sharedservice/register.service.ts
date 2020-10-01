import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {

  /* private _registerUrl = "https://node-db-tutorial10.herokuapp.com/api/auth/register";
  private _loginUrl = "https://node-db-tutorial10.herokuapp.com/api/auth/login"; */

  private _registerUrl = "http://localhost:5000/api/auth/register";
  private _loginUrl = "http://localhost:5000/api/auth/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
}
