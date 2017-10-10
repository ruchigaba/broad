import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonFunction } from '../../shared/commonFunction';
import { CommonAPICall } from '../../shared/shared.service';
@Component({
  selector: 'app-leave-disability',
  templateUrl: './leave-disability.component.html',
   providers: [CommonAPICall]
  //styleUrls: ['./leave-disability.component.scss']
})
export class LeaveDisabilityComponent implements OnInit {
  constructor(private _commonApiCall: CommonAPICall,private router: Router) { 
    
  }
 ngOnInit() {
//     if (sessionStorage.getItem('Id') == 'leavedisability@gmail.com')  {
//     document.getElementById("toshow").style.display = 'none';
//       document.getElementById("titleBar").style.display = 'block';
//   }
//    else{
 
//   //document.getElementById("toshow").style.display = 'block';
 
 
//     //document.getElementById("titleBar").style.display = 'none';
//  }
 }
gotoHelp() {
    this.router.navigate(['./help']);
  }
  goToLogin() {
    this.router.navigate(['']);
  }
  }
