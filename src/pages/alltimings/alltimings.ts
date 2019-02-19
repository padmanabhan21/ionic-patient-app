import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-alltimings',
  templateUrl: 'alltimings.html',
})
export class AlltimingsPage {
  public clinic_timings:any[];
  public clinic_name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clinic_timings = this.navParams.get('Timings');
    this.clinic_name=this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlltimingsPage');
    console.log('Clinic Timings*******',this.clinic_timings);

  }
  closeModal() {
    this.navCtrl.pop();
  }

}
