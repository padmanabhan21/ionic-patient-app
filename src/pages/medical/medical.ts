import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{MedicalslidePage}from'../medicalslide/medicalslide';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html',
})
export class MedicalPage {
   public medical:any={};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage) {
          this.medical = {
            "info":"medical",
            "allergies":"no",
            "current_medication":"no",
            "past_medication":"no",
            "chronic_disease":"no",
            "injuries":"no",
            "surgeries":"no"
          }      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalPage');
    this.storage.get('medical-profile').then((val:any) =>{
      if(val){
        this.medical = JSON.parse(val);
        console.log("We found your medical-records in storage**********",this.medical);
      }
      else{
        console.log("We couldn't find your medical-records in storage**********");
      }
    })
  }

  navmedicalslide(){
    let medicalslide = this.modalCtrl.create(MedicalslidePage);
    medicalslide.onDidDismiss((data) => {
      if (data === "success") {
        this.storage.get('medical-profile').then((val: any) => {
          if (val) {
            this.medical = JSON.parse(val);
          }
          else {
          }
        })
      }
    })
    medicalslide.present();
  } 
}
