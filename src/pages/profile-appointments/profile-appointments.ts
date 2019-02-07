import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentdetailsPage } from '../appointmentdetails/appointmentdetails';
import { SessionStorageService } from 'ngx-webstorage';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public session:SessionStorageService,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileAppointmentsPage');
    this.Appointmentdetails=[
      {doctor_name:"Dr.Venkat",appointmenti_id:"10056",date:"1-02-2019" },
      {doctor_name:"Dr.padmanabhan",appointmenti_id:"10054",date:"1-02-2019" },
      {doctor_name:"Dr.santha",appointmenti_id:"10054",date:"1-02-2019" },

    ]
    console.log("",JSON.stringify(this.Appointmentdetails))
    this.token_status =this.session.retrieve("token_status");
    this.appointment_details = this.session.retrieve("appointment_details");
    console.log(JSON.stringify("token_statussssss",this.token_status));
    console.log(JSON.stringify("token_statussssss",this.appointment_details));
  
  }
    // this.user_mobile = this.session.retrieve("user_mobile");
    

  closeModal(){
    this.navCtrl.pop();
  }
}
