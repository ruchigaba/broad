import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  //styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	//on back button android activate footer
      document.getElementById('Social').className+=" activeFooter";
      document.getElementById('worker').className+=" router-link-active"; 
  }

ngOnDestroy(){
    document.getElementById("Social").classList.remove("activeFooter");
     document.getElementById("worker").classList.remove("router-link-active");
   }
   
}
