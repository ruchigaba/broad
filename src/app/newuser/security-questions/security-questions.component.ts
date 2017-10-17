import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
     providers: [CommonAPICall]
  //styleUrls: ['./security-questions.component.scss']
})
export class SecurityQuestionsComponent implements OnInit {
questions: any = [];
 commnFunc;
 checkedQues = false;
 inputElem: any= [];
  index: any = [];
   count: number = 0;
   ClaimNumber="";
   firstName:string;
  lastName:string;
  username:string;
  ssn:string;
  date_of_Birth:string;
  zip_Code:string;
  dateOfLoss:string;
  claim_Number:string;
   claimnum:string;
  constructor(private _commonApiCall: CommonAPICall,private router: Router) { 
     this.question();
     this.commnFunc = new CommonFunction();
  }

  ngOnInit() {
  }
gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToRegistration() {
    let a="";
    // this.claimnum= sessionStorage.getItem("claimno");
  //  sessionStorage.setItem("claimno",a);
   this.claimnum= sessionStorage.getItem("claimno");
   a= this.claimnum;
  // let a = sessionStorage.getItem("ClaimNumber");
  
if (a.charAt(0).match(/[a-z]/i)){
   this.router.navigate(['./lregistration']);
 
}
else{
   this.router.navigate(['./createUser']);
   
}
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
  createNewUser1(){
      if (this.inputElem[this.index[0]] == "" || this.inputElem[this.index[0]] == undefined) {
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
          "firstName":sessionStorage.getItem("firstName"),
          "lastName":sessionStorage.getItem("lastName"),
           "username":sessionStorage.getItem("username"),
            "ssn":sessionStorage.getItem("ssn"),
           "claim_Number":sessionStorage.getItem("claimno"),
            "date_of_Birth":sessionStorage.getItem("date_of_Birth"),
             "zip_Code":sessionStorage.getItem("zip_Code"),
              "dateOfLoss":     sessionStorage.getItem("dateOfLoss"),
        "securityQuestion1": this.questions[this.index[0]].question,
        "securityAnswer1": this.inputElem[this.index[0]],
        "securityQuestion2": this.questions[this.index[1]].question,
        "securityAnswer2": this.inputElem[this.index[1]],
        "securityQuestion3": this.questions[this.index[2]].question,
        "securityAnswer3": this.inputElem[this.index[2]],
      
       // "claim_Number": this.claimNo,
       
      };
       console.log(sessionStorage.getItem("claimno"))
  this._commonApiCall.postService("users", "", "application/json", data)
        .subscribe(res => {
           document.getElementById("loadingDiv").style.display = "none"; 
       this.commnFunc.alertPopup(res.result,"Registration");
          alert(res.errors);
          this.router.navigate(['']);
        },
        error => {
           document.getElementById("loadingDiv").style.display = "none"; 

          // alert('error :'+error.errors);
          this._commonApiCall.handleError(error,"Registration");
        })
  }
  }
}
