import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
// import { StarRatingModule } from 'ionic3-star-rating';
// import { Events } from 'ionic-angular';

/**
 * Generated class for the DoctorsdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctorsdetails',
  templateUrl: 'doctorsdetails.html',
  
})
export class DoctorsdetailsPage {
  public totalclinic = 2;
    public clenicimages:any []
    public slides:any[]
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public actionsheetCtrl: ActionSheetController,
  public modalCtrl: ModalController) {
    // events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});
    
  }
  @ViewChild('mySlider') slider: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsdetailsPage');
    this.clenicimages=[
      {img:"../assets/img/app1.jpg"},
      {img:"../assets/img/app1.jpg"},
      {img:"../assets/img/app1.jpg"},
      {img:"../assets/img/app4.jpg"},
      {img:"../assets/img/app5.jpg"}
    ];
  }
  getRandomIndex(): number {
    // uses your list.length to get a random value within the range
    return Math.floor(Math.random() * this.slides.length)
  }
  navtofeedback(){
    if(this.totalclinic >= 2){
    this.feedbackforclinic();
    }
  }
  newSlide() {
    this.slider.slideTo(this.getRandomIndex(),500)
  }
  closeModal(){
    this.navCtrl.pop();
  }
   
  feedbackforclinic(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Which clinic did you visit?',
      cssClass: 'action-sheets-basic-page, small-case',
      buttons: [
        {
          text: 'Jayam Hospital & GFC Fertility',
          role: 'destructive',
          cssClass: 'font-size-12, small-case',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            let feedback = this.modalCtrl.create(FeedbackPage);
            feedback.present();
            // console.log('Delete clicked');
          }
        },
        {
          text: 'Centrepoint Clinic',
          role: 'destructive',
          cssClass: 'small-case',
          // icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
