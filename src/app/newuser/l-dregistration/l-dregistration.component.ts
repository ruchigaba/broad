import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-l-dregistration',
  templateUrl: './l-dregistration.component.html',
   providers: [CommonAPICall]
 // styleUrls: ['./l-dregistration.component.scss']
})
export class LDRegistrationComponent implements OnInit {
questions: any = [];
 commnFunc;
 checkedQues = false;
 inputElem: any= [];
  index: any = [];
  count: number = 0;
  firstName: string;
  lastName: string;
  email: string;
  reEmail:string;
   claimnum:string;
  constructor(private _commonApiCall: CommonAPICall,private router: Router) { 
     this.question();
     this.commnFunc = new CommonFunction();
   
  }
  ngOnInit() {
     this.claimnum= sessionStorage.getItem("claimno");
      localStorage.setItem("Help","leavedisability-Registration");
       document.getElementById('titleBar').style.width="70%";
  }
  createNewUser12(){
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.firstName == "" || this.firstName == undefined) {
      this.commnFunc.alertPopup("Please enter the First Name","Registration");
    }
    else if (this.lastName == "" || this.lastName == undefined) {
      this.commnFunc.alertPopup("Please enter the Last Name","Registration");
    }
    else if (this.email == "" || this.email == undefined || !re.test(this.email)) {
      this.commnFunc.alertPopup("Please enter the email in valid format","Registration");
    }
    else if (this.reEmail == "" || this.reEmail == undefined || !re.test(this.reEmail)) {
      this.commnFunc.alertPopup("Please enter the Re-Enter Email in valid format","Registration");
    }
    else if( this.email != this.reEmail) { 
   this.commnFunc.alertPopup("Your Email and Re-enter email does not match.", "Registration" );
    }
     else if (this.claimnum == "" || this.claimnum == undefined) {
      this.commnFunc.alertPopup("Please enter the claim number.","Registration");
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
    //  this.router.navigate(['./securityquestions']);
    else{}
  }
gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToLogin() {
    this.router.navigate(['']);
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
}
