import { Component } from '@angular/core';
import { IonicPage, 
         NavController, 
         NavParams, 
         Platform, 
         ActionSheetController, 
         LoadingController } from 'ionic-angular';
import { CameraProvider } from '../../providers/util/camera.provider';

/**
 * Generated class for the ProfileMedicalRecordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-medical-records',
  templateUrl: 'profile-medical-records.html',
})
export class ProfileMedicalRecordsPage {
  
  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionsheetCtrl: ActionSheetController,
              public cameraProvider: CameraProvider,
              public platform: Platform,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMedicalRecordsPage');
  }
  
  closeModal(){
    this.navCtrl.pop();
  }

  changePicture() {

    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {

    this.platform.ready().then(()=>{
      if(this.platform.is('cordova')){
        const loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
          if (picture) {
            this.chosenPicture = picture;
          }
          loading.dismiss();
        }, error => {
          alert(error);
        }).catch(e =>{
          alert(e);
        })
      }
   });
  }
}