import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
// import { SearchdoctorPage } from '../searchdoctor/searchdoctor';

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
      {id:"1",avatar:'../assets/img/splashbg.png',title:"Search doctors, book appointments",description:"Find doctors, clinics, hospitals and more"},
      {id:"2",avatar:'../assets/img/splashbg.png',title:"Chat with a top doctor",description:"Get a response in 5 minutes & free 3 day follow up"},
      {id:"3",avatar:'../assets/img/splashbg.png',title:"Order medicines",description:"Medicines delivered to your doorstep"},
      {id:"4",avatar:'../assets/img/splashbg.png',title:"Book tests, checkups and scans",description:"Get health checkups & tests done at home."},
    ]    
  }
  navigatesearch(item){
    if(item.id == "1"){
      alert("moving to search screen");
      this.navCtrl.push('SearchdoctorPage');
    }

  }
}