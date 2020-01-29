import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
    selector: '', 
    templateUrl: './create-event.component.html', 
    styles: [
        `
        em { float:right; color: #E05C65; padding-left:10px;}
        `
    ]
})

export class CreateEventComponent{
    isDirty: boolean = true
    newEvent
    constructor( private eventService: EventService,private router: Router){}
    

    saveEvent(formvalues){
        this.eventService.saveEvent(formvalues)
        this.isDirty = false
        this.router.navigate(['/events'])
        console.log(formvalues)
    }
    cancel(){
        this.router.navigate(['/events'])
    }
}