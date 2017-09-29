import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {Location} from '@angular/common';
import {CommonAPICall} from '../../shared/shared.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',

  // styleUrls: ['./topnav.component.scss'],
  encapsulation: ViewEncapsulation.None, 
  providers: [CommonAPICall]
})
export class TopnavComponent implements OnInit {
title = ''; parent: boolean = false;
object: any;
isActive = false;
  claimClicked = false;
parent2 = true;
htmlElement: any; hideKeyboard: any;
data: any;
WelcomeUsername = sessionStorage.getItem('welcomeUsername');


  constructor(private route: ActivatedRoute, private router: Router, private _location: Location, private _commonApiCall: CommonAPICall) {
  var root = document.getElementsByTagName('html')[0];
  if (sessionStorage.getItem('token') == undefined || sessionStorage.getItem('token') == "") {
      var root = document.getElementsByTagName('html')[0];
      root.setAttribute('class', 'outerPages');
    }
    else {
      //zvar root = document.getElementsByTagName('html')[0];
      root.setAttribute('class', '');
    }


  }
  doc: any;

  handlerFunction(event) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.router.events
    .subscribe(event =>{
      this.hideFooterIOS();
      //alert("ruchi");
      // if (document.getElementById("togg-dv")) {
      //     var className = document.getElementById("togg-dv").className;
      //     if (className == "hidden-content slide-down")
      //       document.getElementById("togg-dv").className = "hidden-content slide-up";

      //   }
      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          this.data = currentRoute.snapshot.data;
          if(this.data.title !== 'leaveTechPortal'){
            sessionStorage.setItem("title", this.data.title);
          }
          //console.log(this.data);
          //add title to header
          this.title = this.data.title;


          // add back button to header if route has parent defined
           console.log(this.data.parent + "1: "+ this.data.parent2);
          if(this.data.parent != undefined && this.data.parent != ""){
             // alert("condition true" + this.data.parent);
            //console.log(this.data.parent + "2: "+ this.data.parent2);
            this.parent=true;
            this.parent2=false;

          }
          else if (this.title=="Registration Tutorial") {
            this.parent2=false;
            this.parent=true;
          }
          else{
            // alert("false" + this.data.parent2);
            //console.log(this.data.parent + "3: "+ this.data.parent2);
            this.parent2=true;
            this.parent=false;

            // Important: this is to select correct item at footer
            this._commonApiCall.selectFooterItem(this.data.title);
          } 
          

    })


  }
  goBack() {
    document.getElementById("loadingDiv").style.display = "none";
    this._location.back();
  }
  enableToggle(event) {

    var className = document.getElementById("togg-dv").className;
    if (className == "hidden-content slide-down")
      document.getElementById("togg-dv").className = "hidden-content slide-up";

    else
      document.getElementById("togg-dv").className = "hidden-content slide-down";



    var theElement = document.getElementById("pageHtml");


    theElement.onclick = function() {
      var className = document.getElementById("togg-dv").className;

      if (className == "hidden-content slide-down") {

        document.getElementById("togg-dv").className = "hidden-content slide-up";

      }
    }


    theElement.ontouchstart = function() {
      var className = document.getElementById("togg-dv").className;
      if (className == "hidden-content slide-down")
        document.getElementById("togg-dv").className = "hidden-content slide-up";
    }

    event.stopPropagation();
    return false;
  }
// backToParents(){
//   let sessionExp=sessionStorage.getItem("token");
//   console.log("Hello :"+sessionExp);
//   if(this.parents !=='' && this.parents !== undefined && sessionExp!==""){
//     //alert("sessionExp");
//     this._router.navigate(['dashboard/'+this.parents]);
//   }
//   else{
//     this._router.navigate([this.parents]);
//   }

// }
hideFooterIOS(){

  var theElement = document.getElementById("pageHtml");
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      theElement.ontouchstart = function() {
        this.hideKeyboard = document.activeElement;
        this.hideKeyboard.blur();
      }
    }
  }
  lasttitle(){
    console.log(sessionStorage.getItem("title"));
    this.router.navigate(['dashboard/' +sessionStorage.getItem("title")]);
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
}
