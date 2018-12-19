import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlltimingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alltimings',
  templateUrl: 'alltimings.html',
})
export class AlltimingsPage {
  public clinic_timings:any[];
  public clinic_name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('Timings'));
    this.clinic_timings = this.navParams.get('Timings');
    this.clinic_name=this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlltimingsPage');
  }
  closeModal() {
    this.navCtrl.pop();
  }

}
