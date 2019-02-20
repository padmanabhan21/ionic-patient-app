import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    console.log('Clinic Services*********',JSON.stringify(this.services));
  }

  closeModal() {
    this.navCtrl.pop();
  }
}
