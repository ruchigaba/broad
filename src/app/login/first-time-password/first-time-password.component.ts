import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login.component';
import { CommonAPICall } from '../../shared/shared.service';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
  selector: 'app-first-time-password',
  templateUrl: './first-time-password.component.html',
  styleUrls: ['./first-time-password.component.scss'],
  providers: [CommonAPICall]
})
export class FirstTimePasswordComponent implements OnInit {
	type= "password";
  commnFunc;
	show=false;
    passResetMsg = sessionStorage.getItem('forgetPassFlag');

  constructor(private _route: Router, private _commonApiCall: CommonAPICall) { 
     this.commnFunc = new CommonFunction();
  }

  ngOnInit() {
  }
//-----------------------------------------CHANGE PASSWORD METHOD---------------------------------------
  resetUserPassword(newPassword: string, reNewPassword: string) {
      // if (oldPassword == undefined || oldPassword == '') {
      //
      //     this._commonApiCall.hideLoaderShowPopup("Enter Old Password", "Reset Password");
      // }
      if (newPassword == undefined || newPassword == '') {

          this.commnFunc.alertPopup("Enter New Password", "Reset Password");
      }
      else if(this._commonApiCall.checkPwd(newPassword) != ""){
        this.commnFunc.alertPopup(this._commonApiCall.checkPwd(newPassword),"Reset Password");
      }
      else if (reNewPassword == undefined || reNewPassword == '') {

          this.commnFunc.alertPopup("Enter New Password", "Reset Password");
      }
      else {
          if (newPassword.trim() !== reNewPassword.trim()) {

              this.commnFunc.alertPopup("Passwords must be same.", "Reset Password");
          }
          else {
              var token = sessionStorage.getItem('token');
              var data =
                  {
                      "userName": sessionStorage.getItem('userName'),
                      "oldPassword": sessionStorage.getItem('local_tempPassword'),
                      "newPassword": newPassword
                  }
              this._commonApiCall.putService("users/passwords/firsttime", "Bearer " + token, "application/json", data)
                  .subscribe(res => {

                    this.commnFunc.alertPopup(res.result, "Reset Password");
                  //  this._route.navigate(['']);
                   // var loginObject = new LoginComponent(this._route,this._commonApiCall);
                   // loginObject.loginService(sessionStorage.getItem('userName'),newPassword);

                  },
                error =>{
                  this._commonApiCall.handleError(error, "Reset Password");
                })
          }
      }
}
goToLogin() {
  this._route.navigate(['']);
}

}
