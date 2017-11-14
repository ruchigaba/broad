import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from './../shared/commonFunction';
@Component({
  selector: 'app-forgots',
  templateUrl: './forgots.component.html',
  //styleUrls: ['./forgots.component.scss']
})
export class ForgotsComponent implements OnInit {
ClaimNumber="";
commnFunc;
  constructor(private router: Router) {
    this.commnFunc = new CommonFunction();
   }

  ngOnInit() {
      localStorage.setItem("Help","Forgotpass-Registration");
       document.getElementById('titleBar').style.width="70%";
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
   this.router.navigate(['./validate-forgotpass']);
  
}
else{
   this.router.navigate(['./validate']);
}
  }
    gotoHelp() {
    this.router.navigate(['./forgotHelp']);
  }
  goToLogin() {
    this.router.navigate(['']);
  }
}


 