import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  // styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent implements OnInit {

  constructor(private _routes : Router) { }

  ngOnInit() {
   // document.getElementById('main-container').style.marginLeft='259px';
    document.body.className = 'settings';
    window.scrollTo(0, 0);
    document.getElementsByTagName("html")[0].removeAttribute("class");
  }
    ngOnDestroy(){
    document.body.className = '';

  }
securityinfo(){
  this._routes.navigate(['./dashboard/securityinfo']);
}
changePassword(){
  this._routes.navigate(['./dashboard/change-password']);
}
changeId(){
  this._routes.navigate(['./dashboard/change-email']);
}
aboutTheApp(){
  this._routes.navigate(['./dashboard/aboutApp']);
}
}
