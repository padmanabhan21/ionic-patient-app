import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ProfileCompleteSliderPage } from '../profile-complete-slider/profile-complete-slider';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  public personalprofile:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
    this.personalprofile=[
      {info:"personal",name:"venky",img:"../assets/img/bala.jpg",contact_number:"9700820429",
      Email_id:"venky@gmai.com",Gender:"Male",Date_of_birth:"1994-01-23",Blood_group:"B+",Martialstatus:"married",
      Height:"5.8",Weight:"70",Emergency_contact:"9700082942",Location:"chenni",
  
       
      } 
    ]
    console.log("completeprofile keys",this.personalprofile)
  }

  navprofilecomplete(){
    let completeprofile = this.modalCtrl.create(ProfileCompleteSliderPage);
    completeprofile.present();
  }
  
}

