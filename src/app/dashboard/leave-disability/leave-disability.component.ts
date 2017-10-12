import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-leave-disability',
  templateUrl: './leave-disability.component.html',
   providers: [CommonAPICall]
  //styleUrls: ['./leave-disability.component.scss']
})
export class LeaveDisabilityComponent implements OnInit, OnDestroy {
  constructor(private _commonApiCall: CommonAPICall,private router: Router) { 
    
  }
 ngOnInit() {
 document.body.className = 'leaave-disablity';
     // this.Url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://qa-broadspire.cs65.force.com/eep/cveep__Login');
  }
  ngOnDestroy(){
    document.body.className = '';

  }


//     if (sessionStorage.getItem('Id') == 'leavedisability@gmail.com')  {
//     document.getElementById("toshow").style.display = 'none';
//       document.getElementById("titleBar").style.display = 'block';
//   }
//    else{
 
//   //document.getElementById("toshow").style.display = 'block';
 
 
//     //document.getElementById("titleBar").style.display = 'none';
//  }
 





gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToLogin() {
    this.router.navigate(['']);
  }
  }
