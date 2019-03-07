//basic angular libraries
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from "ngx-webstorage";


//basic ionic libraries
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//unknows imports
import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';

//Ionic Native libraries
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
// import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CallNumber } from '@ionic-native/call-number';

//SplashScreen (Yet to Do)

//Slider
// import { TutorialPage } from '../pages/tutorial/tutorial'; //its been set in root module

//Login
// import { WelcomePage } from '../pages/welcome/welcome';
import { SocialLoginInputPage } from '../pages/social-login-input/social-login-input';

import { OtpverifyPage } from '../pages/otpverify/otpverify';
// import { LoginPage } from '../pages/login/login';

//Dashboard
// import { TabsPage } from '../pages/tabs/tabs';
// import { ListMasterPage } from '../pages/list-master/list-master';
// import { SearchPage } from '../pages/search/search';//for blog
// import { SettingsPage } from '../pages/settings/settings';//for profile

//(ListMasterPage-->Home-->Navigation) Geo-Location based search page
import { SearchdoctorPage } from '../pages/searchdoctor/searchdoctor';

//clinics and doctor list (horizontal scroll and vertical scroll)
import { ListofdoctorsPage } from '../pages/listofdoctors/listofdoctors';

//clinic details
import{ClinicdetailsPage}from'../pages/clinicdetails/clinicdetails';
import{AlltimingsPage}from'../pages/alltimings/alltimings';
import{ClinicordoctorservicePage}from '../pages/clinicordoctorservice/clinicordoctorservice';


//Doctors Details Page
import{DoctorsdetailsPage}from'../pages/doctorsdetails/doctorsdetails';
import{DoctortimigsPage} from '../pages/doctortimigs/doctortimigs';
import{SelectdifferentclinicPage}from '../pages/selectdifferentclinic/selectdifferentclinic';
import{DocterservicesPage}from '../pages/docterservices/docterservices';
//need to create specialization screen
import { FeedbackPage } from '../pages/feedback/feedback';

//Appointment Confirmation(enter patient detail,confirmation)
import{EnterPatientDetailsPage}from'../pages/enter-patient-details/enter-patient-details';
import{TokenconfirmationPage}from'../pages/tokenconfirmation/tokenconfirmation';//removed right now
import{AppointmentdetailsPage}from'../pages/appointmentdetails/appointmentdetails';
import{LivefeedPage} from '../pages/livefeed/livefeed';
//have to create a page for map

//(ListMasterPage-->SettingsPage-->Navigation) (completeslider,myappointments,mydoctor,payment,records)
import { ProfileMyDoctorsPage } from '../pages/profile-my-doctors/profile-my-doctors';
import { ProfileAppointmentsPage } from '../pages/profile-appointments/profile-appointments';
import { ProfileMedicalRecordsPage } from '../pages/profile-medical-records/profile-medical-records';
import { ProfileMyPaymentPage } from '../pages/profile-my-payment/profile-my-payment';
//Socila shere

//profile dashboard
import{ProfileDashboardPage}from'../pages/profile-dashboard/profile-dashboard';
import{PersonalPage}from '../pages/personal/personal';
import{MedicalPage}from'../pages/medical/medical';
import{LifestylePage}from'../pages/lifestyle/lifestyle';
import{MedicalslidePage}from'../pages/medicalslide/medicalslide';
import{LifestyleslidePage} from'../pages/lifestyleslide/lifestyleslide';
import { ProfileCompleteSliderPage} from '../pages/profile-complete-slider/profile-complete-slider';
//profile myappointments
import{MyappointmentdetailsPage} from '../pages/myappointmentdetails/myappointmentdetails';


//API service
import { PatientServiceProvider } from '../providers/patient-service/patient-service';


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
    //slider
    // TutorialPage, //its been set in root module

    //Login
    // WelcomePage,
    SocialLoginInputPage,
    
    // LoginPage,

    //Dashboard

    // TabsPage,
    // ListMasterPage,
    // SearchPage,
    // SettingsPage,
    OtpverifyPage,

    //ListMasterPage (Home Tab)
    SearchdoctorPage,

    //clinics and doctor list
    ListofdoctorsPage,

    //clinic details
    ClinicdetailsPage,
    AlltimingsPage,
    ClinicordoctorservicePage,

    //doctor details page
    DoctorsdetailsPage,
    DoctortimigsPage,
    SelectdifferentclinicPage,
    DocterservicesPage,
    FeedbackPage,

    //Appointment Confirmation
    EnterPatientDetailsPage,
    TokenconfirmationPage,
    AppointmentdetailsPage,
    LivefeedPage,

    //Profile
    ProfileMyDoctorsPage,
    ProfileAppointmentsPage,
    ProfileMedicalRecordsPage,
    ProfileMyPaymentPage,
    //social shere
    

    //profile details
    ProfileDashboardPage,
    PersonalPage,
    MedicalPage,
    LifestylePage,
    MedicalslidePage,
    LifestyleslidePage,
    ProfileCompleteSliderPage,
    MyappointmentdetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    Ng2Webstorage,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp,{
      scrollPadding:false,
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //slider
    // TutorialPage, //its been set in root module

    //Login
    // WelcomePage,
    SocialLoginInputPage,
    // LoginPage,

    //Dashboard

    // TabsPage,
    // ListMasterPage,
    // SearchPage,
    // SettingsPage,
    OtpverifyPage,
    //ListMasterPage (Home Tab)
    SearchdoctorPage,

    //clinics and doctor list
    ListofdoctorsPage,

    //clinic details
    ClinicdetailsPage,
    AlltimingsPage,
    ClinicordoctorservicePage,

    //doctor details page
    DoctorsdetailsPage,
    DoctortimigsPage,
    SelectdifferentclinicPage,
    DocterservicesPage,
    FeedbackPage,

    //Appointment Confirmation
    EnterPatientDetailsPage,
    TokenconfirmationPage,
    AppointmentdetailsPage,
    LivefeedPage,

    //Profile
    ProfileMyDoctorsPage,
    ProfileAppointmentsPage,
    ProfileMedicalRecordsPage,
    ProfileMyPaymentPage,

    //profile details
    ProfileDashboardPage,
    PersonalPage,
    MedicalPage,
    LifestylePage,
    MedicalslidePage,
    LifestyleslidePage,
    ProfileCompleteSliderPage,
    MyappointmentdetailsPage,
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    Facebook,
    GooglePlus,
    PatientServiceProvider,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    SocialSharing,
    BarcodeScanner,
    CallNumber,
  ]
})

export class AppModule {
  
 }
