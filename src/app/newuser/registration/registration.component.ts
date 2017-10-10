import { Component, OnInit } from '@angular/core';
import { HttpModule, Response } from '@angular/http';
import { CommonAPICall } from '../../shared/shared.service';
import { Router } from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
   providers: [HttpModule, CommonAPICall]
  //styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  commnFunc;
   questions: any = [];
  checkedQues = false;
  securityAns: any;
  count: number = 0;

  firstName: string;
  lastName: string;
  email: string;
  reEmail:string;
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
    window.scrollTo(0, 0);
    this.question();
    this.commnFunc = new CommonFunction();
   }

  ngOnInit() {
   // document.getElementById('titleBar').style.paddingLeft="0px";
   this.claimnum= sessionStorage.getItem("claimno");
  }
  question(): any {
    this._commonApiCall.getService("SecQuestions", "", "")
      .subscribe(res => {
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
      console.log("push  "+i);
      console.log("indexlength  " + this.index.length);
      this.count++;
      document.getElementById("securityAns" + i).style.display = '';
      if (this.count > 3) {
        this.count--;
          this.index.splice(this.index.indexOf(i),1);
        console.log("indexlength  " + this.index.length);
        e.target.checked = false;
        document.getElementById("securityAns" + i).style.display = 'none';
        this.commnFunc.alertPopup("Select not more than 3 Questions","Registration");
      }
    }
    else {
      this.index.splice(this.index.indexOf(i), 1);
      console.log("pop  "+i);
      console.log("indexlength  " + this.index.length);
      this.count--;
      document.getElementById("securityAns" + i).style.display = 'none';
    }
  }
    createNewUser1() {
    // Validation For All the input field.
    var current_year=new Date().getFullYear();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.firstName == "" || this.firstName == undefined) {
      this.commnFunc.alertPopup("Please fill the First Name","Registration");
    }
    else if (this.lastName == "" || this.lastName == undefined) {
      this.commnFunc.alertPopup("Please fill the Last Name","Registration");
    }
    else if (this.email == "" || this.email == undefined || !re.test(this.email)) {
      this.commnFunc.alertPopup("Please fill the email in valid format","Registration");
    }
    else if (this.reEmail == "" || this.reEmail == undefined || !re.test(this.reEmail)) {
      this.commnFunc.alertPopup("Please fill the Re-Enter Email in valid format","Registration");
    }
    else if( this.email != this.reEmail) { 
   this.commnFunc.alertPopup("Your Email and Re-enter email does not match.", "Registration" );

    }
    else if (this.ssn == "" || this.ssn == undefined || this.ssn.toString().length!==4) {
      this.commnFunc.alertPopup("Please fill the 4 digit ssn in number format","Registration");
    }
    else if (this.dobmonth == "" || this.dobmonth == undefined || parseInt(this.dobmonth)>12) {
      this.commnFunc.alertPopup("Invalid Month for date of Birth","Registration");
    }
    else if (this.dobdate == "" || this.dobdate == undefined || parseInt(this.dobdate) >31) {
      this.commnFunc.alertPopup("Invalid Date for date of Birth","Registration");
    }
    else if (this.dobyear == "" || this.dobyear == undefined || parseInt(this.dobyear) < 1900 || parseInt(this.dobyear) > current_year)  {
      this.commnFunc.alertPopup("Invalid Year for date of Birth","Registration");
    }
    else if (this.hzc == "" || this.hzc == undefined || this.hzc.toString().length!==5) {
      this.commnFunc.alertPopup("Please fill the 5 digit zip code ","Registration");
    }
    else if (this.dolmonth == "" || this.dolmonth == undefined || parseInt(this.dolmonth)>12) {
      this.commnFunc.alertPopup("Invalid Month for date of loss","Registration");
    }
    else if (this.doldate == "" || this.doldate == undefined || parseInt(this.doldate)>31) {
      this.commnFunc.alertPopup("Invalid Date for date of loss","Registration");
    }
    else if (this.dolyear == "" || this.dolyear == undefined || parseInt(this.dolyear)<1900 || parseInt(this.dolyear) > current_year) {
      this.commnFunc.alertPopup("Invalid Year for date of loss","Registration");
    }
    else if (this.claimNo == "" || this.claimNo == undefined) {
      this.commnFunc.alertPopup("Please fill the claim number.","Registration");
    }
    else if (this.inputElem[this.index[0]] == "" || this.inputElem[this.index[0]] == undefined) {
      this.commnFunc.alertPopup("Security answers are required","Registration");
    }
    else if (this.inputElem[this.index[1]] == "" || this.inputElem[this.index[1]] == undefined) {
      this.commnFunc.alertPopup("Security answers are required","Registration");
    }
    else if (this.inputElem[this.index[2]] == "" || this.inputElem[this.index[2]] == undefined) {
      this.commnFunc.alertPopup("Security answers are required","Registration");
    }
    else {

      var data = {
        "firstName": this.firstName,
        "lastName": this.lastName,
        "username": this.email,
        "securityQuestion1": this.questions[this.index[0]].question,
        "securityAnswer1": this.inputElem[this.index[0]],
        "securityQuestion2": this.questions[this.index[1]].question,
        "securityAnswer2": this.inputElem[this.index[1]],
        "securityQuestion3": this.questions[this.index[2]].question,
        "securityAnswer3": this.inputElem[this.index[2]],
        "ssn": this.ssn,
        "claim_Number": this.claimNo,
        "date_of_Birth": this.dobmonth+"-"+this.dobdate+"-"+this.dobyear,
        "zip_Code": this.hzc,
        "dateOfLoss": this.dolmonth+"-"+this.doldate+"-"+this.dolyear

      };
      this._commonApiCall.postService("users", "", "application/json", data)
        .subscribe(res => {
           document.getElementById("loadingDiv").style.display = "none"; 


          this.commnFunc.alertPopup(res.result,"Registration");
          alert(res.errors);
          this._route.navigate(['']);
        },
        error => {
           document.getElementById("loadingDiv").style.display = "none"; 

          // alert('error :'+error.errors);
          this._commonApiCall.handleError(error,"Registration");
        })
        // console.log('hello');
    }
  }
  gotoHelp() {
    this._route.navigate(['./help']);
  }
  goToLogin() {
    this._route.navigate(['']);
  }
  //-------------------------------------GET SUPPORT DATE OF LOSS INFO API CALL-----------------------------------

  dateOfLossInfo() {

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

    this._commonApiCall.getService("supportContent?Type=HelpClaimNumber", "", "")
      .subscribe(res => {
        //console.log(res.result[0].base64);
        this.dolImg = res.result[0].base64;
        this.dolImgHide = true;
      },
    error =>{
      this._commonApiCall.handleError(error,"Help Claim Number");
    })
  }
}
