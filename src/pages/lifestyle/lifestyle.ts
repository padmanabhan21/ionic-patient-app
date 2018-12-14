import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import{LifestyleslidePage}from '../lifestyleslide/lifestyleslide';

/**
 * Generated class for the LifestylePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifestyle',
  templateUrl: 'lifestyle.html',
})
export class LifestylePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifestylePage');
  }

  navlifestyleslide(){
    let lifestyleslide = this.modalCtrl.create(LifestyleslidePage);
    lifestyleslide.present();
  }
}
