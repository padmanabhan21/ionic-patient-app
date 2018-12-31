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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
   public doctorstimings:any[ ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctortimigsPage'); 
    

    this.doctorstimings=[
      {day:"Mon",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      {day:"Tue",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      {day:"Wed",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      {day:"Thu",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      {day:"Fri",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      {day:"Sat",morning:"09:30 AM - 01:00 PM",evening:"06:00 PM - 09:00 PM"},
      {day:"Sun",morning:"Closed",evening:"Closed"}                                                        
    ]
    console.log('doctorstimings',this.doctorstimings);
  }
  closeModal() {
    this.navCtrl.pop();
  }
  

}
