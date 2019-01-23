import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileOffersPage } from './profile-offers';

@NgModule({
  declarations: [
    ProfileOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileOffersPage),
  ],
})
export class ProfileOffersPageModule {}
