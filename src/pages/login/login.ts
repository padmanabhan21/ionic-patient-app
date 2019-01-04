import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
// import { MainPage } from '../';
// import { ListMasterPage } from '../list-master/list-master';
import { TabsPage } from '../tabs/tabs';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public api:PatientServiceProvider) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  public loginobj:any={};

  navhomescreen(param){
    this.navCtrl.push('TabsPage');
    // this.api.loginUser(param)
    // .subscribe((resp:any) =>{
    //   this.login_resp = resp.MessageCode;
    //   if(this.login_resp == "RIS"){
    //     this.navCtrl.push('TabsPage');
    //   }
    //   else if(this.login_resp == "RIUS"){
    //     this.updateprofile(param);
    //   }
    // })
  }
  public login_resp:any;
  login() {
    // this.navCtrl.push('LoginPage');
   
  }

  public update_resp:any;
  updateprofile(param){
    this.api.updateLogin(param)
    .subscribe((resp:any) =>{
      this.update_resp = resp.MessageCode;
      if(this.update_resp == "RUS"){
        this.navCtrl.push('TabsPage');
      }
    });
  }
}
