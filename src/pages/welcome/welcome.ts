import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { GooglePlus } from '@ionic-native/google-plus';
import { HttpClient } from '@angular/common/http';


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  user:any={};  
  loggedIn = false;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public fb:Facebook,
    public api:PatientServiceProvider,
    private googlePlus: GooglePlus,
    private http: HttpClient) { }

  loginFb(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => {
    if(res.status === 'connected'){
      this.user.img = 'http://graph.facebook.com/'+res.authResponse.userID+'/picture?type=square';
    }else{
      alert('Login Failed');
    }
    console.log('Logged into Facebook!', res)
  })
  .catch(e => console.log('Error logging into Facebook', e));

  }
  


  //google Login
  loginGP(){
    this.googlePlus.login({})
  .then(res =>{
    this.user = res;
    this.loggedIn = true;
    this.getGPData()
    console.log("GOOGLE LOGIN DETAILS",res)
  })
  .catch(err => console.error(err));
  }

  getGPData(){
    this.http.get('https://www.googleapis.com/plus/v1/people/me?access_token='+this.user.accessToken)
    .subscribe((data:any) =>{
      this.user.name = data.displayName;
      this.user.image = data.image.url;
      this.navCtrl.push('LoginPage');
    })
  }

  public login_resp:any;
  login() {
    this.navCtrl.push('LoginPage');
    // this.api.loginUser()
    // .subscribe((resp:any) =>{
    //   this.login_resp = resp.MessageCode;
    //   if(this.login_resp == "RIS"){
    //     this.navCtrl.push('LoginPage');
    //   }
    //   else if(this.login_resp == "RIUS"){
    //     this.updateprofile();
    //   }
    // })
  }
  // public update_resp:any;
  // updateprofile(){
  //   this.api.updateLogin()
  //   .subscribe((resp:any) =>{
  //     this.update_resp = resp.MessageCode;
  //     if(this.update_resp == "RUS"){
  //       this.navCtrl.push('LoginPage');
  //     }
  //   });
  // }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  troublesignin(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Trouble Signing in?',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Login with your email account',
          role: 'destructive',
          cssClass: 'font-size-12',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Contact customer support',
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
