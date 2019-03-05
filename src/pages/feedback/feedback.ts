import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { SessionStorageService } from 'ngx-webstorage';

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
  public feedback_service:any ={
    "satisfy_reason":""
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public api:PatientServiceProvider,
              public session: SessionStorageService,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  closeModal(){
    this.navCtrl.pop();
  }
  public feedback_resp:any={};
  submitfeedback(param){
    
    if(param.cb1 == true){
      this.feedback_resp.cb1 = "Doctor Friendliness";
      this.feedback_service.satisfy_reason = this.feedback_service.satisfy_reason+","+this.feedback_resp.cb1;
    }
    if(param.cb2 == true){
      this.feedback_resp.cb2 = "Explanation of health issue";
      this.feedback_service.satisfy_reason = this.feedback_service.satisfy_reason+","+this.feedback_resp.cb2;
    }
    if(param.cb3 == true){
      this.feedback_resp.cb3 = "Treatment satisfaction";
      this.feedback_service.satisfy_reason = this.feedback_service.satisfy_reason+","+this.feedback_resp.cb3;
    }
    if(param.cb4 == true){
      this.feedback_resp.cb4 = "Value of money";
      this.feedback_service.satisfy_reason = this.feedback_service.satisfy_reason+","+this.feedback_resp.cb4;
    }
    if(param.cb5 == true){
      this.feedback_resp.cb5 = "Wait time";
      this.feedback_service.satisfy_reason = this.feedback_service.satisfy_reason+","+this.feedback_resp.cb5;
    }
    if(param.anonymous == true){
      this.feedback_service.anonymous="yes";
    }


  // this.feedback_service.doctor_id =this.session.retrieve("doctor_id");
  // this.feedback_service.business_id = this.session.retrieve("business_id");
  // this.feedback_service.mobile = this.session.retrieve("user_mobile");
  this.feedback_service.waittime = param.waittime;
  this.feedback_service.comments = param.experience;
  this.feedback_service.anonymous = param.anonymous;
  this.feedback_service.recommend = param.recommend;
  this.feedback_service.healthproblem = param.treatment;

  console.log("rfeedback value*******",JSON.stringify(this.feedback_resp));
    this.api.feedback(this.feedback_service)
    .subscribe((resp:any) =>{
      this.feedback_resp = resp.Message_Code;
      if(this.feedback_resp == "RIS"){
        const toast = this.toastCtrl.create({
          message: 'Feedback submitted successfully',
          duration: 3000
        });
        toast.present();
      }
      else{
        const toast = this.toastCtrl.create({
          message: 'There is problem in submitting feedback',
          duration: 3000
        });
        toast.present();
      }
    });
  }
  public feedbackobj:any={}
}