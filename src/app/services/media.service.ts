import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class MediaService {

  Username: string;
  Password: string;
  email: string;
  data: any;
  baseurl = 'http://media.mw.metropolia.fi/wbma/';

  constructor(public http: HttpClient) { }

  public register() {
    this.data = `{
      "username": "${this.Username}",
      "password": "${this.Password}",
      "email": "${this.email}"
    }`;

    const header = new HttpHeaders().set('Content-Type', 'application/json ');
    this.http.post(this.baseurl + 'users', this.data, {headers: header}).subscribe(data =>{console.log(data);});
    return this.http.post(this.baseurl + 'users', this.data, {headers: header});
  }

  public login() {
    console.log('run');
    this.data = {
    username: this.Username,
    password: this.Password
  };

    const header = new HttpHeaders().set('Content-Type', 'application/json ');
    return this.http.post(this.baseurl + 'login', this.data, {headers: header}).subscribe(ata => {console.log(ata);});
  }



}
