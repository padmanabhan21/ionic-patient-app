import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import{ LifestyleslidePage }from '../lifestyleslide/lifestyleslide';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-lifestyle',
  templateUrl: 'lifestyle.html',
})
export class LifestylePage {

  public lifestyleprofile:any={
    "smoking_habits":"",
    "alcohol_consumption":"",
    "activity_level":"",
    "food_preference":"",
    "occupation":""
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifestylePage');
    this.storage.get('lifestyle-profile').then((val:any) =>{
      if(val){
        this.lifestyleprofile = JSON.parse(val);
      }
    })
  }

  navlifestyleslide(){
    let lifestyleslide = this.modalCtrl.create(LifestyleslidePage);
    lifestyleslide.onDidDismiss((data) => {
      if (data === "success") {
        this.storage.get('lifestyle-profile').then((val: any) => {
          if (val) {
            this.lifestyleprofile = JSON.parse(val);
          }
          else {
          }
        })
      }
    })
    lifestyleslide.present();
  }

}
