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
  templateUrl:'leaveTechPortal.component.html',
  //providers: [CommonAPICall]
})
export class LeaveTechPortalComponent implements OnInit, OnDestroy {
  Url;
  data: any;
title = '';
  constructor(private domSanitizer : DomSanitizer,private route: ActivatedRoute) {
   // this.name = 'Angular2'
  }
  ngOnInit() {
     let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
       this.data = currentRoute.snapshot.data;
        sessionStorage.setItem("parent",this.data.parent);
                    //add title to header
          this.title = this.data.title;
           document.getElementById("leave").className+=" router-link-active";
           document.getElementById("worker").classList.remove("router-link-active");
        //  sessionStorage.setItem("storage_navigation", this.data.title);
        //  alert(sessionStorage.getItem("storage_navigation"))
         document.body.className = ' leave-portal';
      this.Url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://qa-broadspire.cs65.force.com/eep/cveep__Login');
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {

        document.body.className = 'ios'; 
      }
    }
   ngOnDestroy(){
    document.body.className = '';
    document.body.className = ''; 
   }

}

// @NgModule({
//   imports: [ BrowserModule ],
//   declarations: [ App ],
//   bootstrap: [ App ]
// })
// export class AppModule {}