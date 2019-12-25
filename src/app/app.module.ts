import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search-component/flight-search.component';
import { AirportSuggestionService } from './flight-search-component/airport-suggestions/airport-suggestions.services';
import { AirportSuggestionsComponent } from './flight-search-component/airport-suggestions/airport-suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent, 
    AirportSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    AirportSuggestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
