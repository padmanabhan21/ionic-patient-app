import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{AppointmentdetailsPage}from'../appointmentdetails/appointmentdetails';
/**
 * Generated class for the TokenconfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokenconfirmation',
  templateUrl: 'tokenconfirmation.html',
})
export class TokenconfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokenconfirmationPage');
  }
  // navappointmentdetails(){
  //   console.log("clicked bro")
  //     let appointmentdetails =this.modalCtrl.create(AppointmentdetailsPage);
  //     appointmentdetails.present();
  //   }

  navappointmentdetails(){
  this.navCtrl.push(AppointmentdetailsPage)
  }
}
