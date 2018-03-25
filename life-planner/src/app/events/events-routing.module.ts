import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from '../events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AuthGuard } from '../core/auth.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';

export const routes: Routes = [
  { path: '', component: EventsComponent ,canActivate: [AuthGuard] },
  { path: 'add', component: AddEventComponent, canActivate: [AuthGuard] },
  { path: ':eid', component: EventDetailComponent, canActivate: [AuthGuard] },

  { path: 'edit/:eid', component: EditEventComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventsRoutingModule {
}
