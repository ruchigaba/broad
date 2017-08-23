import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import {Router} from '@angular/router';


@Component({
    selector: 'eula',
    templateUrl: './eula.component.html',
    // styleUrls: ['./eula.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CommonAPICall]
  })
export class EulaComponent implements OnInit{

  constructor(private _cac: CommonAPICall, private router: Router) {

      this._cac.getService("users/agreements", "", "application/json")
         .subscribe(res => {
          var x = res.result.eulaPage;
          document.getElementById("heading").style.display='block';
          document.getElementById("abc").innerHTML=x;
          console.log(x);
  //         // document.body.innerHTML = x;
      },
        error => {
          alert("service failed!");
      })
    }

    ngOnInit() {
      window.scrollTo(0, 0);
      document.getElementById('titleBar').style.paddingLeft="0px";
      this._cac.addClass1("eula");
      console.log(sessionStorage.getItem("token"));
       
    }
    navigatetoreg() {
      this.router.navigate(['./createUser']);
    }
}
