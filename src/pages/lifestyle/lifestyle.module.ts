import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifestylePage } from './lifestyle';

@NgModule({
  declarations: [
    LifestylePage,
  ],
  imports: [
    IonicPageModule.forChild(LifestylePage),
  ],
})
export class LifestylePageModule {}
