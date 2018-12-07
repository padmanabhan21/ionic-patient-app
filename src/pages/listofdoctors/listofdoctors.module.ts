import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListofdoctorsPage } from './listofdoctors';

@NgModule({
  declarations: [
    ListofdoctorsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListofdoctorsPage),
  ],
})
export class ListofdoctorsPageModule {}
