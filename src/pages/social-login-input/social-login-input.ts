import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';


@IonicPage()
@Component({
  selector: 'page-social-login-input',
  templateUrl: 'social-login-input.html',
})
export class SocialLoginInputPage {

  public countryList:any = [];
  public loginDetails:any = [];
  
  selectOptions = {
    title: 'Choose your country',
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient,
    public api:PatientServiceProvider,
    public session:SessionStorageService,
    ) {  

    this.loginDetails = this.navParams.get("loginDetails");
    this.http.get('assets/data/countrylist.json').subscribe((data:any) => {
      this.countryList = data;
      console.log("Reading Json from asset file",JSON.stringify(this.countryList));
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialLoginInputPage');
  }

  public loginobj:any={};
  public login_resp:any;

  navhomescreen(param){
    param.name = this.loginDetails.username;
    alert(JSON.stringify(param));
    this.api.loginUser(param)
    .subscribe((resp:any) =>{
      this.login_resp = resp.Message_Code;
      
      if(this.login_resp == "RIS"){
        this.session.store("user_mobile",param.mobile);
        this.session.store("user_name",param.name);
        this.navCtrl.push('TabsPage');
        alert("user created successfully");
      }
      else if(this.login_resp == "RIUS"){
        this.updateprofile(param);
        this.session.store("user_mobile",param.mobile);
        this.session.store("user_name",param.name);
        alert("user updated successfully");
      }
      else{
        alert("please enter your mobile number");
      }
    })
  }

  public update_resp:any;
  updateprofile(param){
    this.api.updateLogin(param)
    .subscribe((resp:any) =>{
      this.update_resp = resp.Message_Code;
      if(this.update_resp == "RUS"){
        this.navCtrl.push('TabsPage');
      }
    });
  }

}
