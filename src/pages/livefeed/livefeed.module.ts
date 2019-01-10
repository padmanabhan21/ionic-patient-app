import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivefeedPage } from './livefeed';

@NgModule({
  declarations: [
    LivefeedPage,
  ],
  imports: [
    IonicPageModule.forChild(LivefeedPage),
  ],
})
export class LivefeedPageModule {}
