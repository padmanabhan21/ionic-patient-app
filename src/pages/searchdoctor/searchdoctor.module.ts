import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchdoctorPage } from './searchdoctor';

@NgModule({
  declarations: [
    SearchdoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchdoctorPage),
  ],
})
export class SearchdoctorPageModule {}
