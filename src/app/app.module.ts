import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { FirstPageComponent } from './student-chatbox/first-page.component';
import { UserComponent } from './user/user.component';
import { SecondPageComponent } from './event-organizer/second-page.component';
import { HeaderComponent } from './header/header.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CoursesComponent } from './courses/courses.component';
import { PastPapersComponent } from './past-papers/past-papers.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { NavBarSmallComponent } from './nav-bar-small/nav-bar-small.component';
import { PastPaperComponent } from './past-paper/past-paper.component';


@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    FirstPageComponent,
    UserComponent,
    SecondPageComponent,
    HeaderComponent,
    StudentRegistrationComponent,
    CoursesComponent,
    PastPapersComponent,
    CompetitionsComponent,
    NavBarSmallComponent,
    PastPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
