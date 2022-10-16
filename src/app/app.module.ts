import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgoComponent } from './ngo/ngo.component';
import { NgoListComponent } from './ngo/ngo-list/ngo-list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AddNgoComponent } from './ngo/add-ngo/add-ngo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';
import { UpdateNgoComponent } from './ngo/update-ngo/update-ngo.component';
import { GetNgoIdComponent } from './ngo/get-ngo-id/get-ngo-id.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { GetTrainingCourseComponent } from './training-course/get-training-course/get-training-course.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddTrainingcourseComponent } from './training-course/add-trainingcourse/add-trainingcourse.component';
import { UpdateTrainingcourseComponent } from './training-course/update-trainingcourse/update-trainingcourse.component';
import { GetTrainingcourseIdComponent } from './training-course/get-trainingcourse-id/get-trainingcourse-id.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NgoComponent,
    NgoListComponent,
    LandingpageComponent,
    AddNgoComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent,
    UpdateNgoComponent,
    GetNgoIdComponent,
    TrainingCourseComponent,
    GetTrainingCourseComponent,
    HeaderComponent,
    FooterComponent,
    AddTrainingcourseComponent,
    UpdateTrainingcourseComponent,
    GetTrainingcourseIdComponent,
    FeedbackComponent,
    AddFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
