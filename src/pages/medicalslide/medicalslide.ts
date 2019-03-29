import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { Storage } from '@ionic/storage';
import { SessionStorageService } from 'ngx-webstorage';


@IonicPage()
@Component({
  selector: 'page-medicalslide',
  templateUrl: 'medicalslide.html',
})
export class MedicalslidePage {
  @ViewChild('slides') slides: Slides;

  public currentIdex=0;
  public totalQuestion=6;
  public medicalslide:any={}
  public medical_profile:any =
  {
    "allergies":"",
    "current_medications":"",
    "past_medications":"",
    "chronic_disease":"",
    "injuries":"",
    "surgeries":"",
  }
  public illnessbtn:any={
    "yes":'light',
    "no":'light'
  }
  public injuriesbtn:any={
    "yes":'light',
    "no":'light'
  }
  public allergiesbtn:any={
    "yes":'light',
    "no":'light'
  }
  public surgeriesbtn:any={
    "yes":'light',
    "no":'light' 
  }
  public current_medicationbtn:any={
    "yes":'light',
    "no":'light' 
  }
  public past_medicationbtn:any={
    "yes":'light',
    "no":'light' 
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: PatientServiceProvider,
              public storage: Storage,
              public viewCtrl: ViewController,
              public session: SessionStorageService,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalslidePage');
    this.storage.get('medical-profile').then((val: any) => {
      if(val){
        this.medical_profile = JSON.parse(val);
      }
      else{
        this.medicalslide = this.medical_profile;
      }
    })
  }

  closeModal(){
    this.viewCtrl.dismiss("success");
  }

  illness(param){
    this.medicalslide.illness = param;
    this.illnessbtn.yes = 'light';
    this.illnessbtn.no = 'light';
    if(param == 'yes'){
      this.illnessbtn.yes = 'primary'
    }else{
      this.illnessbtn.no = 'primary'
    }
  }

  injuries(param){
    this.medicalslide.injuries = param;
    this.injuriesbtn.yes = 'light';
    this.injuriesbtn.no = 'light'
    if(param == 'yes'){
      this.injuriesbtn.yes = 'primary';
    }else{
      this.injuriesbtn.no = 'primary'
    }
  }

  allergic(param){
    this.medicalslide.allergic = param;
    this.allergiesbtn.yes = 'light'
    this.allergiesbtn.no = 'light'
    if(param == 'yes'){
      this.allergiesbtn.yes = 'primary'
    }else{
      this.allergiesbtn.no = 'primary'
    }
  }

  surgeries(param){
    this.medicalslide.surgeries = param;
    this.surgeriesbtn.yes = 'light'
    this.surgeriesbtn.no = 'light'
    if(param == 'yes'){
      this.surgeriesbtn.yes = 'primary'
    }else{
      this.surgeriesbtn.no = 'primary'
    }
  }

  medicines(param){
    this.medicalslide.medicines = param;
    this.current_medicationbtn.yes = 'light'
    this.current_medicationbtn.no = 'light'
    if(param == 'yes'){
      this.current_medicationbtn.yes = 'primary'
    }else{
      this.current_medicationbtn.no = 'primary'
    }
  }

  medications(param){
    this.medicalslide.medications = param;
    this.past_medicationbtn.yes = 'light'
    this.past_medicationbtn.no = 'light'
    if(param == 'yes'){
      this.past_medicationbtn.yes = 'primary'
    }else{
      this.past_medicationbtn.no = 'primary'
    }
  }

  next() {
    this.slides.slideNext();
    if(this.currentIndex < 5){
      this.totalQuestion = this.totalQuestion - 1;
    }
  }

  prev() {
    this.slides.slidePrev();
    if(this.currentIndex > 0){
      this.totalQuestion = this.totalQuestion + 1;
    }
  }

  public currentIndex:any;
  public showsave:boolean=false;
  medslideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.currentIndex = currentIndex;
    if(this.currentIndex == 5){
      this.showsave = true;
    }else{
      this.showsave = false;
    }
  } 

  save(){
    let body=
    {
      "mobile": this.session.retrieve('user_mobile'),	
      "allergies":this.medicalslide.allergic,
      "current_medications":this.medicalslide.medicines,
      "past_medications":this.medicalslide.medications,
      "chronic_diseases":this.medicalslide.illness,
      "injuries":this.medicalslide.injuries,
      "surgeries":this.medicalslide.surgeries,
    }

    this.api.updateProfile(body)
    .subscribe((resp:any) =>{
      if(resp.Message_Code == "RUS"){
        this.storage.set('medical-profile', JSON.stringify(body));
        this.showtoast('your profile has been updated');
        this.closeModal();
      }
      else{
        this.showtoast('there is issue in updating your profile');
      }
    });
    console.log("medical status",JSON.stringify(this.medicalslide));
  }

  showtoast(message){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();   
  }
}
