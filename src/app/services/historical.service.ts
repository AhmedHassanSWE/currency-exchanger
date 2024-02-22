import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoricalDataResponse } from '../interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {
  private apiUrl = 'https://api.fastforex.io/time-series';
  private apiKey = '67993785f2-c9f402e1dc-s96j9e';

  constructor(private http: HttpClient) { }

  getHistoricalData(fromCurrency: string, toCurrency: string, interval: string): Observable<HistoricalDataResponse> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&from=${fromCurrency}&to=${toCurrency}&interval=${interval}`;
    return this.http.get<HistoricalDataResponse>(url);
  }
}