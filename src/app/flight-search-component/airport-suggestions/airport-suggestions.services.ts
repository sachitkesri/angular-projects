import { Injectable } from '@angular/core';
import { Airport } from "./Airport";
import { AIRPORTS } from "./shared/Airports";

@Injectable({
    providedIn : 'root'
})
export class AirportSuggestionService {

    airports: Airport[] = AIRPORTS;
    tempAirports : Airport[] = [];
    constructor(){}

    getAirports(inputText: string): Airport[]{
        inputText = inputText.toLowerCase();
        this.tempAirports = []
        this.airports.forEach((airport: Airport) => {
            if(airport.n.toLowerCase().indexOf(inputText) !== -1){
                this.tempAirports.push(airport);
            }
        });
        return this.tempAirports;
    }
}