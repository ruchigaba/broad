import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import {Router, RouteReuseStrategy, ActivatedRouteSnapshot,DetachedRouteHandle,NavigationEnd} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
//import {reuse-Strategy} from '../../resue-strategy';

declare var cordova: any;
declare var plugins: any;
declare var window: any;
@Component({
  selector: 'app-prvider',
  templateUrl: './provider.component.html',
  //styleUrls: ['./provider.component.scss']
   providers: [CommonAPICall]
})
export class ProviderComponent implements OnInit {
    commnFunc;
    address = ""; city = ""; state = ""; zipcode = ""; claimNumber = ""; selectedItem = "";
    currentLocationHide = true; contentLoaded = false; taxId2digits = ""; taxId7digits = "";
    phone3digits = ""; phone3digits2 = ""; phone4digits = ""; selectedSpecialities = [];
    headerToken = 'Bearer ' + sessionStorage.getItem("token");
    specialitesArray = []; radiusdistance = []; folder = {};

  constructor(private _commonApiCall: CommonAPICall, private route: Router) { 
  this.commnFunc = new CommonFunction();}

  ngOnInit() {

      var routevar = this.route;
        this._commonApiCall.checkToken(routevar);

        window.scrollTo(0, 0);
        this.claimNumber = sessionStorage.getItem("claimNumber");
        this.getClaimantAddress();
        this.getMedSpecialities();

        this.radiusdistance = ['5', '10', '15', '20', '25', '50', '100'];
        this.selectedItem = this.radiusdistance[0];
  }

  // clear addres and zipcode on click of clear buttonclearData
    clearData() {
        this.zipcode = "";
        this.city = "";
        this.state = "";
        this.address = "";
        this.zipcode = "";
    }
getClaimantAddress() {
        var urlParameter = 'ClaimantAddresses?claim_id=' + sessionStorage.getItem("claimId");
        this._commonApiCall.getService(urlParameter, this.headerToken, "application/json")
            .subscribe(response => {

                this.address = response.result[0].addr1;
                console.log(this.address);
                this.city = response.result[0].city;
                this.state = response.result[0].state;
                this.zipcode = response.result[0].zip_code;

            },
            error => {
                this._commonApiCall.handleError(error, "Login");
            });
    }
    getMedSpecialities() {
        this._commonApiCall.getService("medicalprovider/specialties", "", "application/json")
            .subscribe(response => {
                this.contentLoaded = true;
                this.specialitesArray = response.result.specialties;

            },
            error => {
                this._commonApiCall.handleError(error, "Login");
            })
    }

    // hide and show location section when current location checked is on or off

    showHideLocation(e) {

        if (e.target.checked)
            this.currentLocationHide = false;

        else
            this.currentLocationHide = true;

    }

    hideShowRadius(){
         
         var dropD=document.getElementById('hide1');
        console.log(dropD.style.display);
        if(dropD.style.display=='block'){
        dropD.style.display='none';
    }
    else{
        dropD.style.display='block';
    }
    }
    // select item selected by user in dropdown
    searchRadiusdropboxitem(item) {
       
        this.selectedItem = item;
        

    }

    // send data to server on click of search providers button
    saveSearchProvidersData = function() {
        sessionStorage.setItem("address", this.address);

        sessionStorage.setItem("local_selectedRadius", this.selectedItem);

        if (this.hospitalGroupName == undefined)
            sessionStorage.setItem("local_Hospital_GroupName", "%C2%A0");


        else
            sessionStorage.setItem("local_Hospital_GroupName", this.hospitalGroupName);


        if (this.doctorLastName == undefined)
            sessionStorage.setItem("local_Doctor_LastName", "%C2%A0");


        else
            sessionStorage.setItem("local_Doctor_LastName", this.doctorLastName);



        this.taxid = this.taxId2digits + "" + this.taxId7digits;



        if (this.taxid == "") {

            sessionStorage.setItem("local_TaxId", "%C2%A0");

        }

        else {
            if (this.taxid.toString().length < 9) {
                this.commnFunc.alertPopup("Tax ID must be a 9 digit number.", "Providers");
                return false;
            }
            else
                sessionStorage.setItem("local_TaxId", this.taxid);
        }

        this.phoneno = this.phone3digits + "" + this.phone3digits2 + "" + this.phone4digits;

        if (this.phoneno == "") {

            sessionStorage.setItem("local_ProviderPhoneNumber", "%C2%A0");
        }

        else {
            if (this.phoneno.toString().length < 10) {
                this.commnFunc.alertPopup("Phone Number must be a 10 digit number.", "Providers");
                return false;
            }
            else
                sessionStorage.setItem("local_ProviderPhoneNumber", this.phoneno);

        }

// get current location lat long
        if (this.currentLocationHide == false) {
            this.currentLocationLatLong(this.route);

        }
        // without pincode and current location
        else if (this.currentLocationHide !== false && this.address !== '' && this.city !== '' && this.state !== '') {
            this.combinedAddress = this.address + ' ' + this.city + ' ' + this.state;
            this.getLatLongWithAddress(this.combinedAddress);
        }

        else if (this.currentLocationHide !== false && this.zipcode !== '') {
            if (this.zipcode.toString().length < 5) {
                this.commnFunc.alertPopup("Zip Code must be a 5 digit number.", "Providers");
                return false;
            }

            else
                this.getLatLongWithZipcode(this.zipcode);

        }
        else {
            this.commnFunc.alertPopup("Please Enter Either Zipcode or Complete Adress or Choose Current Location", "Providers");
            return false;
        }
        // get text of checkboxes selected in selected specialities dropdown
        this.folder = this.clean(this.folder);
        this.arrayOfKeys = Object.keys(this.folder);

        this.selectedSpecialities = [];
        this.arrayOfKeys.forEach((key: any) => {

            this.selectedSpecialities.push(key);
        });

        sessionStorage.setItem("specialitesArray_string", JSON.stringify(this.selectedSpecialities));
    }

    clean(obj) {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined) {
                delete obj[propName];
            }
        }
        return obj;
    }


    /*----------------- code to get current location with plugins included for app running as ipa or apk starts or browser-------------------- */
    requestLocation(route, obj: any) {

        if (navigator.geolocation) {
            //alert('location');
            // if the app is running in the browser
            if (typeof cordova === 'undefined' || (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i))) {
                    //console.log("location is:");
                navigator.geolocation.getCurrentPosition(function(position) {
                    sessionStorage.setItem("local_Latitude", "" + position.coords.latitude);
                    sessionStorage.setItem("local_Longitude", "" + position.coords.longitude);
                    route.navigate(['./dashboard/physiciansmap']);

                },
                function(error) { 
                    //alert('1');
                    if(error.code == 1){
                   obj.commnFunc.alertPopup("Access is denied. Go to Settings>>Privacy>>Location Services and allow Broadspire app to access the location",
                           "Providers");
              }
              else if(error.code == 2){
                        obj.commnFunc.alertPopup("Position is unavailable. Please try again",
                           "Providers");
              }
              else if(error.code == 3){
                   obj.commnFunc.alertPopup("Position retrieval timed out",
                           "Providers");
                        //this.requestLocation(this.route, obj); 

              }
        

    },
                // function(failure) {
                //     if (failure.message.indexOf("Only secure origins are allowed") == 0) {

                //         obj.CommonFunction.alertPopup("Current Location no longer works on insecure origins.To use this feature, you should consider switching your application to a secure origin, such as HTTPS",
                //             "Providers");
                //         return false;
                //     }
                //     else {

                //         obj.commnFunc.alertPopup("Current Location Not Found.", "Providers");
                //         return false;
                //     }
                //     // Secure Origin issue.
                // },
                 { maximumAge: 5 * 60 * 1000, timeout: 25000 });
            }

            // if cordova is defined ,then use the diagnostic plugin
            else {

                cordova.plugins.diagnostic.isLocationEnabled(
                    function(enabled) {

                        if (enabled) {

                            navigator.geolocation.getCurrentPosition(
                                function(position) {
                                    sessionStorage.setItem("local_Latitude", "" + position.coords.latitude);
                                    sessionStorage.setItem("local_Longitude", "" + position.coords.longitude);

                                    route.navigate(['./dashboard/physiciansmap']);
                                },
                                function(error) {
                                    obj.commnFunc.alertPopup("Current Location Not Available at this time.Please try again later.", "Providers");
                                }, {
                                    maximumAge: 5 * 60 * 1000,
                                    timeout: 5000
                                }
                            );

                        }

                        else {

                            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Tablet/i)) {

                                cordova.plugins.diagnostic.switchToLocationSettings();
                            }
                            else {

                                obj.commnFunc.alertPopup("Please Enable Location Access.", "Providers");
                            }
                        }
                    },
                    function(e) {
                        obj.commnFunc.alertPopup('Error ' + e, "Providers");
                    }
                );
            }
        }
        else {

            this.commnFunc.alertPopup("Current Location Not Available.", "Providers");
        }
    }

    // get current location lat long
    currentLocationLatLong(_route) {

        var obj = this;
        // if the app is running in the browser
        if (typeof cordova === 'undefined') {
            this.requestLocation(_route, obj);
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            this.requestLocation(_route, obj);
        }

        // if the app is running as ipa or apk then use diagnostic plugin
        else {

            // if device is android then this code will run
            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Tablet/i)) {
                cordova.plugins.diagnostic.requestLocationAuthorization(function(status) {
                    switch (status) {
                        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                            break;
                        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                            obj.requestLocation(_route, obj);
                            break;
                        case cordova.plugins.diagnostic.permissionStatus.DENIED:
                            obj.commnFunc.alertPopup("Permission denied", "Providers");
                            break;
                        case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                            obj.commnFunc.alertPopup("Permission permanently denied", "Providers");
                            break;
                    }
                })
            }

            // if the device is ios then this code will run
            else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {

                cordova.plugins.diagnostic.getLocationAuthorizationStatus(function(status) {
                    switch (status) {
                        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                            obj.commnFunc.alertPopup("Permission not requested.", "Providers");
                            break;
                        case cordova.plugins.diagnostic.permissionStatus.DENIED:
                            obj.commnFunc.alertPopup("Please Enable Location Services to access this feature.", "Providers");
                            break;
                        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                            obj.requestLocation(_route, obj);
                            break;
                        case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                            obj.requestLocation(_route, obj);
                            break;
                    }
                }, function(error) {
                    obj.commnFunc.alertPopup("The following error occurred: " + error, "Providers");
                });
            }



        }
    }


/*----------------- code to get current location with plugins included for app runiing as ipa or apk ends-------------------- */



    // get lat long with address
    getLatLongWithAddress(address) {

        this._commonApiCall.getServiceGoogleMaps(address)
            .subscribe(response => {
                if (response.status == "ZERO_RESULTS")
                    this.commnFunc.alertPopup("No Location found for the entered address", "Providers");

                else
                 {
                    sessionStorage.setItem("local_Latitude", response.results[0].geometry.location.lat);
                    sessionStorage.setItem("local_Longitude", response.results[0].geometry.location.lng);
                    this.route.navigate(['./dashboard/physiciansmap']);
                }
            },
            error => {
                this._commonApiCall.handleError(error, "Login");
            })
    }
    // get lat long with address
    getLatLongWithZipcode(zipcode) {

        this._commonApiCall.getServiceGoogleMaps(zipcode)
            .subscribe(response => {
                if (response.status == "ZERO_RESULTS")
                    this.commnFunc.alertPopup("No Location found for the entered pincode", "Providers");

                 else
                 {
                    sessionStorage.setItem("local_Latitude", response.results[0].geometry.location.lat);
                    sessionStorage.setItem("local_Longitude", response.results[0].geometry.location.lng);
                    this.route.navigate(['./dashboard/physiciansmap']);
                }
            },
            error => {
                this._commonApiCall.handleError(error, "Providers");
            })
    }

  //navigate to nearby map page
//navigatetomapprovider(){
 //this.router.navigate(['./dashboard/nearbyphysicians-map']);
//}
classremoved(v){
    if(v.className.indexOf("checked") != -1){

    v.classList.remove('checked');
} else{
    v.classList.add('checked');
}
    
}
}
