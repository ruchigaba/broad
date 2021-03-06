import { Component } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import { CommonFunction } from '../../shared/commonFunction';


@Component({
    selector: 'changeid',
    templateUrl: './changeid.component.html',
    // styleUrls: ['./changeid.component.scss'],
    encapsulation: ViewEncapsulation.None,
  })

//class to change user id

export class ChangeIdComponent {
  commnFun = new CommonFunction();

reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 constructor(private _routes : Router)
  {window.scrollTo(0, 0);}
ngOnInit(){
		 document.body.className = 'changeid';
     document.getElementById("set_id").className+=" router-link-active";
         document.getElementById("leave").classList.remove("router-link-active");
         document.getElementById("worker").classList.remove("router-link-active"); 
          if(sessionStorage.getItem('userName')!="" && sessionStorage.getItem('Id')!="onlyworkerscomp@gmail.com"  && sessionStorage.getItem('Id')!="workerscompExpiredltuser@gmail.com"){
		    document.body.className = 'chngid';
     	}
	}
    ngOnDestroy(){
    document.body.className = '';
    }


//function to call put service to change user id with validations

changeid(username, username1)
{

  if(username==null && username1==null)
    {
     this.commnFun.alertPopup("Please Enter valid email address.", "Change Email Address");
    }
  else
  {
    if(username!=null && this.reg.test(username)==false)
    {
      this.commnFun.alertPopup("Please enter the email in valid format.", "Change Email Address");
    }
    else
    {
      if(username!=null && username1==null)
      {
      this.commnFun.alertPopup("Value in Re-enter Email Address must match with value entered in New Email Address.", "Change Email Address");
      }
      else
      {
        var x = username;
        var y = username1;
        var z = x.localeCompare(y);
        if(z!=0)
        {
       this.commnFun.alertPopup("Value in Re-enter Email Address must match with value entered in New Email Address.", "Change Email Address");
        }
      }
    }
  }

//service to change user id

// this.data = {
//
// "newUserName": this.usrname
//
// }
//
//
//
//   this._cac.putService("url", "this.headertoken", "application/json", this.data)
//      .subscribe(res => {
//     console.log(res);
//   },
//     error => {
//       alert("service failed!");
//   })
//
 }

 gotosettings(){
   this._routes.navigate(['./dashboard/settings']);
 }

}
