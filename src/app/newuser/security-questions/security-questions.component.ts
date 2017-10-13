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
}
