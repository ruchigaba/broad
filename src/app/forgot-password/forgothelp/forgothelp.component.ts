import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { HttpModule, Response } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
  selector: 'app-forgothelp',
  templateUrl: './forgothelp.component.html',
  providers: [HttpModule, CommonAPICall]
  //styleUrls: ['./forgothelp.component.scss']
})
export class ForgothelpComponent implements OnInit {
	  commnFunc;
	  name: string;
    email: string;
    subject: string;
    telephone: string;
    claimNm: string;
    canIHelp: string;

  constructor(private _route: Router, private _commonApiCall: CommonAPICall) {
  this.commnFunc = new CommonFunction(); 
  this.email = sessionStorage.getItem('userName');

        this._commonApiCall.getService("supportContent?Type=HelpSubject", "", "")
            .subscribe(res => {
                this.subject = res.result[0].base64;
            },
          error =>{
            this._commonApiCall.handleError(error,"Help Subject");
          })}

  ngOnInit() {
   //document.getElementById('titleBar').style.paddingLeft="300px";
  	window.scrollTo(0, 0);
      this.supportContent();
  }
  supportContent(){
    //-------------------------------------GET SUPPORT SUBJECT API CALL-----------------------------------
    this._commonApiCall.getService("supportContent?Type=HelpSubject", "", "")
      .subscribe(res => {
        this.subject = res.result[0].base64;
      },
    error =>{
      this._commonApiCall.handleError(error,"Help Subject");
    })
    //-------------------------------------GET SUPPORT EMAIL API CALL-----------------------------------

    //   this._commonApiCall.getService("supportContent?Type=HelpSupportEmail","","")
    //   .subscribe(res => {
    //     this.email = res.result[0].base64;
    //   },
    // error =>{
    //   this._commonApiCall.handleError(error,"Help Email");
    // })
  }
  // HELP VALIDTAION
    helpSend() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.name == undefined || this.name == '') {
            this.commnFunc.alertPopup("Enter Name","Support Center");
        }
        else if (this.email == undefined || this.email == ''||!re.test(this.email)) {
            this.commnFunc.alertPopup("Enter Email in valid format.","Support Center");
        }
        else if (this.subject == undefined || this.subject == '') {
            this.commnFunc.alertPopup("Enter Subject","Support Center");
        }
        else if (this.telephone == undefined || this.telephone == ''||this.telephone.toString().length < 10) {
            this.commnFunc.alertPopup("Contact Number should be of 10 digits.","Support Center");
        }
        else if (this.claimNm == undefined || this.claimNm == '') {
            this.commnFunc.alertPopup("Enter Claim Number","Support Center");
        }
        else if (this.canIHelp == undefined || this.canIHelp == '') {
            this.commnFunc.alertPopup("Enter Description How to Help you","Support Center");
        }
        else {
            //-------------------------------------GET SUPPORT EMAIL API CALL-----------------------------------

            var toEmail;
            this._commonApiCall.getService("supportContent?Type=HelpSupportEmail", "", "")
                .subscribe(res => {
                    toEmail = res.result[0].base64;
                })
            var data =
                {
                    "to_email_address": 'dgupta@primussoft.com',
                    "from_email_address": this.email,
                    "subject_Text": this.subject,
                    "body_Text": "<b>" + "Claim Number: " + this.claimNm + "</b>" + "<br/><br/>" + this.canIHelp + "<br/><br/>"
                    + "Regards," + "<br/>" + this.name + "<br/>" + "Email: " + this.email + "<br/>" + "Phone: " + this.telephone
                }
            this._commonApiCall.postService("emails/send", "", "application/json", data)
                .subscribe(res => {
                    this.commnFunc.alertPopup(res.result.email_status,"Support Center");

                    this._route.navigate(['./createNewUser']);
                },
                error => {
                    this._commonApiCall.handleError(error,"Support Center");
                })
        }

    }

    clearData(){
      this.name='';
      this.telephone='';
      this.claimNm='';
      this.canIHelp='';

    }
    // Help Cancel Button Method
    helpCancel() {
        this._route.navigate(['./validate']);
    }

}
