import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public api:PatientServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  closeModal(){
    this.navCtrl.pop();
  }
  public feedback_resp:any;
  submitfeedback(){
    this.api.feedback()
    .subscribe((resp:any) =>{
      this.feedback_resp = resp.MessageCode;
      if(this.feedback_resp == "RIS"){
        console.log("feedback submitted successfully");
      }
      else{
        console.log("there is problem in submitting feedback");
      }
    });
  }
}