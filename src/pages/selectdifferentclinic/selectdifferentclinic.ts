import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectdifferentclinicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    alert(this.doctor_name);
    console.log("List of Clinics in which doctor is working******",JSON.stringify(this.doctor_clinic_list));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectdifferentclinicPage');
  }
  closeModal() {
    this.navCtrl.pop();
  }

}
