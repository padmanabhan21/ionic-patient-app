import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-profile-complete-slider',
  templateUrl: 'profile-complete-slider.html',
})
export class ProfileCompleteSliderPage {
  
  personalform:FormGroup;
  email:AbstractControl;

  @ViewChild('slides') slides: Slides;
  public currentIndex = 0;
  public totalQuestion = 11;
  public martialstatus: any = {
    "married": 'light',
    "single": 'light',
  }

  public genderstatus: any = {
    "male": 'light',
    "female": 'light',
    "others": 'light'
  }

  selectOptions = {
    title: 'Choose your country',
  };

  public personaldetails: any = {};
  public selectedA1: string = 'light';
  public selectedA2: string = 'light';
  public selectedB1: string = 'light';
  public selectedB2: string = 'light';
  public selectedO1: string = 'light';
  public selectedO2: string = 'light';
  public selectedAB1: string = 'light';
  public selectedAB2: string = 'light';
  public countryList: any = [];

  public personal: any = {
    "image": "",
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
    public http:HttpClient,
    public file: File,
    public app:App,
    public viewCtrl: ViewController,
    public formbuilder: FormBuilder,
    public toastCtrl: ToastController,
    public storage: Storage) {

      this.personalform = formbuilder.group({
        email:['',Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
      });

    this.email = this.personalform.controls['email'];
  
    this.http.get('assets/data/countrylist.json').subscribe((data: any) => {
      this.countryList = data;
    });
  }

  ionViewDidLoad() {
    this.storage.get('personal-profile').then((val: any) => {
      if(val){
        this.personaldetails = JSON.parse(val);
      }
      else{
        this.personaldetails = this.personal;
      }
    })
  }

  closeModal() {
    this.viewCtrl.dismiss('success');
  }
  public showsave: boolean = false;
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.currentIndex = currentIndex;
    if (this.currentIndex == 9) {
      this.showsave = true;
    } else {
      this.showsave = false;
    }
    console.log('Total Question is', this.totalQuestion);
  }

  gender(param) {
    if (param == "male") {
      this.genderstatus.male = 'primary';
      this.genderstatus.female = 'light';
      this.genderstatus.others = 'light';
    }
    if (param == "female") {
      this.genderstatus.female = 'primary';
      this.genderstatus.male = 'light';
      this.genderstatus.others = 'light';
    }
    if (param == "others") {
      this.genderstatus.others = 'primary';
      this.genderstatus.male = 'light';
      this.genderstatus.female = 'light';
    }

    this.personaldetails.gender = param;
  }

  blood(param) {
    if (param == "A+") {
      this.selectedA1 = 'primary';
    }
    else {
      this.selectedA1 = 'light';
    }
    if (param == "A-") {
      this.selectedA2 = 'primary';
    }
    else {
      this.selectedA2 = 'light';
    }
    if (param == "B+") {
      this.selectedB1 = 'primary';
    }
    else {
      this.selectedB1 = 'light';
    }
    if (param == "B-") {
      this.selectedB2 = 'primary';
    }
    else {
      this.selectedB2 = 'light';
    }
    if (param == "O+") {
      this.selectedO1 = 'primary';
    }
    else {
      this.selectedO1 = 'light';
    }
    if (param == "O-") {
      this.selectedO2 = 'primary';
    }
    else {
      this.selectedO2 = 'light';
    }
    if (param == "AB+") {
      this.selectedAB1 = 'primary';
    }
    else {
      this.selectedAB1 = 'light';
    }
    if (param == "AB-") {
      this.selectedAB2 = 'primary';
    }
    else {
      this.selectedAB2 = 'light';
    }

    this.personaldetails.blood_group = param;
  }


  married(param) {
    if (param == 'single') {
      this.martialstatus.single = 'primary';
    }
    else {
      this.martialstatus.single = 'light';
    }
    if (param == 'married') {
      this.martialstatus.married = 'primary';
    }
    else {
      this.martialstatus.married = 'light';
    }
    this.personaldetails.married_status = param;
  }

  save(personaldetails) {
    let body = {
      "mobile": personaldetails.mobile,
      "user_name": personaldetails.user_name,
      "email": personaldetails.email,
      "gender": personaldetails.gender,
      "birthday": personaldetails.birthday,
      "blood_group": personaldetails.blood_group,
      "height": personaldetails.feet+ " feet" + personaldetails.inches + " inches",
      "weight": personaldetails.weight,
      "emergency_contact_name": personaldetails.emergency_contact_name,
      "married_status": personaldetails.married_status,
      "country":personaldetails.country,
      "emergency_contact_mobile": personaldetails.emergency_contact_mobile,
    }
    this.api.updateProfile(body)
      .subscribe((resp: any) => {
        if (resp.Message_Code == "RUS") {
          this.storage.set('personal-profile', JSON.stringify(body));
          // console.log("personal details", JSON.stringify(this.personaldetails));
          this.showtoast('your profile has been updated');
          // this.app.getRootNav().getActiveChildNav().select(0);
          this.closeModal();
        }
      });
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

  showtoast(message){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();   
  }
}
