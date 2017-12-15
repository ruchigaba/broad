


  // templateUrl: './num-user.component.html',
//  styleUrls: ['./num-user.component.scss']



import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { Stats3 } from '../../../shared/data';
import { Stocks } from '../../../shared/data';
@Component({
  selector: 'app-num-user',
  // template: `
     
    
  // ` 
  templateUrl: './num-user.component.html',
  
})
export class NumUserComponent implements OnInit {
  arr1: any[] = [];
  arr2:any[]=[];
   arr3:any[]=[];
    arr4:any[]=[];
     arr5:any[]=[];
     arr6:any[]=[];
     arr7:any[]=[];
      total:any[]=[];
      arraynew:"";
  title: string = '';
  //subtitle: string = 'Pie Chart';

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;

  constructor() {
    this.width = 600 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  ngOnInit() {
    this.initSvg();
    this.drawPie();
    this.piechartClick();
  }

  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
                        .range(["#3f5f78 ", "#40bf94", "#ef666d", "#caddd7", "#cc485b", "#d0743c", "#ff8c00"]);
    this.arc = d3Shape.arc()
                      .outerRadius(this.radius - 10)
                      .innerRadius(0);
    this.labelArc = d3Shape.arc()
                           .outerRadius(this.radius - 40)
                           .innerRadius(this.radius - 40);
    this.pie = d3Shape.pie()
                      .sort(null)
                      .value((d: any) => d.population);
    this.svg = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }

  private drawPie() {
    let g = this.svg.selectAll(".arc")
                    .data(this.pie(Stats3))
                    .enter().append("g")
                    .attr("class", "arc");

//                     g.append("path")
// .attr("d", this.arc)

g.append("path")
.attr("d", this.arc)
//.style("fill", (d: any) => this.color(d.data.population))

// g.append("rect")
//         .attr({"class": "overlay" , "width": width , "height": height})
//         .on({
//           "mouseover": function() { /* do stuff */ },
//           "mouseout":  function() { /* do stuff */ }, 
//           "click":  function() { /* do stuff */ }, 
//         });
 .on('click', (d) => {
  alert("k")
//  for(var i=0;i<Stocks.length;i++){ 
// if(d.data >=3000){
// this.arr1.push(Stocks[i])
// console.log(this.arr1)
// }
// }
// if (d.data.type == "Training") {
// this.index = 1;
// }
// else if (d.data.type == "Assigned") {
// this.index = 2
// }
// else {
// this.index = 0
// }

// this.drawgraph()

})
.style("cursor", "pointer")


// .style("fill", d => this.color(d.data.applicants))

.style("cursor", "pointer")
    g.append("path").attr("d", this.arc)
                    .style("fill", (d: any) => this.color(d.data.age) );
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
                    .attr("dy", ".35em")
                    .text((d: any) => d.data.age);
  }
private piechartClick(){
 var data;
 var data2;
  var data3;
   var data4;
    var data5;
     var data6;
 var value1=0;
 var value2=0;
 var value3=0;
 var value4=0;
 var value5=0;

 
 this.total = Stocks;

for(var i=0;i<Stocks.length;i++){
  // console.log(Stocks[i]['value'],Stocks[i]['client_id'])
 data = parseInt(Stocks[i].value)
if(data >=3000){
this.arr1.push(Stocks[i])
//console.log(this.arr1)
}
else if(data >=1501 && data < 3000){
this.arr2.push(Stocks[i])
//console.log(this.arr2)
}
else if(data >=501 && data <= 1500 ){
this.arr3.push(Stocks[i])
}
else if(data  >=51 && data <= 500){
this.arr4.push(Stocks[i])
}
else if (data <51) {
this.arr5.push(Stocks[i])
//console.log(this.arr5)
}
}

for(var j=0;j<this.arr1.length;j++){
data2 = parseInt(this.arr1[j].value)
value1= value1 +data2;
//console.log(value1)
}
for(var j=0;j<this.arr2.length;j++){
data3 = parseInt(this.arr2[j].value)
value2= value2 +data3;
}
for(var j=0;j<this.arr3.length;j++){
data4 = parseInt(this.arr3[j].value)
value3= value3 +data4;
}
for(var j=0;j<this.arr4.length;j++){
data5 = parseInt(this.arr4[j].value)
value4= value4 +data5;
}
for(var j=0;j<this.arr5.length;j++){
data6 = parseInt(this.arr5[j].value)
value5= value5 +data6;

}
//console.log(value5)
// data3 = parseInt(this.arr2[j].value)
// data4 = parseInt(this.arr3[j].value)
// data5 = parseInt(this.arr4[j].value)
// data6 = parseInt(this.arr5[j].value)

// //console.log(data3)
// //console.log(data2)

// value1= value1 +data2;
// //console.log(value2)
// value2= value2 +data3;
// //console.log(value2)
// value3= value3 +data4;
// value4= value4 +data5;
// value5= value5 +data6;
// //console.log(value5)

// //console.log(value1)
sessionStorage.setItem("array",JSON.stringify(value1));
console.log(sessionStorage.getItem("array"));
sessionStorage.setItem("array1",JSON.stringify(value2));
sessionStorage.setItem("array2",JSON.stringify(value3));
sessionStorage.setItem("array3",JSON.stringify(value4));
sessionStorage.setItem("array4",JSON.stringify(value5));

// sessionStorage.setItem("pagePosition", JSON.stringify(this.getScroll()));
//console.log(sessionStorage.getItem("array4"));

 


}
}
