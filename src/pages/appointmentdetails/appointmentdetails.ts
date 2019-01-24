import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController, App} from 'ionic-angular';

import {LivefeedPage}from'../livefeed/livefeed';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

/**
 * Generated class for the AppointmentdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointmentdetails',
  templateUrl: 'appointmentdetails.html',
})
export class AppointmentdetailsPage {
  public token_status:any=[];
  link:string= null;
   hospitalname:string= null;
   appointmentid:string=null;
   address:string=null;
  constructor(public navCtrl: NavController,
              private socialSharing: SocialSharing, 
              public navParams: NavParams, 
              public modalCtrl:ModalController,
              public viewCtrl:ViewController,
              public appCtrl:App,
              ) {
                
    this.token_status = this.navParams.get("token_status");
    
    console.log("token Status*******",JSON.stringify(this.token_status));

  }

  ionViewDidLoad() {
    alert(this.token_status.waiting_time);
    
    console.log('ionViewDidLoad AppointmentdetailsPage');
  }

  navlistmaster(){
  // this.viewCtrl.dismiss();
  // this.appCtrl.getRootNav().setRoot(ListMasterPage);
  this.navCtrl.setRoot('ListMasterPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }
  navlivefeed(){
   this.navCtrl.push(LivefeedPage,{"token_status":this.token_status});
  }
    
  share(){
    this.socialSharing.share(this.link,this.hospitalname,this.appointmentid,this.address)
    .then(() =>{

    }).catch(()=>{
          
       
    })
    console.log();
  }
}
