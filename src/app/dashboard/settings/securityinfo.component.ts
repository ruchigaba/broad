import { Component } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import {Router,ActivatedRoute } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
    selector: 'settings1',
    templateUrl: './securityinfo.component.html',
    // styleUrls: ['./securityinfo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CommonAPICall]
  })

//securityanswer component

export class SecurityAnswerComponent {
  data: any;
  title = '';
  questions: any = [];
  count=0;
  filter: boolean= false;
  checkedQues: boolean;
  index: any = [];
  inputElem: any = [];
   commnFun = new CommonFunction();

//calling security questions service

  constructor(private _cac: CommonAPICall, private _routes : Router,private route: ActivatedRoute)
  {
    window.scrollTo(0, 0);
    this._cac.getService("SecQuestions", "", "")
       .subscribe(res => {
          this.questions=res.result.secquestions;
          document.getElementById("secinfo").style.display="block";

    },
      error => {
     this._cac.handleError(error,"Security questions");
    })

  }
  ngOnInit(){
        document.body.className = 'securityinfo ';
        document.getElementById("set_id").className+=" router-link-active";
         document.getElementById("leave").classList.remove("router-link-active");
         document.getElementById("worker").classList.remove("router-link-active"); 
          if(sessionStorage.getItem('userName')!="" && sessionStorage.getItem('Id')!="onlyworkerscomp@gmail.com"  && sessionStorage.getItem('Id')!="workerscompExpiredltuser@gmail.com"){
	      document.body.className = 'securityin';
}
         }
ngOnDestroy(){
    document.body.className = '';
    }

//Method to restrict number of selected checkboxes to 3

  checkValue(e: any, i: any) {
        this.checkedQues = e.target.checked;
        if (this.checkedQues)
        {
            this.index.push(i);
            this.count++;
            document.getElementById("securityAns" + i).style.display = '';
            if (this.count > 3)
            {
                this.count--;
                this.index.splice(this.index.indexOf(i), 1);
                e.target.checked = false;
                document.getElementById("securityAns" + i).style.display = 'none';
                //alert("Select not more than 3 Questions");
                this.commnFun.alertPopup("Select not more than 3 Questions", "Security Info");
            }

        }
        else
         {
          this.index.splice(this.index.indexOf(i), 1);
          this.count--;
          document.getElementById("securityAns" + i).style.display = 'none';
         }
    }

    //function to route to settings page
      gotosettings(){
        this._routes.navigate(['./dashboard/settings']);
      }

      //function to update security info
      updatesecurityinfo()
      {
        this.inputElem[this.index[0]]=this.inputElem[this.index[0]].trim();
        var token = sessionStorage.getItem('token');
        if (this.inputElem[this.index[0]] == "" || this.inputElem[this.index[0]] == undefined) {
         //alert("Security answers are required");
         this.commnFun.alertPopup("Security answers are required.", "Security Info");
     }
     else if (this.inputElem[this.index[1]] == "" || this.inputElem[this.index[1]] == undefined) {
         //alert("Security answers are required");
         this.commnFun.alertPopup("Security answers are required.", "Security Info");
     }
     else if (this.inputElem[this.index[2]] == "" || this.inputElem[this.index[2]] == undefined) {
        //alert("Security answers are required");
        this.commnFun.alertPopup("Security answers are required.", "Security Info"  );
     }
      
      else {
            var data =
                {
                    "securityQuestion1": this.questions[this.index[0]].question,
                    "securityAnswer1": this.inputElem[this.index[0]],
                    "securityQuestion2": this.questions[this.index[1]].question,
                    "securityAnswer2": this.inputElem[this.index[1]],
                    "securityQuestion3": this.questions[this.index[2]].question,
                    "securityAnswer3": this.inputElem[this.index[2]]
                }
            this._cac.putService("secQuestionsAnswers", "Bearer " + token, "application/json", data)
                .subscribe(res => {
                  document.getElementById("loadingDiv").style.display = "none";
                  if(res.statusCode == '200'){
                    this.commnFun.alertPopup("Security questions changed successfully.","Security Info");
                  }
                  this._routes.navigate(['./dashboard/settingMenu']);
                },
                error => {
                  document.getElementById("loadingDiv").style.display = "none";
                    this._cac.handleError(error,"Security Info");
                })
        }
}
}
