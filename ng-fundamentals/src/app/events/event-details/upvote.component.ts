import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ISession } from '../shared/event.model';

@Component({
    selector:'upvote', 
    templateUrl:'./upvote.component.html',
    styleUrls: ['./upvote.component.css',],
})

export class UpvoteComponent{

    @Input() count: number; 
    @Input() voted: boolean;
    @Output() vote = new EventEmitter(); 

    // toggleVote(session:ISession){
    //     this.voted = !this.voted;
    // }

    onClick(){
        this.vote.emit({});
    }


}