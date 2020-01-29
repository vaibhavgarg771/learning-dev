import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/events-list.resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { UserModule } from './user/user.module';
import { EventResolver } from './events/event-resolver.service';

export function getUserModule(){ return UserModule; }
export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}}, 
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: '404', component: Error404Component},
    { path: 'user', loadChildren: getUserModule},
    { path: 'events/session/new', component: CreateSessionComponent}
]