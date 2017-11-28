import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-leave-disability',
  templateUrl: './leave-disability.component.html',
   providers: [CommonAPICall]
  //styleUrls: ['./leave-disability.component.scss']
})
export class LeaveDisabilityComponent implements OnInit, OnDestroy {
   dolImgHide = false;
    commnFunc;
  dolImg: string;
   ssn: string;
  hzc: string;
  claimNo: string;
  dobmonth:string;
  dobdate:string;
  dobyear:string;
  dolmonth:string;
  doldate:string;
  dolyear:string;
  constructor(private _commonApiCall: CommonAPICall,private router: Router) { 
     this.commnFunc = new CommonFunction();
  }
 ngOnInit() {
 document.body.className = 'leaave-disablity';
  localStorage.setItem("Help","Leave-Registration");
     document.getElementById('worker').className+=" router-link-active";
    }
  ngOnDestroy(){
    document.body.className = '';
  document.getElementById("worker").classList.remove("router-link-active");
  }
  createNewUser1(){
    this.claimNo = this.claimNo.trim();
    var current_year=new Date().getFullYear();
     if (this.ssn == "" || this.ssn == undefined || this.ssn.toString().length!==4) {
      this.commnFunc.alertPopup("Please enter the 4 digit ssn in number format","Registration");
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
      this.commnFunc.alertPopup("Please enter the 5 digit zip code ","Registration");
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
      this.commnFunc.alertPopup("Please enter the claim number.","Registration");
    }
    else{
 
    }
  }



 





gotoHelp() {
  this.router.navigate(['./dashboard/help-page']);
  }
  goToLeaveDisability() {
    //  var x =document.getElementById("worker")
    //  var y= document.getElementById("leave")
    //   x.setAttribute("className","list-group-item-mycom");
    //     y.style.border="1.5px solid #0a9e49";
    //     y.style.padding="5px";
    //       x.style.border="0px";
         document.getElementById("leave").className+=" router-link-active";
    document.getElementById("worker").classList.remove("router-link-active");
        this.router.navigate(['./dashboard/leaveTechPortal']);
  }
   dateOfLossInfo() {

  this._commonApiCall.getService("supportContent?Type=HelpDateOfLoss", "", "")

     //alert("hello dateofloss");



      .subscribe(res => {
        //alert( res.result[0].base64);
        this.dolImg = res.result[0].base64;
        //alert(this.dolImg);
        this.dolImgHide = true;
      },
    error =>{
      this._commonApiCall.handleError(error,"Help Date Of Loss");
    })
  }
   close(){
     this.dolImgHide = false;
   }
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
