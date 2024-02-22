import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.css'],
})
export class HistoricalChartComponent implements OnChanges {
  @Input() response: any;
  chartOptions: any;
  highcharts: typeof Highcharts = Highcharts;
  fromCurrency: string = '';
  toCurrency: string = '';
  value: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Response:', this.response); // Log the response
    this.route.queryParams.subscribe((params) => {
      this.fromCurrency = params['from'];
      this.toCurrency = params['to'];
      this.value = Number(params['value']);
    });
    this.generateChart();
  }

  ngOnChanges(changes: any): void {
    if (changes.response && changes.response.currentValue) {
      this.generateChart();
    }
  }

  generateChart() {
    const dates = Object.keys(this.response.results[this.toCurrency]);
    const eurRates = Object.values(
      this.response.results[this.toCurrency]
    ) as number[]; // Explicitly cast to number array

    // Create an array of USD values, always set to 1
    const usdRates = new Array(dates.length).fill(this.value);

    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: `Exchange Rates: ${this.fromCurrency} to ${this.toCurrency}`,
      },
      xAxis: {
        categories: dates,
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          groupPadding: 0.1, 
          maxPointWidth: 50 
        }
      },
      yAxis: {
        title: {
          text: 'Rates',
        },
        max: 2,
      },
      series: [
        {
          name: this.toCurrency,
          data: usdRates,
        },
        {
          name: this.fromCurrency,
          data: eurRates.map((item) => item * this.value),
        },
      ],
    };
  }
}
