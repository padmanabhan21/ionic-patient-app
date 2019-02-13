import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ActionSheetController} from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { AppointmentdetailsPage } from '../appointmentdetails/appointmentdetails';
import { SessionStorageService } from 'ngx-webstorage';


@IonicPage()
@Component({
  selector: 'page-enter-patient-details',
  templateUrl: 'enter-patient-details.html',
})
export class EnterPatientDetailsPage {

  public appointment_details:any=[];
  public doctor_clinic_list:any=[];
  public doctor_id;
  public business_id;
  public hospital_address;
  public hospital_name;
  public hospital_location;
  public user_mobile;
  public user_name;
  public clinic_details:any=[];
  public scope;
  // EnterPatientDetailsPage.scope: any
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public api:PatientServiceProvider,
              public session:SessionStorageService,
              public actionsheetCtrl:ActionSheetController,
              ) {
                // today :Date;
      this.appointment_details = this.navParams.get("doctor_details");
      this.clinic_details = this.navParams.get("clinic_details");
  }

  ionViewDidLoad() {
    this.user_mobile = this.session.retrieve("user_mobile");
    this.user_name = this.session.retrieve("user_name");
    this.business_id = this.clinic_details.clinic_id;
    this.hospital_name = this.clinic_details.clinic_name;
    this.hospital_location = this.clinic_details.clinic_location;

    console.log('Appointment Confirmation Screen',JSON.stringify(this.appointment_details));
  }

  public datatoappointmentdet:any=
    {
      "token_number":"",
      "waiting_time":"",
      "hospital_name":"",
      "hospital_address":"",
      "business_id":"",
      "doctor_id":""
    }
  
  tokenconfirmation(){
    this.doctor_id = this.appointment_details.doctor_profile_id;
    this.doctor_clinic_list = this.appointment_details.doctor_clinic;

    // this.business_id = this.appointment_details.doctor_details[0].doctor_clinic[0].business_id;
    this.hospital_address = this.appointment_details.doctor_details[0].doctor_clinic[0].address
    this.hospital_name = this.appointment_details.doctor_details[0].doctor_clinic[0].business_name

    this.api.tokengeneration(this.doctor_id,this.business_id)
    .subscribe((resp:any) =>{
      if(resp.Message_Code == "TGS"){
        this.datatoappointmentdet.token_number = resp.Token_No;
        this.datatoappointmentdet.waiting_time = resp.waiting_time;
        this.datatoappointmentdet.hospital_name = this.hospital_name;
        this.datatoappointmentdet.appointment_id = resp.appointment_id;
        this.datatoappointmentdet.hospital_address = this.hospital_address;
        this.datatoappointmentdet.business_id = this.business_id;
        this.datatoappointmentdet.doctor_id = this.doctor_id;
        this.navCtrl.push(AppointmentdetailsPage,{"token_status":this.datatoappointmentdet,"appointmentdetails":this.appointment_details});
        console.log("doctordetailsssssssss",this.datatoappointmentdet)
      }
      else{
        // alert(resp.Message);
      }
    });
  }
  
  closeModal() {
    this.navCtrl.pop();
  }
  
  // this.scope.today = function() 
  // {
  //   this.scope.dt = new Date();
  // };
   // Disable weekend selection
  //  function disabled(data) {
  //   var date = data.date,
  //     mode = data.mode;
  //   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  // }
 
  //  this.today = new Date()
  //  var priorDate = new Date().setDate(today.getDate()+7)
}
