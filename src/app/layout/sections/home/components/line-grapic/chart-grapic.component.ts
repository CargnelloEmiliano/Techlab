import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis,  } from 'ng-apexcharts';
import { series } from './data';

// * Interfaces
import { ILineGrapic } from 'src/app/core/models/line-grapic.interface';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle ;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};
@Component({
  selector: 'app-chart-grapic',
  templateUrl: './chart-grapic.component.html',
  styleUrls: ['./chart-grapic.component.scss']
})
export class ChartGrapicComponent {
  public chartOptions: Partial<ChartOptions>;
  @Input() public series: ILineGrapic= {
    monthDataSeries1: {
      prices: [],
      dates: [],
    }
  }

  constructor(){
    this.chartOptions = {
      series: [
        {
          name: "Dinero",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 150,
        width: 330,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }
}
