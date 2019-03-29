import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {PatientServiceProvider} from '../../providers/patient-service/patient-service';
import { SessionStorageService} from 'ngx-webstorage';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@IonicPage()
@Component({
  selector: 'page-profile-medical-records',
  templateUrl: 'profile-medical-records.html',
})
export class ProfileMedicalRecordsPage {
  
  base64Image:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public camera: Camera,
              private photoViewer: PhotoViewer,
              public actionsheetCtrl: ActionSheetController,
              public api: PatientServiceProvider,
              public session: SessionStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMedicalRecordsPage');
    this.selectMedicalRecords();
  }

  showImage(param){
    this.photoViewer.show(param);
  }
  
  closeModal(){
    this.navCtrl.pop();
  }


  imageupload(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Choose Source',
      enableBackdropDismiss:true,
      cssClass: 'action-sheets-basic-page, small-case, font-14',
      buttons: [
        {
          text: 'Camera',
          icon:'camera',
          handler: () => {
            this.takePicture(1);
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.takePicture(0);
          }
        },
      ]
    });
    actionSheet.present();
  }

  public source_type:any;
  takePicture(param) {
    if(param == 0){
      this.source_type = this.camera.PictureSourceType.PHOTOLIBRARY;
    }
    else{
      this.source_type = this.camera.PictureSourceType.CAMERA;
    }
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType : this.source_type,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
	    targetWidth: 512,
      targetHeight: 512,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image =  imageData;
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
     //Handle error
     console.log("Camera issue: " + err);
    });
  }

  public medicalprescription:any =[];
  selectMedicalRecords(){
    this.api.selectMedicalDocs().subscribe((resp:any) =>{
      console.log("********************",JSON.stringify(resp.body.all_images));
      this.medicalprescription = resp.body.all_images;
    })
  }
}