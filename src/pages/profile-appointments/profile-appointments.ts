import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentdetailsPage } from '../appointmentdetails/appointmentdetails';
import { SessionStorageService } from 'ngx-webstorage';
import {PatientServiceProvider} from '../../providers/patient-service/patient-service';
/** 
 * Generated class for the ProfileAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-profile-appointments',
  templateUrl: 'profile-appointments.html',
})
export class ProfileAppointmentsPage {

  public Appointmentdetails:any[];
  public token_status:any[];
  public appointment_details:any[];
  public appointmentdetails;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public session:SessionStorageService,
    public api:PatientServiceProvider) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ProfileAppointmentsPage');
    
    console.log("",JSON.stringify(this.Appointmentdetails))
    this.token_status =this.session.retrieve("token_status");
    this.myappointments();
    // this.appointment_details = this.session.retrieve("appointment_details");
    // console.log(JSON.stringify("token_statussssss",this.token_status));
    // console.log(JSON.stringify("token_statussssss",this.appointment_details));
  
  }
    // this.user_mobile = this.session.retrieve("user_mobile");
    myappointments(){
    this.api.myappointments(this.session.retrieve('user_mobile'))
    .subscribe((resp:any)=>{
      if(resp.Message_Code == 'RSS'){
        alert("appointments fetched")
        this.Appointmentdetails = resp.output;
      console.log("appointments fetched",this.Appointmentdetails);

      }
    })
    }

  closeModal(){
    this.navCtrl.pop();
  }
}
