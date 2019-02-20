import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SessionStorageService } from 'ngx-webstorage';

import { Settings } from '../../providers';

//profile-options
import { ProfileMyDoctorsPage } from '../profile-my-doctors/profile-my-doctors';
import { ProfileAppointmentsPage } from '../profile-appointments/profile-appointments';
import { ProfileOnlineConsultationPage } from '../profile/profile-online-consultation/profile-online-consultation';
import { ProfileMedicalRecordsPage } from '../profile-medical-records/profile-medical-records';
import { ProfileOrdersPage } from '../profile/profile-orders/profile-orders';
import { ProfileRemindersPage } from '../profile/profile-reminders/profile-reminders';
import { ProfileBookmarkedArticlesPage } from '../profile/profile-bookmarked-articles/profile-bookmarked-articles';
import { ProfileHealthInterestPage } from '../profile/profile-health-interest/profile-health-interest';
import { ProfileMyPaymentPage } from '../profile-my-payment/profile-my-payment';
// import { ProfileOffersPage } from '../profile-offers/profile-offers';

import { ProfileCompleteSliderPage } from '../profile-complete-slider/profile-complete-slider';
import{ProfileDashboardPage}from'../profile-dashboard/profile-dashboard';
/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;
    public user_mobile_num;
    public user_name;
  settingsReady = false;

  form: FormGroup;
  public profileOptions:any=[
    {id:"1",name:"My doctors"},
    {id:"2",name:"Appointments"},
    // {id:"3",name:"Online consultations"},
    {id:"4",name:"Medical records"},
    // {id:"5",name:"Orders"},
    // {id:"6",name:"Reminders"},
    // {id:"7",name:"Bookmarked articles"},
    // {id:"8",name:"Health interests"},
    {id:"9",name:"My payments"},
    // {id:"10",name:"Offers"},
  ]
  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    public session:SessionStorageService,
    public modalCtrl: ModalController) {
  }

  navprofileoptions(item){
    if(item.id == "1"){
      let doctor = this.modalCtrl.create(ProfileMyDoctorsPage);
      doctor.present();
    }
    if(item.id == "2"){
      let appointment = this.modalCtrl.create(ProfileAppointmentsPage);
      appointment.present();
    }
    // if(item.id == "3"){
    //   let online = this.modalCtrl.create(ProfileOnlineConsultationPage);
    //   online.present();
    // }
    if(item.id == "4"){
      let medicalrecord = this.modalCtrl.create(ProfileMedicalRecordsPage);
      medicalrecord.present();
    }
    // if(item.id == "5"){
    //   let orders = this.modalCtrl.create(ProfileOrdersPage);
    //   orders.present();
    // }
    // if(item.id == "6"){
    //   let reminder = this.modalCtrl.create(ProfileRemindersPage);
    //   reminder.present();
    // }
    // if(item.id == "7"){
    //   let bookmark = this.modalCtrl.create(ProfileBookmarkedArticlesPage);
    //   bookmark.present();
    // }
    // if(item.id == "8"){
    //   let health = this.modalCtrl.create(ProfileHealthInterestPage);
    //   health.present();
    // }
    if(item.id == "9"){
      let payment = this.modalCtrl.create(ProfileMyPaymentPage);
      payment.present();
    }
    // if(item.id == "10"){
    //   let offers = this.modalCtrl.create(ProfileOffersPage);
    //   offers.present();
    // }
  }

  navprofilecomplete(){
    let completeprofile = this.modalCtrl.create(ProfileCompleteSliderPage);
    completeprofile.present();
  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
    this.user_mobile_num = this.session.retrieve("user_mobile");
    this.user_name = this.session.retrieve("user_name");
    console.log("mobileeeee",this.user_mobile_num);
    console.log("nameeeeee",this.user_name);

  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
  bala(){
    this.navCtrl.push(ProfileDashboardPage);
    // nav.present();
    // this.navCtrl.push(ProfileDashboardPage);
  }
}
