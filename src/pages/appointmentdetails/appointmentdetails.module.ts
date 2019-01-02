import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentdetailsPage } from './appointmentdetails';

@NgModule({
  declarations: [
    AppointmentdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentdetailsPage),
  ],
})
export class AppointmentdetailsPageModule {}
