import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClinicordoctorservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clinicordoctorservice',
  templateUrl: 'clinicordoctorservice.html',
})
export class ClinicordoctorservicePage {
  public services:any [];
  public clinic_name;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
 this.services = this.navParams.get("clinicservices");
 this.clinic_name = this.navParams.get("clinic_name");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClinicordoctorservicePage');
    // this.services=[]
    console.log("service working",this.services)
  }
  closeModal() {
    this.navCtrl.pop();
  }

}
