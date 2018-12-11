import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileCompleteSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-complete-slider',
  templateUrl: 'profile-complete-slider.html',
})
export class ProfileCompleteSliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  closeModal(){
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileCompleteSliderPage');
  }

}
