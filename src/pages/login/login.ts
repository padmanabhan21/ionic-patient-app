import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { SessionStorageService } from 'ngx-webstorage';

import { User } from '../../providers';
// import { MainPage } from '../';
// import { ListMasterPage } from '../list-master/list-master';
// import { TabsPage } from '../tabs/tabs';
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
  account: { 
    email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  public loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public api:PatientServiceProvider,
    public session:SessionStorageService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  public loginobj:any={};
  public login_resp:any;

  navhomescreen(param){
    // this.navCtrl.push('TabsPage');
    this.api.loginUser(param)
    .subscribe((resp:any) =>{
      this.login_resp = resp.Message_Code;
      //uncomment this please later for testing purpose commented 
      // this.navCtrl.push('TabsPage');

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
        this.navCtrl.push('TabsPage');
      }
    });
  }
}
