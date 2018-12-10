import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileRemindersPage } from './profile-reminders';

@NgModule({
  declarations: [
    ProfileRemindersPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileRemindersPage),
  ],
})
export class ProfileRemindersPageModule {}
