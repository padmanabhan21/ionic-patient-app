import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';

/**
 * Generated class for the MedicalslidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    "chronic_diseases":"",
    "injuries":"",
    "surgeries":"",
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: PatientServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalslidePage');
  }

  closeModal(){
    this.navCtrl.pop();
  }
  illness(param){
    this.medicalslide.illness = param;
  }
  injuries(param){
    this.medicalslide.injuries = param;
  }
  allergic(param){
    this.medicalslide.allergic = param;
  }
  surgeries(param){
    this.medicalslide.surgeries = param;
  }
  medicines(param){
    this.medicalslide.medicines = param;
  }
  medications(param){
    this.medicalslide.medications = param;
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
    console.log('Current index is', currentIndex);
    this.currentIndex = currentIndex;
    if(this.currentIndex == 5){
      this.showsave = true;
    }else{
      this.showsave = false;
    }
    console.log('Total Question is',this.totalQuestion);
  } 

  save(){
    let body=
    {
      "mobile":"8220772736",	
      "allergies":this.medicalslide.allergic,
      "current_medications":this.medicalslide.medicines,
      "past_medications":this.medicalslide.medications,
      "chronic_diseases":this.medicalslide.illness,
      "injuries":this.medicalslide.injuries,
      "surgeries":this.medicalslide.surgeries,
    }

    this.api.updateLogin(body)
    .subscribe((resp:any) =>{
      if(resp.MessageCode == "RUS"){
        alert("ur profile updated successfully for lifestyle");
      }
    });

    console.log("medical status",JSON.stringify(this.medicalslide));
  }

}
