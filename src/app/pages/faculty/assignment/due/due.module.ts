import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DueAssignmentComponent } from "./due.assignment";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DueAssignmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DueAssignmentComponent
      }
    ])
  ],
})
export class DueAssignmentModule{
  constructor(){
    
  }
}