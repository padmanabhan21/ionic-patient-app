import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientServiceProvider} from '../../providers/patient-service/patient-service';

@IonicPage()
@Component({
  selector: 'page-otpverify',
  templateUrl: 'otpverify.html',
})
export class OtpverifyPage {

  public otp_data:any =
  {
   "user_mobile":"",
   "user_country":"",
   "user_otp":"",
   "user_name":""
  };
  public ctrycode;
  public mobile;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public api: PatientServiceProvider) {
        this.otp_data = this.navParams.get("user_login_data");        
        this.ctrycode = this.otp_data.countrycode;
        this.mobile = this.otp_data.mobile;
  }

  ionViewDidLoad() {
    console.log("LOGIN DATA FROM LOGIN PAGE TO OTP VERIFY PAGE",JSON.stringify(this.otp_data));
    console.log('ionViewDidLoad OtpverifyPage');
    this.sendotp();
  }
  sendotp(){
    this.api.sendotp(this.otp_data)
    .subscribe((resp:any) =>{
      if(resp[0].type == "success"){
        // alert("OTP has been sent to your mobile");
      }
    });
  }

  verifyotp(param){
    this.otp_data.user_otp = param;
    this.api.verifyotp(this.otp_data)
    .subscribe((resp:any) =>{
      if(resp[0].type == "success"){
        // alert("your mobile number has been verified");
        this.navCtrl.push('TabsPage')
        // navigate to tabs page
      }
    });
  }
}
