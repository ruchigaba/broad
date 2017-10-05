import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lob-registration',
  templateUrl: './lob-registration.component.html',
 // styleUrls: ['./lob-registration.component.scss']
})
export class LOBRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToLogin() {
    this.router.navigate(['']);
  }
}
