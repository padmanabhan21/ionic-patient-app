import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';
import { ListofdoctorsPage } from '../pages/listofdoctors/listofdoctors';

//profile-options
import { ProfileMyDoctorsPage } from '../pages/profile-my-doctors/profile-my-doctors';
import { ProfileAppointmentsPage } from '../pages/profile-appointments/profile-appointments';
import { ProfileOnlineConsultationPage } from '../pages/profile-online-consultation/profile-online-consultation';
import { ProfileMedicalRecordsPage } from '../pages/profile-medical-records/profile-medical-records';
import { ProfileOrdersPage } from '../pages/profile-orders/profile-orders';
import { ProfileRemindersPage } from '../pages/profile-reminders/profile-reminders';
import { ProfileBookmarkedArticlesPage } from '../pages/profile-bookmarked-articles/profile-bookmarked-articles';
import { ProfileHealthInterestPage } from '../pages/profile-health-interest/profile-health-interest';
import { ProfileMyPaymentPage } from '../pages/profile-my-payment/profile-my-payment';
import { ProfileOffersPage } from '../pages/profile-offers/profile-offers';
//profile-dashboard
import{ProfileDashboardPage}from'../pages/profile-dashboard/profile-dashboard';
import{PersonalPage}from '../pages/personal/personal';
import{MedicalPage}from'../pages/medical/medical';
import{LifestylePage}from'../pages/lifestyle/lifestyle';
import{MedicalslidePage}from'../pages/medicalslide/medicalslide';
import{LifestyleslidePage} from'../pages/lifestyleslide/lifestyleslide';
//doctorsdetails
import{DoctorsdetailsPage}from'../pages/doctorsdetails/doctorsdetails';

// import { ProfileOnlineConsultationPage } from '../pages/profile-online-consultation/profile-online-consultation.module';
import { SearchdoctorPage } from '../pages/searchdoctor/searchdoctor';

import { ProfileCompleteSliderPage } from '../pages/profile-complete-slider/profile-complete-slider';
import { SpecialistDetailPage } from '../pages/specialist-detail/specialist-detail';

import { FeedbackPage } from '../pages/feedback/feedback';
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    ListofdoctorsPage,
    SearchdoctorPage,
    ProfileMyDoctorsPage,
    ProfileAppointmentsPage,
    ProfileOnlineConsultationPage,
    ProfileMedicalRecordsPage,
    ProfileOrdersPage,
    ProfileRemindersPage,
    ProfileBookmarkedArticlesPage,
    ProfileHealthInterestPage,
    ProfileMyPaymentPage,
    ProfileOffersPage,
    ProfileCompleteSliderPage,
    ProfileDashboardPage,
    PersonalPage,
    MedicalPage,
    LifestylePage,
    MedicalslidePage,
    LifestyleslidePage,
    DoctorsdetailsPage,
  // SpecialistDetailPage,
    FeedbackPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListofdoctorsPage,
    SearchdoctorPage,
    ProfileMyDoctorsPage,
    ProfileAppointmentsPage,
    ProfileOnlineConsultationPage,
    ProfileMedicalRecordsPage,
    ProfileOrdersPage,
    ProfileRemindersPage,
    ProfileBookmarkedArticlesPage,
    ProfileHealthInterestPage,
    ProfileMyPaymentPage,
    ProfileOffersPage,
    ProfileCompleteSliderPage,
    ProfileDashboardPage,
    PersonalPage,
    MedicalPage,
    LifestylePage,
    MedicalslidePage,
    LifestyleslidePage,
    DoctorsdetailsPage,
    FeedbackPage,
    // SpecialistDetailPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
