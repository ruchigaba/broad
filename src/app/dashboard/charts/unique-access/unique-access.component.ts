


  // templateUrl: './unique-access.component.html',
  // styleUrls: ['./unique-access.component.scss']



import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { SAMPLE_DATA } from '../../../shared/data';
import {Stocks_Data } from '../../../shared/data';
@Component({
    selector: 'app-unique-access',
  //   template: `
  //     <h1>{{title}}</h1>
  //     <h2>{{subtitle}}</h2>
  //     <svg width="960" height="500"></svg>
  // `
  templateUrl: './unique-access.component.html',
})
export class UniqueAccessComponent implements OnInit {
 arr1: any[] = [];
  arr2:any[]=[];
   arr3:any[]=[];
    arr4:any[]=[];
     arr5:any[]=[];
     arr6:any[]=[];
     arr7:any[]=[];
      total:any[]=[];
      arraynew:"";
      dataTable=false;

      finalarr = []
  title: string = '';
    private width: number;
    private height: number;

    private svg: any;     // TODO replace all `any` by the right type
    private radius: number;
    
    private arc: any;
    private pie: any;
    private color: any;
      
    private g: any;

    constructor() {}

    ngOnInit() {
        this.initSvg();
        this.drawChart(SAMPLE_DATA);
        this.donutchartClick();
    }

    private initSvg() {
        this.svg = d3.select('svg');

        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.radius = Math.min(this.width, this.height) / 2;

        this.color = d3Scale.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(this.radius - 70);
        
        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => d.population);
        
        this.svg = d3.select("svg")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    }

    private drawChart(data: any[]) {
        let g = this.svg.selectAll(".arc")
            .data(this.pie(data))
            .enter().append("g")
            .attr("class", "arc");

        // g.append("path")
        //     .attr("d", this.arc)
        //     .style("fill", d => this.color(d.data.age));
        g.append("path").attr("d", this.arc)
    .style('cursor','pointer')
                    .style("fill", (d: any) => this.color(d.data.age) ).on('click',(d)=>{
                      console.log("H");
                   
                       this.dataTable = true;
                       this.finalarr = []

                       if( d.data.age =="1-20"){
                       this.finalarr = this.arr4
                       document.body.className = 'twenty';
                       }
                       else if(d.data.age =="61-100"){
                         this.finalarr = this.arr3
                       document.body.className = 'hundred';
                       }
                       else if(d.data.age =="21-60"){
                         this.finalarr = this.arr2
                         document.body.className = 'sixty';
                       }
                       else if(d.data.age ==">100"){
                         this.finalarr = this.arr1
                            document.body.className = 'morehundred';
                       }
                       
                         
                       

                     
                     
                    });;
            
        g.append("text")
            .attr("transform", d => "translate(" + this.arc.centroid(d) + ")")
            .attr("dy", ".35em")
            .text(d => d.data.age);
    }
       ngOnDestroy(){
       document.body.className = '';
    }
  private donutchartClick(){
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

 
 this.total = Stocks_Data;

for(var i=0;i<Stocks_Data.length;i++){
  // console.log(Stocks[i]['value'],Stocks[i]['client_id'])
 data = parseInt(Stocks_Data[i].count_id)
if(data >100){
this.arr1.push(Stocks_Data[i])
//console.log(this.arr1)
}
else if(data >=61 && data <=100){
this.arr2.push(Stocks_Data[i])
//console.log(this.arr2)
}
else if(data >=21 && data <= 60 ){
this.arr3.push(Stocks_Data[i])
}
else if(data  >=1 && data <= 20){
this.arr4.push(Stocks_Data[i])

}

}

for(var j=0;j<this.arr1.length;j++){
data2 = parseInt(this.arr1[j].count_id)
value1= value1 +data2;
console.log(value1)
}
for(var j=0;j<this.arr2.length;j++){
data3 = parseInt(this.arr2[j].count_id)
value2= value2 +data3;
console.log(value2)
}
for(var j=0;j<this.arr3.length;j++){
data4 = parseInt(this.arr3[j].count_id)
value3= value3 +data4;
//console.log(value3)
}
for(var j=0;j<this.arr4.length;j++){
data5 = parseInt(this.arr4[j].count_id)
value4= value4 +data5;
//console.log(value4)
}




// console.log(this.arr1)
// console.log(this.arr2)
// console.log(this.arr3)
// console.log(this.arr4)
// console.log(this.arr5)

sessionStorage.setItem("array",JSON.stringify(value1));
console.log(sessionStorage.getItem("array"));
sessionStorage.setItem("array1",JSON.stringify(value2));
sessionStorage.setItem("array2",JSON.stringify(value3));
sessionStorage.setItem("array3",JSON.stringify(value4));


    }

}

