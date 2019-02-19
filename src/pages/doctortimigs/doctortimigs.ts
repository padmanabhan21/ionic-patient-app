import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-doctortimigs',
  templateUrl: 'doctortimigs.html',
})
export class DoctortimigsPage {
  public doctorstimings:any[]
  public doctor_name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctorstimings = this.navParams.get("doctor_timings");
    this.doctor_name = this.navParams.get("doctor_name")
  }
  
  
  ionViewDidLoad() {
    console.log("ionViewDidLoad DoctorTimingsPage");
    console.log("Doctor Timings*********",JSON.stringify(this.doctorstimings));
  }
 
  closeModal() {
    this.navCtrl.pop();
  }

}
