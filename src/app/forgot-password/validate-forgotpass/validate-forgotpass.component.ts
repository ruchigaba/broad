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
     count: number = 0;
        inputElem: any= [];
  constructor(private _commonApiCall: CommonAPICall,private router: Router) {
    this.commnFunc = new CommonFunction();
        window.scrollTo(0, 0);
        this.question();
   }

  ngOnInit() {
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
}
