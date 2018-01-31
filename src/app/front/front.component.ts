import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    this.mediaService.getUserData().subscribe( respone => {
      console.log('welcome' + respone);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.router.navigate(['login']);
    });
  }

}
