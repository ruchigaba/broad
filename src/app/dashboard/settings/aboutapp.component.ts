import { Component, OnInit } from '@angular/core';
import { CommonAPICall } from '../../shared/shared.service';

@Component({
    selector: 'aboutapp',
    templateUrl: './aboutapp.component.html',
    providers: [CommonAPICall]
    // styleUrls: ['./aboutapp.component.scss'],
  })

export class AboutAppComponent implements OnInit {
	daysArr=["deliverFriday","deliverMonday","deliverSaturday","deliverSunday","deliverThursday","deliverTuesday",
	"deliverWednesday"]
	dayArr=[];
	dayObj={};
	days = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];
 	months = ["January", "February", "March",
    "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
	constructor(private _commonApi: CommonAPICall){
		this._commonApi.orderTime('https://salesprodev.curtze.com:86/api/CustomerDetail/4')
		.subscribe(res =>{
			console.log(res);
				this.dayArr.push(res[0].deliverFriday);
				this.dayArr.push(res[0].deliverMonday);
				this.dayArr.push(res[0].deliverSaturday);
				this.dayArr.push(res[0].deliverSunday);
				this.dayArr.push(res[0].deliverThursday);
				this.dayArr.push(res[0].deliverTuesday);
				this.dayArr.push(res[0].deliverWednesday);
			// this.dayArr.push(this.dayObj);

			// this.orderDate('a');
			this.daysVal();
		})
	}

	ngOnInit(){
		 document.body.className = 'aboutapp';
		 
		   document.getElementById("set_id").className+=" router-link-active";
		   document.getElementById("leave").classList.remove("router-link-active");
          document.getElementById("worker").classList.remove("router-link-active");
	}
    ngOnDestroy(){
    document.body.className = '';
    }
	

	orderDate(char:string){
		var today = new Date();
		console.log(today);
		var todayDate='';
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
		    dd = parseInt('0'+dd)
		} 

		if(mm<10) {
		    mm = parseInt('0'+mm)
		} 

		todayDate = (mm + '/' + dd + '/' + yyyy);
		console.log(todayDate);
		if (today[0]=='Wed') {
			// code...
		}
	}

	daysVal(){
		if (!Date.now) {
  Date.now = function() {
    return new Date().getTime();
  }
}
var theDate = Date.now();
var theCDate1 = new Date(theDate);
var startDate;
// let currentDays ='deliver'+this.days[theCDate1.getDay()+1]
// console.log(this.dayArr[0].deliverThursday);
// console.log(this.dayArr[0].currentDays);
for(let i=0;i<this.dayArr.length;i++){
	// console.log(this.dayArr[i]);
	if (this.dayArr[i] !='' || this.dayArr[i] !=null) {
		if ('deliver'+this.days[theCDate1.getDay()+1]==this.daysArr[i]) {
			startDate=theCDate1.getMonth()+1+ '/' +(theCDate1.getDate()+1)+ '/' + theCDate1.getFullYear();
			document.getElementById('date').innerText = 
			theCDate1.getMonth()+1+ '/' +(theCDate1.getDate()+1)+ '/' + theCDate1.getFullYear();
			theDate += 86400000;
		}
	}
	else{
		console.log(this.dayArr[i]);
		var daysNotDelever=[];
		daysNotDelever.push(this.daysArr[i]);
	}
}

document.getElementById('prev').addEventListener("click", function() {
	if (getTheDate(theDate)==startDate) {
		document.getElementById('date').innerText = getTheDate(theDate)
	}
	else{
		theDate -= 86400000;
  		document.getElementById('date').innerText = getTheDate(theDate)
	}
})
document.getElementById('next').addEventListener("click", function() {
	for(let j=0;j<daysNotDelever.length;j++){
		console.log(daysNotDelever);
	}
  theDate += 86400000;
  document.getElementById('date').innerText = getTheDate(theDate)
})
	}


}
function getTheDate(getDate) {
  
  var theCDate = new Date(getDate);
  return  theCDate.getMonth()+1+ '/' +theCDate.getDate() + '/' + theCDate.getFullYear();
}