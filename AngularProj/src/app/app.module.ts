import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentViewComponent } from './student-details/student-view/student-view.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StructuralDirDirective } from './customDir/structural-dir.directive';
import { AttributDirDirective } from './customDir/attribut-dir.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentViewComponent } from './parent-view/parent-view.component';
import {DataService2Service} from "./services/data-service2.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentDetailsComponent,
    StudentViewComponent,
    StudentEditComponent,
    StudentRegistrationComponent,
    LoginPageComponent,
    StructuralDirDirective,
    AttributDirDirective,
    ParentComponent,
    ChildComponent,
    ParentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
