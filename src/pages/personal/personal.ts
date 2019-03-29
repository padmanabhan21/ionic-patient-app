import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import { ProfileCompleteSliderPage } from '../profile-complete-slider/profile-complete-slider';
import { SessionStorageService } from 'ngx-webstorage';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  public personalprofile: any = {}
  public personalprofiletemp: any = {}

  public name;
  public mobile;
  public email;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    public modalCtrl: ModalController,
    public session: SessionStorageService,
    public storage: Storage) {

    this.personalprofile =
      {
        "info": "personal",
        "user_name": "Enter your name",
        "img": "../assets/img/bala.jpg",
        "mobile": "Enter your number",
        "email": "Enter your email id",
        "gender": "Choose gender",
        "birthday": "Enter your DOB",
        "blood_group": "Choose your blood group",
        "married_status": "Select Martial Status",
        "height": "in feet and inches",
        "weight": "in kg",
        "emergency_contact_mobile": "Enter emergency contact",
        "country": "Choose location",
      }
  }

  ionViewDidLoad() {
    this.personalprofile.img = this.session.retrieve("user_pic");
    console.log('ionViewDidLoad PersonalPage');
  }

  ionViewDidEnter() {
    this.storage.get('personal-profile').then((val: any) => {
      if (val) {
        this.personalprofile = JSON.parse(val);
        console.log("We found your profile-records in storage**********", this.personalprofile);
      }
      else {
        console.log("We couldn't find your profile-records in storage**********");
      }
    })
  }

  navprofilecomplete() {
    let completeprofile = this.modalCtrl.create(ProfileCompleteSliderPage);
    completeprofile.onDidDismiss((data) => {
      if (data === "success") {
        this.storage.get('personal-profile').then((val: any) => {
          if (val) {
            this.personalprofile = JSON.parse(val);
            console.log("We found your profile-records in storage**********", this.personalprofile);
          }
          else {
            console.log("We couldn't find your profile-records in storage**********");
          }
        })
      }
    })
    completeprofile.present();
  }

}

