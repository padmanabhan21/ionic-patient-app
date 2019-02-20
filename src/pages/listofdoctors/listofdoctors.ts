import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{DoctorsdetailsPage}from'../doctorsdetails/doctorsdetails';
import{ClinicdetailsPage}from'../clinicdetails/clinicdetails';

@IonicPage()
@Component({
  selector: 'page-listofdoctors',
  templateUrl: 'listofdoctors.html',
})
export class ListofdoctorsPage {

  public listofdoctors:any=[];
  public clinicanddoctor:any=[];
  public clinics:any=[]
  // public clinic_images:any=[];
  public doctors:any=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  this.listofdoctors = this.navParams.get("listofdoctors");
  this.clinicanddoctor = this.listofdoctors.Listofdoctors;
  this.clinics = this.clinicanddoctor[0].clinics;
  // this.clinic_images = this.clinicanddoctor[0].clinics;
  this.doctors = this.clinicanddoctor[0].Doctors;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofdoctorsPage');
    console.log("Clinic List*********",JSON.stringify(this.clinics));
    console.log("Doctor List*********",JSON.stringify(this.doctors));
  }

  closeModal(){
    this.navCtrl.pop();
  }

  navdoctorsdetails(param){
    let doctorsdetails = this.modalCtrl.create(DoctorsdetailsPage,{"doctordetails":param});
    doctorsdetails.present();
  }
  clinicdetails(param){
    let clinicdetails = this.modalCtrl.create(ClinicdetailsPage,{"clinicdetails":param});
    clinicdetails.present();
  }

}
