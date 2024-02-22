import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeRateResponse } from 'src/app/interfaces/Interfaces';
import { ExchangeRateService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  currentRoute: string = '/';
  amount: number = 1;
  fromCurrency: string = 'EUR';
  toCurrency: string = 'USD';
  exchangeRate: number = 1;
  result: number = 0;
  popularCurrencies: string[] = [
    'EUR', 'USD', 'GBP', 'JPY', 'AUD', 'EGP',
    'CAD', 'CHF', 'CNY', 'INR', 'SGD', 'HKD',
    'NZD', 'SEK', 'KRW', 'NOK', 'MXN', 'BRL',
    'TRY', 'RUB', 'ZAR', 'DKK', 'AED', 'THB',
    'IDR', 'MYR', 'PLN', 'QAR', 'TWD', 'SAR'
  ];
   

  constructor(
    private exchangeRateService: ExchangeRateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.fromCurrency = params['from'] || 'EUR';
      this.toCurrency = params['to'] || 'USD';
      const paramValue = parseFloat(params['value']);
      if (!isNaN(paramValue)) {
        this.amount = paramValue;
      }
    });
    this.currentRoute = this.router.url;
    this.onConvert(); 
  }

  onConvert() {
    this.exchangeRateService.fetchExchangeRate(this.fromCurrency, this.toCurrency).subscribe((data: ExchangeRateResponse) => {
      if (data && data.result && data.result[this.toCurrency]) {
        this.exchangeRate = data.result[this.toCurrency];
        this.convert();
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            from: this.fromCurrency,
            to: this.toCurrency,
            value: this.amount.toString(),
          },
          queryParamsHandling: 'merge', 
        });
      } else {
        console.error('Failed to fetch exchange rate.');
      }
    });
  }

  convert() {
    this.result = this.amount * this.exchangeRate;
  }

  onChange() {
    console.log('From Currency:', this.fromCurrency);
    console.log('To Currency:', this.toCurrency);
  }

  swapCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.onConvert();
  }

  showHistoricalDetails() {
    this.router.navigate(['/historical'], {
      queryParams: {
        from: this.fromCurrency,
        to: this.toCurrency,
        value: this.amount.toString(),
      },
    });
  }

  goBack() {
    if (this.currentRoute === '/') {
    } else {
      this.router.navigate(['/']);
    }
  }
}
