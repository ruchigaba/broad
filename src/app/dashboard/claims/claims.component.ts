import { Component, OnInit } from '@angular/core';
import { CommonFunction } from '../../shared/commonFunction';
import { Router } from '@angular/router';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  providers: [CommonAPICall,CommonFunction]
 // styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {
	headerToken = 'Bearer ' + sessionStorage.getItem("token");
  claims: string[] = []; tableHeads = [];
  currentclaims: string[] = [];
  totalPages: number[] = [];
  userId = ""; userSSN = ""; userDOB = ""; zipCode = "";
  currentclaim = true; myclaim = false; addclaim = false; showPaginationLoading = false;
  contentLoaded = false;
  item = ""; totalAmount = ""; claimStatus = ""; claimNumber = "";
  dolImgShow = false; dolImg = "";
  pageCount = 1; pageLoadCount = 1;
  currentClaimTable = true;
  month = "";
  date = "";
  year = "";
  claimNo = "";
  abc=false;
  constructor(public _dashboardApiService: CommonAPICall, private route: Router,private ComFunc:CommonFunction) { }

  ngOnInit() {
     var routevar = this.route;
     this._dashboardApiService.checkToken(routevar);
  //alert("claim");
  	this.item = "2";
    this.myClaimService();
    console.log('Bearer '+sessionStorage.getItem("token"));


 setTimeout(() => {
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      if(document.querySelector(".cnt-cnt-cnts")){
      var theElement = <HTMLElement>document.querySelector(".cnt-cnt-cnts");
      theElement.style.marginBottom = "20%";
    }
    }
},1000);
  }

  // this is to show date of loss image claim number image when links is clicked
  dateOfLossInfo() {
    let object = this;
    document.getElementById("claimspagediv").onscroll = function(event) { object.onScroll(event) };
    this._dashboardApiService.getService("supportContent?Type=HelpDateOfLoss", "", "")
      .subscribe(res => {
        this.dolImgShow = true;
        this.dolImg = res.result[0].base64;
      },
      error => {
        this._dashboardApiService.handleError(error, "Claims");
      })
  }

  dateOfClaimInfo() {

    this._dashboardApiService.getService("supportContent?Type=HelpClaimNumber", "", "")
      .subscribe(res => {
        this.dolImgShow = true;
        this.dolImg = res.result[0].base64;
      },
      error => {
        this._dashboardApiService.handleError(error, "Claims");
      })
  }
  close() {
    this.dolImgShow = false;
  }

  // this code is remove absolute position when add claim or myclaim is clicked
  removePositionAbsolute() {
    document.getElementById('claimspagediv').style.position = 'relative';
    document.getElementById("claimspagediv").style.zIndex = "0";
  }
  onScroll(event) {

    if (this.pageCount == this.totalPages.length) {
      this.enableScroll();
    }
    else {
      this.disableScroll();

      var height = this.getDocHeight();
      if (this.pageCount == this.pageLoadCount + 1) {
        if (this.currentclaim == true && height <= (window.pageYOffset || document.documentElement.scrollTop || Math.ceil(document.body.scrollTop)) + window.innerHeight + 1) {
          this.disableScroll();
          this.pageLoadCount = this.pageCount;
          //  this.pageCount = this.pageCount + 1;

          if (this.totalPages.length > 0 && this.pageCount < this.totalPages.length) {
            this.disableScroll();
            this.showPaginationLoading = true;

            // this code is to hide the main loader and place content of current on top
            //of it by increasing its z-index
            document.getElementById('claimspagediv').style.position = 'absolute';
            document.getElementById("claimspagediv").style.zIndex = "10";

            this.getCurrentClaims(sessionStorage.getItem("claimId"), this.pageCount, 10);


          }
          else {
            this.enableScroll();
          }
        }
        else {
          this.enableScroll();
        }
      }
      else {
        this.enableScroll();
      }
    }
  }
  //-------------------------- Code to enable disable scrolling starts----------------------------------------
  keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {
    if (this.keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  }

  disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    document.onkeydown = this.preventDefaultForScrollKeys;
  }

  enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  //------------------------- Code to enable disable scrolling ends---------------------------------


getDocHeight() {
    var D = document;
    return Math.max(
      Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
      Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
      Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
  }

  // open claim info page when claim number is clicked in current claims
  openClaimInfoPage() {
    this.route.navigate(['./dashboard/claim-info']);

  }
  // get scroll position of user when he opens a claim in current claims
  getScroll() {
    if (window.pageYOffset != undefined) {
      return [pageXOffset, pageYOffset];
    }
    else {
      var sx, sy, d = document, r = d.documentElement, b = d.body;
      sx = r.scrollLeft || b.scrollLeft || 0;
      sy = r.scrollTop || b.scrollTop || 0;
      return [sx, sy];
    }
  }
  // navigate to claim payment details page when a claim is clicked in current claims section
  clickedItemTransNumber(trans_id) {

    // store scroll position of user when he opens a claim in current claims
    sessionStorage.setItem("pagePosition", JSON.stringify(this.getScroll()));

    sessionStorage.setItem("trans_id", trans_id);
    sessionStorage.setItem("title", "Claims1");
    this.route.navigate(['./dashboard/claim-paymentdetailspage']);
     this.abc=true;
  }

  // call getCurrentClaims service when any myclaims is clicked
  myclaimClickedItemDetails(claimNum, claimStat, claimId, adjusterName,
    adjusterEmail, adjusterPhone, dateOfLoss, employeeName) {
    this.item = "2";
    this.pageCount = 1;
    this.pageLoadCount = 1;
    sessionStorage.setItem("claimNumber", claimNum);
    sessionStorage.setItem("claimId", claimId);
    sessionStorage.setItem("ClaimStatus", claimStat);
    sessionStorage.setItem("ClaimNumber", claimNum);
    this.claimStatus = sessionStorage.getItem("ClaimStatus");
    this.claimNumber = sessionStorage.getItem("ClaimNumber");
    sessionStorage.setItem("selectedClaimClaimId", claimId);
    this.getCurrentClaims(claimId, 0, 20);
    //  this.getCurrentClaims(claimId, 1, 8);

    // select currentclaim option in navbar
    this.currentclaim = true; this.myclaim = false; this.addclaim = false;

    sessionStorage.setItem("AdjusterName", adjusterName);
    sessionStorage.setItem("AdjusterEmail", adjusterEmail);
    sessionStorage.setItem("AdjusterPhone", adjusterPhone);
    sessionStorage.setItem("SelectedMyClaimStatus", claimStat);
    sessionStorage.setItem("SelectedMyClaimDatOfLoss", dateOfLoss);
    sessionStorage.setItem("SelectedMyClaimEmployeeName", employeeName);

    setTimeout(() => {
       if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
         if(document.querySelector(".cnt")){
         var theElement = <HTMLElement>document.querySelector(".cnt");
         theElement.style.marginBottom = "20%";
       }
       }
   },1000);
  }
//call to get myclaims service
  myClaimService() {
    //console.log(this.headerToken);
    this._dashboardApiService.getService("claims", this.headerToken, "application/json")
      .subscribe(response => {
        this.claims = response.result.claims;
        sessionStorage.setItem("claims", JSON.stringify(response.result.claims));

        var claimNumberArray = [];
        var claimIdArray = [];

        for (var i = 0; i < response.result.claims.length; i++) {
          claimNumberArray.push(response.result.claims[i].claim_number);
          claimIdArray.push(response.result.claims[i].claim_id);
        }

        // if user has selected another my claim then this if block should not run
        // this is to show data of claim selected by user and not of 1st claim
        if (sessionStorage.getItem("selectedClaimClaimId") == undefined || sessionStorage.getItem("selectedClaimClaimId") == "") {
          sessionStorage.setItem("claimNumberArray", JSON.stringify(claimNumberArray));
          sessionStorage.setItem("claimIdArray", JSON.stringify(claimIdArray));


          sessionStorage.setItem("claimNumber", response.result.claims[0].claim_number);
          sessionStorage.setItem("claimId", response.result.claims[0].claim_id);
          sessionStorage.setItem("SelectedMyClaimDatOfLoss", response.result.claims[0].event_date);
          sessionStorage.setItem("SelectedMyClaimEmployeeName", response.result.claims[0].employee_full_name);

          sessionStorage.setItem("AdjusterName", response.result.claims[0].adjuster_name);
          sessionStorage.setItem("AdjusterEmail", response.result.claims[0].adjuster_email);
          sessionStorage.setItem("AdjusterPhone", response.result.claims[0].adjuster_phone);
          sessionStorage.setItem("SelectedMyClaimStatus", response.result.claims[0].claim_status);

          sessionStorage.setItem("ClaimStatus", response.result.claims[0].claim_status);
          sessionStorage.setItem("ClaimNumber", response.result.claims[0].claim_number);
        }
        this.claimStatus = sessionStorage.getItem("ClaimStatus");
        this.claimNumber = sessionStorage.getItem("ClaimNumber");
        this.getCurrentClaims(sessionStorage.getItem("claimId"), 0, 20);

        //  this.getCurrentClaims(sessionStorage.getItem("claimId"), 1, 8);
        this.getAddClaimService();
        this.contentLoaded = true;
        document.getElementById("loadingDiv").style.display = "block";

      },
      error => {
        this._dashboardApiService.handleError(error, "Login");
      })
      
  }


//call to get currentclaim service
  getCurrentClaims(claimId, pageNumber, pageSize) {

    var myClaimServiceUrl = "payments/?claim_id=" + claimId +
      "&pageNum=" + pageNumber + "&pageSize=" + pageSize;




    // in first requesting , i m requesting 16 claims and in subsquents requests i m reqstn 8 claims
    // the no of pages returned in 1st request is multiplied by 2.
    this._dashboardApiService.getService(myClaimServiceUrl, this.headerToken, "application/x-www-form-urlencoded")
      .subscribe(response => {

        this.currentClaimTable = true;

        this.enableScroll();
        // show the page when content of claims is loaded

        this.contentLoaded = true;
        this.showPaginationLoading = false;


        if (pageNumber == 0 || pageNumber == 1) {
          //   document.getElementById("showPaginationLoading").style.display = "none";
          this.currentclaims = [];
          this.currentclaims = response.result.transactions;

          // if claims has more than 2 pages then only show loader at bottom

        }


        else {

          for (var i = 0; i < response.result.transactions.length; i++) {
            this.currentclaims.push(response.result.transactions[i]);

          }

        }
        if(response.result.transactions[0]){
        this.totalAmount = response.result.transactions[0].total_amount;
      }

        // if request is for page 0 then only add pagecount in totalpages
        if (pageNumber == 0) {

          if (response.result.paging.totalPages == 0 || response.result.paging.totalPages == 1) {
            // this.showPaginationLoading = false;
          }
          else {
            this.totalPages = [];
            // this.showPaginationLoading = false;
            for (var i = 1; i <= 2 * response.result.paging.totalPages; i++) {
              this.totalPages.push(i);
            }

          }
        }

        if (pageNumber == (this.totalPages.length - 1)) {

        }
        this.pageCount = this.pageCount + 1;

        // move user to exact position where he opened the claim from
      //  typeof sessionStorage["pagePosition"] !== "undefined" &&
        if (sessionStorage["pagePosition"] !== "undefined") {
          var scrollPosArray = JSON.parse(sessionStorage.getItem("pagePosition"));
          setTimeout(() => {
            if(scrollPosArray){
            window.scrollTo(scrollPosArray[0], scrollPosArray[1]);
            var scrollToArray = this.getScroll();
            if (scrollToArray[1] == scrollPosArray[1]) {
              sessionStorage.setItem("pagePosition", undefined);
            }
          }
          }, 100);


        }


      },
      error => {
        // if an error has ocured in current claim(eg no payments for a claim) then clear the table div

//document.getElementById("showPaginationLoading").style.display = "none";


        if ( error.toString() !== "Error: Timeout has occurred" && error.json().errorMessage == "No payment/s found for the requested Claim") {
          document.getElementById("loadingDiv").style.display = "none";

          this.totalAmount = "$0";
          this.currentclaims = [];
          this.currentClaimTable = false;
        }

        else {
          this._dashboardApiService.handleError(error, "Claims");
        }

      })
  }
getAddClaimService() {
    this._dashboardApiService.getService("users", this.headerToken, "application/json")
      .subscribe(response => {
        this.userId = response.result.userId;
        this.userSSN = response.result.userSSN;
        this.userDOB = response.result.userDOB;
        this.zipCode = response.result.zipCode;
      },
      error => {
        this._dashboardApiService.handleError(error, "Login");
      })
      setTimeout(() => {
   if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
     if(document.querySelector(".cnt-cnt-cnts")){
     var theElement = <HTMLElement>document.querySelector(".cnt-cnt-cnts");
     theElement.style.marginBottom = "20%";
   }
   }
},1000);
  }
  // need to test this function but not sure whether it can be tested with terry's id or not
  // add a new claim
  addNewClaim(month: string, date: string, year: string, claimNo: string) {

    if (month == "" || month == undefined || date == "" || date == undefined || year == "" || year == undefined) {
       this.ComFunc.alertPopup("Please Enter Date Of Loss.", "Claims");

    }
    else if (claimNo == "" || claimNo == undefined) {
       this.ComFunc.alertPopup("Please Enter Claim Number.", "Claims");

    }
    else if (parseInt(year) < 1900 || parseInt(year) > 2100) {
       this.ComFunc.alertPopup("Please enter a year between 1900 and 2100.", "Claims");
    }
    else {
      var dateOfLoss = month + "-" + date + "-" + year;
      var addClaimObject = { "claim_Number": claimNo, "dateOfLoss": dateOfLoss };
      console.log(this.headerToken);
      this._dashboardApiService.postService("claims", this.headerToken, "application/json", addClaimObject)
        .subscribe(response => {
          console.log(JSON.stringify(response));
           this.ComFunc.alertPopup("Claim Added Successfully.", "Claims");

          this.month = "";
          this.date = "";
          this.year = "";
          this.claimNo = "";
          this.myClaimService();
        },
        error => {

          this._dashboardApiService.handleError(error, "Claims");
        })
    }

  }




}
