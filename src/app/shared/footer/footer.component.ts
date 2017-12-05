import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
activeFooterMenu = "Claim Info";
  constructor(private route?: Router) { }
  
  ngOnInit() {
       if(sessionStorage.getItem('Id')=="onlyworkerscomp@gmail.com" || sessionStorage.getItem("Id")=="workerscompExpiredltuser@gmail.com" )
       {
          document.getElementById("Settings").style.display = 'block';
          document.getElementById("Log Out").style.display = 'block';
       }
        document.onclick=()=>
     { 
      if (document.getElementById("togg-dv").className!==null) {
        document.getElementById("togg-dv").className = "hidden-content slide-down";
      }
     };
 window.scrollTo(0, 0);
}
footerProviderClick(){
 sessionStorage.setItem("refreshProviders","true");
}
removeMoreOptions(){
  // hide footer  more option on every page init
  var className = document.getElementById("togg-dv").className;
  if (className == "hidden-content slide-down")
    document.getElementById("togg-dv").className = "hidden-content slide-up";
}

// if claims is clicked then make page position as undefined,so page will open at top
  claimFooterClick(){
      sessionStorage.setItem('pagePosition', undefined);
  }
  // code to slide up and down more options in mobile footer
  enableToggle(event) {
  	 var className = document.getElementById("togg-dv").className;
     if (className == "hidden-content slide-down")
      document.getElementById("togg-dv").className = "hidden-content slide-up";
    else
      document.getElementById("togg-dv").className = "hidden-content slide-down";
      var theElement = document.getElementById("pageHtml");
      event.stopPropagation();
    return false;
  }

 
changeSocialMedia(){
this.route.navigate(['./dashboard/socialMedia']);
}

}
