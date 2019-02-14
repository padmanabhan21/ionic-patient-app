import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyappointmentdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myappointmentdetails',
  templateUrl: 'myappointmentdetails.html',
})
export class MyappointmentdetailsPage {
  public myappointmentdetails:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyappointmentdetailsPage');
    this.myappointmentdetails = this.navParams.get("navmyappointmentdetails");
    console.log("myappointmentdetails",JSON.stringify(this.myappointmentdetails))
  }

}
