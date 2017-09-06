
import { Component,OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { CommonAPICall } from '../../shared/shared.service';


@Component({
    selector: 'contact-adjuster',
    templateUrl: 'contact-adjuster.component.html',
    providers: [HttpModule, CommonAPICall]
})
export class ContactAdjusterComponent implements OnInit {
    categVal='Mileage Reimbursement';
    claimServicers:string[] = [];
    name:string;
    phone:string;
    email:string;
    superName:string;
    superEmail:string;

    claimNumber = "";
    isShowContact = false;
    claims1:any[] = JSON.parse(sessionStorage.getItem('claims'));

      // claimId = this.claims1[0].claim_id;
     claimId=12978352;
    constructor(private _commonApiCall:CommonAPICall, private _route:Router) {}

    ngOnInit(){
console.log(this.claims1);

      window.scrollTo(0, 0);
        // Here Contact Adjuster Service Called.
 this.contactAdjusterService();
}

// Contact Adjuster Service  implementation method .
contactAdjusterService(){
 
  var token = 'Bearer ' + sessionStorage.getItem('token');
  console.log(token);
  this._commonApiCall.getService("claims/servicers?claim_id="+this.claimId,""+token, "")
            .subscribe(res => {
              console.log(res);
              
                this.claimServicers = res.result.claimServicers,
                this.claimNumber = res.result.claimNumber,
                this.name = res.result.claimServicers[0].name,
                this.phone=res.result.claimServicers[0].phone;
                this.email = res.result.claimServicers[0].email;
                this.superName = res.result.claimServicers[1].name;
                this.superEmail = res.result.claimServicers[1].email;
                sessionStorage.setItem('claim_number',this.claimNumber);
                this.isShowContact = true;

             },
           error => {
             this._commonApiCall.handleError(error,"Contact Adjuster");
           });
}
//---------------------------------REDIRECT ADJUSTER INFO MESSAGE METHOD-------------------------------------
claimInfoMessage(){
  sessionStorage.setItem('pageName','Adjuster');
  sessionStorage.setItem('name',this.name);
  sessionStorage.setItem('email',this.email);

  this._route.navigate(['./dashboard/ClaimInfoMessage']);
}
//---------------------------------REDIRECT EMAIL SUPERVISOR METHOD-------------------------------------

emailSupervisor(){
  sessionStorage.setItem('pageName','Supervisor');
  sessionStorage.setItem('superName',this.superName);
  sessionStorage.setItem('superEmail',this.superEmail);
  // this._route.navigate(['./dashboard/claimInfoMessage']);
  this._route.navigate(['./dashboard/ClaimInfoMessage']);
}
//---------------------------------OPEN DIALER-------------------------------------

contact(){
 // window.open('tel:'+this.phone, '_system');
}
//-----------------------------------------ITS CALLED AFTER SELECTING OTHER CLAIM NUMBER-----------------------------
selectedClaim = this.claims1[0].claim_number;
  dropboxitemselected(claim,dropdownMenu1){

      this.selectedClaim = claim.claim_number;
      this.claimId = claim.claim_id;
      this.contactAdjusterService();
      dropdownMenu1.style.display="none";
  }

// -----For ClaimInfo Page----
selectCateg(selCateg,mr){
selCateg.style.display='none';
this.categVal=mr.innerText;
}

healthDropdownFunc(dropdownMenu1){
      if (dropdownMenu1.style.display=="none") {
        dropdownMenu1.style.display="block";
        window.addEventListener("click",()=>{
      dropdownMenu1.style.display="none";
    })
      }
      else{
        dropdownMenu1.style.display="none";
      }
      
    }
}

