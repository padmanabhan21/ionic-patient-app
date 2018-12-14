import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{DoctorsdetailsPage}from'../doctorsdetails/doctorsdetails';

/**
 * Generated class for the ListofdoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofdoctors',
  templateUrl: 'listofdoctors.html',
})
export class ListofdoctorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofdoctorsPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }

  navdoctorsdetails(){
    let doctorsdetails = this.modalCtrl.create(DoctorsdetailsPage);
    doctorsdetails.present();
  }
}
