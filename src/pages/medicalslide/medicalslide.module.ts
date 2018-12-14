import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalslidePage } from './medicalslide';

@NgModule({
  declarations: [
    MedicalslidePage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalslidePage),
  ],
})
export class MedicalslidePageModule {}
