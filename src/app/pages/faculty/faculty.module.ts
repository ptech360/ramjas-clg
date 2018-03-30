import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacultyComponent } from "./faculty.component";

@NgModule({
  declarations: [
    FacultyComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: '',
        component: FacultyComponent,
        children:[
          {
            path: 'home',
            loadChildren: 'app/pages/faculty/home/home.module#HomeModule'
          },
          {
            path: 'attendance',
            loadChildren:'app/pages/faculty/attendance/attendance.module#AttendanceModule' 
          },
          {
            path: 'assignment',
            loadChildren:'app/pages/faculty/assignment/assignment.module#AssignmentModule'
          },
          {
            path:'assessment',
            loadChildren:'app/pages/faculty/assignment/assessment/assessment.module#AssessmentModule'
          },
          {
            path:'profile',
            loadChildren:'app/pages/faculty/profile/profile.module#ProfileModule'
          }
        ]
      }
    ])
  ],
})
export class FacultyModule{
  constructor(){
    
  }
}