import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomReuseStrategy } from './reuse-strategy';
import { RouteReuseStrategy  } from '@angular/router';
//import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { routes, NavigatableComponents } from './app.routing';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonFunction } from './shared/commonFunction';
// import { DynemicUiComponent } from './dashboard/add-new-leave-claim/dynemic-ui';
// import { PieChart1Component } from './dashboard/view-claim/pie-chart1/pie-chart1.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HealtTicketComponent } from './dashboard/healt-ticket/healt-ticket.component';
import { FaqComponent } from './dashboard/faqs/faqs.component';
import { ContactAdjusterComponent } from './dashboard/contact-adjuster/contact-adjuster.component';
import { ProviderComponent } from './dashboard/provider/provider.component';
import { SocialMediaComponent } from './dashboard/social-media/social-media.component';
import { TutorialComponent } from './dashboard/tutorial/tutorial.component';
import { ClaimsComponent } from './dashboard/claims/claims.component';
import { ClaimPaymentdetailsComponent } from './dashboard/claims/claim-paymentdetails/claim-paymentdetails.component';
import { ClaimInfoComponent } from './dashboard/claims/claim-info/claim-info.component';
import { ClaimInfoMessageComponent } from './dashboard/contact-adjuster/claimInfoMessage.component';
import { NearbyphysiciansMapComponent } from './dashboard/provider/nearbyphysicians-map/nearbyphysicians-map.component'; 
import { RegistrationComponent } from './newuser/registration/registration.component';
import { HelpComponent } from './newuser/help/help.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ValidateregistrationComponent } from './forgot-password/validateregistration/validateregistration.component'; 
//import { ClaimInfoMessageComponent } from './dashboard/contact-adjuster/claimInfoMessage.component';
import { EmailSupervisorComponent } from './dashboard/contact-adjuster/EmailSupervisor.component';
//  import { RegistrationtutorialComponent } from './registrationtutorial/registrationtutorial.component';
import { RegistrationTutorialComponent } from './registration-tutorial/registration-tutorial.component'; 
import { ForgothelpComponent } from './forgot-password/forgothelp/forgothelp.component';
import { ResetpasswordComponent } from './forgot-password/resetpassword/resetpassword.component'; 

// -------------------------------------registration tutorial component starts ---------------------------
import { LeaveTechPortalComponent } from './dashboard/leavetech-portal/leaveTechPortal.component';
import { WorkerCompComponent } from './newuser/worker-comp/worker-comp.component';
import { LOBRegistrationComponent } from './dashboard/lob-registration/lob-registration.component';
import { LDRegistrationComponent } from './newuser/l-dregistration/l-dregistration.component';
import { LeaveDisabilityComponent } from './dashboard/leave-disability/leave-disability.component';
import { SecurityQuestionsComponent } from './newuser/security-questions/security-questions.component';
import { FirstTimePasswordComponent } from './login/first-time-password/first-time-password.component';

import { ForgotsComponent } from './forgots/forgots.component';

import { ValidateForgotpassComponent } from './forgot-password/validate-forgotpass/validate-forgotpass.component';

import { HelpInComponent } from './dashboard/help-in/help-in.component';

// -------------------------------------registration tutorial component ends ---------------------------

@NgModule({
  declarations: [
    AppComponent, ...NavigatableComponents, SidebarComponent, TopnavComponent, FooterComponent,
    // , PieChart1Component,
    CommonFunction,
    HealtTicketComponent,
    ContactAdjusterComponent,
    ProviderComponent,
    SocialMediaComponent,
    TutorialComponent,
    ClaimsComponent,
    ClaimPaymentdetailsComponent,
    ClaimInfoComponent,
    RegistrationComponent,
    HelpComponent,
    ForgotPasswordComponent,
    ValidateregistrationComponent, 
    EmailSupervisorComponent,
    //  RegistrationtutorialComponent,
     RegistrationTutorialComponent,
    ForgothelpComponent,
    LeaveTechPortalComponent,
    ResetpasswordComponent,
    WorkerCompComponent,
    LOBRegistrationComponent,
    LDRegistrationComponent,
    LeaveDisabilityComponent,
    SecurityQuestionsComponent,
    FirstTimePasswordComponent,
    ForgotsComponent,
    ValidateForgotpassComponent,
  HelpInComponent 

    // , DynemicUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(routes)
  ],

 providers: [{provide: LocationStrategy,
        useClass: HashLocationStrategy},{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
