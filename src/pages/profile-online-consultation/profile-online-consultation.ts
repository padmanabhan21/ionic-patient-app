import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileOnlineConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-online-consultation',
  templateUrl: 'profile-online-consultation.html',
})
export class ProfileOnlineConsultationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileOnlineConsultationPage');
  }
  closeModal(){
    this.navCtrl.pop();
  }
}
