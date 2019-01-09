import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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
  public currentIndex=0;
  public totalQuestion=11;
  public personaldetails:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  closeModal(){
    this.navCtrl.pop();
  }
  public showsave:boolean= false;
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.currentIndex = currentIndex;
    if(this.currentIndex == 10){
      this.showsave = true;
    }else{
      this.showsave = false;
    }
    console.log('Total Question is',this.totalQuestion);
  }
  
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfileCompleteSliderPage');
  // }
  // onIonDrag(event){
  //   console.log("u r dragging me");
  //   this.swiper =event;
  //   this.swiper.lockSwipes();
  // }

  gender(param){
    this.personaldetails.gender=param;
  }
  blood(param){
 this.personaldetails.blood = param;
  }
  married(param){
    this.personaldetails.married=param;
  }


  save(){
    alert("darling");
    console.log("personal details",JSON.stringify(this.personaldetails));
  }

  next() {
    this.slides.slideNext();
    if(this.currentIndex < 10){
      this.totalQuestion = this.totalQuestion - 1;
    }
  }
  prev() {
    this.slides.slidePrev();
    if(this.currentIndex > 0){
      this.totalQuestion = this.totalQuestion + 1;
    }
  }



}
