 import { Component, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { CommonFunction } from './commonFunction';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CommonAPICall {
  commnFunc;
  public isLoading = false;
  akhilesh:any;
  modalBackdrop:any;
  timeout=15000;
  //@ContentChild('showhideinput') input;
  constructor(private _http: Http, private route: Router) {
    this.commnFunc = new CommonFunction();
  }

  getServiceGoogleMaps(url: String) {
    return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address={' + url + '}&key=AIzaSyBtFiDUC61b_MUe3wiMaIwvfpcz2xb_sQ4')
      .map(resp => resp.json());
  }
addDivBeforeBody(){

}

  // Get service implementation.
  getService(url: string, headerToken: string, contentType: string) {

    console.log(sessionStorage.getItem('local_appUrl'),  url);
    //------------------------------------------------------Incresing time limit for tutorials start--------------------------------------------------------------------
    if(sessionStorage.getItem('registerTimeout') == 'true'){
      this.timeout = 60000;

    }
//------------------------------------------------------Incresing time limit for tutorials end--------------------------------------------------------------------
this.addDivBeforeBody();


    this.isLoading = true;
    document.getElementById("loadingDiv").style.display = "block";

    var headers = new Headers({
      'Authorization': headerToken,
      'Content-Type': contentType,
      'ApplicationVersion': "3.0",
      'Platform': "browser",
      'ApplicationName': 'MyClaim'

    })
    var options = new RequestOptions({
      headers: headers
    })


     return this._http.get(sessionStorage.getItem('local_appUrl') + url, options)
      .timeout(this.timeout)
      .map(resp => {
    
        // code to show loader when http request is called
        this.isLoading = false;
        document.getElementById("loadingDiv").style.display = "none";
        return resp.json();

      });

  }
  // Post Service Implementation.
  postService(url: string, headerToken: string, contentType: string, data: any) {
  this.addDivBeforeBody();
    this.isLoading = true;
    document.getElementById("loadingDiv").style.display = "block";

    var headers = new Headers({
      'Authorization': headerToken,
      'Content-Type': contentType,
      'ApplicationVersion': "3.0",
       'Platform': "browser",
       'ApplicationName': 'MyClaim',



      

      

     
    })

    var options = new RequestOptions({
      headers: headers
    })

    return this._http.post(sessionStorage.getItem('local_appUrl') + url, data, options)
      // .timeout(150000, Observable.throw('Error Timeout'))
      .timeout(15000)
      .map(resp => {

        // code to show loader when http request is called
        this.isLoading = false;
        document.getElementById("loadingDiv").style.display = "none";

        return resp.json();
      })
  }

  //Put Service Implementation.
  putService(url: string, headerToken: string, contentType: string, data: Object) {
    this.addDivBeforeBody();

    this.isLoading = true;
    document.getElementById("loadingDiv").style.display = "block";

    var headers = new Headers({
      'Authorization': headerToken,
      'Content-Type': contentType,
       'ApplicationVersion': "3.0",
      'Platform': "browser",
      'ApplicationName': 'MyClaim'
  })
    var options = new RequestOptions({
      headers: headers
    })

   return this._http.put(sessionStorage.getItem('local_appUrl') + url, data, options)
      .timeout(15000)
      .map(resp => {

        // code to show loader when http request is called
        this.isLoading = false;
        document.getElementById("loadingDiv").style.display = "none";
        return resp.json();
      });

  }

  // handle errors in http requests, hide loader and show error in popup
  handleError(res: any, errorHeading) {
   console.log(res.status);
    if (res.status == 500 || res.status == 0) {
      var message = "The service is currently unavailable at this time. Please try your inquiry again later. We apologize for any inconvenience.";
      this.commnFunc.alertPopup(message, errorHeading);
      document.getElementById("loadingDiv").style.display = "none";
    }
     if (res.status == 408 || res.status == undefined) {
      var message = "Your inquiry has experienced a delay.  Please try again later.  If problem persists, please contact our Support Center at MyClaim_SelfService_Support@broadspire.com.";
      this.commnFunc.alertPopup(message, errorHeading);
      document.getElementById("loadingDiv").style.display = "none";
    }
    else if(res.__zone_symbol__error){
      if( res.__zone_symbol__error.message == "Timeout has occurred"){
      var message = "Your inquiry has experienced a delay.  Please try again later.  If problem persists, please contact our Support Center at MyClaim_SelfService_Support@broadspire.com.";
      this.commnFunc.alertPopup(message, errorHeading);
      document.getElementById("loadingDiv").style.display = "none";
    }
    }
    else if (res.json().error != null) {
      if (res.json().error_uri != undefined && res.json().error_uri == "FirstTimeLogIn" ||
        res.json().error_uri != undefined && res.json().error_uri == "PasswordExpired") {
        document.getElementById("loadingDiv").style.display = "none";
        sessionStorage.setItem('forgetPassFlag','firstTimeLogin');
        this.route.navigate(['firstTimeLogin']);
        document.getElementById("loadingDiv").style.display = "none";
      }
     else
       {
         //alert("else part" +res.json());
               this.commnFunc.alertPopup(res.json().error_description, errorHeading);
             }

    
      // else if(document.getElementsByTagName("html")[0].className !== "login-bg-image") {
       

      //   this.commnFunc.alertPopup(res.json().error_description, errorHeading);
      // }
      // else if((document.getElementsByTagName("html")[0].className == "login-bg-image") && (res.json().error_description == 'The user name or password is incorrect.')) {
       

      //   this.commnFunc.alertPopup(res.json().error_description, errorHeading);
      // }
     

    }

    else if (res.json().errors !== null && res.status!=400) {
      //  let classname = document.getElementsByClassName("closepopup");
      let classname = document.getElementById("closeMe");
      var routevar = this.route;

      classname.addEventListener('click', function cls(event) {
        if (res.json().errorMessage == "Authorization has been denied for this request.") {
          document.getElementById("closeMe").removeEventListener('click', cls);
          routevar.navigate(['']);
        }


      }, false);
      
      //updated by ruchi(session expire popup)
     if ((res.json().errorMessage == "Authorization has been denied for this request." ) && (document.getElementsByTagName("html")[0].className !== "login-bg-image")) {
       this.commnFunc.alertPopup("Your session has expired - please sign in again.", errorHeading);
       routevar.navigate(['']);
}
else if( (document.getElementsByTagName("html")[0].className == "login-bg-image")){
 
          // this.commnFunc.alertPopup(res.json().error_description, errorHeading);
          document.getElementById("loadingDiv").style.display = "none";
        } 

     else{
       //alert("else" +errorHeading);
       //var message = "The service is currently unavailable at this time. Please try your inquiry again later. We apologize for any inconvenience.";
      this.commnFunc.alertPopup("The service is currently unavailable at this time. Please try your inquiry again later. We apologize for any inconvenience.", errorHeading);
        // this.commnFunc.alertPopup(res.json().htmlErrors, errorHeading);
      } 
    
   //--------------------Updated By Niruti do not comment pls----------------//
      document.getElementById("loadingDiv").style.display = "none";

}
    else if (res.status == 400) {
     
      if(res.json().errorMessage == "The request is invalid."){
        
        this.commnFunc.alertPopup(res.json().errors, errorHeading);
      }
      else
      {

      this.commnFunc.alertPopup(res.json().errorMessage, errorHeading);
    }
    }
// else if( (document.getElementsByTagName("html")[0].className !== "login-bg-image")){
//           this.commnFunc.alertPopup(res.json().error_description, errorHeading);
//         } 

    else {
      throw new Error("HTTP error: " + res.statusText + " (" + res.status + ")");
    }

  }
  navigate() {
    //alert('navigation')
    this.route.navigate(['']);
  }
  // this function is to hide loader and display error message when error has occured in http request
  hideLoaderShowPopup(message, errorHeading) {
    document.getElementById("openModalButton").click();
    document.getElementById('modalLabel').innerHTML = message;
    //document.getElementById('modal-head').innerHTML = errorHeading;
    document.getElementById("loadingDiv").style.display = "none";

  }


  //--------------------------------Show/Hide password method for all the input box start-----------------------------
  type= "password";
  show = false;
  toggleShow()
    {
      //console.log(this.show);
        this.show = !this.show;
        if (this.show){
            this.type = "text";
            return this.type;
        }
        else {
            this.type = "password";
            return this.type;
        }
    }
  //-----------------------------------------------Show/Hide password method for all the input box end-------------------------------------
  //----------------------------------Show/Hide password method for specific input box start-----------------------------
  changeInput(myInput) {
    this.show =!this.show;
    if(this.show){
    myInput.type = "text";
    return myInput.type;
    }
    else{
    myInput.type = "password";
    return myInput.type;
  }
  }
  //----------------------------------Show/Hide password method for specific input box end-----------------------------

  //----------------------------------------------Password validation method start------------------------------------------------------
  checkPwd (str) {
    if (str.length < 8) {
            return "Password must be at least 8 characters";
      }
      else if(str.search(/[a-z]/) == -1 && str.search(/[A-Z]/) == -1){
        return "The password must have either lowercase letter or uppercase letter";
      }
      else if(str.search(/[A-Z]/) == -1 && str.search(/\d/) == -1){
        return "The password must have either uppercase letter or number";
      }
      else if(str.search(/\d/) == -1 && str.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) == -1){
        return "The password must have either number or special character";
      }
      else if(str.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) == -1 && str.search(/[a-z]/) == -1){
        return "The password must have either special character or lowercase letter";
      }
      else if(str.search(/[A-Z]/) == -1 && str.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) == -1){
        return "The password must have either uppercase letter or special character";
      }
      else if(str.search(/\d/) == -1 && str.search(/[a-z]/) == -1){
        return "The password must have either number or lowercase letter";
      }
      else {
        return "";
      }
    }


selectFooterItem(page){

  if(document.querySelector(".col2-xx-mm.active")){
  var theElement = <HTMLElement>document.querySelector(".col2-xx-mm.active");
  theElement.classList.remove("active");
  }
  if(document.querySelector(".pop-blur-dv.active")){
    var theElement = <HTMLElement>document.querySelector(".pop-blur-dv.active");
    theElement.classList.remove("active");
  }
  // if(document.getElementById("Social")){

  // }
  if(document.getElementById(page)){
  var root = document.getElementById(page);
  root.className += " "+"active";
}
}

// check if token is valid
checkToken(route){
  var classname = document.getElementById("closeMe");
if ((sessionStorage.getItem('token') == undefined || sessionStorage.getItem('token') == '')) {
    this.commnFunc.alertPopup("Your session has expired - please sign in again.",
    "Settings");
    classname.addEventListener('click', function cls(event) {
      document.getElementById("closeMe").removeEventListener('click', cls);
      route.navigate(['']);
    });
}
}
// ----------------------------------------Add dynemic class to body tag to all  the page accordingly start--------------------------------------------------------
addClass1 (pageName:string){
   var root = document.getElementsByTagName('html')[0];
      root.setAttribute('class', pageName);
}
// ----------------------------------------Add dynemic class to body tag to all  the page accordingly end--------------------------------------------------------

// password validation
validatePassword(string){
// var p = document.getElementById('newPassword').value ,error = [];
  if(string.search(/.{8,}/)){
    return("Your password should be of minimum length 8");
  }
    else if ((string.search(/[0-9]/) < 0) && (string.search(/.*[!@#$%^&*]/ ))) {
        return("Your password must contain at least one digit atleast one special character ");
         }
           else if((string.search(/.*[!@#$%^&*]/) && string.search(/.*[A-Z]/)) ){
             return("password must contain atleast one special character  and upper case letter");

           }

             else if((string.search(/.*[A-Z]/) && string.search(/.*[a-z]/))){
             return("password must contain atleast one uppercase letter and lower case letter");

           } 
             else if((string.search(/.*[!@#$%^&*]/) && string.search(/.*[a-z]/)) ){
             return("password must contain atleast one special character  and upper case letter");

           }
}

orderTime(url:string){
  return this._http.get(url).map(resp=>{
    return resp.json();
  })
}


}
