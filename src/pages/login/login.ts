import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular'
import { OtpverifyPage } from '../otpverify/otpverify';
import { CallNumber } from '@ionic-native/call-number';

import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import { User } from '../../providers';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  

  selectOptions = {
    title: 'Choose your country',
  };

  account: { 
    email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };


  // Our translated text strings
  public loginErrorString: string;
  public countryList:any = [];
  //form validation
  loginform:FormGroup;
  country:AbstractControl;
  mobile:AbstractControl;
  username:AbstractControl;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public api:PatientServiceProvider,
    public session:SessionStorageService,
    public http:HttpClient,
    public formbuilder: FormBuilder,
    public actionsheet:ActionSheetController,
    private callNumber: CallNumber) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.http.get('assets/data/countrylist.json').subscribe((data:any) => {
      this.countryList = data;
      console.log("Reading Json from asset file",JSON.stringify(this.countryList));
    });
    //formgroup 
    this.loginform = formbuilder.group({
      country:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10)]],
      username:['',Validators.required]
    });

    this.country = this.loginform.controls['country'];
    this.mobile = this.loginform.controls['mobile'];
    this.username = this.loginform.controls['username'];
 
  }
  public loginobj:any={};
  public login_resp:any;

  callnumber(){
    this.callNumber.callNumber("9700820429", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));

  }
  navhomescreen(param){
    // this.navCtrl.push('TabsPage');
    this.api.loginUser(param)
    .subscribe((resp:any) =>{
      this.login_resp = resp.Message_Code;
      // uncomment this please later for testing purpose commented 
      // this.navCtrl.push('TabsPage');

      if(this.login_resp == "RIS"){
        this.session.store("user_mobile",param.mobile);
        this.session.store("user_name",param.name);
        this.session.store("user_country",param.countrycode);
        this.navCtrl.push(OtpverifyPage,{"user_login_data":param});
        // this.navCtrl.push('TabsPage');

        // alert("user created successfully");
      }
      else if(this.login_resp == "RIUS"){
        this.updateprofile(param);
        this.session.store("user_mobile",param.mobile);
        this.session.store("user_name",param.name);
        this.session.store("user_country",param.countrycode);
        // alert("user updated successfully");
      }
      else{
        alert("please enter your mobile and name");
      }
    })
  }

  public update_resp:any;
  updateprofile(param){
    this.api.updateLogin(param)
    .subscribe((resp:any) =>{
      this.update_resp = resp.Message_Code;
      if(this.update_resp == "RUS"){
        this.navCtrl.push(OtpverifyPage,{"user_login_data":param});
        // this.navCtrl.push('TabsPage');
      }
    });
  }
}
