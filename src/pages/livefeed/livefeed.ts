import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { Observable } from '../../../node_modules/rxjs';
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

  public livefeedarr: any = [];
  public tolivefeedser: any = [];
  public subscription;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api: PatientServiceProvider) {
    this.tolivefeedser = this.navParams.get("token_status");
    console.log("livefeed page", JSON.stringify(this.tolivefeedser));
  }

  ionViewDidLoad() {
    this.liveFeed();
    this.liveFeedLoop();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  liveFeedLoop() {
    this.subscription = Observable.interval(5000).subscribe(x => {
      // console.log("testinggggggggggg")
      this.liveFeed();
    });
  }

<<<<<<< HEAD

   
//   let self = this;
// this.task = setInterval(function () {
//   self.refreshData();
// }, 300);
}
=======
  liveFeed() {
    this.api.livefeed(this.tolivefeedser)
      .subscribe((resp: any) => {
        this.livefeedarr = resp.output;
      });
    // console.log('ionViewDidLoad LivefeedPage');
  }

}
>>>>>>> 42dbd552db88ca2a076663dce90c3f3e87c58285
