import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileMedicalRecordsPage } from './profile-medical-records';

@NgModule({
  declarations: [
    ProfileMedicalRecordsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileMedicalRecordsPage),
  ],
})
export class ProfileMedicalRecordsPageModule {}
