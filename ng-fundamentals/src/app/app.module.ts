import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jquery.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/events-list.resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component'
import { SessionListComponent } from './events/event-details/session-list.component'
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './events/shared/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import { LocationValidator } from './events/shared/location-validator.directive';
import { EventResolver } from './events/event-resolver.service';

declare var toastr: Toastr; 
declare var jQuery: Object;
// var toastr:Toastr = Window['toastr'];
// var jQuery = Window['$'];

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes), 
    FormsModule, 
    ReactiveFormsModule, 
  ],
    declarations: [
    EventsAppComponent,
    EventsListComponent, 
    EventThumbnailComponent, 
    NavBarComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    Error404Component, 
    CreateSessionComponent, 
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe, 
    SimpleModalComponent, 
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator, 
  ],
  providers: [
    VoterService,
    EventService,
    { 
      provide: TOASTR_TOKEN, useValue: toastr 
    }, 
    {
      provide: JQ_TOKEN, useValue: jQuery
    },
  EventResolver, 
	EventListResolver,
	AuthService,
    {
		provide: 'canDeactivateCreateEvent', 
		useValue: checkDirtyState
	}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { 
	
}

export function checkDirtyState(component: CreateEventComponent){
	if(component.isDirty){
		return window.confirm("You have not saved your progress, do you really wanna cancel ?")
	}
	return true	
}	

