import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private apiUrl = 'http://data.fixer.io/api/latest?access_key=100fa78ed2620312cda38a459eae2291';
  private rates: any = {};

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  setRates(rates: any) {
    this.rates = rates;
  }

  getRate(currency: string): number | undefined {
    return this.rates[currency];
  }
}
