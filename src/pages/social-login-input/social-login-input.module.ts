import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialLoginInputPage } from './social-login-input';

@NgModule({
  declarations: [
    SocialLoginInputPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialLoginInputPage),
  ],
})
export class SocialLoginInputPageModule {}
