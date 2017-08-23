import { Router, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { ValidateregistrationComponent } from './forgot-password/validateregistration/validateregistration.component'; 
import { ClaimInfoMessageComponent } from './dashboard/contact-adjuster/claimInfoMessage.component';
import { EmailSupervisorComponent } from './dashboard/contact-adjuster/EmailSupervisor.component';

import {RegistrationTutorialComponent } from './registration-tutorial/registration-tutorial.component';
import { ForgothelpComponent } from './forgot-password/forgothelp/forgothelp.component'; 




 //import { HealthTicketComponent } from './dashboard/health_ticket/healthTicket.component'; 
// import { ReturnToWorkComponent } from './dashboard/leave-claim/return-to-work.component';
// import { DisabilityComponent } from './dashboard/disability-claim/disability/disability.component';





export const routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'claims', component: ClaimsComponent, data: { title: 'Claims' } },
      { path: 'claim-paymentdetailspage', component: ClaimPaymentdetailsComponent, data: { title: 'Claims', parent: 'claims' } },
      { path: 'claim-info', component: ClaimInfoComponent, data: { title: 'Claims', parent: 'claims' } },
      { path: 'faqs', component: FaqComponent, data: { title: 'FAQ' } },
      { path: 'settings', component: SettingsComponent, data: { title: 'Settings', parent: ''  } },
       { path: 'healthTicket', component: HealtTicketComponent, data: { title: 'Health Ticket'} },
      { path: 'securityinfo', component: SecurityAnswerComponent, data: { title: 'Security Info',parent:'settings' } },
      { path: 'change-email', component: ChangeIdComponent, data: { title: 'Change Email Address',parent:'settings' } },
      { path: 'change-password', component: ChangePassComponent, data: { title: 'Password',parent:'settings' } },
      { path: 'contact-adjuster', component: ContactAdjusterComponent, data: { title: 'Contact'} },
      { path:'provider', component:ProviderComponent , data: {title:'Providers'} },
      { path: 'physiciansmap', component: NearbyphysiciansMapComponent, data: { title: 'Providers',parent:'provider' } },
      { path: 'social-media', component: SocialMediaComponent, data: { title: 'Social Media' } },
      //{ path: 'leaveclaim-addedittime', component: AddEditTime, data: { title: 'Add/Edit Time',parents:'leaveclaim-details' } },
     // { path: 'cancel-time', component: CancelTimeComponent, data: { title: 'Cancel Time',parents:'leaveclaim-details' } },
      { path: 'aboutApp', component: AboutAppComponent, data: { title: 'Info',parent:'settings' } },
      { path: 'tutorial', component: TutorialComponent, data: { title: 'Tutorial' } },
      { path: 'ClaimInfoMessage', component: ClaimInfoMessageComponent, data: { title: 'Message',parent:'contact-adjuster' } },
      //{ path: 'return-to-work', component: ReturnToWorkComponent, data: { title: 'Return to work',parents:'leaveclaim-details' } },
      //{ path: 'disability', component: DisabilityComponent, data: { title: 'Disability Claims Details',parents:'disabilityclaim' } },
       { path: 'EmailSupervisor', component:  EmailSupervisorComponent, data: { title: 'Message',parents:'contact-adjuster' } },
    ]
  },
  { path: 'eula', component: EulaComponent, data: { title: 'EULA'} },
  { path: 'createUser', component: RegistrationComponent, data: { title: 'Registration', parent:'eula' } },
  { path: 'help', component: HelpComponent, data: { title: 'Help', parent: 'createUser' } },
  { path: 'forgotPass', component: ForgotPasswordComponent, data: { title: 'Validate Security Answer'} },
  { path: 'validate', component: ValidateregistrationComponent, data: { title: 'Validate Registration', parent: 'forgotPass' } },
  { path : 'Registration' , component:RegistrationTutorialComponent , data: {title: 'Registration Tutorial', parent: ''} },
  { path: 'forgotHelp', component: ForgothelpComponent, data: { title: 'Help', parent: 'validate' } }

];

export const NavigatableComponents = [
  LoginComponent, DashboardComponent, EulaComponent, FaqComponent,
  SettingsComponent, SecurityAnswerComponent, ChangeIdComponent, ChangePassComponent,
   AboutAppComponent, ClaimsComponent, HealtTicketComponent,
   ProviderComponent, SocialMediaComponent, TutorialComponent, ClaimPaymentdetailsComponent, 
   ClaimInfoComponent, ContactAdjusterComponent, EmailSupervisorComponent, NearbyphysiciansMapComponent,
   TruncatePipe,RegistrationComponent,HelpComponent, ForgotPasswordComponent, ValidateregistrationComponent
   ,ClaimInfoMessageComponent,RegistrationComponent, ForgothelpComponent
  // HealthTicketComponent 

];
