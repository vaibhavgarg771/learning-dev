import { Component } from "@angular/core";
import { BikeService } from 'src/app/services/bike.service';

@Component({
    templateUrl:'view-registration.component.html',
})

export class ViewRegistrationComponent{
    constructor(private bikeService: BikeService){

    }
}