import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileBookmarkedArticlesPage } from './profile-bookmarked-articles';

@NgModule({
  declarations: [
    ProfileBookmarkedArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileBookmarkedArticlesPage),
  ],
})
export class ProfileBookmarkedArticlesPageModule {}
