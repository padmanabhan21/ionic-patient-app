import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ProfileCompleteSliderPage } from '../profile-complete-slider/profile-complete-slider';
import {SessionStorageService} from 'ngx-webstorage';
/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  public personalprofile:any=[]
  public name;
  public mobile;
  public email;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public session:SessionStorageService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
    this.name = this.session.retrieve("user_name");
    this.mobile = this.session.retrieve("user_mobile");
    this.email = this.session.retrieve("user_email")
    this.personalprofile=[
      {info:"personal",name:"",img:"../assets/img/bala.jpg",contact_number:"",
      Email_id:"",Gender:"Male",Date_of_birth:"1994-01-23",Blood_group:"B+",Martialstatus:"married",
      Height:"5.8",Weight:"70",Emergency_contact:"9700082942",Location:"chenni",
  
       
      } 
    ]
    console.log("completeprofile keys",this.personalprofile)
    console.log("emial_id",this.email);
  }

  navprofilecomplete(){
    let completeprofile = this.modalCtrl.create(ProfileCompleteSliderPage);
    completeprofile.present();
  }
  
}

