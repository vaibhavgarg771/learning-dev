import { Component, OnInit } from "@angular/core";
import { BikeService } from 'src/app/services/bike.service';
import { IBike } from 'src/app/services/bike.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-view-registraion',
    templateUrl:'view-registration.component.html',
})

export class ViewRegistrationComponent implements OnInit{
    
    public bikeReg: IBike;
    constructor(private bikeService: BikeService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.getBikeReg(this.route.snapshot.params.id);
    }

    getBikeReg(id:number){
        this.bikeService.getBike(id).subscribe(
            bike => {
                this.bikeReg = <IBike>bike;
                this.bikeReg.contact = true;
            }, 
            err => console.log(err), 
            () => console.log("bikes Loaded")
            );
    }

}