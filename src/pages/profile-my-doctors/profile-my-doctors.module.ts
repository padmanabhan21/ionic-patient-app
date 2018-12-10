import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileMyDoctorsPage } from './profile-my-doctors';

@NgModule({
  declarations: [
    ProfileMyDoctorsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileMyDoctorsPage),
  ],
})
export class ProfileMyDoctorsPageModule {}
