import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { HttpModule, Response } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
  selector: 'app-validate-forgotpass',
  templateUrl: './validate-forgotpass.component.html',
    providers: [HttpModule, CommonAPICall]
 // styleUrls: ['./validate-forgotpass.component.scss']
})
export class ValidateForgotpassComponent implements OnInit {
 commnFunc;
  questions: any = [];
  checkedQues = false;
  index: any = [];
   email: string;
   claimNo: string;
    claimnum:string;
   count: number = 0;
  inputElem: any= [];
  constructor(private _commonApiCall: CommonAPICall,private router: Router) {
    this.commnFunc = new CommonFunction();
    window.scrollTo(0, 0);
    this.question();
    this.email = sessionStorage.getItem('userName');
   }

  ngOnInit() {
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
 gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToLogin() {
    this.router.navigate(['']);
  }
  createNewUser12(){
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.email == "" || !re.test(this.email) || this.email == undefined) {
            this.commnFunc.alertPopup("Please enter the email in valid format","Change User Security Info");
        }
         else if (this.claimnum == "" || this.claimnum == undefined) {
            this.commnFunc.alertPopup("Please enter the claim number.","Change User Security Info");
        }
        else if (this.inputElem[this.index[0]] == "" || this.inputElem[this.index[0]] == undefined) {
            this.commnFunc.alertPopup("Security answers are required","Change User Security Info");
        }
        else if (this.inputElem[this.index[1]] == "" || this.inputElem[this.index[1]] == undefined) {
            this.commnFunc.alertPopup("Security answers are required","Change User Security Info");
        }
        else if (this.inputElem[this.index[2]] == "" || this.inputElem[this.index[2]] == undefined) {
            this.commnFunc.alertPopup("Security answers are required","Change User Security Info");
        }
  }
}
