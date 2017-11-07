import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { HttpModule, Response } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
  selector: 'app-validateregistration',
  templateUrl: './validateregistration.component.html',
  providers: [HttpModule, CommonAPICall]
  //styleUrls: ['./validateregistration.component.scss']
})
export class ValidateregistrationComponent implements OnInit {
  commnFunc;
  questions: any = [];
    checkedQues = false;
    securityAns: any;
    count: number = 0;

    firstName: string;
    lastName: string;
    email: string;
    ssn: string;
    hzc: string;
    claimNo: string;
    dobmonth:string;
    dobdate:string;
    dobyear:string;
    dolmonth:string;
    doldate:string;
    dolyear:string;
    inputElem: any= [];
    index: any = [];
     claimnum:string;
     dolImgHide = false;
    dolImg: string;

  constructor(private _commonApiCall: CommonAPICall, private _route: Router) {
    this.commnFunc = new CommonFunction();
        window.scrollTo(0, 0);
        this.question();
        this.email = sessionStorage.getItem('userName');
   }

  ngOnInit() {
  	document.getElementById('titleBar').style.paddingLeft="230px";
      this.claimnum= sessionStorage.getItem("claimno");
  }
  question(): any {
        this._commonApiCall.getService("SecQuestions", "", "")
            .subscribe(res => {
                console.log(res);
                this.questions = res.result.secquestions;
            },
          error => {
            this._commonApiCall.handleError(error,"Security questions");
          });
    }
    customTrackBy(index: number, obj: any): any {
        return index;
    }
    checkValue(e: any, i: any) {
        this.checkedQues = e.target.checked;

        if (this.checkedQues) {
            this.index.push(i);
            console.log("Push  " + this.index.length);
            this.count++;
            document.getElementById("securityAns" + i).style.display = '';
            if (this.count > 3) {
                this.count--;
                this.index.splice(this.index.indexOf(i), 1);
                console.log("Push  " + this.index.length);
                e.target.checked = false;
                document.getElementById("securityAns" + i).style.display = 'none';
                this.commnFunc.alertPopup("Select not more than 3 Questions","Change User Security Info");
            }

        }
        else {
          this.index.splice(this.index.indexOf(i), 1);
          console.log("Pop  " + this.index.length);
            this.count--;
            document.getElementById("securityAns" + i).style.display = 'none';
        }
    }
resetNewUserInfo() {
        // Validation For All the input field.
      var current_year=new Date().getFullYear();
        var numbers = /^[-+]?[0-9]+$/;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.email == "" || !re.test(this.email) || this.email == undefined) {
            this.commnFunc.alertPopup("Please enter the email in valid format","Validate Registration");
        }
        else if (this.ssn == "" || this.ssn == undefined || this.ssn.toString().length !== 4) {
            this.commnFunc.alertPopup("Please enter the 4 digit SSN in number format","Validate Registration");
        }
        else if (this.dobmonth == "" || this.dobmonth == undefined || parseInt(this.dobmonth)>12) {
          this.commnFunc.alertPopup("Invalid Month for date of Birth","Validate Registration");
        }
        else if (this.dobdate == "" || this.dobdate == undefined || parseInt(this.dobdate) >31) {
          this.commnFunc.alertPopup("Invalid Date for date of Birth","Validate Registration");
        }
        else if (this.dobyear == "" || this.dobyear == undefined || parseInt(this.dobyear) < 1900 || parseInt(this.dobyear) > current_year)  {
          this.commnFunc.alertPopup("Invalid Year for date of Birth","Validate Registration");
        }
        else if (this.hzc == "" || this.hzc == undefined || this.hzc.toString().length!==5) {
          this.commnFunc.alertPopup("Please enter the 5 digit zip code ","Validate Registration");
        }
        else if (this.dolmonth == "" || this.dolmonth == undefined || parseInt(this.dolmonth)>12) {
          this.commnFunc.alertPopup("Invalid Month for date of loss","Validate Registration");
        }
        else if (this.doldate == "" || this.doldate == undefined || parseInt(this.doldate)>31) {
          this.commnFunc.alertPopup("Invalid Date for date of loss","Validate Registration");
        }
        else if (this.dolyear == "" || this.dolyear == undefined || parseInt(this.dolyear)<1900 || parseInt(this.dolyear) > current_year) {
          this.commnFunc.alertPopup("Invalid Year for date of loss","Validate Registration");
        }
<<<<<<< HEAD
        else if (this.claimnum == "" || this.claimnum == undefined) {
            this.commnFunc.alertPopup("Please enter the claim number.","Change User Security Info");
=======
        else if (this.claimNo == "" || this.claimNo == undefined) {
            this.commnFunc.alertPopup("Please enter the claim number.","Validate Registration");
>>>>>>> 4d7eb3cb1830be219c1591e485d4c39ae0879425
        }
        else if (this.inputElem[this.index[0]] == "" || this.inputElem[this.index[0]] == undefined) {
            this.commnFunc.alertPopup("Security answers are required","Validate Registration");
        }
        else if (this.inputElem[this.index[1]] == "" || this.inputElem[this.index[1]] == undefined) {
            this.commnFunc.alertPopup("Security answers are required","Validate Registration");
        }
        else if (this.inputElem[this.index[2]] == "" || this.inputElem[this.index[2]] == undefined) {
            this.commnFunc.alertPopup("Security answers are required","Validate Registration");
        }
        else {

            var data = {
                "username": this.email,
                "claim_Number":  this.claimnum,
                "loss_Date": this.dolmonth+"-"+this.doldate+"-"+this.dolyear,
                "ssn": this.ssn,
                "date_of_Birth": this.dobmonth+"-"+this.dobdate+"-"+this.dobyear,
                "zip_Code": this.hzc,
                "securityQuestion1": this.questions[this.index[0]].question,
                "securityAnswer1": this.inputElem[this.index[0]],
                "securityQuestion2": this.questions[this.index[1]].question,
                "securityAnswer2": this.inputElem[this.index[1]],
                "securityQuestion3": this.questions[this.index[2]].question,
                "securityAnswer3": this.inputElem[this.index[2]]
            };
            this._commonApiCall.putService("user/validate", "", "application/json", data)
                .subscribe(res => {
                    ////---------Updated by Niruti--------///
                     document.getElementById("loadingDiv").style.display = "none";
                    this._route.navigate(['./forgotPass']);
                },
                error => {
                    ////--------Updated By Niruti--------////
                     document.getElementById("loadingDiv").style.display = "none";
                    this._commonApiCall.handleError(error,"Validate Registration");
                })
        }
    }
    goToSecAns() {
        this._route.navigate(['./forgotPass']);
    }
    //-------------------------------------GET SUPPORT DATE OF LOSS INFO API CALL-----------------------------------

    dateOfLossInfo() {
       
        // this.dolImgHide = true;
        // this._commonApiCall.getService("supportContent?Type=HelpDateOfLoss", "", "")
        //     .subscribe(res => {
        //         this.dolImg = res.result[0].base64;
        //     },
        //   error =>{
        //     this._commonApiCall.handleError(error,"Help Date Of Loss");
        //   })
       
    this._commonApiCall.getService("supportContent?Type=HelpDateOfLoss", "", "")
      .subscribe(res => {
        //console.log(res.result[0].base64);
        this.dolImg = res.result[0].base64;
        //console.log(this.dolImg);
        this.dolImgHide = true;
      },
    error =>{
      this._commonApiCall.handleError(error,"Help Date Of Loss");
    }) 
    }
    close() {
        this.dolImgHide = false;
    }
    //--------------------------GET SUPPORT CLAIM NUMBER INFO API CALL---------------------
    claimNoInfo() {
        this.dolImgHide = true;
        this._commonApiCall.getService("supportContent?Type=HelpClaimNumber", "", "")
            .subscribe(res => {
                this.dolImg = res.result[0].base64;
            },
          error =>{
            this._commonApiCall.handleError(error,"Help Claim Number");
          })
    }
  gotoHelp() {
  	this._route.navigate(['forgotHelp']);
  }

}
