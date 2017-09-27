//our root app component
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DomSanitizer} from "@angular/platform-browser";
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
  constructor(private domSanitizer : DomSanitizer) {
   // this.name = 'Angular2'
  }
  ngOnInit() {
    
     document.body.className = ' leave-portal';
      this.Url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://qa-broadspire.cs65.force.com/eep/cveep__Login');
  }
  ngOnDestroy(){
    document.body.className = '';

  }
}

// @NgModule({
//   imports: [ BrowserModule ],
//   declarations: [ App ],
//   bootstrap: [ App ]
// })
// export class AppModule {}