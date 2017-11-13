import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-lob-registration',
  templateUrl: './lob-registration.component.html',
   providers: [CommonAPICall]
 // styleUrls: ['./lob-registration.component.scss']
})
export class LOBRegistrationComponent implements OnInit {
 questions: any = [];
 commnFunc;
 checkedQues = false;
 inputElem: any= [];
  index: any = [];
   count: number = 0;
   title = '';
   data: any;
   email: string;
    claimNo: string;
  constructor(private _commonApiCall: CommonAPICall,private router: Router) { 
     this.question();
     this.commnFunc = new CommonFunction();
   
  }

  ngOnInit() {
//      if (sessionStorage.getItem('Id1') == 'workerscom@gmail.com')  {
//     document.getElementById("toshow").style.display = 'none';
//       document.getElementById("titleBar").style.display = 'block';
//   }
//    else{
 
//   //document.getElementById("toshow").style.display = 'block';
 
 
//     //document.getElementById("titleBar").style.display = 'none';
//  }
 document.body.className = 'leave-registration';
 localStorage.setItem("Help","Worker-Registration");
  }
   ngOnDestroy(){
    document.body.className = '';
}
gotoHelp() {
  sessionStorage.setItem("HelpClicked","Worker-Registration");
    this.router.navigate(['./help']);
  }
  goToWorkersComp() {
    var x =document.getElementById("worker")
     var y= document.getElementById("leave")
      x.setAttribute("className","list-group-item-mycom");
        x.style.border="1.5px solid #0a9e49";
        x.style.padding="5px";
          y.style.border="0px";
         this.router.navigate(['./dashboard/claims']);
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
  createNewUser1()
  {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (this.claimNo == "" || this.claimNo == undefined) {
      this.commnFunc.alertPopup("Please enter the claim number.","Registration");
    }
     else if (this.email == "" || this.email == undefined || !re.test(this.email)) {
      this.commnFunc.alertPopup("Please enter the email in valid format","Registration");
    }
  
  else{ }
  }
}
