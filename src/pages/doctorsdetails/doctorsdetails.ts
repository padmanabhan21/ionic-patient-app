import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
/**
 * Generated class for the DoctorsdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctorsdetails',
  templateUrl: 'doctorsdetails.html',
})
export class DoctorsdetailsPage {
  public totalclinic = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public actionsheetCtrl: ActionSheetController,
  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsdetailsPage');
  }
  navtofeedback(){
    if(this.totalclinic >= 2){
    this.feedbackforclinic();
    }
  }

  feedbackforclinic(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Which clinic did you visit?',
      cssClass: 'action-sheets-basic-page, small-case',
      buttons: [
        {
          text: 'Jayam Hospital & GFC Fertility',
          role: 'destructive',
          cssClass: 'font-size-12, small-case',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            let feedback = this.modalCtrl.create(FeedbackPage);
            feedback.present();
            // console.log('Delete clicked');
          }
        },
        {
          text: 'Centrepoint Clinic',
          role: 'destructive',
          cssClass: 'small-case',
          // icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
