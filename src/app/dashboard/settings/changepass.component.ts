import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';
import { CommonFunction } from '../../shared/commonFunction';

@Component({
    selector: 'changepass',
    templateUrl: './changepass.component.html',
    // styleUrls:['./changepass.component.scss'],
    providers:[CommonAPICall],
    encapsulation: ViewEncapsulation.None,
  })

export class ChangePassComponent {

  constructor(private _routes : Router,private _commonApiCall: CommonAPICall)
   {
     window.scrollTo(0, 0);
   }
  type="password";
  show=false;
  commnFun = new CommonFunction();
ngOnInit(){
		 document.body.className = 'changepass';
	}
    ngOnDestroy(){
    document.body.className = '';
    }
//function to hide/show password

  toggleShow()
  {

    this.show = !this.show;
      if (this.show)
      {
          this.type = "text";
      }
      else
      {
          this.type = "password";
      }
  }

//function to route to settings page
  gotosettings(){
    this._routes.navigate(['./dashboard/settings']);
  }
 //function for change password validations
 resetUserPassword(oldPassword: string, newPassword: string, renewPassword: string){
   console.log(oldPassword);
   if(oldPassword == undefined || oldPassword == ''){
     //alert("enter old password");
     this.commnFun.alertPopup("Enter old password.", "Password");
     console.log(oldPassword);
   }
     else if (newPassword == undefined || newPassword == ''){
       //alert("Enter new Password");
       this.commnFun.alertPopup("Please Enter new Password.", "Password");
     }
       else if (this._commonApiCall.validatePassword(newPassword) !== undefined){

         //alert(this._commonApiCall.validatePassword(newPassword));
         this.commnFun.alertPopup(this._commonApiCall.validatePassword(newPassword), "Password");
       }
         else if(renewPassword == undefined || renewPassword == ''){
           //alert("Please Re-enter password");
           this.commnFun.alertPopup("Please Re-enter password.", "Password");
         }
           else{
               if(oldPassword.trim() == newPassword.trim()){
                 //alert("Old and New password cannot be same");
                 this.commnFun.alertPopup("Old and New password cannot be same.", "Password");
               }
                 else if(newPassword.trim() !=renewPassword.trim()){
                   //alert("Newpassword and re-entered password must be same");
                   this.commnFun.alertPopup("New password and Re-entered password must be same.", "Password");
                 }
                   else{
                     //alert("Password is Changed Successfully");
                     this.commnFun.alertPopup("Password is Changed Successfully.", "Password");  
                   }

           }
 }
}
