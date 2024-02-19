import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { PopularCurrenciesComponent } from './components/popular-currencies/popular-currencies.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTitleComponent,
    ExchangeComponent,
    PopularCurrenciesComponent,
    CurrencyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
