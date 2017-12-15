


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
      total:any[]=[];
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
                        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
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

                    g.append("path")
.attr("d", this.arc)
// .style("fill", d => this.color(d.data.applicants))

.style("cursor", "pointer")
    g.append("path").attr("d", this.arc)
                    .style("fill", (d: any) => this.color(d.data.age) );
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
                    .attr("dy", ".35em")
                    .text((d: any) => d.data.age);
  }
private piechartClick(){
 var data
 var data2
 var value =0
 
 this.total = Stocks;

for(var i=0;i<Stocks.length;i++){
  // console.log(Stocks[i]['value'],Stocks[i]['client_id'])
    data = parseInt(Stocks[i]['value'])
if(data >=3000){
this.arr1.push(Stocks[i])
console.log(this.arr1)
}
else if(data >=1501 && data < 3000){
this.arr2.push(Stocks[i])
}
else if(data >=501 && data <= 1500 ){
this.arr3.push(Stocks[i])
}
else if(data  >=51 && data <= 500){
this.arr4.push(Stocks[i])
}
else if (data <51) {
this.arr5.push(Stocks[i])
}
}

for(var j=0;j<Stocks.length;j++){
data2 = parseInt(this.arr1[j]['value'])
//this.arr6[j]=this.arr1[j]+this.arr6[j];
//console.log(this.arr1[j]['value'])
value= value +data2;

//sessionStorage.setItem("array",this.arr6[j]);
//console.log(sessionStorage.getItem("array"));
}
 console.log(value)


}
}
