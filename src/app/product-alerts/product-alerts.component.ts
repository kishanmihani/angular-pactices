import { Component,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import ApexCharts from 'apexcharts';
@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent implements AfterViewInit {
  // @ViewChild('chartContainer') chartContainer: ElementRef;

  // chart: ApexCharts;

  constructor() { }

  ngAfterViewInit() {
    // Initialize the chart
    this.initChart();
  }
  initChart() {
    // const container = this.chartContainer.nativeElement;
    // const containerWidth = container.offsetWidth;
    // const containerHeight = container.offsetHeight;
  let options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  }  
}
