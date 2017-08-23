import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-info',
  templateUrl: './claim-info.component.html',
  providers: [CommonAPICall]
  //styleUrls: ['./claim-info.component.scss']
})
export class ClaimInfoComponent implements OnInit {
	claimNumber = "";employeeName = "";dateOfLoss = "";
adjusterName = "";adjusterEmail = "";claimStat = "";
claimStatus = "";adjusterNo="";

  constructor(public _dashboardApiService: CommonAPICall, private route: Router) { }

  ngOnInit() {

  	var routevar = this.route;
    this._dashboardApiService.checkToken(routevar);

  this.adjusterNo=  "tel:+"+"1"+sessionStorage.getItem("AdjusterPhone");
    //window.scrollTo(0, 0);
    this.claimNumber = sessionStorage.getItem("claimNumber");
    this.adjusterName = sessionStorage.getItem("AdjusterName");
    this.adjusterEmail = sessionStorage.getItem("AdjusterEmail");
    console.log(this.adjusterEmail);
    if(this.adjusterEmail == "null"){
      sessionStorage.setItem('email', "");
    }
    else {
        sessionStorage.setItem('email', this.adjusterEmail);
    }
    if(this.adjusterName == "null"){
      sessionStorage.setItem('name', "");
    }
    else {
        sessionStorage.setItem('name', this.adjusterName);
    }


    sessionStorage.setItem('claim_number', this.claimNumber);
    sessionStorage.setItem('pageName','Adjuster');
    this.claimStatus = sessionStorage.getItem("SelectedMyClaimStatus");
    this.dateOfLoss  = sessionStorage.getItem("SelectedMyClaimDatOfLoss");
    this.employeeName = sessionStorage.getItem("SelectedMyClaimEmployeeName");
  }
  openPhoneDialerFromClaimInfo=function(){
  //  this.adjusterPhone = sessionStorage.getItem("AdjusterPhone");
    document.location.href = "tel:+"+sessionStorage.getItem("AdjusterPhone");
  //window.location = "tel:"+this.AdjusterPhoneNumber ;//(44) 4444-4444";
  }

}
