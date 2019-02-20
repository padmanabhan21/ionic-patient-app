import { Component, ViewChild,ElementRef } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { AlltimingsPage } from '../alltimings/alltimings';
import{ClinicordoctorservicePage} from'../clinicordoctorservice/clinicordoctorservice';
import { DoctorsdetailsPage } from '../doctorsdetails/doctorsdetails';

/**
 * Generated class for the ClinicdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-clinicdetails',
  templateUrl: 'clinicdetails.html',
})
export class ClinicdetailsPage {
  // public totalclinic = 2;
  public clinic:any=[];
  public clinic_details: any[];
  public clinic_images:any[];
  public clinic_timings:any[];
  public clinic_name;
  public clinic_open;
  public clinic_address;
  public clinic_lat;
  public clinic_lng;
  public slides: any[]
  public clinic_doctor_list:any[];
  public clinic_doctordetails:any[];
  public clinic_services:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
    // events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});
      this.clinic = this.navParams.get("clinicdetails");
      this.clinic_details = this.clinic.clinic_details;
          console.log("clinic detailsssssssssssssss",JSON.stringify(this.clinic_details))
  }
  @ViewChild('mySlider') slider: Slides;
  @ViewChild('map') mapRef: ElementRef;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsdetailsPage');
   
      
      this.clinic_services =this.clinic_details[0].clinic_services;
      this.clinic_doctor_list =this.clinic_details[0].clinic_doctor_list;
      this.clinic_lat = this.clinic_details[0].location_lat;
      this.clinic_lng = this.clinic_details[0].location_long;
      this.clinic_address = this.clinic_details[0].address;
      this.clinic_open = this.clinic_details[0].clinic_open;
    this.clinic_name = this.clinic_details[0].business_name;
    this.clinic_images = this.clinic_details[0].clinic_images;
    this.clinic_timings = this.clinic_details[0].clinic_timings;
    
    console.log("doctor detailsssssssssssss", this.clinic_lat)
    console.log("doctor detailssssssssssssss", this.clinic_lng)

    }

  alltimings() {
    let timelines = this.modalCtrl.create(AlltimingsPage,{"Timings":this.clinic_timings,"name":this.clinic_details[0].clinic_name});
    timelines.present();
  }
  
  clinicservices(){
    let clinicservices = this.modalCtrl.create(ClinicordoctorservicePage,{"clinicservices":this.clinic_services,"clinic_name":this.clinic_name});
    clinicservices.present();

  }
  //google maps
  DisplayMap(){
    const location = new google.maps.LatLng(this.clinic_lat,this.clinic_lng);
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
 
  
  getRandomIndex(): number {
    return Math.floor(Math.random() * this.slides.length)
  }

  newSlide() {
    this.slider.slideTo(this.getRandomIndex(), 500)
  }

  closeModal() {
    this.navCtrl.pop();
  }

  bookdoctor(param){
    // this.clinic_doctordetails = param.doctor_details;
    console.log("Clinic --> Doctor-->Book",JSON.stringify(param));
    this.navCtrl.push(DoctorsdetailsPage,{"doctordetails":param});
    
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
  
}
