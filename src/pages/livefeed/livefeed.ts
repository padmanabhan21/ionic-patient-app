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

  // public livefeedarr:any = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api:PatientServiceProvider) {
      // this.livefeedarr = this.navParams.get("token_status");
  }

  public 
  ionViewDidLoad() {

    this.api.livefeed()
    .subscribe((resp:any) => {
      // this.livefeedarr = resp.output;
      // if(resp.MessageCode == "LS"){

      //   console.log("live-feed retrieved successfully");
      // }
    });
    console.log('ionViewDidLoad LivefeedPage');
  }

}
