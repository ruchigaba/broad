import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }
  activeFooterMenu = "Claim";
  ngOnInit() {

    document.onclick=function() { 
      // alert('hello');
      document.getElementById("togg-dv").className = "hidden-content slide-down" };

    document.onclick=function() { document.getElementById("togg-dv").className = "hidden-content slide-down" };


    window.scrollTo(0, 0);

  }

  enableToggle(event) {
  	

    var className = document.getElementById("togg-dv").className;
    // alert("Hey :"+className);
    if (className == "hidden-content slide-down")
      document.getElementById("togg-dv").className = "hidden-content slide-up";

    else{
      document.getElementById("togg-dv").className = "hidden-content slide-down";

}

    var theElement = document.getElementById("pageHtml");


    event.stopPropagation();
    return false;
  }

  removeMoreOptions(){
  // hide footer  more option on every page init
  var className = document.getElementById("togg-dv").className;
  if (className == "hidden-content slide-up")
    document.getElementById("togg-dv").className = "hidden-content slide-down";
}

// document.getElementsByTagName('body').addEventListener('click',function(){
	
// }); 
claimFooterClick(){
      sessionStorage.setItem('pagePosition', undefined);
  }

}
