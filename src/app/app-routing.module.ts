import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddNgoComponent } from './ngo/add-ngo/add-ngo.component';
import { GetNgoIdComponent } from './ngo/get-ngo-id/get-ngo-id.component';
import { NgoListComponent } from './ngo/ngo-list/ngo-list.component';
import { NgoComponent } from './ngo/ngo.component';
import { UpdateNgoComponent } from './ngo/update-ngo/update-ngo.component';
import { AddTrainingcourseComponent } from './training-course/add-trainingcourse/add-trainingcourse.component';
import { GetTrainingCourseComponent } from './training-course/get-training-course/get-training-course.component';
import { TrainingCourseComponent } from './training-course/training-course.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
  {path: 'landingpage',component: LandingpageComponent},
  { path: 'ngo', component: NgoComponent },
  {path:'ngolist',component:NgoListComponent},
  {path:'addngo',component:AddNgoComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'updatengo/:ngoId',component:UpdateNgoComponent},
  {path:'getngobyid/:ngoId',component:GetNgoIdComponent},
  {path:'trainingcourse',component:TrainingCourseComponent},
  {path:'trainingcourselist',component:GetTrainingCourseComponent},
  {path:'addtrainingcourse',component:AddTrainingcourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
