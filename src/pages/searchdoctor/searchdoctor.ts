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
import { NgForOf } from '../../../node_modules/@angular/common';


@IonicPage()
@Component({
  selector: 'page-searchdoctor',
  templateUrl: 'searchdoctor.html',
})
export class SearchdoctorPage {

  public location: boolean = false;
  public country: string;
  public showspecialist: boolean = true;
  public showclinicanddoctors: boolean = true;

  public specialist: any = []
  searchdoctor: any = 0;
  public temp;
  public hospitals:any=[];
  public hospitalstemp:any=[];
  public doctors:any=[];
  public doctorstemp:any=[];
  searchTerm : any="";

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
  public filterclinic:any;
  public filterdoctor:any;
  search() {
    this.showspecialist  = false;
    this.showclinicanddoctors = false;
    if(this.searchTerm === undefined){
      return [];
    }
    else{
      this.filterclinic = this.hospitals.filter((hospital)=>{
        if(hospital.doctor_name.indexOf(this))
        return hospital.doctor_name.indexOf(this.searchTerm.toLowerCase()) > -1;
      })
      console.log("filter Query************", this.filterclinic);
    }
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

  closeModal() {
    this.navCtrl.pop();
  }

  getdoctorsandclinic() {
    this.api.specialist('summa')
      .subscribe((resp: any) => {
        this.specialist = resp.specialist;
        for(var i=0;i<this.specialist.length;i++){
          this.hospitalstemp.push(this.specialist[i].Listofdoctors[0].clinics);
          this.doctorstemp.push(this.specialist[i].Listofdoctors[0].Doctors);      
        }
        for(var j=0;j<this.hospitalstemp.length;j++){
          for(var i=0;i<this.hospitalstemp[j].length;i++){
            this.hospitals.push(this.hospitalstemp[j][i])
            this.doctors.push(this.doctorstemp[j][i])
          }
        }
        this.loading.dismiss();
      })
  }

  // presentLoadingCustom() {
  //   let loading = this.loadingCtrl.create({
  //     spinner: 'hide',
  //     // content: ,
  //     duration: 5000
  //   });

  //   loading.onDidDismiss(() => {
  //     console.log('Dismissed loading');
  //   });

  //   loading.present();
  // }
  //specialist array



}
