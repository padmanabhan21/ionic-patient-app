import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { AlltimingsPage } from '../alltimings/alltimings';

/**
 * Generated class for the ClinicdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clinicdetails',
  templateUrl: 'clinicdetails.html',
})
export class ClinicdetailsPage {
  public totalclinic = 2;
  public clinic_details: any[];
  public clinic_images:any[];
  public clinic_timings:any[];
  public slides: any[]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
    // events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});

  }
  @ViewChild('mySlider') slider: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsdetailsPage');
    // this.clenicimages=[
    //   {img:"../assets/img/app1.jpg"},
    //   {img:"../assets/img/app1.jpg"},
    //   {img:"../assets/img/app1.jpg"},
    //   {img:"../assets/img/app4.jpg"},
    //   {img:"../assets/img/app5.jpg"}
    // ];
    this.clinic_details =
      [
        {
          clinic_name: "appollo",
          clinic_location: "Chromepet",
          clinic_images:
            [
              { img: "../assets/img/bala.jpg" },
              { img: "../assets/img/bala.jpg" },
              { img: "../assets/img/bala.jpg" },
              { img: "../assets/img/bala.jpg" },
              { img: "../assets/img/bala.jpg" }
            ],
          clinic_timings:
            [
              { day: "Mon", time: "09:00 AM - 09:00 PM" },
              { day: "Tue", time: "09:00 AM - 09:00 PM" },
              { day: "Wed", time: "09:00 AM - 09:00 PM" },
              { day: "Thu", time: "09:00 AM - 09:00 PM" },
              { day: "Fri", time: "09:00 AM - 09:00 PM" },
              { day: "Sat", time: "09:00 AM - 09:00 PM" },
              { day: "Sun", time: "Closed" }
            ],
          clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
          clinic_latlng: "12.9532|80.1416",
          clinic_doctor_list:
            [
              {
                doc_img: "../assets/img/bala.jpg",
                doc_name: "Bala",
                doc_specialist: "Dental",
                doc_fees: "300",
                doc_like: "40%"
              },
              {
                doc_img: "../assets/img/bala.jpg",
                doc_name: "Venkat",
                doc_specialist: "Ortho",
                doc_fees: "400",
                doc_like: "80%"
              },
              {
                doc_img: "../assets/img/bala.jpg",
                doc_name: "Raja",
                doc_specialist: "General",
                doc_fees: "100",
                doc_like: "20%"
              }
            ],
          clinic_services:
            [
              { service: "pre and post delivery care" },
              { service: "High-risk pregnancy care" },
              { service: "Disease in pregnancy" }
            ],
          clinic_open: "Open Today"
        }
      ]
    this.clinic_images = this.clinic_details[0].clinic_images;
    this.clinic_timings = this.clinic_details[0].clinic_timings;
    console.log("ARRAAYYYY",this.clinic_timings);
    }
  alltimings() {
    let timelines = this.modalCtrl.create(AlltimingsPage,{"Timings":this.clinic_timings,"name":this.clinic_details[0].clinic_name});
    timelines.present();
  }

  // alltimings(){
  //   console.log("hello darling")
  //   let timelines = this.modalCtrl.create(AlltimingsPage);
  //   timelines.present;
  // }
  getRandomIndex(): number {
    // uses your list.length to get a random value within the range
    return Math.floor(Math.random() * this.slides.length)
  }
  navtofeedback() {
    if (this.totalclinic >= 2) {
      this.feedbackforclinic();
    }
  }
  newSlide() {
    this.slider.slideTo(this.getRandomIndex(), 500)
  }
  closeModal() {
    this.navCtrl.pop();
  }

  feedbackforclinic() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Which clinic did you visit?',
      cssClass: 'action-sheets-basic-page, small-case',
      buttons: [
        {
          text: 'Jayam Hospital & GFC Fertility',
          role: 'destructive',
          cssClass: 'font-size-12, small-case',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          // handler: () => {
          //   let feedback = this.modalCtrl.create(FeedbackPage);
          //   feedback.present();
          //   // console.log('Delete clicked');
          // }
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
