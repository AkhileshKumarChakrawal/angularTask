import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentEditComponent} from "./student-edit/student-edit.component";
import {StudentDetailsComponent} from "./student-details/student-details.component";
import {StudentRegistrationComponent} from "./student-registration/student-registration.component";
import {LoginPageComponent} from "./login-page/login-page.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  /* { path: 'list', component: StudentListComponent }, */
  { path: 'studentDetails', component:  StudentDetailsComponent},
  { path: 'edit/:id/:name', component: StudentEditComponent},
  {
    path : 'register' , component : StudentRegistrationComponent
  },
  {
    path : 'loginForm' , component : LoginPageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
