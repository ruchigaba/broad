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
       document.getElementById('titleBar').style.width="71%";
  }


createNewUser12(){
   let a = this.ClaimNumber;
   a=a.trim();
   sessionStorage.setItem("claimno",a);
   if (a == "" || a == undefined) {
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


 