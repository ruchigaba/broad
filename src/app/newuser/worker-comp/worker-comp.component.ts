import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
  selector: 'app-worker-comp',
  templateUrl: './worker-comp.component.html',
  //styleUrls: ['./worker-comp.component.scss']
})
export class WorkerCompComponent implements OnInit {
//  claimNum = "";
//  claimNumber = "";
ClaimNumber="";
commnFunc;
  constructor(private router: Router) {
    this.commnFunc = new CommonFunction();
   }

  ngOnInit() {
     localStorage.setItem("Help","Registration");

}
 createNewUser12(){
   
  // alert("kh");
   let a = this.ClaimNumber;
   sessionStorage.setItem("claimno",a);
  // let a = sessionStorage.getItem("ClaimNumber");
   if (this.ClaimNumber == "" || this.ClaimNumber == undefined) {
      this.commnFunc.alertPopup("Please enter the claim number.","Registration");
    }
  
else if (a.charAt(0).match(/[a-z]/i)){
   this.router.navigate(['./lregistration']);
  
}
else{
   this.router.navigate(['./createUser']);
}
  }
    gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToLogin() {
    this.router.navigate(['']);
  }
}
