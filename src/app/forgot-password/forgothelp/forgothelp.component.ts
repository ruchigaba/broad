import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { HttpModule, Response } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import {Location} from '@angular/common';
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
    toEmail: string;

  constructor(private _route: Router, private _commonApiCall: CommonAPICall,private _location: Location,) {
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
   document.getElementById('titleBar').style.paddingLeft="330px !important" ;
  	window.scrollTo(0, 0);
      this.supportContent();
       document.getElementById('titleBar').style.width="71%";
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

      this._commonApiCall.getService("supportContent?Type=HelpSupportEmail","","")
      .subscribe(res => {
        this.toEmail = res.result[0].base64;
      },
    error =>{
      this._commonApiCall.handleError(error,"Help Email");
    })
  }
  // HELP VALIDTAION
    helpSend() {
      this.claimNm=this.claimNm.trim();
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.name == undefined || this.name == '') {
            this.commnFunc.alertPopup("Enter Name","Help");
        }
        else if (this.email == undefined || this.email == ''||!re.test(this.email)) {
            this.commnFunc.alertPopup("Enter Email in valid format.","Help");
        }
        else if (this.subject == undefined || this.subject == '') {
            this.commnFunc.alertPopup("Enter Subject","Help");
        }
        else if (this.telephone == undefined || this.telephone == ''||this.telephone.toString().length < 10) {
            this.commnFunc.alertPopup("Contact Number should be of 10 digits.","Help");
        }
        else if (this.claimNm == undefined || this.claimNm == '') {
            this.commnFunc.alertPopup("Enter Claim Number","Help");
        }
        else if (this.canIHelp == undefined || this.canIHelp == '') {
            this.commnFunc.alertPopup("Enter Description How to Help you","Help");
        }
        else {
            //-------------------------------------GET SUPPORT EMAIL API CALL-----------------------------------


            //  var toEmail;
            // this._commonApiCall.getService("supportContent?Type=HelpSupportEmail", "", "")
            //     .subscribe(res => {
            //         toEmail = res.result[0].base64;
            //         alert(toEmail);
            // var toEmail;
            // this._commonApiCall.getService("supportContent?Type=HelpSupportEmail", "", "")
            //     .subscribe(res => {
            //         toEmail = res.result[0].base64;

            //     })
            var data =
                {
                    "to_email_address": this.toEmail,
                    "from_email_address": this.email,
                    "subject_Text": this.subject,
                    "body_Text": "<b>" + "Claim Number: " + this.claimNm + "</b>" + "<br/><br/>" + this.canIHelp + "<br/><br/>"
                    + "Regards," + "<br/>" + this.name + "<br/>" + "Email: " + this.email + "<br/>" + "Phone: " + this.telephone
                }


            this._commonApiCall.postService("emails/send", "", "application/json", data)
                .subscribe(res => {
                  //alert(toEmail);
                  document.getElementById("loadingDiv").style.display = "none";
                   this.commnFunc.alertPopup(res.result.email_status,"Help");
                   if(localStorage.getItem("Help")=="Forgotpass-Registration"){
                        this._route.navigate(['./forgotsecurity']); 
                   }
                   else if(localStorage.getItem("Help")=="validate-Registration"){
                        this._route.navigate(['./validate']); 
                   }
                   else if(localStorage.getItem("Help")=="validateforgot-Registration"){
                        this._route.navigate(['./validate-forgotpass']); 
                   }
                  
                    },
                error => {
                  document.getElementById("loadingDiv").style.display = "none";
                    this._commonApiCall.handleError(error,"Help");
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
    Cancel() {
                   if(localStorage.getItem("Help")=="Forgotpass-Registration"){
                        this._route.navigate(['./forgotsecurity']); 
                   }
                   else if(localStorage.getItem("Help")=="validate-Registration"){
                        this._route.navigate(['./validate']); 
                   }
                   else if(localStorage.getItem("Help")=="validateforgot-Registration"){
                        this._route.navigate(['./validate-forgotpass']); 
                   }
                  
       
    }

}
