export interface ExchangeRateResponse {
  base: string;
  result: {
    [currency: string]: number;
  };
  updated: string;
  ms: number;
}

export interface HistoricalDataResponse {
  start: string;
  end: string;
  interval: string;
  base: string;
  results: {
    [currency: string]: {
      [date: string]: number;
    };
  };
  ms: number;
}