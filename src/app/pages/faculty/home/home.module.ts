import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
})
export class HomeModule{
  constructor(){
    
  }
}