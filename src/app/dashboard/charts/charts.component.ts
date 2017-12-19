


//  templateUrl: './charts.component.html',
//  styleUrls: ['./charts.component.scss']


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { style } from '@angular/animations';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { Total_user } from '../../shared/total_user';
import { Stats } from '../../shared/total_user';

// export const CountTypes: any[]=[
// {type: "Assigned", count: 6000},
// {type: "Active", count: 6500},
// {type: "inactive", count: 8000},
// ];

@Component({
  selector: 'app-charts',
  // template: `
  //   <h1>{{title}}</h1>
  //   <h1>{{subtitle}}</h1>
  //   <svg width="900" height="500"></svg>
    
  // `,

  templateUrl: './charts.component.html', 
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  title: string = '';
  subtitle: string = '';

  @ViewChild("containerPieChart") element: ElementRef;
  // @ViewChild("containerPieChart2") element2: ElementRef;
  private host;
  private htmlElement: HTMLElement;
  private margin = { top: 50, right: 50, bottom: 50, left: 50 };
  private width: number;
  private height: number;
  private radius: number;


  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;

  private widthbar: number;
  private heightbar: number;
  private marginbar = { top: 20, right: 20, bottom: 30, left: 40 };
  //private formatTime = d3.timeFormat("%d-%b-%y %I.%M.%S %p");
  //private var parseTime = d3.timeParse("%d-%b-%y %I.%M.%S.%L %p");

  private x: any;
  private y: any;
  private chartDiv: any;
  index = 0;

  private g: any;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  ngOnInit() {
     this.initSvg();
     this.drawPie();
    //this.drawAxis();
   // this.drawBars();

     // this.initSvgbar();
    // this.initAxisbar();
     //this.drawAxisbar();
     //this.drawBarsbar();
  }

  private initSvg() {
    // d3.select("svg > *").remove()
    this.color = d3Scale.scaleOrdinal()
                        .range(["#40bf94", "#3f5f78", "#ef666d", "#caddd7", "rgb(220, 196, 146)", "#d0743c", "#ff8c00"]);
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


  // private initAxis() {
  //   this.x = d3Scale.scaleTime().range([0, this.width]);
  //   this.y = d3Scale.scaleLinear().range([this.height, 0]);
  //   this.x.domain(d3Array.extent(Total_user, (d) => d.Users ));
  //   this.y.domain(d3Array.extent(Total_user, (d) => d.RegisteredDate ));
  // }

   private drawPie() { 
    let g = this.svg.selectAll(".arc") 
                    .data(this.pie(Stats))
                    .enter().append("g") 
                    .attr("class", "arc"); 
 g.append("path").attr("d", this.arc) 
    .style('cursor','pointer') 
                    .style("fill", (d: any) => this.color(d.data.age) ).on('click',(d)=>{ 
                      console.log("H"); 
         }); 
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")") 
                    .attr("dy", ".35em") 
                    .text((d: any) => d.data.age); 
  } 
 
// private initSvgbar() {

//     var cd = document.getElementById('barChartDiv3');
//     let h = cd.offsetHeight;
//     let w = cd.offsetWidth;
//     this.chartDiv = d3.select("#barChartDiv3");
//     console.log(h + "," + w);
//     this.svg = this.chartDiv.append('svg').attr('width', w).attr('height', h);
//     this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
//     this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
//     this.g = this.svg.append("g")
//       .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
//     //  alert(this.width+","+this.height);
//   }


// private initAxisbar() {

//     this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
//     this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
//     //this.x.domain(this.Total_user[this.index].map((d) => d.area));
//      console.error(d3Array.max(this.Total_user[this.index], (d: any) => d.adjuster));
//     //this.y.domain([0, d3Array.max(this.Total_user[this.index], (d: any) => d.adjuster * 1.1)]);
//   }

  // private drawAxis() {

  //   this.svg.append("g")
  //         .attr("class", "axis axis--x")
  //         .attr("transform", "translate(0," + this.height + ")")
  //         .call(d3Axis.axisBottom(this.x));

  //   this.svg.append("g")
  //         .attr("class", "axis axis--y")
  //         .call(d3Axis.axisLeft(this.y))
  //         .append("text")
  //         .attr("class", "axis-title")
  //         .attr("transform", "rotate(-90)")
  //         .attr("y", 6)
  //         .attr("dy", ".71em")
  //         .style("text-anchor", "end")
  //         .text("Price ($)");
  // }

  // private drawLine() {
  //  // this.line = d3Shape.line()
  //                      //.x( (d: any) => this.x(d.date) )
  //                     // .y( (d: any) => this.y(d.value) );

  //   this.svg.append("path")
  //           .datum(Total_user)
  //           .attr("class", "line")
  //           //.attr("d", this.line);
  // }

}
