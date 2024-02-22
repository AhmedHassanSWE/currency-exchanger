import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-currencies',
  templateUrl: './popular-currencies.component.html',
  styleUrls: ['./popular-currencies.component.css']
})
export class PopularCurrenciesComponent {
  popularCurrencyPairs: string[] = ['EUR-USD', 'EUR-GBP', 'USD-JPY', 'AUD-USD', 'GBP-EUR', 'JPY-USD', 'USD-AUD', 'CAD-USD', 'CHF-USD'];

  constructor(private router: Router) {}

  navigateToHistorical(from: string, to: string) {
    this.router.navigate(['/historical'], {
      queryParams: {
        from: from,
        to: to,
        value: '1' // Value set to 1 as per your requirement
      }
    });
  }
}
