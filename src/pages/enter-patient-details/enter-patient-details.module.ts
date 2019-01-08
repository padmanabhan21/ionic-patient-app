import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterPatientDetailsPage } from './enter-patient-details';

@NgModule({
  declarations: [
    EnterPatientDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnterPatientDetailsPage),
  ],
})
export class EnterPatientDetailsPageModule {}
