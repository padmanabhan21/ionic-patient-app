import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ProfileCompleteSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-complete-slider',
  templateUrl: 'profile-complete-slider.html',
})
export class ProfileCompleteSliderPage {
  @ViewChild('slides') slides: Slides;
  public currentIndex = 0;
  public totalQuestion = 11;
  public personaldetails: any = {};
  public personal: any = {
    "image":"",
    "mobile": "",
    "user_name": "",
    "email": "",
    "gender": "",
    "birthday": "",
    "blood_group": "",
    "height": "",
    "weight": "",
    "emergency_contact_name": "",
    "married_status": "",
    "login_status": "",
    "emergency_contact_mobile": "",
  }
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public api: PatientServiceProvider,
              public file: File,
              public storage: Storage) {
   
  }

  ionViewDidLoad(){
   this.storage.get('personal-profile').then((val:any) =>{
    this.personaldetails = JSON.parse(val);
    // alert()
    })
  }

  closeModal() {
    this.navCtrl.pop();
  }
  public showsave: boolean = false;
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.currentIndex = currentIndex;
    if (this.currentIndex == 10) {
      this.showsave = true;
    } else {
      this.showsave = false;
    }
    console.log('Total Question is', this.totalQuestion);
  }

  gender(param) {
    this.personaldetails.gender = param;
  }
  blood(param) {
    this.personaldetails.blood = param;
  }
  married(param) {
    this.personaldetails.married = param;
  }

  save(personaldetails) {
    let body = {
      "mobile": "9597189023",
      "user_name": personaldetails.name,
      "email": personaldetails.emailid,
      "gender": personaldetails.gender,
      "birthday": personaldetails.birthday,
      "blood_group": personaldetails.blood,
      "height": personaldetails.feet + personaldetails.inches,
      "weight": personaldetails.weight,
      "emergency_contact_name": personaldetails.contact,
      "married_status": personaldetails.married,
      // "login_status": "login",
      "emergency_contact_mobile": personaldetails.emergencycontact,
    }
    this.api.updateProfile(body)
      .subscribe((resp: any) => {
        if (resp.messagecode == "RUS") {
        }
      });

      // this.file.writeFile('src/assets/data/','personal-profile.json',JSON.stringify(body),{replace:true});
      // alert("personal profile has been stored in local storage");

      this.storage.set('personal-profile',JSON.stringify(personaldetails));



    console.log("personal details", JSON.stringify(this.personaldetails));
  }

  next() {
    this.slides.slideNext();
    if (this.currentIndex < 10) {
      this.totalQuestion = this.totalQuestion - 1;
    }
  }
  prev() {
    this.slides.slidePrev();
    if (this.currentIndex > 0) {
      this.totalQuestion = this.totalQuestion + 1;
    }
  }



}
