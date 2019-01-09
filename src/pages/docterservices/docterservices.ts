import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocterservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docterservices',
  templateUrl: 'docterservices.html',
})
export class DocterservicesPage {
 public doctorname;
 public doctor_services:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctor_services =this.navParams.get("doctor_service")
    this.doctorname = this.navParams.get("doctor_name")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocterservicesPage');
  }
  closeModal() {
    this.navCtrl.pop();
  }

}
