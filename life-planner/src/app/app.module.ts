import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {Location} from '@angular/common';

// Modules and Services
import { AppRoutingModule } from './app-routing.module';

// Authentication Module
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import {EventsModule} from "./events/events.module";
import {RolesModule} from './roles/roles.module';
import { ScheduleComponent } from './schedule/schedule.component';

//calendar
import { FullCalendarModule } from 'ng-fullcalendar';
import { NgFullcalendarComponent } from './ng-fullcalendar/ng-fullcalendar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    NotFoundComponent,
    NavbarComponent,
    ScheduleComponent,
    NgFullcalendarComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    CoreModule,
    SharedModule,
    TasksModule,
    ProjectsModule,
    EventsModule,
    RolesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( public location: Location){}
  goBack(){
    this.location.back();
  }
}
