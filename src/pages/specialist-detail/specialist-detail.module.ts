import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialistDetailPage } from './specialist-detail';

@NgModule({
  declarations: [
    SpecialistDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialistDetailPage),
  ],
})
export class SpecialistDetailPageModule {}
