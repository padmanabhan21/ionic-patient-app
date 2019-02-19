import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{DoctorsdetailsPage}from'../doctorsdetails/doctorsdetails';
// import { ProfileDashboardPageModule } from '../profile-dashboard/profile-dashboard.module';
import{ClinicdetailsPage}from'../clinicdetails/clinicdetails';
// import{GeneratetokenPage}from'../generatetoken/generatetoken'

// import { SpecialistDetailPage } from '../specialist-detail/specialist-detail';
/**
 * Generated class for the ListofdoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofdoctors',
  templateUrl: 'listofdoctors.html',
})
export class ListofdoctorsPage {

  public listofdoctors:any=[];
  public clinicanddoctor:any=[];
  public clinics:any=[]
  public doctors:any=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  this.listofdoctors = this.navParams.get("listofdoctors");
  this.clinicanddoctor = this.listofdoctors.Listofdoctors;
  this.clinics = this.clinicanddoctor[0].clinics;
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
    // console.log("ListofDoctors --> Doctor --> Doctor_Details",JSON.stringify(param));
    let doctorsdetails = this.modalCtrl.create(DoctorsdetailsPage,{"doctordetails":param});
    doctorsdetails.present();
  }
  clinicdetails(param){
    let clinicdetails = this.modalCtrl.create(ClinicdetailsPage,{"clinicdetails":param});
    clinicdetails.present();
  }

}
