import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OrganiserDashboardComponent } from './organiser-dashboard/organiser-dashboard.component';
import { AddEventComponent } from './add-event/add-event.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { OrganisersLoginComponent } from './organisers-login/organisers-login.component';
import { OrganisersRegisterComponent } from './organisers-register/organisers-register.component';
import { OrganiserProfileComponent } from './organiser-profile/organiser-profile.component';
import { OrganiserEventListComponent } from './organiser-event-list/organiser-event-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EventListComponent,
    EventDetailsComponent,
    BookingsComponent,
    UserProfileComponent,
    UserDashboardComponent,
    OrganiserDashboardComponent,
    AddEventComponent,
    OrganisersLoginComponent,
    OrganisersRegisterComponent,
    OrganiserProfileComponent,
    OrganiserEventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
