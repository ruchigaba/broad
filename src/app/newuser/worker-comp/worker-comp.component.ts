import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-worker-comp',
  templateUrl: './worker-comp.component.html',
  //styleUrls: ['./worker-comp.component.scss']
    providers: [CommonAPICall]
})
export class WorkerCompComponent implements OnInit {
//  claimNum = "";
//  claimNumber = "";
ClaimNumber="";
commnFunc;
  constructor(private router: Router,public _dashboardApiService: CommonAPICall,) {
    this.commnFunc = new CommonFunction();
   }

  ngOnInit() {
     localStorage.setItem("Help","Registration");
      document.getElementById('titleBar').style.width="71%";

}
 createNewUser12(ClaimNumber: string){
   
  // alert("kh");
   let a = this.ClaimNumber;
   sessionStorage.setItem("claimno",a);
  // let a = sessionStorage.getItem("ClaimNumber");
   if (ClaimNumber== "" || ClaimNumber == undefined) {
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
