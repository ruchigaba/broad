import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import {Location} from '@angular/common';
import {CommonAPICall} from '../../shared/shared.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  encapsulation: ViewEncapsulation.None, 
  providers: [CommonAPICall]
})
export class TopnavComponent implements OnInit {
LeaveTechTitle;
previousUrl: string;
routerLinkActive="";
title = ''; parent: boolean = false;
claimClicked = false;
object: any;
parent2 = true;
isActive = false;
htmlElement: any;
hideKeyboard: any;
data: any;
a;
b;
WelcomeUsername = sessionStorage.getItem('welcomeUsername');


  constructor(private route: ActivatedRoute,  private router: Router, private _location: Location, private _commonApiCall: CommonAPICall) {
  var root = document.getElementsByTagName('html')[0];
  if (sessionStorage.getItem('token') == undefined || sessionStorage.getItem('token') == "") {
   var root = document.getElementsByTagName('html')[0];
   root.setAttribute('class', 'outerPages');
    }
    else 
    {
   root.setAttribute('class', '');
    }
    }
  doc: any;
  handlerFunction(event) { }
  ngOnInit() {
  if (sessionStorage.getItem("Id")=="leavedisability@gmail.com") 
  {
    document.getElementById("worker").classList.remove("router-link-active");
  }
 else if (sessionStorage.getItem("Id")=="workerscomp@gmail.com" && sessionStorage.getItem("HelpClicked")=="Worker-Registration")
 {
   document.getElementById("leave").className+=" router-link-active";
   document.getElementById("worker").classList.remove("router-link-active");
   document.getElementById("set_id").classList.remove("router-link-active");
 }
 else if (sessionStorage.getItem("Id")=="onlyleavedisability@gmail.com"){
  document.getElementById("levdisability").className+=" extraonlyleave";
 }
 window.scrollTo(0, 0);
    this.router.events
    .subscribe(event =>{
      this.hideFooterIOS();
     if (document.getElementById("togg-dv")) {
      var className = document.getElementById("togg-dv").className;
     if (className == "hidden-content slide-down"){
           }
         }

      // To store title of previous click

      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          this.data = currentRoute.snapshot.data;
          if(this.data.title !== 'leaveTechPortal' && this.data.title !== 'settings' && this.data.title !='security Info' && 
          this.data.title !== 'Leave/Disability Registration' && this.data.title !='change email address' 
          && this.data.title !='Password' && this.data.title !='Info' && this.data.title !='Helping'){
            sessionStorage.setItem("title", this.data.title);
          }
          sessionStorage.setItem("parent",this.data.parent);
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
          else if(this.title=="leaveTechPortal"){
            this.parent2=true;
            this.parent=true;
           }
           else{
            this.parent2=true;
            this.parent=false;

            // Important: this is to select correct item at footer
            this._commonApiCall.selectFooterItem(this.data.title);
          } 
           })
  if (sessionStorage.getItem('token') == undefined || sessionStorage.getItem('token') == "") {
    document.getElementById("toshow").style.display = 'none';
     document.getElementById("tohide").style.display = 'none';
 }
 else if(sessionStorage.getItem('Id')=="onlyworkerscomp@gmail.com" || sessionStorage.getItem("Id")=="workerscompExpiredltuser@gmail.com"){
   document.getElementById("usernameweldiff").style.display = 'none';
   document.getElementById("toshow").style.display = 'none';
   document.getElementById("titleBar").style.display = 'block';
   document.getElementById("tohide").style.display = 'none';
}
  else if(sessionStorage.getItem('Id')=="onlyleavedisability@gmail.com"){
   document.getElementById("usernamewelcome").style.display = 'none';
   document.getElementById("WC").style.display = 'none';
   document.getElementById("titleBar").style.display = 'none';
 }
else{
   document.getElementById("usernamewelcome").style.display = 'none';
   document.getElementById("titleBar").style.display = 'none';
   document.getElementById("onlyworkers").style.display = 'none';
 }
 }
   ngOnDestroy(){
    document.body.className = '';
    }
  goBack() {
    document.getElementById("loadingDiv").style.display = "none";
    this._location.back();
  }
 

  // Back arrow to move to previous state
   backarr(event){
if(sessionStorage.getItem("storage_navigation")== "settings"||
   sessionStorage.getItem("storage_navigation")== "security Info"||
   sessionStorage.getItem("storage_navigation")== "change email address"||
   sessionStorage.getItem("storage_navigation")== "Password"||
   sessionStorage.getItem("storage_navigation")== "Info")
  {
     document.getElementById("set_id").className+=" router-link-active";
     document.getElementById("leave").classList.remove("router-link-active");
     document.getElementById("worker").classList.remove("router-link-active");
  }
  else if(sessionStorage.getItem("storage_navigation")== "leaveTechPortal" ){
    document.getElementById("leave").className+=" router-link-active";
    document.getElementById("worker").classList.remove("router-link-active");  
    document.getElementById("set_id").classList.remove("router-link-active");
  }
  else{
    document.getElementById("worker").className+=" router-link-active";
    document.getElementById("leave").classList.remove("router-link-active");
    document.getElementById("set_id").classList.remove("router-link-active");
  }
  }

 settingClick(){
    sessionStorage.setItem("storage_navigation", this.data.title);
    document.getElementById("set_id").className+=" router-link-active";
    document.getElementById("worker").classList.remove("router-link-active");
    document.getElementById("leave").classList.remove("router-link-active");
}
 leavedisabilityClick(){
     sessionStorage.setItem("storage_navigation",this.data.title);
     document.getElementById("leave").className+=" router-link-active";
     document.getElementById("worker").classList.remove("router-link-active");
     document.getElementById("set_id").classList.remove("router-link-active");
     var x =document.getElementById("leave")  
           if (sessionStorage.getItem("Id")=="workerscomp@gmail.com")
            { 
             this.router.navigate(['./dashboard/leaveregistration']);
           }
          else if ( sessionStorage.getItem("HelpClick")=="leave-disability" && sessionStorage.getItem("Id")=="leavedisability@gmail.com"){
         document.getElementById("worker").className+=" router-link-active";
         document.getElementById("leave").classList.remove("router-link-active");
         document.getElementById("set_id").classList.remove("router-link-active");
          }
          else 
          {
         this.router.navigate(['./dashboard/leaveTechPortal']);
          }
 }
  workercompClick(){  
         sessionStorage.setItem("HelpClicked","" );
         sessionStorage.setItem("storage_navigation",this.data.title );
         var x =document.getElementById("worker")
         document.getElementById("worker").className+=" router-link-active";
         document.getElementById("leave").classList.remove("router-link-active");
         document.getElementById("set_id").classList.remove("router-link-active");
       if (sessionStorage.getItem("Id")=="leavedisability@gmail.com") {
         this.router.navigate(['./dashboard/workercomp'])
         } 
       else{
         this.router.navigate(['dashboard/'+sessionStorage.getItem("title")]);
        }
 }
 lasttitle(){
 let a=sessionStorage.getItem("Id");
 if(a=='leavedisability@gmail.com'){
    this.router.navigate(['createUser']);
  }
 else{
     this.router.navigate(['dashboard/' +sessionStorage.getItem("title")]);
    }
   }
 eventCalled() {
    sessionStorage.setItem("refreshProviders", "true");
    document.getElementById("loadingDiv").style.display = "none";
    this.isActive = !this.isActive;
    if (this.claimClicked == true) {
      sessionStorage.setItem('pagePosition', undefined);
      this.claimClicked = false;
    }
}
hideFooterIOS(){
var theElement = document.getElementById("pageHtml");
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      theElement.ontouchstart = function() {
        this.hideKeyboard = document.activeElement;
        this.hideKeyboard.blur();
      }
    }
  }

 moreDropdownFunc(drop){
 console.log(drop);
if (drop.style.display=="none") {
 window.addEventListener("click",()=>{
 drop.style.display="none";
    })
  setTimeout(()=>{
  drop.style.display="block";
    },100)
}
 else
 {
 drop.style.display="none";
}
}
 public menuicon(){
 var x = document.getElementById('navbar-collapse-id-qwe')
 x.style.display="none";
  }
  
}
