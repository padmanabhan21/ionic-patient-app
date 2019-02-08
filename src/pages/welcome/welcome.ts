import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { GooglePlus } from '@ionic-native/google-plus';
import { HttpClient } from '@angular/common/http';
import { SocialLoginInputPage } from '../social-login-input/social-login-input';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {
  user:any={};  
  loggedIn = false;
  userData = null;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public fb:Facebook,
    public api:PatientServiceProvider,
    private googlePlus: GooglePlus,
    private http: HttpClient) { }

  //facebook login  
  loginFb(){
    //email,picture,username
   this.fb.login(['email','public_profile']).then((response:FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
        this.userData = {email:profile['email'],first_name:profile['first_name'],picture:profile['picture_large']['data']['url'],username:profile['name']};
        alert(JSON.stringify(this.userData));
        this.navCtrl.push(SocialLoginInputPage,{"loginDetails":this.userData});
      }).catch(e =>{
        console.log(e);
      })
    })
  }

  //facebook logout
  logoutFromFB(){
    this.fb.logout().then(resp =>{
      console.log("Logged Out from Facebook");
    }).catch(e =>{
      console.log("got error logging out", e);
    })
  }

  //google Login
  loginGP(){
    //name,image,email
    this.googlePlus.login({})
  .then((res:any) =>{
    this.user = res;
    this.http.get('https://www.googleapis.com/plus/v1/people/me?access_token='+this.user.accessToken)
    .subscribe((data:any) =>{
      this.userData.username = data.displayName;
      this.userData.picture = data.image.url;
      this.userData.email = this.user.email;
      this.navCtrl.push(SocialLoginInputPage,{"loginDetails":this.userData});
    })
    // this.getGPData();
    // alert(JSON.stringify(res));
    console.log("GOOGLE LOGIN DETAILS",res)
  })
  .catch(err => console.error(err));
  }

  //getting user data using google api with token number
  getGPData(){
    this.http.get('https://www.googleapis.com/plus/v1/people/me?access_token='+this.user.accessToken)
    .subscribe((data:any) =>{
      this.userData.username = data.displayName;
      this.userData.picture = data.image.url;
      this.userData.email = this.user.email;
      alert(JSON.stringify(this.userData));
      console.log("*************************************",JSON.stringify(this.userData))
      this.navCtrl.push(SocialLoginInputPage,{"loginDetails":this.userData});
    })
  }

  //normal login navigate
  login() {
    this.navCtrl.push('LoginPage');
  }

  //sign up page not used
  signup() {
    this.navCtrl.push('SignupPage');
  }

  troublesignin(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Trouble Signing in?',
      cssClass: 'action-sheets-basic-page, font-size-12',
      buttons: [
        {
          text: 'Login with your email account',
          cssClass: 'font-size-12',
          icon: 'mail',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Contact customer support',
          icon: 'call',
          handler: () => {
            console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
