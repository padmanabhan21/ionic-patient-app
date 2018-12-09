import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileMyDoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-my-doctors',
  templateUrl: 'profile-my-doctors.html',
})
export class ProfileMyDoctorsPage {
  public showdefault:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMyDoctorsPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }
}
