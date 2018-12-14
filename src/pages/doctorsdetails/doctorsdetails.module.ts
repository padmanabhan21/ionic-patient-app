import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorsdetailsPage } from './doctorsdetails';

@NgModule({
  declarations: [
    DoctorsdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorsdetailsPage),
  ],
})
export class DoctorsdetailsPageModule {}
