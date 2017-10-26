import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
  selector: 'app-healt-ticket',
  templateUrl: './healt-ticket.component.html',
  providers: [HttpModule, CommonAPICall]
  //styleUrls: ['./healt-ticket.component.scss']
})
export class HealtTicketComponent implements OnInit {
	commnFunc;
	claims1: any[] = JSON.parse(sessionStorage.getItem('claims'));

    isActive = "1";
    priscription = true;
    primary = false;
    ancillary = false;
    description = false;
    hide = false;

    PatientName = this.claims1[0].employee_full_name;
    DateOfInjury = this.claims1[0].event_date;
    HealthTicketclaimNumber = this.claims1[0].claim_number;
    Employer = this.claims1[0].employer_name;
    BodyPart = this.claims1[0].body_part;
    StateOfJurisdiction = this.claims1[0].juris_state;
    primaryPharmacyName = this.claims1[0].primary_pharm_name;
    primaryBin = this.claims1[0].primary_pharm_bin;
    primaryPCN = this.claims1[0].primary_pharm_pcn;
    primaryGroup = this.claims1[0].primary_pharm_group_num;
    ancillaryPharmName = this.claims1[0].ancillary_pharm_name;
    ancillaryBin = this.claims1[0].ancillary_pharm_bin;
    ancillaryPCN = this.claims1[0].ancillary_pharm_pcn;
    ancillaryGroup = this.claims1[0].ancillary_pharm_group_num;
    primary_pharm_phone_num = this.claims1[0].primary_pharm_phone_num;
    claim = this.claims1[0].claim_status;
    isShow = true;
    //---------------------------Show data according selected claims start----------------------------------------------
    healthTicketSelectedClaim = this.claims1[0].claim_number;
    healthSelectedClaim(claim) {
      var drop=document.getElementById('dr');
      if (drop.style.display=="none") {
        drop.style.display="block";
      }
      else{
        drop.style.display="none";
      }

            this.isShow = true;
            this.healthTicketSelectedClaim = claim.claim_number;
            this.PatientName = claim.employee_full_name;
            this.DateOfInjury = claim.event_date;
            this.HealthTicketclaimNumber = claim.claim_number;
            this.Employer = claim.employer_name;
            this.BodyPart = claim.body_part;
            this.StateOfJurisdiction = claim.juris_state;
            this.primaryPharmacyName = claim.primary_pharm_name;
            this.primaryBin = claim.primary_pharm_bin;
            this.primaryPCN = claim.primary_pharm_pcn;
            this.primaryGroup = claim.primary_pharm_group_num;
            this.ancillaryPharmName = claim.ancillary_pharm_name;
            this.ancillaryBin = claim.ancillary_pharm_bin;
            this.ancillaryPCN = claim.ancillary_pharm_pcn;
            this.ancillaryGroup = claim.ancillary_pharm_group_num;
            this.primary_pharm_phone_num = claim.primary_pharm_phone_num;
            this.claim = claim.claim_status;

            this.isActive = "1";
            this.priscription = true;
            this.primary = false;
            this.ancillary = false;
            this.description = false;

    }
     //---------------------------Show data according selected claims end----------------------------------------------


  constructor(private _commonApiCall: CommonAPICall, private _router: Router) {
  	console.log(this.HealthTicketclaimNumber); 
  	this.commnFunc = new CommonFunction();this.commnFunc = new CommonFunction();

  }

  ngOnInit() {
    
  	window.scrollTo(0, 0);

      //-------------------------------------------Authentication Checking Start----------------------------------------------------
      var classname = document.getElementById("closeMe");
      var routevar = this._router;
      this._commonApiCall.checkToken(routevar);
      if (sessionStorage.getItem('token') == undefined || sessionStorage.getItem('token') == '') {
          this.commnFunc.alertPopup("Your session has expired - please sign in again.",
          "Health Ticket");
          classname.addEventListener('click', function cls(event) {
            document.getElementById("closeMe").removeEventListener('click', cls);
            routevar.navigate(['']);

          });
      }
      console.log('welcome', this.claims1);
  }
  healthService() {
        this.isActive = "1";
        this.isShow = true;
        this.primary = false;
        this.ancillary = false;
        this.description = false;
    }
    pharmacyInfo() {
        this.isActive = "2";
        if(this.primaryPharmacyName != "null" || this.primaryBin != "null" || this.primaryPCN != "null"
        || this.primaryGroup != "null" ||  this.primary_pharm_phone_num != "null"){
          //alert("Hello");
          this.priscription = false;
          this.primary = true;
          this.description = true;
        }
        else if(this.ancillaryPharmName != "null" || this.ancillaryBin != "null" || this.ancillaryPCN != "null"
        || this.ancillaryGroup != "null"){
          alert("Hello1");
          this.priscription = false;
          this.ancillary = true;
          this.description = true;
        }
        else if(this.primaryPharmacyName == "null" && this.primaryBin == "null" && this.primaryPCN == "null"
        && this.primaryGroup == "null" &&  this.primary_pharm_phone_num == "null" && this.ancillaryPharmName == "null"
        && this.ancillaryBin == "null" && this.ancillaryPCN == "null" && this.ancillaryGroup == "null"){
          this.priscription = false;
          this.commnFunc.alertPopup("There is no Pharmacy Information available for the requested Claim.","Health Ticket");
          this.primary = false;
          this.ancillary = false;
          this.description = false;
        }
    }
    // Priscription Id Method.
    priscriptionId() {
        this.isActive = "1";
        this.priscription = true;
        this.primary = false;
        this.ancillary = false;
        this.description = false;
    }

    healthDropdownFunc(dropdownMenu1){
    	if (dropdownMenu1.style.display=="none") {
    		dropdownMenu1.style.display="block";
        window.addEventListener("click",()=>{
   dropdownMenu1.style.display="none";
  })
   window.addEventListener("touchstart",()=>{
      dropdownMenu1.style.display="none";
    })
        
    	}
    	else{
    		dropdownMenu1.style.display="none";
    	}
    	
    }

}
