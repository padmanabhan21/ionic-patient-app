import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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
  public medical_profile:any =
  {
    "allergies":"",
    "current_medications":"",
    "past_medications":"",
    "chronic_diseases":"",
    "injuries":"",
    "surgeries":"",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalslidePage');
  }

  closeModal(){
    this.navCtrl.pop();
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  public currentIndex:any;
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.currentIndex = currentIndex;
  }

  yes(){

  }
  
  no(){

  }

}
