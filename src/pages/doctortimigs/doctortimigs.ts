import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoctortimigsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    console.log("doctortimings", this.doctorstimings);
    

    alert(this.doctor_name);
      // {day:"Mon",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      // {day:"Tue",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      // {day:"Wed",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      // {day:"Thu",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      // {day:"Fri",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      // {day:"Sat",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      // {day:"Sun",morning:"Closed",evening:"Closed"}                                                        
    
    console.log('doctorstimings',this.doctorstimings);
  }
  closeModal() {
    this.navCtrl.pop();
  }
  

}
