import { Component, ViewChild, ElementRef } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import {DoctortimigsPage}from '../doctortimigs/doctortimigs';
import{SelectdifferentclinicPage}from'../selectdifferentclinic/selectdifferentclinic';
import { EnterPatientDetailsPage } from '../enter-patient-details/enter-patient-details'
import{DocterservicesPage}from'../docterservices/docterservices';
import { SessionStorageService } from 'ngx-webstorage';

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-doctorsdetails',
  templateUrl: 'doctorsdetails.html',

})
export class DoctorsdetailsPage {

  public totalclinic;
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
  public location_lat;
  public location_long;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public session: SessionStorageService) {
      this.doctor = this.navParams.get("doctordetails");
      this.doctor_details = this.doctor.doctor_details;
      this.doctors_timings = this.doctor_details[0].doctorstimings;
      this.doctor_name = this.doctor_details[0].doctor_name;
      this.doctor_img = this.doctor_details[0].doc_img;
      this.doctor_specialist = this.doctor_details[0].specialist;
      this.doctor_experience = this.doctor_details[0].experience;
      this.doctor_like = this.doctor_details[0].doc_likes;
      this.doctor_votes = this.doctor_details[0].doc_votes;
      this.doctor_fees = this.doctor_details[0].consultationfees;
      this.doctor_clinic = this.doctor_details[0].doctor_clinic;
      this.totalclinic = this.doctor_clinic.length;
      this.doctor_clinic_latlng = this.doctor_details[0].doctor_clinic[0].clinic_latlng;
      this.doctor_clinic_address = this.doctor_details[0].doctor_clinic[0].clinic_address;
      this.doctor_service = this.doctor_details[0].doctor_services;
      this.doctor_specialization = this.doctor_details[0].doctor_specialization;
      this.doctor_qualification =this.doctor_details[0].qualification;
      this.location_lat = this.doctor_clinic[0].location_lat;
      this.location_long = this.doctor_clinic[0].location_long;
      this.totalclinic = this.doctor_clinic.length;
      console.log("location_lat",this.location_lat);
      console.log("location_long",this.location_long);

  }
  @ViewChild('mySlider') slider: Slides;
  @ViewChild('map') mapRef: ElementRef;

  ionViewDidLoad() {
    console.log("ionViewDidLoad DoctorDetailsPage");
    console.log("Doctor*********",JSON.stringify(this.doctor));
    console.log("Doctor Details***********",JSON.stringify(this.doctor_details));
    console.log('Doctor Specialist*********',JSON.stringify(this.doctor_specialist));
    console.log('Doctor Services*********',JSON.stringify(this.doctor_service));
    console.log('Doctor Timings*********',JSON.stringify(this.doctors_timings));
    this.DisplayMap();
    }

    
  DisplayMap(){
    const location = new google.maps.LatLng(this.location_lat,this.location_long);
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
      this.session.store("business_id",this.doctor_clinic[0].business_id);
      this.session.store("doctor_id",this.doctor.doctor_profile_id);
      let feedback = this.modalCtrl.create(FeedbackPage,{"doctor_name":this.doctor_name});
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
      title: 'choose clinic to give feedback ?',
      cssClass: 'action-sheets-basic-page, small-case, font-14',
      buttons: this.createButtonsForFeedback()
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

          this.session.store("business_id",this.doctor_clinic_book.clinic_id);
          this.session.store("doctor_id",this.doctor.doctor_id);

          let enterpatient = this.modalCtrl.create(EnterPatientDetailsPage,{"doctor_details":this.doctor,"clinic_details":this.doctor_clinic_book});
          enterpatient.present();
        }
      }
      buttons.push(button);
    }
    return buttons;
  }


  public createButtonsForFeedback(){
    let buttons = [];
    for (let clinic in this.doctor_clinic) {
      let button = {
        text: this.doctor_clinic[clinic].business_name,
        handler: () => {

          this.doctor_clinic_book.clinic_id = this.doctor_clinic[clinic].business_id;
          this.doctor_clinic_book.clinic_location = this.doctor_clinic[clinic].area;
          this.doctor_clinic_book.clinic_name = this.doctor_clinic[clinic].business_name;

          this.session.store("business_id",this.doctor_clinic_book.clinic_id);
          this.session.store("doctor_id",this.doctor.doctor_id);

          let feedback = this.modalCtrl.create(FeedbackPage);
          feedback.present();
        }
      }
      buttons.push(button);
    }
    return buttons;
  }
}
