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
  public feedback_service:any ={
    "satisfy_reason":""
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public api:PatientServiceProvider) {
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


  this.feedback_service.doctor_id ="padm36";
  this.feedback_service.business_id = 24;
  this.feedback_service.mobile = "8678942410";
  this.feedback_service.waittime = param.waittime;
  this.feedback_service.comments = param.experience;
  this.feedback_service.anonymous = param.anonymous;
  this.feedback_service.recommend = param.recommend;
  this.feedback_service.healthproblem = param.treatment;

  


  console.log("rfeedback value*******",JSON.stringify(this.feedback_resp));
    this.api.feedback(this.feedback_service)
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
  public feedbackobj:any={}
}