import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssessmentComponent } from "./assessment.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AssessmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AssessmentComponent
      }
    ])
  ],
})
export class AssessmentModule{
  constructor(){
    
  }
}