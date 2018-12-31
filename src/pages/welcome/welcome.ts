import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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
  constructor(public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public fb:Facebook) { }

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
  
  login() {
    this.navCtrl.push('LoginPage');
  }

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
