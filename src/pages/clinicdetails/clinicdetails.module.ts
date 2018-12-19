import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicdetailsPage } from './clinicdetails';

@NgModule({
  declarations: [
    ClinicdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicdetailsPage),
  ],
})
export class ClinicdetailsPageModule {}
