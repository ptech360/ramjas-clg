import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations:[ProfileComponent],
  imports:[RouterModule.forChild([
    {
      path:'',
      component:ProfileComponent
    }
  ])],

})
export class ProfileModule{

}