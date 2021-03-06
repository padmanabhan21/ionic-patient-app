import { Component, ViewChild,ElementRef } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { AlltimingsPage } from '../alltimings/alltimings';
import{ClinicordoctorservicePage} from'../clinicordoctorservice/clinicordoctorservice';
import { DoctorsdetailsPage } from '../doctorsdetails/doctorsdetails';
import { CallNumber } from '@ionic-native/call-number';

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
    public modalCtrl: ModalController,private callNumber: CallNumber) {
      this.clinic = this.navParams.get("clinicdetails");
      this.clinic_details = this.clinic.clinic_details;
          console.log("clinic detailsssssssssssssss",JSON.stringify(this.clinic_details))
  }
  @ViewChild('mySlider') slider: Slides;
  @ViewChild('map') mapRef: ElementRef;

  ionViewDidLoad() {
    this.clinic_services =this.clinic_details[0].clinic_services;
    this.clinic_doctor_list =this.clinic_details[0].clinic_doctor_list;
    this.clinic_timings = this.clinic_details[0].clinic_timings;
    this.clinic_images = this.clinic_details[0].clinic_images;

    console.log('ionViewDidLoad ClinicDetailsPage');
    console.log('Clinic*********',JSON.stringify(this.clinic));
    console.log('Clinic Details*******',JSON.stringify(this.clinic_details));
    console.log('Clinic Services*******',JSON.stringify(this.clinic_details));
    console.log('Clinic Timings*******',JSON.stringify(this.clinic_details));
    console.log('Clinic Images*******',JSON.stringify(this.clinic_images));
    console.log('Clinic Doctor List*******',JSON.stringify(this.clinic_details));
   
      
      this.clinic_services =this.clinic_details[0].clinic_services;
      this.clinic_doctor_list =this.clinic_details[0].clinic_doctor_list;
      this.clinic_lat = this.clinic_details[0].location_lat;
      this.clinic_lng = this.clinic_details[0].location_long;
      this.clinic_address = this.clinic_details[0].address;
      this.clinic_open = this.clinic_details[0].clinic_open;
    this.clinic_name = this.clinic_details[0].business_name;
    // alert(this.clinic_details[0].business_name);
    console.log("clinic_nameeeeeeeeeeeeeee",this.clinic_name);
    
    }

  alltimings() {
    let timelines = this.modalCtrl.create(AlltimingsPage,{"Timings":this.clinic_timings,"name":this.clinic_name});
    timelines.present();

  }
  
  clinicservices(){
    let clinicservices = this.modalCtrl.create(ClinicordoctorservicePage,{"clinicservices":this.clinic_services,"clinic_name":this.clinic_name});
    clinicservices.present();

  }
  // call number
  callnumber(){
    this.callNumber.callNumber("9700820429", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));

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
            // console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
}
