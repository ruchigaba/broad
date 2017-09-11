import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonAPICall } from '../../shared/shared.service';

//Compoent Decorator
@Component({
  selector: 'css-carousel',
  templateUrl: 'Tutorial.component.html',
  providers: [CommonAPICall]
})
//Carousel Component itself
export class TutorialComponent implements OnInit {
  images = [];
  portraitImages = [];
  landscapeImages = [];
  deskmobImages = [];
  width;
  height;
  isShow = false;

  slideIndex = 1;
  constructor(private _commonApiCall?: CommonAPICall, private element?: ElementRef,private _route?: Router) { }

  //-----------------------------------------------------------OnInit Method Start-----------------------------------------------------
  ngOnInit() {

    var routevar = this._route;
    this._commonApiCall.checkToken(routevar);
    this.getTutorial();
  }
  firstTimeImages() {
    if (this.landscapeImages.length > 0 && this.landscapeImages[0].fileName.indexOf('Landscape') >= 0) {
      if (window.matchMedia("(orientation:landscape)").matches) {

        this.images = [];

        this.images = this.landscapeImages;
        setTimeout(() => { this.plusDivs(0); }, 1);
      }
      else {
        this.images = [];
        console.log(this.portraitImages[0].fileName);
        this.images = this.portraitImages;
        setTimeout(() => { this.plusDivs(0); }, 1);
      }
    }
    else {
      console.log("Mobile or desktop");
      this.images = this.deskmobImages;
      setTimeout(() => { this.plusDivs(0); }, 1);
    }
  }
  onResize(e) {
    console.log(window.matchMedia("(orientation:landscape)").matches);
    if (this.landscapeImages.length > 0 && this.landscapeImages[0].fileName.indexOf('Landscape') >= 0) {
      if (window.matchMedia("(orientation:landscape)").matches) {
        console.log("land  " + window.matchMedia("(orientation:landscape)").matches);
        this.images = [];
        console.log(this.landscapeImages[0].fileName);
        this.images = this.landscapeImages;
        setTimeout(() => { this.plusDivs(0); }, 1);

      }
      else {

        this.images = [];
        console.log(this.portraitImages[0].fileName);
        this.images = this.portraitImages;
        setTimeout(() => { this.plusDivs(0); }, 1);

      }
    }
    else {

      this.images = this.deskmobImages;
      setTimeout(() => { this.plusDivs(0); }, 1);

    }
  }

  //-----------------------------------------------------------OnInit Method End-----------------------------------------------------


  //-----------------------------------------------------------Get Tutorial Method Start-----------------------------------------------------

  getTutorial() {
    sessionStorage.setItem('registerTimeout', 'true');
    this._commonApiCall.getService("supportContent?Type=AppTutorial", "", "")
      .subscribe(res => {
        sessionStorage.setItem('registerTimeout', 'false');

        for (let i = 0; i < res.result.length; i++) {
          if (res.result[i].fileName.indexOf("Portrait") >= 0) {
            this.portraitImages.push(res.result[i]);
          }
          else if (res.result[i].fileName.indexOf("Landscape") >= 0) {
            this.landscapeImages.push(res.result[i]);
          }
          else {
            this.deskmobImages.push(res.result[i]);
          }
        }

        this.firstTimeImages();
      },
      error => {
        
        sessionStorage.setItem('registerTimeout', 'false');
        this._commonApiCall.hideLoaderShowPopup(error, "Tutorial");
      })
  }
  //-----------------------------------------------------------Get Tutorial Method End-----------------------------------------------------

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }
  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      document.getElementById("mySlides" + i).style.display = "none";


    }

    document.getElementById("mySlides" + (this.slideIndex - 1)).style.display = "block";

  }
}

