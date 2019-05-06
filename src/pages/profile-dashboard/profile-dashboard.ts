import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{PersonalPage}from '../personal/personal';
import{MedicalPage}from'../medical/medical';
import{LifestylePage}from'../lifestyle/lifestyle';

/**
 * Generated class for the ProfileDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-dashboard',
  templateUrl: 'profile-dashboard.html',
})
export class ProfileDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.navParams = navParams;
      console.log(this.navParams);
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDashboardPage');
  }


  tab1root=PersonalPage;
  tab2root=MedicalPage;
  tab3root=LifestylePage;



  closeModal(){
    this.navCtrl.pop();
  }
}
