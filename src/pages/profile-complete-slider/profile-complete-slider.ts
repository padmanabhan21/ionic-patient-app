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
  // swiper:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  closeModal(){
    this.navCtrl.pop();
  }
  
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfileCompleteSliderPage');
  // }
  // onIonDrag(event){
  //   console.log("u r dragging me");
  //   this.swiper =event;
  //   this.swiper.lockSwipes();
  // }
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

}
