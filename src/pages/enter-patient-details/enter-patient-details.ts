import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
// import{TokenconfirmationPage}from '../tokenconfirmation/tokenconfirmation';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { AppointmentdetailsPage } from '../appointmentdetails/appointmentdetails';
import { SessionStorageService } from 'ngx-webstorage';
/**
 * Generated class for the EnterPatientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter-patient-details',
  templateUrl: 'enter-patient-details.html',
})
export class EnterPatientDetailsPage {

  public appointment_details:any=[];
  public doctor_id;
  public business_id;
  public hospital_address;
  public hospital_name;
  public user_mobile;
  public user_name;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public api:PatientServiceProvider,
              public session:SessionStorageService) {
      this.appointment_details = this.navParams.get("doctor_details");
  }

  ionViewDidLoad() {
    this.user_mobile = this.session.retrieve("user_mobile");
    this.user_name = this.session.retrieve("user_name");
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
    this.business_id = this.appointment_details.doctor_details[0].doctor_clinic[0].business_id;
    this.hospital_address = this.appointment_details.doctor_details[0].doctor_clinic[0].address
    this.hospital_name = this.appointment_details.doctor_details[0].doctor_clinic[0].business_name
    // alert(this.business_id);
    this.api.tokengeneration(this.doctor_id,this.business_id)
    .subscribe((resp:any) =>{
      if(resp.Message_Code == "TGS"){
        this.datatoappointmentdet.token_number = resp.Token_No;
        this.datatoappointmentdet.waiting_time = resp.waiting_time;
        this.datatoappointmentdet.hospital_name = this.hospital_name;
        this.datatoappointmentdet.hospital_address = this.hospital_address;
        this.datatoappointmentdet.business_id = this.business_id;
        this.datatoappointmentdet.doctor_id = this.doctor_id;
        // alert(JSON.stringify(this.datatoappointmentdet));
        this.navCtrl.push(AppointmentdetailsPage,{"token_status":this.datatoappointmentdet});
      }
      else{
        // alert(resp.Message);
      }
    });
  }
  
  closeModal() {
    this.navCtrl.pop();
  }

}
