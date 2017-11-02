import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'faculty',
		pathMatch: 'full'
  },
  {
    path: 'faculty',
    loadChildren: 'app/pages/faculty/faculty.module#FacultyModule'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, { useHash: true,})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
