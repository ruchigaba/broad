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
  dolImg: string;
  constructor(private _commonApiCall: CommonAPICall,private router: Router) { 
    
  }
 ngOnInit() {
 document.body.className = 'leaave-disablity';
     // this.Url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://qa-broadspire.cs65.force.com/eep/cveep__Login');
  }
  ngOnDestroy(){
    document.body.className = '';

  }


//     if (sessionStorage.getItem('Id') == 'leavedisability@gmail.com')  {
//     document.getElementById("toshow").style.display = 'none';
//       document.getElementById("titleBar").style.display = 'block';
//   }
//    else{
 
//   //document.getElementById("toshow").style.display = 'block';
 
 
//     //document.getElementById("titleBar").style.display = 'none';
//  }
 





gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToLeaveDisability() {
     var x =document.getElementById("worker")
     var y= document.getElementById("leave")
      x.setAttribute("className","list-group-item-mycom");
        y.style.border="1.5px solid #0a9e49";
        y.style.padding="5px";
          x.style.border="0px";
        this.router.navigate(['./dashboard/leaveTechPortal']);
  }
   dateOfLossInfo() {

    this._commonApiCall.getService("supportContent?Type=HelpDateOfLoss", "", "")
      .subscribe(res => {
        //console.log(res.result[0].base64);
        this.dolImg = res.result[0].base64;
        //console.log(this.dolImg);
        this.dolImgHide = true;
      },
    error =>{
      this._commonApiCall.handleError(error,"Help Date Of Loss");
    })
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
