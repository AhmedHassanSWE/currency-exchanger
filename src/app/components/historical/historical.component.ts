import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoricalService } from 'src/app/services/historical.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  historicalData: any;
  fromCurrency: string = "";
  toCurrency: string = "";

  constructor(
    private historicalService: HistoricalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.fromCurrency = params['from'];
      this.toCurrency = params['to'];
      this.fetchHistoricalData(); // Call fetchHistoricalData() whenever URL params change
    });
  }

  fetchHistoricalData() {
    const interval = 'P1D';
    this.historicalService.getHistoricalData(this.fromCurrency, this.toCurrency, interval)
      .subscribe(data => {
        this.historicalData = data;
      });
  }
}
