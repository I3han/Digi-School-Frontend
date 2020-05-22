import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './student-chatbox/first-page.component';
import {SecondPageComponent} from './event-organizer/second-page.component';
import {StudentRegistrationComponent} from './student-registration/student-registration.component';
import {CoursesComponent} from './courses/courses.component';
import {PastPapersComponent} from './past-papers/past-papers.component';
import {CompetitionsComponent} from './competitions/competitions.component';


const routes: Routes = [
  { path: '' , component: StudentRegistrationComponent},
  { path: 'student-chatBox' , component: FirstPageComponent},
  { path: 'event-organiser' , component: SecondPageComponent},
  { path: 'courses' , component: CoursesComponent},
  { path: 'past-papers' , component: PastPapersComponent},
  { path: 'competition' , component: CompetitionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
