import { Router, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomReuseStrategy } from './reuse-strategy';
import { RouteReuseStrategy  } from '@angular/router';
//import { ViewClaimComponent } from './dashboard/view-claim/view-claim.component';
//import { PieChartComponent } from './dashboard/view-claim/pie-chart/pie-chart.component';
import { EulaComponent } from './newuser/eula/eula.component';
import { FaqComponent } from './dashboard/faqs/faqs.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { SecurityAnswerComponent } from './dashboard/settings/securityinfo.component';
import { ChangeIdComponent } from './dashboard/settings/changeid.component';
import { ChangePassComponent } from './dashboard/settings/changepass.component';
import { AboutAppComponent } from './dashboard/settings/aboutapp.component';
import { ClaimsComponent } from './dashboard/claims/claims.component';
import { ContactAdjusterComponent } from './dashboard/contact-adjuster/contact-adjuster.component';
import { HealtTicketComponent } from './dashboard/healt-ticket/healt-ticket.component';
import { ProviderComponent } from './dashboard/provider/provider.component';
import { SocialMediaComponent } from './dashboard/social-media/social-media.component';
import { TutorialComponent } from './dashboard/tutorial/tutorial.component';
import { ClaimPaymentdetailsComponent } from './dashboard/claims/claim-paymentdetails/claim-paymentdetails.component';
import { ClaimInfoComponent } from './dashboard/claims/claim-info/claim-info.component';
//import { ContactAdjusterComponent } from './dashboard/contact-adjuster/ClaimInfoMessage.component';
import { NearbyphysiciansMapComponent } from './dashboard/provider/nearbyphysicians-map/nearbyphysicians-map.component'; 
import { TruncatePipe } from './shared/truncate';
import { RegistrationComponent } from './newuser/registration/registration.component';
import { HelpComponent } from './newuser/help/help.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './forgot-password/resetpassword/resetpassword.component';

import { ValidateregistrationComponent } from './forgot-password/validateregistration/validateregistration.component'; 
import { ValidateForgotpassComponent } from './forgot-password/validate-forgotpass/validate-forgotpass.component'; 
import { ClaimInfoMessageComponent } from './dashboard/contact-adjuster/claimInfoMessage.component';
import { EmailSupervisorComponent } from './dashboard/contact-adjuster/EmailSupervisor.component';

import {RegistrationTutorialComponent } from './registration-tutorial/registration-tutorial.component';
import { ForgothelpComponent } from './forgot-password/forgothelp/forgothelp.component'; 
import { WorkerCompComponent } from './newuser/worker-comp/worker-comp.component';
import { LOBRegistrationComponent } from './dashboard/lob-registration/lob-registration.component';
import { LDRegistrationComponent } from './newuser/l-dregistration/l-dregistration.component';
import { LeaveDisabilityComponent } from './dashboard/leave-disability/leave-disability.component';
import { SecurityQuestionsComponent } from './newuser/security-questions/security-questions.component';
import { ForgotsComponent } from './forgots/forgots.component'; 
import { HelpInComponent } from './dashboard/help-in/help-in.component';
//-------------------------------------registration tutorial component starts ---------------------------
import { LeaveTechPortalComponent } from './dashboard/leavetech-portal/leaveTechPortal.component';
import { FirstTimePasswordComponent } from './login/first-time-password/first-time-password.component';
// -------------------------------------registration tutorial component ends ---------------------------

 //import { HealthTicketComponent } from './dashboard/health_ticket/healthTicket.component'; 
// import { ReturnToWorkComponent } from './dashboard/leave-claim/return-to-work.component';
// import { DisabilityComponent } from './dashboard/disability-claim/disability/disability.component';





export const routes = [
  { path: '', component:  LoginComponent   },
  { path: 'firstTimeLogin', component: FirstTimePasswordComponent },


  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'claims', component: ClaimsComponent, data: { title: 'claims' } },
      { path: 'claim-paymentdetailspage', component: ClaimPaymentdetailsComponent, data: { title: 'claims', parent: 'claims' } },
      { path: 'claim-info', component: ClaimInfoComponent, data: { title: 'claims', parent: 'claims' } },
      { path: 'FAQ', component: FaqComponent, data: { title: 'FAQ' } },
      { path: 'settings', component: SettingsComponent, data: { title: 'settings'  } },
      { path: 'Health Ticket', component: HealtTicketComponent, data: { title: 'Health Ticket'} },
      { path: 'securityinfo', component: SecurityAnswerComponent, data: { title: 'securityinfo',parent:'settings' } },
      { path: 'change-email', component: ChangeIdComponent, data: { title: 'change email address',parent:'settings' } },
      { path: 'change-password', component: ChangePassComponent, data: { title: 'Password',parent:'settings' } },
      { path: 'contact', component: ContactAdjusterComponent, data: { title: 'contact'} },
      { path:'providers', component:ProviderComponent , data: {title:'providers'} },

      { path: 'Providers', component: NearbyphysiciansMapComponent, data: { title:'Providers',parent:'providers' } },

      { path: 'social', component: SocialMediaComponent, data: { title: 'social' } },
      //{ path: 'leaveclaim-addedittime', component: AddEditTime, data: { title: 'Add/Edit Time',parents:'leaveclaim-details' } },
     // { path: 'cancel-time', component: CancelTimeComponent, data: { title: 'Cancel Time',parents:'leaveclaim-details' } },
      { path: 'aboutApp', component: AboutAppComponent, data: { title: 'Info',parent:'settings' } },
      { path: 'tutorial', component: TutorialComponent, data: { title: 'tutorial' } },
      { path: 'leaveTechPortal', component: LeaveTechPortalComponent, data: { title: 'leaveTechPortal' } },
      //{ path: 'return-to-work', component: ReturnToWorkComponent, data: { title: 'Return to work',par,parent:'leaveTechPortal'ents:'leaveclaim-details' } },
      //{ path: 'disability', component: DisabilityComponent, data: { title: 'Disability Claims Details',parents:'disabilityclaim' } 

      { path: 'Message', component: ClaimInfoMessageComponent, data: { title: 'Message',parent:'contact' } },
      { path: 'leaveTechPortal', component: LeaveTechPortalComponent, data: { title: 'leaveTechPortal' } },
      //{ path: 'return-to-work', component: ReturnToWorkComponent, data: { title: 'Return to work',par,parent:'leaveTechPortal'ents:'leaveclaim-details' } },
      //{ path: 'disability', component: DisabilityComponent, data: { title: 'Disability Claims Details',parents:'disabilityclaim' } },
       { path: 'EmailSupervisor', component:  EmailSupervisorComponent, data: { title: 'Message',parents:'contact' } },

       { path: 'leaveregistration', component: LOBRegistrationComponent, data: { title: 'Leave/Disability Registration', parent:'' } },
        { path: 'workercomp', component: LeaveDisabilityComponent, data: { title: 'Registration',  parent:'' } },
         { path: 'help-page', component: HelpInComponent, data: { title: 'Helping',  parent:'' } },  
    ]
  },
  
  { path: 'eula', component: EulaComponent, data: { title: 'EULA'} },
  { path: 'createUser', component: RegistrationComponent, data: { title: 'Registration', parent:'eula' } },
   { path: 'worker-comp', component: WorkerCompComponent, data: { title: 'Registration', parent:'eula' } },
  { path: 'help', component: HelpComponent, data: { title: 'Help', parent: 'createUser' } },
  { path: 'forgotPass', component: ForgotPasswordComponent, data: { title: 'Validate Security Answer'} },
  { path: 'resetPass', component: ResetpasswordComponent, data: { title: 'Reset Password', parent: 'forgotPass'} },
  { path: 'validate', component: ValidateregistrationComponent, data: { title: 'Validate Registration', parent: 'forgotsecurity' } },
  { path : 'Registration' , component:RegistrationTutorialComponent , data: {title: 'Registration Tutorial', parent: ''} },
  { path: 'forgotHelp', component: ForgothelpComponent, data: { title: 'Help', parent: 'validate' } },
  { path: 'lregistration', component: LDRegistrationComponent, data: { title: 'Registration', parent:'eula' } },
  { path: 'securityquestions', component: SecurityQuestionsComponent, data: { title: 'Registration', parent:'createUser' } },
  { path: 'forgotsecurity', component: ForgotsComponent, data: { title: 'Validate Registration',  parent:'forgotPass' } },
  { path: 'validate-forgotpass', component: ValidateForgotpassComponent, data: { title: 'Validate Registration',  parent:'forgotPass' } },
];

export const NavigatableComponents = [
  LoginComponent, DashboardComponent, EulaComponent, FaqComponent,
  SettingsComponent, SecurityAnswerComponent, ChangeIdComponent, ChangePassComponent,
  TruncatePipe,
   AboutAppComponent, ClaimsComponent, HealtTicketComponent,
   ProviderComponent, SocialMediaComponent, TutorialComponent, ClaimPaymentdetailsComponent, 
   ClaimInfoComponent, ContactAdjusterComponent, EmailSupervisorComponent, NearbyphysiciansMapComponent,
   RegistrationComponent,HelpComponent, ForgotPasswordComponent, ValidateregistrationComponent
   ,ClaimInfoMessageComponent,RegistrationComponent, ForgothelpComponent, RegistrationTutorialComponent,LeaveTechPortalComponent
   ,ClaimInfoMessageComponent,RegistrationComponent, ForgothelpComponent, RegistrationTutorialComponent,ResetpasswordComponent,WorkerCompComponent,
   LOBRegistrationComponent,LDRegistrationComponent,LeaveDisabilityComponent,SecurityQuestionsComponent, FirstTimePasswordComponent,ForgotsComponent,
   ValidateForgotpassComponent,HelpInComponent
  // HealthTicketComponent 

];
