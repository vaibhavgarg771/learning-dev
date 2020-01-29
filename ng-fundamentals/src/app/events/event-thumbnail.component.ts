import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail', 
    template: `
        <div> 
            <div [routerLink] = "['/events', event.id]" class = "well hoverwell thumbnail">
                <h3> {{ event?.name | uppercase}} </h3>
                <div> Date: {{ event?. date | date:'shortDate'}} </div>
                <div [ngClass] = "{green: event?.time === '8:00 am',
                 bold: event?.time === '8:00 am', red:event?.time === '10:00 am'}" [ngSwitch] = "event?.time"> Time: {{ event?.time }} 
                    <span *ngSwitchCase = "'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase = "'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                 </div>
                
                <div> Price: {{ event?.price | currency:"EUR"}} </div>
                <div *ngIf = "event?.location" > 
                    <span> Location: {{ event?.location?.address }} </span>
                    <span class = "pad-left">{{ event?.location?.city}} {{event?.location?.country}} </span>
                </div>
                <div *ngIf = "event?.onlineURL"> 
                    <span> onlineURL: {{ event?.onlineURL }} </span>
                </div>
            </div>
        </div>
    `, 
    styles: [
        `
        .green {color: #001100 !important;}
        .red {color:#110000 !important;}
        .bold {font-weight: bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
        `

    ]
})

export class EventThumbnailComponent{
    @Input() event: IEvent[]
}