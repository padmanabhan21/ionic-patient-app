import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  ActionSheetController
} from 'ionic-angular';
import { ListofdoctorsPage } from '../listofdoctors/listofdoctors';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import{DoctorsdetailsPage}from'../doctorsdetails/doctorsdetails';
import{ClinicdetailsPage}from'../clinicdetails/clinicdetails';


@IonicPage()
@Component({
  selector: 'page-searchdoctor',
  templateUrl: 'searchdoctor.html',
})
export class SearchdoctorPage {

  public location: boolean = false;
  public country: string;
  public showspecialist:any = 'flex';
  public showclinicanddoctors:any='none';

  public specialist: any = []
  searchdoctor: any = 0;
  public temp;
  public hospitals: any = [];
  public hospitalstemp: any = [];
  public doctors: any = [];
  public doctorstemp: any = [];
  searchTerm: any = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalctrl: ModalController,
    public api: PatientServiceProvider,
    public loadingCtrl: LoadingController,
    public actionsheetCtrl: ActionSheetController) {
  }

  public loading;
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchdoctorPage');
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    this.getdoctorsandclinic();
  }

  public filterclinic: any =[];
  public filterdoctor: any;
  search(searchTerm) {
    console.log("testtttt",searchTerm.length)
    if (searchTerm == "" || searchTerm === undefined || searchTerm.length == 0) {
      this.showspecialist = 'flex';
      this.filterclinic=[];
      this.showclinicanddoctors = 'none';
    }
    else {
      this.showclinicanddoctors= 'block';
      this.showspecialist = 'none';
      this.filterclinic = this.hospitals.filter((hospital) => {
        return hospital.business_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
      this.filterdoctor = this.doctors.filter((doctor)=>{
        return doctor.doctor_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }
    console.log("filter Query************", this.filterdoctor);
  }

  cancelsearch() {
    console.log("Search Query Cancelled");
  }

  public countryList: any;
  showlocation() {
    this.api.selectCountry()
      .subscribe((resp: any) => {
        if (resp.Message_Code == "RSS") {
          this.countryList = resp.output;
          let actionSheet = this.actionsheetCtrl.create({
            title: 'choose country',
            cssClass: 'action-sheets-basic-page, small-case, font-14',
            buttons: this.createButtons()
          });
          actionSheet.present();
        }
      });
  }

  public createButtons() {
    let buttons = [];
    for (let country in this.countryList) {
      let button = {
        text: this.countryList[country].country_name,
        handler: () => {
          this.country = this.countryList[country].country_name;
          this.location = true;
        }
      }
      buttons.push(button);
    }
    return buttons;
  }


  navspecialist(param) {
    console.log("clicked")
    let navtodoc = this.modalctrl.create(ListofdoctorsPage, { "listofdoctors": param }, { cssClass: "modal-fullscreen" });
    navtodoc.present();
  }

  navdoctorsdetails(param){
    let doctorsdetails = this.modalctrl.create(DoctorsdetailsPage,{"doctordetails":param});
    doctorsdetails.present();
  }

  clinicdetails(param){
    let clinicdetails = this.modalctrl.create(ClinicdetailsPage,{"clinicdetails":param});
    clinicdetails.present();
  }

  closeModal() {
    this.navCtrl.pop();
  }

  getdoctorsandclinic() {
    this.api.specialist('summa')
      .subscribe((resp: any) => {
        this.specialist = resp.specialist;
        console.log("FULL LIST******",this.specialist);
        for (var i = 0; i < this.specialist.length; i++) {
          this.hospitalstemp.push(this.specialist[i].Listofdoctors[0].clinics);
          this.doctorstemp.push(this.specialist[i].Listofdoctors[0].Doctors);
        }
        for (var j = 0; j < this.hospitalstemp.length; j++) {
          for (var i = 0; i < this.hospitalstemp[j].length; i++) {
            this.hospitals.push(this.hospitalstemp[j][i])
         }
        }
        for (var j = 0; j < this.doctorstemp.length; j++) {
          for (var i = 0; i < this.doctorstemp[j].length; i++) {
            if(this.doctorstemp[j].length == 0){

            }else{
              this.doctors.push(this.doctorstemp[j][i])
            }
         }
        }
        this.loading.dismiss();
        console.log("HOSPITAL LIST****", this.hospitals.length);
        console.log("DOCTOR LIST****", this.doctors);

      })
  }
}
