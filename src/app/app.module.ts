import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { PopularCurrenciesComponent } from './components/popular-currencies/popular-currencies.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'historical', component: HistoricalComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTitleComponent,
    ExchangeComponent,
    PopularCurrenciesComponent,
    CurrencyCardComponent,
    HomeComponent,
    HistoricalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
