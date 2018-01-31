import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class MediaService {

  Username: string;
  Password: string;
  email: string;
  data: any;
  baseurl = 'http://media.mw.metropolia.fi/wbma/';

  constructor(public http: HttpClient, private router: Router) { }

  public register() {
    this.data = `{
      "username": "${this.Username}",
      "password": "${this.Password}",
      "email": "${this.email}"
    }`;

    const header = new HttpHeaders().set('Content-Type', 'application/json ');
    this.http.post(this.baseurl + 'users', this.data, {headers: header}).subscribe(data => {
      console.log(data);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }

  public login() {
    console.log('run');
    this.data = {
    username: this.Username,
    password: this.Password
  };

    const header = new HttpHeaders().set('Content-Type', 'application/json ');
    this.http.post(this.baseurl + 'login', this.data, {headers: header}).subscribe(ata => {
      console.log(ata);
      localStorage.setItem('token', ata['token']);
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }
   getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token'))
    };
   return this.http.get(this.baseurl + 'users/user', settings);
   }


}
