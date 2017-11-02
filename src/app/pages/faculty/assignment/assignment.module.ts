import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssignmentComponent } from "./assignment.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AssignmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo:'current-assignment',
        pathMatch:'full'
      },
      {
        path: '',
        component: AssignmentComponent,
        children:[
          {
            path:'current-assignment',
            loadChildren:'app/pages/faculty/assignment/current/current.module#CurrentAssignmentModule'
          },
          {
            path:'due-assignment',
            loadChildren:'app/pages/faculty/assignment/due/due.module#DueAssignmentModule'
          },
          {
            path:'new-assignment',
            loadChildren:'app/pages/faculty/assignment/new/new.module#NewAssignmentModule'
          }
        ]
      }
    ])
  ],
})
export class AssignmentModule{
  constructor(){
    
  }
}