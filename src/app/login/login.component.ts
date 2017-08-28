import { Component, ContentChild, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';
import { CommonAPICall } from '../shared/shared.service';
import { CommonFunction } from '../shared/commonFunction';

import {ViewEncapsulation} from '@angular/core';
//import { EulaComponent} from '../eula/eula.component';
import {Router} from '@angular/router';
declare var navigator;
declare var cordova;
@Component({
 
    selector: 'login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.scss'],
      encapsulation: ViewEncapsulation.None,
    providers: [LoginService, CommonAPICall],

})

export class LoginComponent implements OnInit, OnDestroy{
     commnFunc;
     bgImgClass=true;
   public redirectUrl: string = '/claims';
   reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //model: any= {}
   pass;
   userFirstName: string;
  private path;
  type = "password";
  show = false;
  a = "loginBack";
  model: any = {};

   
   @ContentChild('showhideinput') input;

    constructor(private _ls: LoginService, private router: Router, private _commonApi:CommonAPICall ) {
      //sessionStorage.setItem("local_appUrl", "https://myclaimwebapi.crawco.com/");
      if (sessionStorage.getItem('selectedClaimClaimId') != undefined) {
      sessionStorage.setItem("selectedClaimClaimId", "");
    }
    var root = document.getElementsByTagName('html')[0];
    root.setAttribute('class', 'loginPage');

    if (sessionStorage.getItem('welcomeUsername') != undefined) {
      sessionStorage.setItem("welcomeUsername", "");
    }
      if (sessionStorage.getItem('token') != undefined) {
      sessionStorage.setItem("token", "");
    }
// need to replace the url code with prod url instead uat before making app live
    if (sessionStorage.getItem('local_appUrl') == undefined) {
      sessionStorage.setItem("local_appUrl", "https://myclaimwebapiuat.crawco.com/");
    }
    if (sessionStorage.getItem('pagePosition') != undefined) {
      sessionStorage.setItem("pagePosition", undefined);
    }
      
      this.commnFunc = new CommonFunction();
    }
ngOnInit(){
  sessionStorage.setItem("token",'');
  //alert(sessionStorage.getItem("token"));
  if(this.bgImgClass){
    this._commonApi.addClass1("login-bg-image");
  }
 //this.login('testingbroadspireapp@gmail.com', 'august@2017');

  window.scrollTo(0, 0);


   window.addEventListener('popstate', function(event) {

      var len = window.history.length;
       window.history.go(-len);
       if (document.getElementsByTagName("html")[0].className == "login-bg-image") {
        event.preventDefault();

         var url = window.location.href;
         var url2 = url.split("#");
         console.log(url2[0]);
         history.pushState(null, null, url2[0]);
      }
    }, false);
   sessionStorage.setItem("refreshProviders", "true");

}

ngOnDestroy(){
  var root = document.getElementsByTagName('html')[0];
  root.setAttribute('class', '');
}

    loginService(user: string, pass: string) {
      sessionStorage.setItem('local_tempPassword', pass);
      //console.log(user);
      //console.log(pass);
        if(user==undefined )
      {
        //alert("please enter username");
        this.commnFunc.alertPopup("Please enter username.", "Login");
        return false;
      }
      if (typeof user !== "undefined") {

      sessionStorage.setItem('userName', user);
      var usernameSplit = user.split("@");
      var a = ""; var b = "";
      a = usernameSplit[1];

      var nameCheck = "BSI_MyClaim_Demo";
      var finalName = nameCheck.toLowerCase();
      var firstString = usernameSplit[0].toLowerCase();
      b = firstString.indexOf(finalName).toFixed(2);

    }
    //Email Validation
    var atpos = user.indexOf("@");
    var dotpos = user.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= user.length) {
      this.commnFunc.alertPopup("Please enter the email in valid format.", "Login");
      return false;
    }
     else if (pass == undefined || pass == '') {
      this.commnFunc.alertPopup("Please enter the password.", "Login");
    }
    else if (user.toLowerCase() == 'gdeepika87@gmail.com' || user.toLowerCase() == 'anuj.kumar@primussoft.com' ||
      user.toLowerCase() == 'akshay301090@gmail.com' || user.toLowerCase() == 'myclaimprimus@gmail.com' ||
      user.toLowerCase() == 'myclaimprimus1@gmail.com' || user.toLowerCase() == 'testingbroadspireapp@gmail.com' ||
      user.toLowerCase() == 'rmazumdar@primussoft.com' || user.toLowerCase() == 'karen.hofmann@us.crawco.com' ||
      user.toLowerCase() == 'pkindig@choosebroadspire.com' || user.toLowerCase() == "kautilya.sharma6@primussoft.com" || (b != "-1" && a == "choosebroadspire.com")) {
      sessionStorage.setItem('local_appUrl', 'https://myclaimwebapiuat.crawco.com/');

          // else{
          //   if(user==undefined && pass!=undefined)
          //   {
          //     //alert("please enter the username");
          //     this.commnFunc.alertPopup("Please enter the username.", "Login");
          //   }
            //else
              //sessionStorage.setItem("local_appUrl", "https://myclaimwebapi.crawco.com/");
              var creds = 'grant_type=password&username=' + user + '&password=' + pass;
              // let creds = 'grant_type=password&username=username &password=password';
                this._commonApi.postService("authenticate", "", "application/x-www-form-urlencoded", creds)
                     .subscribe(result => {
                       document.getElementById("loadingDiv").style.display = "none";
                       // sessionStorage.setItem('userName', user );
                       sessionStorage.setItem('token', result.access_token)
                       this.getLogindata();
                     },
                     error => {
                        document.getElementById("loadingDiv").style.display = "none";
          this._commonApi.handleError(error, "Login");
        });
                   }
                       else {
      sessionStorage.setItem('local_appUrl', 'https://myclaimwebapiuat.crawco.com/');

      var creds = 'grant_type=password&username=' + user + '&password=' + pass;

      this._commonApi.postService("authenticate", "", "application/x-www-form-urlencoded", creds)
        .subscribe(result => {
          sessionStorage.setItem('userName', user);
          sessionStorage.setItem('token', result.access_token);

          this.getLogindata();

        },
        error => {
          this._commonApi.handleError(error, "Login");
        });
    }
  }
  
  getLogindata() {
    var token = sessionStorage.getItem('token');
    this._commonApi.getService("users/logindata", "Bearer " + token, "application/json").subscribe(res => {

      this.userFirstName = res.result.userFirstName;

      sessionStorage.setItem('welcomeUsername', "Hi," + " " + res.result.userFirstName);

      sessionStorage.setItem('local_expiredFlag', res.result.expiredPasswordFlag);

      sessionStorage.setItem('local_firstTimeLogin', res.result.firstTimeLoginFlag);

      sessionStorage.setItem('local_eulaVersion', res.result.eulaVerion);

      sessionStorage.setItem('local_eulaPage', res.result.eulaPage);

      sessionStorage.setItem('local_updateMessage', res.result.message);

      sessionStorage.setItem('local_updateFlag', res.result.appUpdateReqFlag);

      if (sessionStorage.getItem('local_firstTimeLogin') == 'true') {
        sessionStorage.setItem('forgetPassFlag', 'firstTimeLogin');

        this.router.navigate(['firstTimeLogin']);
      }

      else if (sessionStorage.getItem('local_expiredFlag') == 'true') {
        sessionStorage.setItem('forgetPassFlag', 'expiredFlag');
        this.router.navigate(['firstTimeLogin']);
      }
      else if (sessionStorage.getItem('local_eulaVersion') !== 'null') {
        // $state.go('access.eulafirsttime');
        this.router.navigate(['./eula'])
      }
      else if (sessionStorage.getItem('local_updateFlag') == 'Y') {

        navigator.notification.confirm(sessionStorage.getItem('local_updateMessage'), this.confirmCallback,
          "Update", ['OK']);
      }
      else {

        this.router.navigate(['./dashboard/claims']);

      }


    }, error => {
      this._commonApi.handleError(error, "Login");
    });
  }

  // UPDATE APP METHOD
  confirmCallback() {

    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      window.open("https://itunes.apple.com/us/app/broadspires-myclaimsm-mobile/id1133987965?mt=8");
    }
    else if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Tablet/i)) {

      cordova.plugins.market.open('com.broadspire.myclaim');
    }
  }
                         //this.login('testingbroadspireapp@gmail.com', 'august@2017');
                      //  this.router.navigate(['./dashboard/claims']);
                        // var x = sessionStorage.getItem(token1);
                        // console.log(x);

                    // },
                    // error => {
                    //     alert("Login failed");
                    // })
                //  alert("You are being redirected to the leave and disability page");





    //   let creds = 'grant_type=password&username=' + user + '&password=' + pass;
    //   //let creds = 'grant_type=password&username=username &password=password';
    //     this._ls.loginService("https://myclaimwebapiuat.crawco.com/authenticate", "", "application/x-www-form-urlencoded", creds)
    //         .subscribe(res => {
    //             console.log(res);
    //         },
    //         error => {
    //             //alert("Login failed");
    //         })
    // }

    toggleShow()
    {

      this.show = !this.show;
        if (this.show){
            this.type = "text";
        }
        else {
            this.type = "password";
        }
      // console.log(type);
      //  if(type=="password"){
      // this.pass.setAttribute(type, "text");



        }
        //
        newUser(){
           sessionStorage.setItem('local_eulaVersion', "null");
          this.router.navigate(['eula']);
        }

        dynemicPopup(title, message, btnArr){
          // alert("hello");

          let mainDiv = document.createElement('div');
          let subDiv = document.createElement('div');
          let thirdDiv = document.createElement('div');
          let thirdDiv1 = document.createElement('div');
          let thirdDiv2 = document.createElement('div');
          let thirdDiv3 = document.createElement('div');
          let clearbothDiv = document.createElement('div');
          let button = document.createElement('button');

          mainDiv.appendChild(subDiv);
          
          subDiv.appendChild(thirdDiv);
          subDiv.appendChild(thirdDiv);
          thirdDiv.appendChild(thirdDiv1);
          thirdDiv.appendChild(thirdDiv2);
          thirdDiv.appendChild(thirdDiv3);

          mainDiv.setAttribute("class","modal fade in");
          subDiv.setAttribute("class","modal-dialog");
          thirdDiv.setAttribute("class","modal-content");
          thirdDiv1.setAttribute("class","modal-header");
          thirdDiv2.setAttribute("class","modal-body");
          thirdDiv3.setAttribute("class","modal-footer");

          mainDiv.setAttribute("id","main-div-id");
          mainDiv.style.display='block';
          
          thirdDiv1.innerHTML="Title";
          thirdDiv1.style.backgroundColor='#007934';
          thirdDiv1.style.color='#fff';
          thirdDiv2.innerHTML=`<label id="modalLabel">Message</label>`;
          //thirdDiv3.innerHTML=`<button id="okBtn" type="button" class="btnppoopp btn-default closepopup" style="background-color:#007934; color:#fff !important;">OK</button>`;
        for (let i = 0; i<btnArr.length;i++){
          
          thirdDiv3.appendChild(document.createElement('button'))
          .innerHTML=btnArr[i];
          // .setAttribute("class",btnArr[i]);
          console.log(thirdDiv3);
        }
          document.body.appendChild(mainDiv);

        }

          // login(username, password){
          //   let creds = 'grant_type=password&username=' + username + '&password=' + password;
          //   this._commonApi.postService('authenticate','', "application/x-www-form-urlencoded", creds)
          //   .subscribe(res=>{
          //     // console.log(res);
          //     sessionStorage.setItem('token','Bearer '+res.access_token);
          //   })
          // }

          goToRegistration(){
             this.router.navigate(['Registration']);
            } 
// gotoForgotPassword(){
//   this.router.navigate(['./forgotPass']);
// }
            // Forgot Password Method
  forgotPassword(user: string) {
    //this.router.navigate(['./forgotPass']);
    if (user == undefined || user == '') {
      this.commnFunc.alertPopup("Please Enter the Username.", "Reset Password");

    }
    else {
      this._commonApi.getService("SecQuestions?userName=" + user, "", "")
        .subscribe(result => {
          document.getElementById("loadingDiv").style.display = "none";
          sessionStorage.setItem('secQues', JSON.stringify(result.result.userSecQuestions));
          sessionStorage.setItem('userName', user);
          this.router.navigate(['./forgotPass']);
        },
        error => {
          document.getElementById("loadingDiv").style.display = "none";
          this._commonApi.handleError(error, "Reset Password");
        })

    }
  }

    }
