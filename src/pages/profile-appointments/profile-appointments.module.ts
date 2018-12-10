import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileAppointmentsPage } from './profile-appointments';

@NgModule({
  declarations: [
    ProfileAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileAppointmentsPage),
  ],
})
export class ProfileAppointmentsPageModule {}
