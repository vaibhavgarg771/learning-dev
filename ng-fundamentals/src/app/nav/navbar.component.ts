import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service';
import { ISession } from './../events/shared/event.model'
import { EventService } from '../events/shared/event.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html', 
    styles: [
        `
            li > a.active {color: #F97924;}
        `
    ] 
})

export class NavBarComponent{
    searchTerm: string = ""; 
    foundSessions: ISession[] = [];

    constructor(public auth: AuthService, private eventService: EventService){
        
    }

    searchSessions(searchTerm:string){
        this.eventService.searchSessions(searchTerm).subscribe
        (sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        })
    }
}