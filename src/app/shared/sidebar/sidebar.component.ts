import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // styleUrls:['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

isActive = false;
  claimClicked = false;
  showMenu: string = '';
  destroyProvidersState: any = {};
  providersObject = {};

  constructor(private route: Router) { }


  ngOnInit() {
  	window.scrollTo(0, 0);
       if(sessionStorage.getItem('Id')=="onlyworkerscomp@gmail.com"){
          document.getElementById("integratedadj").style.display = 'none';
           document.getElementById("integratedfaq").style.display = 'none';
            document.getElementById("integratedtutorial").style.display = 'none';
       }
       else{
          document.getElementById("onlyworkadj").style.display = 'none';
            document.getElementById("onlyworkfaq").style.display = 'none';
            document.getElementById("onlyworktutorial").style.display = 'none';
       }
  }
  logOut(){
  this.route.navigate([''],{replaceUrl:true});
}
eventCalled() {

    sessionStorage.setItem("refreshProviders", "true");
    document.getElementById("loadingDiv").style.display = "none";

    this.isActive = !this.isActive;

    // if claims is clicked then make page position as undefined,so page will open at top
    if (this.claimClicked == true) {
      sessionStorage.setItem('pagePosition', undefined);
      this.claimClicked = false;
    }

  }

  // hideSidebar(){
  //   //let flag="true";
  //   //sessionStorage.setItem('sidebar', flag);
  //   document.getElementById('sidebar').style.display='none';
  //   this.isActive = !this.isActive;
    
    
    
  //   //side.style.display="block"
    
  //   }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

}
