import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AttendaceComponent } from "./attendance.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AttendaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AttendaceComponent
      }
    ])
  ],
})
export class AttendanceModule{
  constructor(){
    
  }
}