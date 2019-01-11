import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController, App} from 'ionic-angular';

import {LivefeedPage}from'../livefeed/livefeed';

/**
 * Generated class for the AppointmentdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointmentdetails',
  templateUrl: 'appointmentdetails.html',
})
export class AppointmentdetailsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl:ModalController,
              public viewCtrl:ViewController,
              public appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentdetailsPage');
  }

  navlistmaster(){
  // this.viewCtrl.dismiss();
  // this.appCtrl.getRootNav().setRoot(ListMasterPage);
  this.navCtrl.setRoot('ListMasterPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }
  navlivefeed(){
   this.navCtrl.push(LivefeedPage);
  }

}
