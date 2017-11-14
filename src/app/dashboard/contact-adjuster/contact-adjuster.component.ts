
import { Component,OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

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
    data: any;
    title = '';
    claimNumber = "";
    isShowContact = false;
    claims1:any[] = JSON.parse(sessionStorage.getItem('claims'));

      // claimId = this.claims1[0].claim_id;
     claimId=12978352;
    constructor(private _commonApiCall:CommonAPICall, private _route:Router,private route: ActivatedRoute) {}

    ngOnInit(){
   let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
       this.data = currentRoute.snapshot.data;
        sessionStorage.setItem("parent",this.data.parent);
                    //add title to header
          this.title = this.data.title;   
console.log(this.claims1);

      window.scrollTo(0, 0);
        // Here Contact Adjuster Service Called.
    this.contactAdjusterService();
      // if(sessionStorage.getItem('Id')=="onlyworkerscomp@gmail.com")
      // {
      //   alert("123")
      //   alert( document.getElementById("adjuster123"))
      //  document.getElementById("adjuster123").style.display ='none';
      // }
      // else{
      //   alert("xyz")
        
      //     document.getElementById("adjuster123").style.display ='block';
      // }
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
                sessionStorage.setItem('claim_number',this.claimNumber);
                this.isShowContact = true;
            if(res.result.claimServicers[1].name=="undefined" ||  res.result.claimServicers[1].name=="null"||  res.result.claimServicers[1].email=="undefined" ||res.result.claimServicers[1].email=="null"){
             this.superName ="";
               this.superEmail ="";
               }
               else{
                this.superName = res.result.claimServicers[1].name;
                this.superEmail = res.result.claimServicers[1].email;
               }
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
  sessionStorage.setItem("storage_navigation", this.data.title);
  this._route.navigate(['./dashboard/ClaimInfoMessage']);
}
//---------------------------------REDIRECT EMAIL SUPERVISOR METHOD-------------------------------------

emailSupervisor(){
  sessionStorage.setItem('pageName','Supervisor');
  sessionStorage.setItem('superName',this.superName);
  sessionStorage.setItem('superEmail',this.superEmail);
  sessionStorage.setItem("storage_navigation", this.data.title);
  this._route.navigate(['./dashboard/ClaimInfoMessage']);
}
//---------------------------------OPEN DIALER-------------------------------------

contact(){
 // window.open('tel:'+this.phone, '_system');

}
absencedisability(){
  sessionStorage.setItem("storage_navigation", this.data.title);
  document.getElementById("worker").classList.remove("router-link-active");
  this._route.navigate(['./dashboard/leaveTechPortal']);
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
         window.addEventListener("click",()=>{
               dropdownMenu1.style.display="none";
    })
    //  window.addEventListener("touchstart",()=>{
    //  dropdownMenu1.style.display="none";
    // })
     setTimeout(()=>{
      dropdownMenu1.style.display="block";
    },100)

        // dropdownMenu1.style.display="block";
    //      window.addEventListener("click",()=>{
    //   dropdownMenu1.style.display="none";
    // })
    //     window.addEventListener("touchstart",()=>{
    //   dropdownMenu1.style.display="none";
    // })
        
      }
      else{
        dropdownMenu1.style.display="none";
      }
      
  }

   
}

