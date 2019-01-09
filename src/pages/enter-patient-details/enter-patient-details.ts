import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{TokenconfirmationPage}from '../tokenconfirmation/tokenconfirmation';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public api:PatientServiceProvider) {
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
  tokenconfirmation(){
    this.api.tokengeneration('sample')
    .subscribe((resp:any) =>{
      if(resp.MessageCode == "TGS"){
        this.navCtrl.push(TokenconfirmationPage)
      }
      else{
        alert(resp.Message);
      }
    });
  }
  
  closeModal() {
    this.navCtrl.pop();
  }

}
