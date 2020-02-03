import { Component, OnInit } from "@angular/core";
import { BikeService } from 'src/app/services/bike.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector:'home-page', 
    templateUrl:'./home.component.html'
})

export class HomeComponent implements OnInit{

    models: string[] = [
        "model 1", 
        "model 2", 
        "model 3",
    ];
    bikeForm: FormGroup; 
    validMessage: string = "";
    constructor(private bikeService: BikeService){

    }

    ngOnInit(){

        this.bikeForm = new FormGroup({
            name: new FormControl('', Validators.required), 
            email: new FormControl('', Validators.required), 
            phone: new FormControl('', Validators.required), 
            model: new FormControl('', Validators.required), 
            serialNumber: new FormControl('', Validators.required), 
            purchasePrice: new FormControl('', Validators.required), 
            purchaseDate: new FormControl('', Validators.required), 
            contact: new FormControl(), 
        })
    }
}