import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LivefeedPage}from'../livefeed/livefeed';


@IonicPage()
@Component({
  selector: 'page-myappointmentdetails',
  templateUrl: 'myappointmentdetails.html',
})
export class MyappointmentdetailsPage {
  public myappointmentdetails:any=[];
  public livefeedarr:any=[];
  public doc_name;
  public token_date;
  public clinic_name;
  public address;
  public token_status;
  public app_id;
  public token_no;
  public token_time;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyappointmentdetailsPage');
    this.myappointmentdetails = this.navParams.get("navmyappointmentdetails");
    console.log("myappointmentdetails",JSON.stringify(this.myappointmentdetails));
    this.livefeedarr = this.myappointmentdetails;
    this.app_id = this.myappointmentdetails.app_id;
    this.token_no = this.myappointmentdetails.token_no;
    this.doc_name = this.myappointmentdetails.doctor_name;
    this.token_date = this.myappointmentdetails.business_date;
    this.clinic_name = this.myappointmentdetails.business_name;
    this.address = this.myappointmentdetails.address;
    this.token_status = this.myappointmentdetails.token_status;
    this.token_time = this.myappointmentdetails.token_time;

    console.log("token_nooooo",this.token_no);
  }
  
  livefeed(){
   this.navCtrl.push(LivefeedPage,{"token_status":this.livefeedarr});
  }
}
