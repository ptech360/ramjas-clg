import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewAssignmentComponent } from "./new.assignment";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    NewAssignmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewAssignmentComponent
      }
    ])
  ],
})
export class NewAssignmentModule{
  constructor(){
    
  }
}