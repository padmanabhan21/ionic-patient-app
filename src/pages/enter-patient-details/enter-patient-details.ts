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
  public email_id;
  public clinic_details:any=[];
  public scope;
  public minDate;
  public maxDate;
  public message:string;
  public mobile;
  public qualification;
  public experience;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public api:PatientServiceProvider,
              public session:SessionStorageService,
              public actionsheetCtrl:ActionSheetController,
              ) {
      this.appointment_details = this.navParams.get("doctor_details");
      this.clinic_details = this.navParams.get("clinic_details");
      this.qualification = this.appointment_details.qualification;
      this.experience =this.appointment_details.experience;
      console.log("qualification"+this.qualification,"experience"+this.experience)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterPatientDetailsPage');
    console.log("Doctor Detials********",JSON.stringify(this.appointment_details));
    console.log("Clinic Details********",JSON.stringify(this.clinic_details));
    this.user_mobile = this.session.retrieve("user_mobile");
    this.user_name = this.session.retrieve("user_name");
    
    this.qualification = this.appointment_details.qualification;
      this.experience =this.appointment_details.experience;
      console.log("qualification"+this.qualification,"experience"+this.experience)
    this.business_id = this.clinic_details.clinic_id;
    this.hospital_name = this.clinic_details.clinic_name;
    this.hospital_location = this.clinic_details.clinic_location;
    this.minDate = new Date().toISOString();
    this.maxDate = this.addDays(new Date(),6).toISOString();
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
      "doctor_id":"",
      "clinic_lat":"",
      "clinic_long":""
    }
  
  tokenconfirmation(param1,param2){
    this.doctor_id = this.appointment_details.doctor_profile_id;
    this.doctor_clinic_list = this.appointment_details.doctor_clinic;
    

    this.hospital_address = this.appointment_details.doctor_details[0].doctor_clinic[0].address
    this.hospital_name = this.appointment_details.doctor_details[0].doctor_clinic[0].business_name

    if(param1 === undefined){
      alert("please choose your appointment date");
      
    }
    else{
      this.api.tokengeneration(this.doctor_id,this.business_id,param1)
      .subscribe((resp:any) =>{
        if(resp.Message_Code == "TGUS" || resp.Message_Code == "TGTW" || resp.Message_Code == "BTC"){
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
          this.datatoappointmentdet.appointment_date = param1;
          this.navCtrl.push(AppointmentdetailsPage,{"token_status":this.datatoappointmentdet,"appointmentdetails":this.appointment_details});
          this.session.store("user_email",param2);
          this.message ="Your Appointment was booked with "+this.appointment_details.doctor_name +
                        " On "+param1 +
                        " at "+this.datatoappointmentdet.hospital_name+
                        " Your token number is "+ this.datatoappointmentdet.token_number+
                        " and your average waiting time is "+ this.datatoappointmentdet.waiting_time+
                        " mins, Contact - "+this.appointment_details.mobile +
                        " , Address -"+this.datatoappointmentdet.hospital_address;
                    console.log("all details",JSON.stringify(this.message));
          this.sendSmsOnAppointmentConfirm(this.message);
          console.log("Business_ID$$$$$$",this.business_id);
          console.log("Doctor_ID$$$$$$",this.doctor_id); 
        }
      });
    }
  }
  
  sendSmsOnAppointmentConfirm(param){
    this.api.sendconfirmation(param)
    .subscribe((resp:any) =>{
      if(resp.Message_Code == "SSS"){
        // this.message = resp.output;
        alert("Message sent successful");
        // console.log("SMS Sent Successfully",this.message);
      }
    })
  }

  closeModal() {
    this.navCtrl.pop();
  }
}
