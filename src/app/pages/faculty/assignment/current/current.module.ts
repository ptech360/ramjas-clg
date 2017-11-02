import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrentAssignmentComponent } from "./current.assignment";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CurrentAssignmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CurrentAssignmentComponent
      }
    ])
  ],
})
export class CurrentAssignmentModule{
  constructor(){
    
  }
}