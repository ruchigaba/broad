import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpModule, Response } from '@angular/http';
import { CommonFunction } from '../../shared/commonFunction';
@Component({
  selector: 'app-help-in',
  templateUrl: './help-in.component.html',
 // styleUrls: ['./help-in.component.scss']
    providers: [HttpModule, CommonAPICall]
})
export class HelpInComponent implements OnInit {
  commnFunc;
   e:string;
	name: string;
  email: string;
  subject: string;
  telephone: string;
  claimNm: string;
  canIHelp: string;
  data: any;
  title = '';
  constructor(private _route: Router, private _commonApiCall: CommonAPICall,private route: ActivatedRoute) { 
  this.commnFunc = new CommonFunction();}

  ngOnInit() {
     let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
       this.data = currentRoute.snapshot.data;
        sessionStorage.setItem("parent",this.data.parent);
                    //add title to header
          this.title = this.data.title;
  	window.scrollTo(0, 0);
    this.supportContent();
   document.getElementById('titleBar').style.paddingLeft="300px";
    document.body.className = 'help-in';
    if (sessionStorage.getItem('Id')=="leavedisability@gmail.com"){
       document.getElementById('worker').className+=" router-link-active";
    }
   else if (sessionStorage.getItem('Id')=="workerscomp@gmail.com"){
       document.getElementById('leave').className+=" router-link-active";
    } 
     
  }
  ngOnDestroy(){
    document.body.className = '';
     document.getElementById("worker").classList.remove("router-link-active");
      document.getElementById("leave").classList.remove("router-link-active");
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
       this.email = res.result[0].base64;
     },
   error =>{
    this._commonApiCall.handleError(error,"Help Email");
   })
}
// HELP VALIDTAION
helpSend(){
  this.claimNm=this.claimNm.trim();
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (this.name == undefined || this.name == '') {
    this.commnFunc.alertPopup("Enter Name","Help");
  }
  else if (this.email == undefined || this.email == ''|| !re.test(this.email)) {
    this.commnFunc.alertPopup("Enter Email in valid format.","Help");
  }
  else if (this.subject == undefined || this.subject == '') {
    this.commnFunc.alertPopup("Enter Subject","Help");
  }
  else if (this.telephone == undefined || this.telephone == ''||this.telephone.toString().length < 10) {
    this.commnFunc.alertPopup("Contact Number should be of 10 digit","Help");
  }
  else if (this.claimNm == undefined || this.claimNm == '') {
    this.commnFunc.alertPopup("Enter Claim Number","Help");
  }
  else if (this.canIHelp == undefined || this.canIHelp == '') {
    this.commnFunc.alertPopup("Enter Description How to Help you","Help");
  }
  else {
    var data =
      {
        "to_email_address":  this.email,
        "from_email_address": this.e,
        "subject_Text": this.subject,
        "body_Text": "<b>" + "Claim Number: " + this.claimNm + "</b>" + "<br/><br/>" + this.canIHelp + "<br/><br/>"
        + "Regards," + "<br/>" + this.name + "<br/>" + "Email: " + this.e + "<br/>" + "Phone: " + this.telephone
      }
    this._commonApiCall.postService("emails/send", "", "application/json", data)
      .subscribe(res => {
          document.getElementById("loadingDiv").style.display = "none";
        this.commnFunc.alertPopup(res.result.email_status,"Help");
      if(localStorage.getItem("Help")=="workercomp-Registration")
                    {  
                    this._route.navigate(['./createUser']);
                   }
            else if(localStorage.getItem("Help")=="Registration"){
                        this._route.navigate(['./worker-comp']); 
                   }
                    else if(localStorage.getItem("Help")=="leavedisability-Registration"){
                        this._route.navigate(['./lregistration']); 
                   }
                    else if(localStorage.getItem("Help")=="Leave-Registration"){
                        this._route.navigate(['./dashboard/workercomp']); 
                   }
                   else if(localStorage.getItem("Help")=="Worker-Registration"){
                        this._route.navigate(['./dashboard/leaveregistration']); 
                   }       
      },
      error => {
         document.getElementById("loadingDiv").style.display = "none";
        this._commonApiCall.handleError(error,"Help");
      })
  }
}

// Help Cancel Button Method
helpCancel() {
   if(localStorage.getItem("Help")=="workercomp-Registration")
                    {  
                    this._route.navigate(['./createUser']);
                   }
            else if(localStorage.getItem("Help")=="Registration"){
                        this._route.navigate(['./worker-comp']); 
                   }
                    else if(localStorage.getItem("Help")=="leavedisability-Registration"){
                        this._route.navigate(['./lregistration']); 
                   }
                    else if(localStorage.getItem("Help")=="Leave-Registration"){
                        this._route.navigate(['./dashboard/workercomp']); 
                        sessionStorage.setItem("storage_navigation", this.data.title);
                   }
                   else if(localStorage.getItem("Help")=="Worker-Registration"){
                        this._route.navigate(['./dashboard/leaveregistration']); 
                   }   
  
}
}

