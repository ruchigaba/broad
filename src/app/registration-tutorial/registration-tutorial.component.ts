//Import Component form the angular core package
import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonAPICall } from '../shared/shared.service';
import { CommonFunction } from '../shared/commonFunction';

//Compoent Decorator
@Component({
  selector: 'css-carousel',
  templateUrl:'registration-tutorial.component.html',
  providers: [CommonAPICall]
})
//Carousel Component itself
export class RegistrationTutorialComponent implements OnInit {
  commnFunc;
  images=[];
  portraitImages=[];
  landscapeImages=[];
  deskmobImages=[];
  width;
  height;
  isShow =false;

  slideIndex=1;
  mobileIndex=1;
  constructor(private _commonApiCall?: CommonAPICall, private element?: ElementRef){
    this.commnFunc = new CommonFunction();
  }

  //-----------------------------------------------------------OnInit Method Start-----------------------------------------------------
  ngOnInit(){
    //this.getTutorial();
  //  document.getElementById('titleBar').style.paddingLeft="0px"; 
    document.getElementById('titleBar').style.width="70%";
  }
  firstTimeImages(){
    if(this.landscapeImages.length>0 && this.landscapeImages[0].fileName.indexOf('Landscape')>=0){
    if(window.matchMedia("(orientation:landscape)").matches){
      console.log("land  "+window.matchMedia("(orientation:landscape)").matches);
      this.images=[];
      console.log(this.landscapeImages[0].fileName);
      this.images=this.landscapeImages;
      setTimeout(() => { this.plusDivs(0);}, 1);
    }
    else {
      console.log("port  "+window.matchMedia("(orientation:portrait)").matches);
      this.images=[];
        console.log(this.portraitImages[0].fileName);
      this.images=this.portraitImages;
      setTimeout(() => { this.plusDivs(0);}, 1);
    }
  }
    else{
      console.log("Mobile or desktop");
      this.images=this.deskmobImages;
      setTimeout(() => { this.plusDivs(0);}, 1);
    }
  }
  onResize(e){
    console.log(window.matchMedia("(orientation:landscape)").matches);
    if(this.landscapeImages.length>0 && this.landscapeImages[0].fileName.indexOf('Landscape')>=0){
    if(window.matchMedia("(orientation:landscape)").matches){
      console.log("land  "+window.matchMedia("(orientation:landscape)").matches);
      this.images=[];
      console.log(this.landscapeImages[0].fileName);
      this.images=this.landscapeImages;
      setTimeout(() => { this.plusDivs(0);}, 1);
      console.log("land");
    }
    else {
      console.log("port  "+window.matchMedia("(orientation:portrait)").matches);
      this.images=[];
        console.log(this.portraitImages[0].fileName);
      this.images=this.portraitImages;
      setTimeout(() => { this.plusDivs(0);}, 1);
      console.log("port");
    }
  }
    else{
      console.log("Mobile or desktop");
      this.images=this.deskmobImages;
      setTimeout(() => { this.plusDivs(0);}, 1);
      console.log("mob");
    }
  }

  //-----------------------------------------------------------OnInit Method End-----------------------------------------------------


  //-----------------------------------------------------------Get Tutorial Method Start-----------------------------------------------------

  getTutorial(){
    //alert('ih')
    sessionStorage.setItem('registerTimeout','true');
    this._commonApiCall.getService("supportContent?Type=Registration", "", "")
    .subscribe(res=>{
      document.getElementById("loadingDiv").style.display = "none";
      console.log(res);
      sessionStorage.setItem('registerTimeout','false');
      
      for(let i=0;i<res.result.length;i++){
        if(res.result[i].fileName.indexOf("Portrait") >= 0){
          this.portraitImages.push(res.result[i]);
        }
        else if(res.result[i].fileName.indexOf("Landscape") >= 0){
          this.landscapeImages.push(res.result[i]);
        }
        else{
          this.deskmobImages.push(res.result[i]);
        }
      }
//console.log("p "+this.portraitImages);
//console.log("l "+this.landscapeImages);
//console.log("hi "+this.images);
    this.firstTimeImages();
  },
error =>{
  document.getElementById("loadingDiv").style.display = "none";
    sessionStorage.setItem('registerTimeout','false');
  this.commnFunc.alertPopup(error,"Tutorial");
})
  }
  //-----------------------------------------------------------Get Tutorial Method End-----------------------------------------------------

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }
  mobileShow(n){
    this.showMob(this.mobileIndex +=n);

  }
  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      document.getElementById("mySlides"+i).style.display = "none";
      // document.getElementById("mySlides123"+i).style.display = "none";
}
document.getElementById("mySlides"+(this.slideIndex-1)).style.display = "block";
// document.getElementById("mySlides123"+(this.slideIndex-1)).style.display = "block";
 }

 showMob(n){
   var j;
   var y= document.getElementsByClassName("mySlidesmob");
   if(n > y.length) {this.mobileIndex =1}
     if(n < 1) {this.mobileIndex = y.length}
       for(j=0; j<y.length; j++){
         document.getElementById("mobile"+j).style.display = "none";
       }
       document.getElementById("mobile"+(this.mobileIndex-1)).style.display = "block";
 }
}
