import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
/**
 * Generated class for the LivefeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livefeed',
  templateUrl: 'livefeed.html',
})
export class LivefeedPage {

  public livefeedarr:any = [];
  public tolivefeedser:any = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api:PatientServiceProvider) {
      this.tolivefeedser = this.navParams.get("token_status");
      console.log("livefeed page",JSON.stringify(this.tolivefeedser));
  }

  ionViewDidLoad() {
    this.api.livefeed(this.tolivefeedser)
    .subscribe((resp:any) => {
      this.livefeedarr = resp.output;
    });
    console.log('ionViewDidLoad LivefeedPage');
  }

}
