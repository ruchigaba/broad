import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  // styleUrls: ['./topnav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopnavComponent implements OnInit {
title = '';
parents;
data: any;
  constructor(private _router: Router,private _location: Location, private route: ActivatedRoute) {
  var root = document.getElementsByTagName('html')[0];
}

  ngOnInit() {
    window.scrollTo(0, 0);
    this._router.events.subscribe(event =>{
      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          this.data = currentRoute.snapshot.data;

          //add title to header
          this.title = this.data.title;
          this.parents =this.data.parent;
          // console.log(this.data);
          console.log("parent"+this.parents);

    })


  }
backToParents(){
  let sessionExp=sessionStorage.getItem("token");
  console.log("Hello :"+sessionExp);
  if(this.parents !=='' && this.parents !== undefined && sessionExp!==""){
    //alert("sessionExp");
    this._router.navigate(['dashboard/'+this.parents]);
  }
  else{
    this._router.navigate([this.parents]);
  }

}  }
