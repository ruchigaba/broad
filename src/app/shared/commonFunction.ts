import { Component, OnInit } from '@angular/core';

@Component({
	selector:'common-function',
	template:``
})
 export class CommonFunction implements OnInit {
 	
 	constructor() {}

 	ngOnInit(){}

 	alertPopup(message, title){
 		document.getElementById("fade-me").style.display="block";
 		document.getElementById("alertPop").style.display="block";
 		document.getElementById("title").innerHTML=title;
 		document.getElementById("modalLabel").innerHTML=message;
 		document.getElementById("closeMe").addEventListener('click',function(){
 			document.getElementById("alertPop").style.display="none";
 			document.getElementById("fade-me").style.display="none";
 		});
 	}
 	
 }
