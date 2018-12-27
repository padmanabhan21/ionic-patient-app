import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClinicordoctorservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clinicordoctorservice',
  templateUrl: 'clinicordoctorservice.html',
})
export class ClinicordoctorservicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  services:any [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClinicordoctorservicePage');
    this.services=[
      { dot:".",servi:"Pre and Post Delivery Care"},
      { dot:".",servi:"High Risk Pregnancy Care"},
      { dot:".",servi:"Diseases in Pregnancy"},
      { dot:".",servi:"Infertility Evaluation/Treatment"},
      { dot:".",servi:"Prenatal Checkup"},
      { dot:".",servi:"Obstetrics/Antenatal Care"},
      { dot:".",servi:"Women's Helth"},
      { dot:".",servi:"Nutrition for Pregnnt Women"},
      { dot:".",servi:"Pregnant Woment Counseling"},
      { dot:".",servi:"Obstetrics Problems"},
      { dot:".",servi:"Child Birth Education"},
      { dot:".",servi:"Amniocentesis"},
      { dot:".",servi:"Cervical Cerclage"},
      { dot:".",servi:"Cordocentesis"},
      { dot:".",servi:"Merena(Hormonal lud)"},
      { dot:".",servi:"Quad Screen"},
      { dot:".",servi:"Essure System"},
      { dot:".",servi:"Artificial Insermination"},
      { dot:".",servi:"Caesarean Section/C-Section"},
      { dot:".",servi:"Hysterectomy(Abdominal/VAginal)"},
      { dot:".",servi:"Tubectomy/Tubal Ligation"},
      { dot:".",servi:"pap Smear"},
      { dot:".",servi:"Infertitlity Evaaluation/Treatment"},
      { dot:".",servi:"Normal Vaginal Delivery(NVD)"},
      { dot:".",servi:"Pregnancy care & Ultrasound"},
      { dot:".",servi:"Pregnancy Class"},
      { dot:".",servi:"Post Pregnancy Calsses"},
      { dot:".",servi:"PCOD"},
      { dot:".",servi:"Sexual Problems"},
      { dot:".",servi:"Mestruual Disorders in Adolescent Girls"},
      { dot:".",servi:"intravenous Pyelogram"},
      { dot:".",servi:"NOrmal & High RIsk Pregnancy"},
      { dot:".",servi:"Mestruual Disorders in Adolescent Girls"},
      { dot:".",servi:"Hormonal therapy"}

    ]
    console.log("service working",this.services)
  }
  closeModal() {
    this.navCtrl.pop();
  }

}
