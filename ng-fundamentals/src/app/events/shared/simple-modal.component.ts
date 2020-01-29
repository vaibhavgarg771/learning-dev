import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from 'src/app/common/jquery.service';

@Component({
    selector: 'simple-modal', 
    templateUrl:'./simple-modal.component.html', 
    styles:[`
        .modal-body {height:250px; overflow-y:scroll;}
    `]
})

export class SimpleModalComponent{

    @Input() title:string; 
    @Input() elementId: string; 
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor( @Inject(JQ_TOKEN) private $:any){}

    closeModal(){
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}