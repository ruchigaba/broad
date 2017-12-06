   //our root app component
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DomSanitizer} from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
// @Component({
//   selector: 'my-app',
//   template: `
//     <div>
//        <iframe [src]="pdfUrl" width="500" height="600" type='application/pdf'></iframe>
//     </div>
//   `,
// })

@Component({
  selector: 'css-carousel',
  templateUrl:'leaveTechPortal.component.html'
  //providers: [CommonAPICall]
})
export class LeaveTechPortalComponent implements OnInit, OnDestroy {
  Url;
  data: any;
title = '';
  constructor(private domSanitizer : DomSanitizer,private route: ActivatedRoute) {
 
  }
  ngOnInit() {
         document.getElementById('leave').className+=" router-link-active";
         document.body.className = ' leave-portal absenceleave';
         this.Url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://qa-broadspire.cs65.force.com/eep/cveep__Login');
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        document.body.className = 'ios onlyleavedisa'; 
      }
       }
   ngOnDestroy(){
       document.getElementById("leave").classList.remove("router-link-active");
       document.body.className = '';
       document.body.className = ''; 
   }
}

