import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpModule, Response } from '@angular/http';
import { CommonAPICall } from '../shared/shared.service';
import { RouterModule, Router } from '@angular/router';
import { CommonFunction } from '../shared/commonFunction';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  providers: [HttpModule, CommonAPICall]
  //styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit,OnDestroy {
  commnFunc;

  secQuesObject: any;
    secQues1: string;
    secQues2: string;
    secQues3: string;

    secQuesObj: any;
    secViewShow = false;

  constructor(private _route: Router, private _commonApiCall: CommonAPICall) {
    // document.getElementById('titleBar').style.paddingLeft="0px";
  this.commnFunc = new CommonFunction(); 

    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Tablet/i)) {
      var root = document.getElementsByTagName('body')[0];

    root.className += "ResetForgotPage";
}
        this.secQuesObject = sessionStorage.getItem('secQues');
        console.log(this.secQuesObject);
        this.secQuesObj = JSON.parse(this.secQuesObject);
         this.secQues1 = this.secQuesObj.securityquestion1;
        this.secQues2 = this.secQuesObj.securityquestion2;
        this.secQues3 = this.secQuesObj.securityquestion3;
  }
ngOnInit() {
    document.getElementById('titleBar').style.paddingLeft="0px";
  }
  ngOnDestroy() {
 
  	//document.getElementById('titleBar').style.paddingLeft="0px";
    var root = document.getElementsByTagName('body')[0];
        root.setAttribute('class', '');
  }
  gotovalidate() {
  	this._route.navigate(['./validate']);
  }
  //-----------------------------------CANCEL SECURITY ANSWER BUTTON-----------------------------
cancelSecAns() {
        this._route.navigate(['']);
    }
     //-------------------------------VALIDATE USER SECURITY ANSWER BUTTON-----------------------------

    ValidateUserSecurityAnswers(answer1: string, answer2: string, answer3: string) {
        if (answer1 == undefined || answer1 == '') {
            this.commnFunc.alertPopup("Please Enter First Answer","Validate User Security Answer");
        }
        else if (answer2 == undefined || answer2 == '') {
            this.commnFunc.alertPopup("Please Enter Second Answer","Validate User Security Answer");
        }
        else if (answer3 == undefined || answer3 == '') {
            this.commnFunc.alertPopup("Please Enter Third Answer","Validate User Security Answer");
        }
        else {
            var data =
                {
                    securityAnswer1: answer1,
                    securityAnswer2: answer2,
                    securityAnswer3: answer3,
                    securityQuestion1: this.secQues1,
                    securityQuestion2: this.secQues2,
                    securityQuestion3: this.secQues3,
                    userName: sessionStorage.getItem('userName')
                }
            // SECURITY ANSWER MACHING SERVICE CALLED HERE.
            this._commonApiCall.postService("secAnswers", "", "application/json", data)
                .subscribe(res => {
                  ///-----Updated By Niruti------//
                   document.getElementById("loadingDiv").style.display = "none";
                    if (res.result.secAnswersMatchedFlag == true) {
                        this._route.navigate(['./resetPass']);
                    }
                    this.secViewShow = true;
                },
                error => {
                  //-------Updated By Niruti-----//
                   document.getElementById("loadingDiv").style.display = "none";
                    this._commonApiCall.handleError(error,"Validate User Security Answer");
                })
        }
        //END SECURITY ANSWER MACHING SERVICE
    }
}
