import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile-medical-records',
  templateUrl: 'profile-medical-records.html',
})
export class ProfileMedicalRecordsPage {
  
  base64Image:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public camera: Camera) {
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
      // Do something with the new photo
      this.base64Image = 'data:image/jpeg;base64,'+ imageData;
      // alert(imageData);
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }
}