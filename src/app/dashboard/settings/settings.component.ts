import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  // styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent implements OnInit {
data: any;
title = '';

  constructor(private _routes : Router,private route: ActivatedRoute) { }

  ngOnInit() {

     let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
       this.data = currentRoute.snapshot.data;
        sessionStorage.setItem("parent",this.data.parent);
                    //add title to header
          this.title = this.data.title;
    if(sessionStorage.getItem('Id')=="onlyleavedisability@gmail.com"){
  document.getElementById("sidebar").style.display = 'none';
    document.getElementById("hide").style.display = 'none';
   document.body.className = 'settingswork absenceleave';

}
else if(sessionStorage.getItem('Id')=="workerscomp@gmail.com"){
  document.body.className = 'settingsworkerscomp';
}
else if(sessionStorage.getItem('userName')!="" && sessionStorage.getItem('Id')!="onlyworkerscomp@gmail.com" && sessionStorage.getItem('Id')!="workerscompExpiredltuser@gmail.com" ){
 document.body.className = 'settingsun ';
}
else
   {
     document.body.className = 'settings123';   
   } 
   window.scrollTo(0, 0);
    document.getElementsByTagName("html")[0].removeAttribute("class");
  }
    ngOnDestroy(){
    document.body.className = '';
   }
securityinfo(){
   sessionStorage.setItem("storage_navigation", this.data.title);
  this._routes.navigate(['./dashboard/securityinfo']);
}
notification(){
  sessionStorage.setItem("storage_navigation", this.data.title);
  this._routes.navigate(['./dashboard/notification']); 
}
changePassword(){
   sessionStorage.setItem("storage_navigation", this.data.title);
  this._routes.navigate(['./dashboard/change-password']);
}
changeId(){
   sessionStorage.setItem("storage_navigation", this.data.title);
  this._routes.navigate(['./dashboard/change-email']);
}
aboutTheApp(){
   sessionStorage.setItem("storage_navigation", this.data.title);
   this._routes.navigate(['./dashboard/aboutApp']);
}
}
