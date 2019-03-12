import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ProfileCompleteSliderPage } from '../profile-complete-slider/profile-complete-slider';
import {SessionStorageService} from 'ngx-webstorage';
import { Storage } from '@ionic/storage';

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
  public personalprofiletemp:any={}

  public name;
  public mobile;
  public email;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public session:SessionStorageService,
              public storage: Storage ) {
  }

  ionViewDidLoad() {
    this.storage.get('personal-profile').then((val:any) =>{
      this.personalprofiletemp = JSON.parse(val);
      this.personalprofile.push(this.personalprofiletemp);
    })
    console.log('ionViewDidLoad PersonalPage');
    // this.name = this.session.retrieve("user_name");
    // this.mobile = this.session.retrieve("user_mobile");
    // this.email = this.session.retrieve("user_email")
    this.personalprofile=[
      {
        info:"personal",
        name:"Enter your name",
        img:"../assets/img/bala.jpg",
        contact_number:"Enter your number",
        Email_id:"Enter your email id",
        Gender:"Choose gender",
        Date_of_birth:"Enter your DOB",
        Blood_group:"Choose your blood group",
        Martialstatus:"Select Martial Status",
        Height:"in feet and inches",
        Weight:"in kg",
        Emergency_contact:"Enter emergency contact",
        Location:"Choose location",
      } 
    ]
    // console.log("completeprofile keys",this.personalprofile)
    // console.log("emial_id",this.email);
  }

  navprofilecomplete(){
    let completeprofile = this.modalCtrl.create(ProfileCompleteSliderPage);
    completeprofile.present();
  }
  
}

