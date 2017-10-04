import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-worker-comp',
  templateUrl: './worker-comp.component.html',
  //styleUrls: ['./worker-comp.component.scss']
})
export class WorkerCompComponent implements OnInit {
//  claimNum = "";
//  claimNumber = "";
ClaimNumber="";
  constructor(private router: Router) { }

  ngOnInit() {
   

}
 createNewUser12(){
  // alert("kh");
   let a = this.ClaimNumber;
  
if (a.charAt(0).match(/[a-z]/i)){
   this.router.navigate(['./leaveregistration']);
  
}
else{
   this.router.navigate(['./createUser']);
}
  }
}
