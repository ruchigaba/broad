import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../../shared/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim-paymentdetails',
  templateUrl: './claim-paymentdetails.component.html',
  providers: [CommonAPICall]
  //styleUrls: ['./claim-paymentdetails.component.scss']
})
export class ClaimPaymentdetailsComponent implements OnInit {
	checkNumber = ""; paymentAmount = ""; paidTo = ""; checkDate = ""; address1 = "";
  address2 = ""; claimNumber = ""; trans_type = ""; split_amount = ""; dateRange = "";
  cityStateZip = "";
  contentLoaded = false;
  headerToken = 'Bearer ' + sessionStorage.getItem("token");
transactionsArray = [];

  constructor(public _commonAPICall: CommonAPICall, private route: Router) { }

  ngOnInit() {
  	var routevar = this.route;
    this._commonAPICall.checkToken(routevar);
    this.getSelectedClaimPaymentDetails();
    console.log(sessionStorage.getItem("trans_id"));
  }
  	getSelectedClaimPaymentDetails(){
  		this._commonAPICall.getService('payment/detail?trans_id=' + sessionStorage.getItem("trans_id"),
      this.headerToken, "application/json")
      .subscribe(response => {
        // show the page when content of claims is loaded
        this.contentLoaded = true;

        this.claimNumber = sessionStorage.getItem("claimNumber");
this.transactionsArray = response.result.transaction;
        this.checkNumber = response.result.transaction[0].trans_number;
        this.paymentAmount = response.result.transaction[0].amount;
        this.paidTo = response.result.transaction[0].pay_to_the_order;
        this.checkDate = response.result.transaction[0].date_of_check;
        this.address1 = response.result.transaction[0].addr1;
        this.address2 = response.result.transaction[0].addr2;
        this.trans_type = response.result.transaction[0].trans_type;
        this.split_amount = response.result.transaction[0].split_amount;
        this.dateRange = response.result.transaction[0].dateRange;

        this.cityStateZip = response.result.transaction[0].city + ", " +
          response.result.transaction[0].state + " " + response.result.transaction[0].zip_code;

      },error => {
        this._commonAPICall.handleError(error, "Claims");
      });
  	}
}
