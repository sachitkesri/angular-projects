import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Airport } from './airport-suggestions/Airport';
import { AIRPORTS } from './airport-suggestions/shared/Airports';

@Component({
    selector: "app-flight-search",
    templateUrl: "./flight-search.component.html",
    styleUrls: []
})
export class FlightSearchComponent {
    sourceAirportInputText: string = "";
    selectedAirport: Airport = AIRPORTS[0];
    searchForm = new FormGroup({
        source: new FormControl(''),
        destination: new FormControl(''),
        departureDate: new FormControl(''),
        returnDate: new FormControl('')
    });
    
    searchFlight(){
        console.log("selected airport " + this.selectedAirport.n);
    }

    filterAirportList(){
        this.sourceAirportInputText = this.searchForm.get("source").value;
    }
}