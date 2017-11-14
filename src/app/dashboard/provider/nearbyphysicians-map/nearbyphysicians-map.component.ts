import { Component, OnInit,Pipe, PipeTransform  } from '@angular/core';
import { CommonAPICall } from '../../../shared/shared.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonFunction } from '../../../shared/commonFunction';

declare var google: any;


@Component({
  selector: 'physiciansmap',
  templateUrl: './nearbyphysicians-map.component.html',
  //styleUrls: ['./nearbyphysicians-map.component.scss'],
  providers: [CommonAPICall]
})
export class NearbyphysiciansMapComponent implements OnInit {
commnFunc;
map; mapOptions; item = 1;
 data: any;
title = '';
    infoWindow; marker; bounds;
    markers = []; totalPages = []; providersList;
    markerOptions; infoWindowOptions;
    showPagination = false;
  constructor(private _commonApiCall: CommonAPICall, private route: Router,private _route: ActivatedRoute) {
  this.commnFunc = new CommonFunction(); }

  ngOnInit() {
      let currentRoute = this._route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
       this.data = currentRoute.snapshot.data;
        sessionStorage.setItem("parent",this.data.parent);
                    //add title to header
          this.title = this.data.title;
           sessionStorage.setItem("storage_navigation", this.data.title);
      var routevar = this.route;
      this._commonApiCall.checkToken(routevar);
        window.scrollTo(0, 0);
        this.getMapData(0);
  }
allow2Decimals(distance):String{
      var num = Number(distance);
      var n = num.toFixed(2)
          return n;
    }
    //get claims of page number clicked
    paginationItemClicked($event) {
        this.getMapData($event.currentTarget.text - 1);
    }

    getMapData(pageNumber) {
        var specialitiesArray = JSON.parse(sessionStorage.getItem("specialitesArray_string"));

        var str1 = specialitiesArray.toString();
        var str2 = str1.replace(/,/g, "?");
        str2 = str2.replace(/&/g, "%20%26");

        if (str2 == "")
            str2 = "%C2%A0";

        var urlParameter = 'medicalproviders?From_Latitude=' + sessionStorage.getItem("local_Latitude") +
            '&From_Longitude=' + sessionStorage.getItem("local_Longitude") + '&Radius=' +
            sessionStorage.getItem("local_selectedRadius") + '&Facility_Name=' +
            sessionStorage.getItem("local_Hospital_GroupName") + '&Doctor_Last_Name=' +
            sessionStorage.getItem("local_Doctor_LastName") + '&Provider_Tax_id=' +
            sessionStorage.getItem("local_TaxId") + '&Provider_Phone_Number=' +
            sessionStorage.getItem("local_ProviderPhoneNumber") + '&Specialties=' + str2 + '&PageSize=10&PageNumber=' + pageNumber;

        // calling service
        this._commonApiCall.getService(urlParameter, "", "application/json")
            .subscribe(response => {

                if (response.result.message == "No providers found for search criteria provided") {
                        this.commnFunc.alertPopup("No providers found for search criteria provided", "Providers");

                    this.route.navigate(['./dashboard/provider']);

                } else {
                    if (pageNumber == 0) {
                        if (response.result.paging.totalPages == 0 || response.result.paging.totalPages == 1) {
                            this.showPagination = false;
                        }
                        else {
                            this.totalPages = [];
                            this.showPagination = true;
                            for (var i = 1; i <= response.result.paging.totalPages; i++) {
                                this.totalPages.push(i);
                            }

                        }
                    }
                    this.providersList = response.result.medicalproviders;

                    /* -------------------------Creating map and markers and adding click to markers starts-----------------------------------------------*/

                    this.bounds = new google.maps.LatLngBounds();
                    // show the map and place some markers
                    this.initMap();

                    for (var i = 0; i < response.result.medicalproviders.length; i++) {
                        var phoneNo = "";
                        if (response.result.medicalproviders[i].phone != undefined || response.result.medicalproviders[i].phone != null) {
                            var number = response.result.medicalproviders[i].phone;
                            phoneNo = number.substring(0, 3) + "-" + number.substring(3, 6) + "-" + number.substring(6, 10);
                        }
                        this.setMarker(this.map, new google.maps.LatLng(response.result.medicalproviders[i].latitude, response.result.medicalproviders[i].longitude), response.result.medicalproviders[i].facility_name,
                            "<b>" + response.result.medicalproviders[i].facility_name + "</b> <br/>" + response.result.medicalproviders[i].medical_specialty + "<br/>" + response.result.medicalproviders[i].address1 + " " + response.result.medicalproviders[i].address2 + "<br/>" + response.result.medicalproviders[i].city + ", "
                            + response.result.medicalproviders[i].state + " " + response.result.medicalproviders[i].zip_code + "<br/>" + phoneNo);
                        this.bounds.extend(new google.maps.LatLng(response.result.medicalproviders[i].latitude, response.result.medicalproviders[i].longitude));
                    }
                    // set map zoom to 18 if there is only 1 marker otherwise set fitbounds
                    if (response.result.medicalproviders.length == 1) {
                        this.map.setCenter(new google.maps.LatLng(response.result.medicalproviders[0].latitude, response.result.medicalproviders[0].longitude));
                        this.map.setZoom(18);
                    }
                    else {
                        this.map.fitBounds(this.bounds);
                    }

                    /* -------------------------Creating map and markers and adding click to markers ends-----------------------------------------------*/
                }
            },
            error => {
                this._commonApiCall.handleError(error, "Providers");
            });
    }
    // initialize the map
    initMap() {

        if (this.map === void 0) {

            // map config
            this.mapOptions = {

                center: new google.maps.LatLng(30.2891, -97.6975),
                zoom: 10,
                panControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false

            };

            this.map = new google.maps.Map(document.getElementById('gmaps'), this.mapOptions);
        }
    }
    // place a marker
    setMarker(map, position, title, content) {

        this.markerOptions = {
            position: position,
            map: map,
            animation: google.maps.Animation.DROP,
            title: title,
            icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        };

        var marker = new google.maps.Marker(this.markerOptions);
        this.markers.push(this.marker); // add marker to array

        google.maps.event.addListener(marker, 'click', function() {

            // close window if not undefined

            if (this.infoWindow !== void 0) {
                this.infoWindow.close();
            }

            // create new window
            this.infoWindowOptions = {
                content: content
            };

            this.infoWindow = new google.maps.InfoWindow(this.infoWindowOptions);
            this.infoWindow.open(map, marker);

        });

    }
// open google maps app or website when list item is clicked
    clickedItemLatLong(selectedLat: any, selectedLong: any) {

        var startLat = sessionStorage.getItem("local_Latitude");
        var startLng = sessionStorage.getItem("local_Longitude");

        if (navigator.userAgent.match(/iPhone/i))
            window.open("maps://maps.google.com/maps?saddr=" + startLat + "," + startLng + "&daddr=" + selectedLat + "," + selectedLong);

        else if (navigator.userAgent.match(/Android/i))
            window.open("http://maps.google.com/maps?saddr=" + startLat + "," + startLng + "&daddr=" + selectedLat + "," + selectedLong);

        else
            window.open("http://maps.google.com/maps?saddr=" + startLat + "," + startLng + "&daddr=" + selectedLat + "," + selectedLong);

    }
}
