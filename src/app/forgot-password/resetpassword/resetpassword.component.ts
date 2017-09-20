import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { CommonFunction } from '../../shared/commonFunction'; 

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
 // styleUrls: ['./resetpassword.component.scss']
 providers:[CommonAPICall],
    encapsulation: ViewEncapsulation.None,
})
export class ResetpasswordComponent implements OnInit {
	type= "password";
  show=false;
  commnFun = new CommonFunction();

  constructor(private _commonApiCall: CommonAPICall, private _route: Router) { 
  	window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

//-------------------------------Reset Forgot button method start------------------------------
    resetForgotPassword(newPassword, reNewPassword) {
        if (newPassword == '' || newPassword == undefined) {
            this.commnFun.alertPopup("Please Enter New Password","Reset Password");
        }
        else if(this._commonApiCall.checkPwd(newPassword) != ""){
          this.commnFun.alertPopup(this._commonApiCall.checkPwd(newPassword),"Reset Password");
        }
        else if (reNewPassword == '' || reNewPassword == undefined) {
            this.commnFun.alertPopup("Please Reenter Password","Reset Password");
        }
        else if (newPassword !== reNewPassword) {
            this.commnFun.alertPopup("Passwords must be same","Reset Password");
        }
        else {
            var userName = sessionStorage.getItem('userName');
            var data =
                {
                    "userName": userName,
                    "newPassword": reNewPassword
                }
            this._commonApiCall.putService("users/passwords/noauth", "", "Application/json", data)
                .subscribe(res => {
                    this.commnFun.alertPopup(res.result,"Success");
                    this._route.navigate(['']);
                },
                error => {
                    this._commonApiCall.handleError(error,"Reset Password");
                })
        }
    }
    //-------------------------------Reset Forgot button method end----------------------------------
//-------------------------------Reset Forgot cancel button method start----------------------------------

resetForgotCancel(){
  this._route.navigate(['./forgotPass']);
}
//-------------------------------Reset Forgot cancel button method end----------------------------------

}
