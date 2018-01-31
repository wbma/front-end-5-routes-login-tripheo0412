import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public mediaService: MediaService, private router: Router) { }


  ngOnInit() {

  }

}
