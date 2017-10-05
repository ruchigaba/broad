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
parent2 = true;
isActive = false;
  claimClicked = false;
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
          if(this.data.title !== 'leaveTechPortal' && this.data.title !== 'settings'){
            sessionStorage.setItem("title", this.data.title);
          }
          //console.log(this.data);
          //add title to header
          this.title = this.data.title;


          // add back button to header if route has parent defined
           console.log(this.data.parent + "1: "+ this.data.parent2);
          if(this.data.parent != undefined && this.data.parent != ""){
            
            this.parent=true;
            this.parent2=false;

          }
          else if (this.title=="Registration Tutorial") {
            this.parent2=false;
            this.parent=true;
          }
          else{
            
            this.parent2=true;
            this.parent=false;

            // Important: this is to select correct item at footer
            this._commonApiCall.selectFooterItem(this.data.title);
          } 
          

    })


  // document.getElementsByTagName("Html")[0].addEventListener("click",()=>{
  //   if (document.getElementById("navbar-collapse-id-qwe").style.display=="block") {
  //   document.getElementById("navbar-collapse-id-qwe").style.display="none";
  //   // alert("hello");
  // }
  // })
// }
 if (sessionStorage.getItem('token') == undefined || sessionStorage.getItem('token') == "") {
    document.getElementById("toshow").style.display = 'none';
     document.getElementById("tohide").style.display = 'none';
   //  document.getElementById("titleBar").style.display = 'block';
 }
 else{
  // document.getElementById("toshow").style.display = 'block';
    document.getElementById("titleBar").style.display = 'none';
 }

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
      var x =document.getElementById("worker")
      console.log(x);
      x.setAttribute("className","list-group-item-mycom router-link-active");
    
      x.style.border="1.5px solid #0a9e49";
    //  x.style.borderColor="green";
  }
  eventCalled() {

    sessionStorage.setItem("refreshProviders", "true");
    document.getElementById("loadingDiv").style.display = "none";


      var x =document.getElementById("worker")
     
      x.setAttribute("className","list-group-item-mycom");
      x.style.border="0px";
    //this.isActive = !this.isActive;
    this.isActive = !this.isActive;

    // if claims is clicked then make page position as undefined,so page will open at top
  //   if (this.claimClicked == true) {
  //     sessionStorage.setItem('pagePosition', undefined);
  //     this.claimClicked = false;
  // }
    }
 moreDropdownFunc(drop){

  // alert("Kh")
  console.log(window);
  
if (drop.style.display=="none") {
  drop.style.display="block";
  // window.addEventListener("click",()=>{
  //     drop.style.display="none";
  //   });
} else{
  drop.style.display="none";
}
// document.getElementsByTagName("LI")
  //  var x = document.getElementById('navbar-collapse-id-qwe')
  //  console.log(x)
  //  if(  x.style.display == "block"){
  //      x.style.display = "none";
  //  }
  //  else{
  //       x.style.display = "block";
  //  }

    //   if (x.style.display=="block") {
    
    //     x.style.display="none";
    //      document.addEventListener("click",()=>{
    //   x.style.display="none";
    // })
    //     document.addEventListener("touchstart",()=>{
    //   x.style.display="none";
    // })
        
    //   }
    //   else{
    
    //     x.style.display="block";
    //   }
      
  }


   public k(){
      var x = document.getElementById('navbar-collapse-id-qwe')
     x.style.display="none";
  }
  
}
