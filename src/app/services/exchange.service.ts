import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRateResponse } from 'src/app/interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  fetchExchangeRate(fromCurrency: string, toCurrency: string): Observable<ExchangeRateResponse> {
    const apiUrl = `https://api.fastforex.io/fetch-one?api_key=67993785f2-c9f402e1dc-s96j9e&from=${fromCurrency}&to=${toCurrency}`;
    return this.http.get<ExchangeRateResponse>(apiUrl);
  }
}
