import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileMyPaymentPage } from './profile-my-payment';

@NgModule({
  declarations: [
    ProfileMyPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileMyPaymentPage),
  ],
})
export class ProfileMyPaymentPageModule {}
