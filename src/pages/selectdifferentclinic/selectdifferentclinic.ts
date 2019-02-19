import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-selectdifferentclinic',
  templateUrl: 'selectdifferentclinic.html',
})
export class SelectdifferentclinicPage {
 
  public doctor_clinic_list:any=[];
  public doctor_name;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctor_clinic_list = this.navParams.get("doctor_clinic");
    this.doctor_name = this.navParams.get("doctor_name")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectdifferentclinicPage');
    console.log('Doctor Clinics List**********',JSON.stringify(this.doctor_clinic_list));

  }
  closeModal() {
    this.navCtrl.pop();
  }

}
