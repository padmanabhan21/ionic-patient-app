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
  public minDate;
  public maxDate;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public api:PatientServiceProvider,
              public session:SessionStorageService,
              public actionsheetCtrl:ActionSheetController,
              ) {
      this.appointment_details = this.navParams.get("doctor_details");
      this.clinic_details = this.navParams.get("clinic_details");
  }

  ionViewDidLoad() {
    this.user_mobile = this.session.retrieve("user_mobile");
    this.user_name = this.session.retrieve("user_name");
    this.business_id = this.clinic_details.clinic_id;
    this.hospital_name = this.clinic_details.clinic_name;
    this.hospital_location = this.clinic_details.clinic_location;
    this.minDate = new Date().toISOString();
    this.maxDate = this.addDays(new Date(),6).toISOString();
    
    console.log('Appointment Confirmation Screen',JSON.stringify(this.appointment_details));
  }
  
  addDays(dateObj, numDays) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
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
  
  tokenconfirmation(param){
    // alert("Appointment Date: "+param);
    this.doctor_id = this.appointment_details.doctor_profile_id;
    this.doctor_clinic_list = this.appointment_details.doctor_clinic;

    // this.business_id = this.appointment_details.doctor_details[0].doctor_clinic[0].business_id;
    this.hospital_address = this.appointment_details.doctor_details[0].doctor_clinic[0].address
    this.hospital_name = this.appointment_details.doctor_details[0].doctor_clinic[0].business_name

    if(param === undefined){
      alert("please choose your appointment date")
    }
    else{
      this.api.tokengeneration(this.doctor_id,this.business_id,param)
      .subscribe((resp:any) =>{
        if(resp.Message_Code == "TGUS" || resp.Message_Code == "TGTW"){
          alert(resp.Message);
        }
        else{
          this.datatoappointmentdet.token_number = resp.Token_No;
          this.datatoappointmentdet.waiting_time = resp.Waiting_Time;
          this.datatoappointmentdet.hospital_name = this.hospital_name;
          this.datatoappointmentdet.appointment_id = resp.Appointment_id;
          this.datatoappointmentdet.hospital_address = this.hospital_address;
          this.datatoappointmentdet.business_id = this.business_id;
          this.datatoappointmentdet.doctor_id = this.doctor_id;
          this.datatoappointmentdet.appointment_date = param;
          this.navCtrl.push(AppointmentdetailsPage,{"token_status":this.datatoappointmentdet,"appointmentdetails":this.appointment_details});
        }
      });
    }
  }
  
  closeModal() {
    this.navCtrl.pop();
  }
}
