import { Component, ViewChild, ElementRef } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import {DoctortimigsPage}from '../doctortimigs/doctortimigs';
import{SelectdifferentclinicPage}from'../selectdifferentclinic/selectdifferentclinic';
import { EnterPatientDetailsPage } from '../enter-patient-details/enter-patient-details'
import{DocterservicesPage}from'../docterservices/docterservices';
declare var google:any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
      this.doctor = this.navParams.get("doctordetails");
      this.doctor_details = this.doctor.doctor_details;
      console.log("DOCTOR DETAILS$$$$$$$$$$$$$$$$$",JSON.stringify(this.doctor_details));
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
  @ViewChild('map') mapRef: ElementRef;

  ionViewDidLoad() {
    console.log('specializationnnnn',this.doctor_specialist);
    console.log('element reference ', this.mapRef);
    this.DisplayMap();
    }

    
  DisplayMap(){
    const location = new google.maps.LatLng('17.38','78.48');
    const options = {
      center:location,
      zoom:15
    };

    const map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,map);
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    })
  }
    
  //Doctor Timing Page
  navdoctortimings(){
    console.log("clicked bro")
    let doctortimings =this.modalCtrl.create(DoctortimigsPage,{"doctor_timings":this.doctors_timings,"doctor_name":this.doctor_name});
    doctortimings.present();
  }
  //Doctor Clinic Page
  selectdifferentclinic(){
    let differentclinic = this.modalCtrl.create(SelectdifferentclinicPage,{"doctor_clinic":this.doctor_clinic,"doctor_name":this.doctor_name});
    differentclinic.present();
  }

  //Enter patient details page
  enterpatientdatiels(){
    this.chooseClinicForAppointment();
  //   let enterpatient = this.modalCtrl.create(EnterPatientDetailsPage,{"doctor_details":this.doctor,"clinic_id":business_id});
  // enterpatient.present();
  }

  //Doctor Service page
  navdoctorservice(){
    this.navCtrl.push(DocterservicesPage,{"doctor_name":this.doctor_name,"doctor_service":this.doctor_service})
  }

  //Doctor Feedback for specific clinics
  navtofeedback() {
    if (this.totalclinic > 1) {
      this.feedbackforclinic();
    }
    else{
      let feedback = this.modalCtrl.create(FeedbackPage);
      feedback.present();
    }
  }

  //closing Modal Page
  closeModal() {
    this.navCtrl.pop();
  }

  //Action Sheet for Giving Feedback -->Choose clinic
  feedbackforclinic() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Which clinic did you visit?',
      cssClass: 'action-sheets-basic-page, small-case',
      buttons: [
        {
          text: 'Jayam Hospital & GFC Fertility',
          role: 'destructive',
          cssClass: 'font-size-12, small-case',
          handler: () => {
            let feedback = this.modalCtrl.create(FeedbackPage);
            feedback.present();
          }
        },
        {
          text: 'Centrepoint Clinic',
          role: 'destructive',
          cssClass: 'small-case',
          handler: () => {
            console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // Book for different clinic
  chooseClinicForAppointment() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'choose clinic to book appointment ?',
      cssClass: 'action-sheets-basic-page, small-case, font-14',
      buttons: this.createButtons()
    });
    actionSheet.present();
  }
public doctor_clinic_book:any=[
  {
    "clinic_id":"",
    "clinic_location":"",
    "clinic_name":""
  }
];
  public createButtons(){
    let buttons = [];
    for (let clinic in this.doctor_clinic) {
      let button = {
        text: this.doctor_clinic[clinic].business_name,
        handler: () => {

          this.doctor_clinic_book.clinic_id = this.doctor_clinic[clinic].business_id;
          this.doctor_clinic_book.clinic_location = this.doctor_clinic[clinic].area;
          this.doctor_clinic_book.clinic_name = this.doctor_clinic[clinic].business_name;

          let enterpatient = this.modalCtrl.create(EnterPatientDetailsPage,{"doctor_details":this.doctor,"clinic_details":this.doctor_clinic_book});
          enterpatient.present();
        }
      }
      buttons.push(button);
    }
    return buttons;
  }

}
