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
   // document.getElementById('main-container').style.marginLeft='259px';
  //  if(document.getElementById("worker").className=="list-group-item-mycom sjsj"){
  //     var x= document.getElementById("worker")
  //           console.log(x);
  // //     //  x.style.border="0px";
  if(sessionStorage.getItem('Id')=="workerscomp@gmail.com"){
  document.getElementById("sidebar").style.display = 'none';
  
  // document.getElementById("mobileFooter").style.display = 'none';

}
else if(sessionStorage.getItem('Id')=="onlyleavedisability@gmail.com"){
  document.getElementById("sidebar").style.display = 'none';
 //  document.getElementById("mobileFooter").style.display = 'none';
}
else if(sessionStorage.getItem('userName')!="" && sessionStorage.getItem('Id')!="onlyworkerscomp@gmail.com"){
   document.getElementById("sidebar").style.display = 'none';
  //  document.getElementById("mobileFooter").style.display = 'none';
}


    
  //  }
    document.body.className = 'settings';
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
