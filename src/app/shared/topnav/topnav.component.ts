import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
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
LeaveTechTitle;
previousUrl: string;
routerLinkActive="";
title = ''; parent: boolean = false;
claimClicked = false;
object: any;
parent2 = true;
isActive = false;
 
  htmlElement: any; hideKeyboard: any;
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
    else {
      //zvar root = document.getElementsByTagName('html')[0];
      root.setAttribute('class', '');
    }


  }
  doc: any;

  handlerFunction(event) {

  }

  ngOnInit() {
  // this.LeaveTechTitle=sessionStorage.getItem("storage_navigation");
   //alert(this.LeaveTechTitle);
     if (sessionStorage.getItem("Id")=="leavedisability@gmail.com") {

  document.getElementById("worker").classList.remove("router-link-active");

}

else if (sessionStorage.getItem("Id")=="workerscomp@gmail.com" && sessionStorage.getItem("HelpClicked")=="Worker-Registration"){
   document.getElementById("leave").className+=" router-link-active";
   document.getElementById("worker").classList.remove("router-link-active");
   document.getElementById("set_id").classList.remove("router-link-active");
}



 



 
     // if(this.title=="forgotPass"){
     //   alert(this.title);

        // document.body.className= 'cnt-ttl-frt-pss';
     // }
     
    //    window.addEventListener("click",()=>{
    //      if (document.getElementById("navbar-collapse-id-qwe").style.display=='block') {
    //   document.getElementById("navbar-collapse-id-qwe").style.display="none";
    //      }
    // });
   
  
 
    window.scrollTo(0, 0);
    this.router.events
    .subscribe(event =>{
      this.hideFooterIOS();
      //alert("ruchi");
      if (document.getElementById("togg-dv")) {
           var className = document.getElementById("togg-dv").className;
          if (className == "hidden-content slide-down"){
            //provider map page more option popup in footer
            //document.getElementById("togg-dv").className = "hidden-content slide-up";
          }

        }
      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          this.data = currentRoute.snapshot.data;
          if(this.data.title !== 'leaveTechPortal' && this.data.title !== 'settings' && this.data.title !='security Info' && this.data.title !== 'Leave/Disability Registration' && this.data.title !='change email address' && this.data.title !='Password' && this.data.title !='Info' && this.data.title !='Helping'){
             //alert(" Hi :"+sessionStorage.getItem('title'));
            sessionStorage.setItem("title", this.data.title);
          }
          //console.log(this.data
          //console.log(this.data.parent,"Hello");
          sessionStorage.setItem("parent",this.data.parent);
                    //add title to header
          this.title = this.data.title;
          //alert(this.data.parent);
          //sessionStorage.setItem("footerHide",this.title);
//if(this.title== "Validate Security Answer"){ 


 

 //alert(this.title);

 //document.body.classList.add('topnav-main-new');
 //document.body.addClass = ('topnav-main-new');

//document.body.className = '';

//}

// else{

//    document.body.className = 'topnav';

// }

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

          //  if(this.flag==false)
          //    this.router.navigate(['dashboard/' +sessionStorage.getItem("title")]); 
          //    else{
          //         this.router.navigate(['./dashboard/leaveTechPortal']);
       
          //    }
  // //             try{
  //            var className = document.getElementById("claimspagediv").className;
  //           }catch(ex){
  //            var className = ""
  //          }
    
   
  // // //     console.log(className)
  //       var y =document.getElementById("leave")  ;
  // //     //  if (!className){
  // //     //   x.style.display="none";
  // //     //  }
  // //       if(className=="leavetech"){
         
  // //       y.style.border="1.5px solid #0a9e49";
  // //         y.style.padding="5px";
  // //         // y.style.border="0px";
  // //              }
  // //           else{
  // //              y.style.border="0px";
  // //               alert(className)
             
  
  
  // }
  
              
            
    
        

          //   if(this.parent==true){
              //alert(this.parent);
          //     var x =document.getElementById("leave");  
          // x.setAttribute("className","list-group-item-mycom router-link-active");
          // x.style.border="1.5px solid #0a9e49";
          // x.style.padding="5px";
         
          //     //this.navchange();
          //   }
          //   else{
          //      var y =document.getElementById("worker");
          // y.setAttribute("className","list-group-item-mycom router-link-active");
          // y.style.border="1.5px solid #0a9e49";
          //   }
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
  //document.getElementById("toshow").style.display = 'block';
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


// backarr(){
//   //alert(sessionStorage.getItem("parent"));
//   if (sessionStorage.getItem("parent")=="settings" || sessionStorage.getItem("parent")==""){
 
//     document.getElementById("set_id").className+=" aclass1";
//     document.getElementById("leave").classList.remove("aclass1");
//     document.getElementById("worker").classList.remove("aclass1");
//   } else if(sessionStorage.getItem("parent")=="leaveTechPortal" || sessionStorage.getItem("parent")=="") {
//    // document.querySelector("leave").className=document.querySelector("leave").className.split("aclass1").join("");
//     //ELEMENT.classList.remove("active-class1"); 
//     document.getElementById("leave").className+=" aclass1";
//     document.getElementById("worker").classList.remove("aclass1");
//     document.getElementById("set_id").classList.remove("aclass1");
//   }
//   else{
//     document.getElementById("worker").className+=" aclass1";
//      document.getElementById("leave").classList.remove("aclass1");
//     document.getElementById("set_id").classList.remove("aclass1");
//   }
// }
//elseBack(){
 // alert(sesselseBack(){ionStorage.getItem("storage_navigation"));
//   if(sessionStorage.getItem("storage_navigation")  == 'claims'){
//     alert(sessionStorage.getItem("storage_navigation"));
//   this.backarr();
//   return false;
// }

  //  document.getElementById("worker").className+=" router-link-active";
    // document.getElementById("leave").classList.remove("router-link-active");
   // document.getElementById("set_id").classList.remove("router-link-active");

//}
backarr(event){

    //document.getElementById("worker").className+=" router-link-active";
    // document.getElementById("leave").classList.remove("router-link-active");
   // document.getElementById("set_id").classList.remove("router-link-active");



// if(sessionStorage.getItem("storage_navigation")  == 'leaveTechPortal'){
//   this.elseBack();
//   return false;
// }


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
  else {
    document.getElementById("worker").className+=" router-link-active";
    document.getElementById("leave").classList.remove("router-link-active");
   document.getElementById("set_id").classList.remove("router-link-active");
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
// nav(){
//   if (sessionStorage.getItem("Id")=="leavedisability@gmail.com") {
//     this.router.navigate(['./dashboard/leaveTechPortal']);
//   } else {
//     this.router.navigate(['leaveregistration']);
//   }
//    }
settingClick(){
 
  sessionStorage.setItem("storage_navigation", this.data.title);
  document.getElementById("set_id").className+=" router-link-active";
    document.getElementById("worker").classList.remove("router-link-active");
   document.getElementById("leave").classList.remove("router-link-active");
 //  alert("inside settings::"+sessionStorage.getItem("storage_navigation"));
}
navchange(){
   // alert(sessionStorage.getItem("storage_navigation"))
 // alert(sessionStorage.getItem("storage_navigation"))
 // sessionStorage.setItem("title", this.data.title);
    sessionStorage.setItem("storage_navigation",this.data.title);
    // alert(this.data.title);
     // sessionStorage.setItem("HelpClick","" );
     document.getElementById("leave").className+=" router-link-active";
    document.getElementById("worker").classList.remove("router-link-active");
   document.getElementById("set_id").classList.remove("router-link-active");
 // let b=sessionStorage.getItem("Id1");
//  if(b=='workerscom@gmail.com'){
//            this.router.navigate(['./newuser/leaveregistration'])
//             }
//            else {
//              this.router.navigate(['./dashboard/claims']);
//            }
             //   var x =document.getElementById("leave")
       //     x.setAttribute("className","list-group-item-my123 router-link-active");
          // x.style.border="1.5px solid #0a9e49"; 
        
            var x =document.getElementById("leave")  
           if (sessionStorage.getItem("Id")=="workerscomp@gmail.com") { //workerscomp@gmail.com
          // x.setAttribute("className","list-group-item-mycom router-link-active");
          // x.style.border="1.5px solid #0a9e49";
          // x.style.padding="5px";
    
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
          //  x.style.border="1.5px solid #0a9e49";
          //  x.style.padding="5px";
       
      }

  }

    newformat(){  
   //  alert(sessionStorage.getItem("storage_navigation"))
     //sessionStorage.setItem("title", this.data.title);
      sessionStorage.setItem("HelpClicked","" );
        sessionStorage.setItem("storage_navigation",this.data.title );
        //   alert( sessionStorage.getItem("storage_navigation"));

    // sessionStorage.setItem("title", this.data.title); 

   // alert("worker");
  //    let a=sessionStorage.getItem("Id");
  // if(a=='leavedisability@gmail.com'){
  //   this.router.navigate(['./newuser/workercomp'])
  //          }
  //          else {
  //            this.router.navigate(['./dashboard/leaveTechPortal']);
  //          }
        var x =document.getElementById("worker")
    document.getElementById("worker").className+=" router-link-active";
    document.getElementById("leave").classList.remove("router-link-active");
   document.getElementById("set_id").classList.remove("router-link-active");
      //  x.setAttribute("className","list-group-item-my123 router-link-active");
      //  x.style.border="1.5px solid #0a9e49";
// var x =document.getElementById("worker")
  if (sessionStorage.getItem("Id")=="leavedisability@gmail.com") {
    //  x.setAttribute("className","list-group-item-mycom");
       // x.style.border="0px";
       //  x.style.padding="5px";
    
     this.router.navigate(['./dashboard/workercomp'])
   
        //this.router.navigate(['dashboard/' +sessionStorage.getItem("title")]);
      } 
    else{
      
    //  alert(sessionStorage.getItem("title"));
      // x.style.border="0px";
        //this.router.navigate(['./dashboard/claims']);
        //state preserve(ruchi)
        this.router.navigate(['dashboard/'+sessionStorage.getItem("title")]);
      //   this.router.navigate(['./dashboard/workercomp'])

        //   x.style.border="1.5px solid #0a9e49";
        // x.style.padding="5px";

       
      

    //    var x =document.getElementById("worker")
    //   if (sessionStorage.getItem("Id")=="leavedisability@gmail.com") {
    //     x.setAttribute("className","list-group-item-mycom");
    //     x.style.border="1.5px solid #0a9e49";
    //     x.style.padding="5px";
    //     this.router.navigate(['./dashboard/workercomp']);
    //     } 
    // else{
    //     this.router.navigate(['./dashboard/claims']);
    //     x.style.border="1.5px solid #0a9e49";
    //     x.style.padding="5px";

    }

  }
  
   

  lasttitle(){
  
    // if (sessionStorage.getItem("title")) {
      let a=sessionStorage.getItem("Id");
     if(a=='leavedisability@gmail.com'){
     
      this.router.navigate(['createUser']);
     
    }
    else{
      //alert("else if")
      this.router.navigate(['dashboard/' +sessionStorage.getItem("title")]);
      //  alert("kh");
     // var x =document.getElementById("worker")
    // console.log(x);
    // x.setAttribute("className","activ-me-new");
    
      //x.style.border="1.5px solid #0a9e49";
        
    }
    //  x.style.borderColor="green";
  }

  // clickDisability(){
  //   let a=sessionStorage.getItem("Id");
  //   if(a=='leavedisability@gmail.com'){
  //     this.router.navigate(['./dashboard/leaveTechPortal']);
  //   }
  //   else{
  //     this.router.navigate(['./newuser/leaveregistration']);
  //   }
   //}
  //  new1(){
      
  //     try{
  //       var className = document.getElementById("portal").className;
  //   }catch(ex){
  //       var className = ""
  //   }
    
     
  //     console.log(className)
  //      var x =document.getElementById("portal");
  //     //  if (!className){
  //     //   x.style.display="none";
  //     //  }
  //      if(className=="leavetech"){
   
  //      x.style.display="none";
  //   }
  //     else{
  //         alert(sessionStorage.getItem("title"));
  // alert(className)
  //      x.style.display="block";
  //     }
  //  }
  eventCalled() {

    sessionStorage.setItem("refreshProviders", "true");
    document.getElementById("loadingDiv").style.display = "none";
    

    //  var x =document.getElementById("worker")
     
    //  x.setAttribute("className","list-group-item-mycom");
   //   x.style.border="0px";
    //this.isActive = !this.isActive;
   this.isActive = !this.isActive;
    if (this.claimClicked == true) {
      sessionStorage.setItem('pagePosition', undefined);
      this.claimClicked = false;
    }

//  var x =document.getElementById("leave") ;
//  var y= document.getElementById("worker")
//             console.log(x);
      //  x.style.border="0px";
      // y.style.border="0px";
         
        //this.router.navigate(['leaveregistration']);
        //this.router.navigate(['./dashboard/claims']);
      
    // if claims is clicked then make page position as undefined,so page will open at top
  //   if (this.claimClicked == true) {
  //     sessionStorage.setItem('pagePosition', undefined);
  //     this.claimClicked = false;
  //  }
    }
 
 
   
 moreDropdownFunc(drop){

  //alert("Kh");
  console.log(drop);
  
if (drop.style.display=="none") {

  window.addEventListener("click",()=>{
    // alert("Kh");
      drop.style.display="none";
    })
    //  window.addEventListener("touchstart",()=>{
    // // alert("Kh");
    //   drop.style.display="none";
    // })
    setTimeout(()=>{
      drop.style.display="block";
    },100)
} else{
  // alert("KH2")
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


   public menuicon(){
      var x = document.getElementById('navbar-collapse-id-qwe')
     x.style.display="none";
  }
  
}
