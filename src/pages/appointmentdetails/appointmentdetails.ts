import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController, App} from 'ionic-angular';
import { SessionStorageService } from 'ngx-webstorage';
import {LivefeedPage}from'../livefeed/livefeed';
import {TabsPage} from '../tabs/tabs';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import {PatientServiceProvider} from '../../providers/patient-service/patient-service';
// import { SocialSharing } from '@ionic-native/social-sharing';
// import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-appointmentdetails',
  templateUrl: 'appointmentdetails.html',
})
export class AppointmentdetailsPage {
  userData = null;
  text = 'Hey i am padmanabhan';
  url = 'http://infocuittechnologies.com';
  public token_status:any=[];
  public appointment_details:any[];
  public doctor_name;
  public user_name;


  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public modalCtrl:ModalController,
              public viewCtrl:ViewController,
              public appCtrl:App,
              public session:SessionStorageService,
              public socialSharing: SocialSharing,
              public file:File,
              public api:PatientServiceProvider,
              // private socialSharing:SocialSharing,
              // private file: File
              ) {
    this.token_status = this.navParams.get("token_status");
    this.appointment_details =this.navParams.get("appointmentdetails");
    console.log("appointmentid",this.token_status.appointment_id);
    console.log("token Status*******",JSON.stringify(this.token_status));
    console.log("appointmentdetails Status*******",JSON.stringify(this.appointment_details));
  }
   

  ionViewDidLoad() {
    this.user_name = this.session.retrieve("user_name");
    
    
    console.log('ionViewDidLoad AppointmentdetailsPage',this.user_name);
  

  }

  navlistmaster(){
  this.navCtrl.setRoot(TabsPage);
  this.session.store("token_status",this.token_status);
   this.session.store("appointment_details",this.appointment_details);
   console.log("testtttttt",this.session.retrieve("appointment_details"))
  }

  closeModal() {
    this.navCtrl.pop();
  }
  navlivefeed(){
   this.navCtrl.push(LivefeedPage,{"token_status":this.token_status});
  }

  //token cancel
  // public cancel_appointment:any;
  cancelappointment(){
    this.api.tokencancel(this.token_status.appointment_id)
    
    .subscribe((resp:any) =>{
       if(resp.Message_Code == "RUS"){
           alert("token cancel successfully")
           console.log("appoint",this.token_status.appointment_id)
       }
    });
  }

  //social share
  shareTwitter(){
    this.socialSharing.shareViaTwitter(null, `${this.file.applicationDirectory}www/assets/imgs`, null).then(() =>{
      alert("twitter share done");
    }).catch(e => {
      alert(e);
    })
  }

  async resolveLocalFile(){
    return this.file.copyFile(`${this.file.applicationDirectory}www/assets/imgs`,
    'bala.jpg',this.file.cacheDirectory,`${new Date().getTime()}.jpg`)
  }

  removeTempFile(name){
    this.file.removeFile(this.file.cacheDirectory,name);
  }

  async shareEmail(){
    let file = await this.resolveLocalFile();
    console.log('FILE:', file);
    this.socialSharing.shareViaEmail("This is my message", 
    'my subject', ['infocuit.venkateshn@gmail.com'], null, null, file.nativeURL).then(() =>{
      this.removeTempFile(file.name);
      alert("email share done");
    }).catch(e => {
      alert(e);
    })
  }

  async shareFacebook(){
    let file = await this.resolveLocalFile();
    console.log('FILE:', file);

    this.socialSharing.shareViaFacebook(null, file.nativeURL, this.url).then(() =>{
      this.removeTempFile(file.name);
      alert("fb share done");
    }).catch(e => {
      alert(e);
    })
  }

  shareWhatsApp(){
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url).then(() =>{
      alert("whatsapp share done");
    }).catch(e => {
      alert(e);
    })
  }
}
