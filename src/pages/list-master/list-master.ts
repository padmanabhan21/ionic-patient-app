import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems:any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.currentItems = [
      {avatar:'../assets/img/splashbg.png',title:"Search doctors, book appointments",description:"Find doctors, clinics, hospitals and more"},
      {avatar:'../assets/img/splashbg.png',title:"Chat with a top doctor",description:"Get a response in 5 minutes & free 3 day follow up"},
      {avatar:'../assets/img/splashbg.png',title:"Order medicines",description:"Medicines delivered to your doorstep"},
      {avatar:'../assets/img/splashbg.png',title:"Book tests, checkups and scans",description:"Get health checkups & tests done at home."},
    ]    
  }
}