import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileOrdersPage } from './profile-orders';

@NgModule({
  declarations: [
    ProfileOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileOrdersPage),
  ],
})
export class ProfileOrdersPageModule {}
