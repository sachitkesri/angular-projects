import { Component, OnInit, Input, Output } from "@angular/core";
import { AIRPORTS } from './shared/Airports';
import { Airport } from "./Airport";
import { AirportSuggestionService } from './airport-suggestions.services';
import { EventEmitter } from '@angular/core';

@Component({
    selector: "airport-suggestions",
    templateUrl: "./airport-suggestions.component.html",
    styleUrls: []
})
export class AirportSuggestionsComponent implements OnInit{

    sourceAirports: Airport[];
    destinationAirports: Airport[];
    @Input() public sourceAirportText: string;
    @Output() selectedAirport = new EventEmitter();

    constructor(private airportSuggestionService: AirportSuggestionService){}
   
    getAirports(){
        this.sourceAirports = this.airportSuggestionService.getAirports('');
    }
    ngOnInit(){
        this.getAirports();
    }
    ngOnChanges(){
        this.sourceAirports = this.airportSuggestionService.getAirports(this.sourceAirportText);
    }

    setSelectedAirport(airport: Airport){
        console.log("Click " + airport.n);
        this.selectedAirport.emit(airport);
    }
}