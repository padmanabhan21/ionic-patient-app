import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileBookmarkedArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-bookmarked-articles',
  templateUrl: 'profile-bookmarked-articles.html',
})
export class ProfileBookmarkedArticlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileBookmarkedArticlesPage');
  }
  closeModal(){
    this.navCtrl.pop();
  }

}
