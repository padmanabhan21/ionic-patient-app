import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{TokenconfirmationPage}from '../tokenconfirmation/tokenconfirmation';

/**
 * Generated class for the EnterPatientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter-patient-details',
  templateUrl: 'enter-patient-details.html',
})
export class EnterPatientDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterPatientDetailsPage');
  }
  // navtokenconfirmation(){
  //   console.log("working")
  //   let tokenconfiramation =this.modalCtrl.create(TokenconfirmationPage);
  //   tokenconfiramation.present;
  // }

  // tokenconfiramation(){
  //   console.log("clicked bro")
  //     let tokenconfiramation =this.modalCtrl.create(TokenconfirmationPage);
  //     tokenconfiramation.present();
  //   }
  tokenconfiramation(){
    this.navCtrl.push(TokenconfirmationPage)
  }
  
  closeModal() {
    this.navCtrl.pop();
  }

}
