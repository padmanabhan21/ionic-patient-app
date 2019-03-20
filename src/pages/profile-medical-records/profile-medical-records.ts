import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PatientServiceProvider} from '../../providers/patient-service/patient-service';
import { SessionStorageService} from 'ngx-webstorage';

@IonicPage()
@Component({
  selector: 'page-profile-medical-records',
  templateUrl: 'profile-medical-records.html',
})
export class ProfileMedicalRecordsPage {
  
  base64Image:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public camera: Camera,
              public api: PatientServiceProvider,
              public session: SessionStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMedicalRecordsPage');
  }
  
  closeModal(){
    this.navCtrl.pop();
  }

  takePicture() {
  
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+ imageData;
      console.info(this.base64Image);
      let uploadimage = {
        "mobile":this.session.retrieve("user_mobile"),
        "base64":this.base64Image
      }
      this.api.insertMedicalDocs(uploadimage)
      .subscribe((resp:any) =>{
        alert(resp);
      })
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }
}