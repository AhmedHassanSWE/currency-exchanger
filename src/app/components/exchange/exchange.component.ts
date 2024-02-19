import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'EUR'; // Set default fromCurrency to 'EUR'
  toCurrency: string = 'USD';   // Set default toCurrency to 'USD'
  exchangeRate: number = 1;
  result: number = 0;
  currencies: string[] = [];

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit(): void {
    this.fetchExchangeRates();
  }

  fetchExchangeRates() {
    this.exchangeService.getExchangeRates().subscribe((data: any) => {
      if (data.success) {
        this.exchangeService.setRates(data.rates);
        this.currencies = Object.keys(data.rates);
        this.updateExchangeRate();
      } else {
        console.error('Failed to fetch exchange rates.');
      }
    });
  }

  updateExchangeRate() {
    const fromRate = this.exchangeService.getRate(this.fromCurrency);
    const toRate = this.exchangeService.getRate(this.toCurrency);
    if (fromRate !== undefined && toRate !== undefined) {
      this.exchangeRate = toRate / fromRate;
      this.convert();
    } else {
      console.error('Currency rates not available.');
    }
  }

  convert() {
    this.result = this.amount * this.exchangeRate;
  }

  onConvert() {
    this.updateExchangeRate();
  }

  onChange() {
    console.log('From Currency:', this.fromCurrency);
    console.log('To Currency:', this.toCurrency);
  }

  swapCurrencies() {
    // Swap the values of fromCurrency and toCurrency
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.updateExchangeRate(); // Update exchange rate after swapping
  }
}
