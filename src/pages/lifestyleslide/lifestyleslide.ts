import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
/**
 * Generated class for the LifestyleslidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifestyleslide',
  templateUrl: 'lifestyleslide.html',
})
export class LifestyleslidePage {
  public lifeslide:any={}
  @ViewChild('slides') slides: Slides;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: PatientServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifestyleslidePage');
  }
  public currentIndex=0;
  public showsave:boolean=false;
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.currentIndex = currentIndex;
    if(this.currentIndex == 4){
      this.showsave = true;
    }else{
      this.showsave = false;
    }
  }

  closeModal(){
    this.navCtrl.pop();
  }

  smoking(param){
    this.lifeslide.smoking = param;
  }
  alcohol(param){
    this.lifeslide.alcohol = param;
  }
  lifestyle(param){
    this.lifeslide.lifestyle = param;
  }
  consist(param){
    this.lifeslide.foodpreference = param;
  }
  profission(param){
    this.lifeslide.profession = param;
  }
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
  save(){
    let body = {
      "mobile":"8220772736",	
      "smoking_habits":this.lifeslide.smoking,
      "alcohol_consumption":this.lifeslide.alcohol,
      "activity_level":this.lifeslide.lifestyle,
      "food_preference":this.lifeslide.foodpreference,
      "occupation":this.lifeslide.profession
    }

    this.api.updateLogin(body)
    .subscribe((resp:any) =>{
      if(resp.MessageCode == "RUS"){
        alert("ur profile updated successfully for lifestyle");
      }
    });
    console.log("hellodarlig",JSON.stringify(this.lifeslide));

  }
}
