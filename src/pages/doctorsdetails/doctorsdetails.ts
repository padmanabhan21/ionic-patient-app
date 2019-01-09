import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { AlltimingsPage } from '../alltimings/alltimings';
import {DoctortimigsPage}from '../doctortimigs/doctortimigs';
import{SelectdifferentclinicPage}from'../selectdifferentclinic/selectdifferentclinic';
import{TokenconfirmationPage}from'../tokenconfirmation/tokenconfirmation';
import{EnterPatientDetailsPage}from'../enter-patient-details/enter-patient-details';
import{DocterservicesPage}from'../docterservices/docterservices';
// import{GeneratetokenPage}from'../generatetoken/generatetoken';
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
  public totalclinic=2;
  public slides=[];
  public doctor:any=[];
  public doctor_details: any[];
  public doctor_name;
  public doctor_img;
  public doctor_specialist;
  public doctor_experience;
  public doctor_like;
  public doctor_votes;
  public doctor_fees;
  public doctor_clinic_latlng;
  public doctor_clinic_address;
  public doctor_qualification;
  public doctor_clinic:any=[];
  public doctor_service:any=[];
  public doctor_specialization:any=[];
  public doctors_timings:any=[];
  // public doctor

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
    // events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});
      this.doctor = this.navParams.get("doctordetails");
      this.doctor_details = this.doctor.doctor_details;
      console.log("DOCTOR DETAILS**************",JSON.stringify(this.doctor_details));
      this.doctors_timings = this.doctor_details[0].doctorstimings;
      this.doctor_name = this.doctor_details[0].doctor_name;
      this.doctor_img = this.doctor_details[0].doc_img;
      this.doctor_specialist = this.doctor_details[0].specialist;
      this.doctor_experience = this.doctor_details[0].experience;
      this.doctor_like = this.doctor_details[0].doc_likes;
      this.doctor_votes = this.doctor_details[0].doc_votes;
      this.doctor_fees = this.doctor_details[0].consultationfees;
      this.doctor_clinic = this.doctor_details[0].doctor_clinic;
      this.doctor_clinic_latlng = this.doctor_details[0].doctor_clinic[0].clinic_latlng;
      this.doctor_clinic_address = this.doctor_details[0].doctor_clinic[0].clinic_address;
      this.doctor_service = this.doctor_details[0].doctor_services;
      this.doctor_specialization = this.doctor_details[0].doctor_specialization;
      this.doctor_qualification =this.doctor_details[0].qualification;
      this.totalclinic = this.doctor_clinic.length;
  }
  @ViewChild('mySlider') slider: Slides;

  ionViewDidLoad() {
    console.log('specializationnnnn',this.doctor_specialist);
    // alert(this.doctor_specialist)
    }
    navdoctortimings(){
      console.log("clicked bro")
      let doctortimings =this.modalCtrl.create(DoctortimigsPage,{"doctor_timings":this.doctors_timings,"doctor_name":this.doctor_name});
      doctortimings.present();
    }
    selectdifferentclinic(){
      let differentclinic = this.modalCtrl.create(SelectdifferentclinicPage,{"doctor_clinic":this.doctor_clinic,"doctor_name":this.doctor_name});
      differentclinic.present();
    }

    //Enter patient details
     enterpatientdatiels(){
      let enterpatient = this.modalCtrl.create(EnterPatientDetailsPage);
      enterpatient.present();

     }
     navdoctorservice(){
       this.navCtrl.push(DocterservicesPage,{"doctor_name":this.doctor_name,"doctor_service":this.doctor_service})
     }
      //TokenconfirmationPage token page navigation
  //     TokenconfirmationPage(){
  //   console.log("TokenconfirmationPage*********************")
  //   let generatetoken =this.modalCtrl.create(TokenconfirmationPage)
  //   generatetoken.present();
  // }

  // alltimings() {
  //   let timelines = this.modalCtrl.create(AlltimingsPage);
  //   timelines.present();
  // }

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
    if (this.totalclinic >= 1) {
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
