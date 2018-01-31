import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public mediaService: MediaService) { }


  ngOnInit() {
  }

}
