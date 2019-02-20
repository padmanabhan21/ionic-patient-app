import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    console.log('Doctor Services*********',JSON.stringify(this.doctor_services));
  }
  
  closeModal() {
    this.navCtrl.pop();
  }

}
