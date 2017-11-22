import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
    selector: 'eula',
    templateUrl: './eula.component.html',
    // styleUrls: ['./eula.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CommonAPICall]
  })
export class EulaComponent implements OnInit{
  commnFunc;

  constructor(private _cac: CommonAPICall, private router: Router) {
    this.commnFunc = new CommonFunction();

      this._cac.getService("users/agreements", "", "application/json")
         .subscribe(res => {
          var x = res.result.eulaPage;
          document.getElementById("heading").style.display='block';
          document.getElementById("abc").innerHTML=x;
          console.log(x);
          
  //         // document.body.innerHTML = x;
      },
      
        error => {
          this._cac.handleError(error, "EULA");
      })
    }

    ngOnInit() {
      window.scrollTo(0, 0);
      document.getElementById('titleBar').style.width="71%";
      this._cac.addClass1("eula");
      console.log(sessionStorage.getItem("token"));
       
    }
    navigatetoreg() {
      alert("123")
      this.router.navigate(['./worker-comp']);
    }
    
}
