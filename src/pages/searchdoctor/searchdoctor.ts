import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { ListofdoctorsPage } from '../listofdoctors/listofdoctors';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { templateJitUrl } from '@angular/compiler';
// import{} '../../providers/d '
/**
 * Generated class for the SearchdoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchdoctor',
  templateUrl: 'searchdoctor.html',
})
export class SearchdoctorPage {

  public specialist: any = []
  searchdoctor: any = 0;
  public temp;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalctrl: ModalController,
    public api: PatientServiceProvider,
    public loadingCtrl: LoadingController) {

    // var temp = this;
    // setTimeout(function(){
    //   temp.api.loadAll().then(result =>{
    //     temp.searchdoctor = result;

    //   });
    // }, 5000);


    
    // Create the popup
    // let loadingPopup = this.loadingCtrl.create({
    //   content: 'Loading data...'
    // });
  }





  // presentLoadingDefault() {
  //   let loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });

  //   loading.present();

  //   setTimeout(() => {
  //     loading.dismiss();
  //   }, 1000);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchdoctorPage');
    this.getdoctorsandclinic();
  }


  navspecialist(param) {
    console.log("clicked")
    let navtodoc = this.modalctrl.create(ListofdoctorsPage, { "listofdoctors": param }, { cssClass: "modal-fullscreen" });
    navtodoc.present();
  }
  closeModal() {
    this.navCtrl.pop();
  }

  getdoctorsandclinic() {
    this.api.specialist('summa')
      .subscribe((resp: any) => {
        this.specialist = resp.specialist;
        console.log("Venkat Loves Girlssssssssss", JSON.stringify(this.specialist))
      })
  }

  // presentLoadingCustom() {
  //   let loading = this.loadingCtrl.create({
  //     spinner: 'hide',
  //     // content: ,
  //     duration: 5000
  //   });

  //   loading.onDidDismiss(() => {
  //     console.log('Dismissed loading');
  //   });

  //   loading.present();
  // }
  //specialist array

  // public specialist =
  //   [
  //     {
  //       name: "Women's Health",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Skin & Hair",
  //       icon: "../assets/img/skin-hair.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Child Specialist",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "General Doctor",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Dental Care",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Ear Nose Throat",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Homoeopathy",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Bone and Joints",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Sex Specialist",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Eye specialist",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       name: "Digestive Issues",
  //       icon: "../assets/img/women's-health.png",
  //       Listofdoctors:
  //         [
  //           {
  //             clinics: [
  //               {
  //                 cli_img: "../assets/img/bala.jpg",
  //                 cli_like: "99%",
  //                 cli_votes: "475",
  //                 cli_location: "Chromepet",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Better Half Clinic",
  //                 cli_doc_count: "1",
  //                 cli_fees: "500",
  //                 cli_feedback: "210",
  //                 cli_subimages1: "../assets/img/bala.jpg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/bala.jpg",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Better Half Clinic",
  //                     clinic_location: "Chromepet",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/marty-avatar.png",
  //                 cli_like: "88%",
  //                 cli_votes: "175",
  //                 cli_location: "Nungabakkam",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Best Hospital",
  //                 cli_doc_count: "2",
  //                 cli_fees: "300",
  //                 cli_feedback: "100",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               },
  //               {
  //                 cli_img: "../assets/img/ian-avatar.png",
  //                 cli_like: "80%",
  //                 cli_votes: "150",
  //                 cli_location: "Mylapur",
  //                 cli_sponser: "SPONSERED",
  //                 cli_name: "Medway Clinic",
  //                 cli_doc_count: "3",
  //                 cli_fees: "150",
  //                 cli_feedback: "300",
  //                 cli_subimages1: "../assets/img/sarah.jpeg",
  //                 cli_subimages2: "../assets/img/bala.jpg",
  //                 cli_subimages3: "../assets/img/marty-avatar.png",
  //                 clinic_details: [
  //                   {
  //                     clinic_name: "Best Hospital",
  //                     clinic_location: "Nungabakkam",
  //                     clinic_images:
  //                       [
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" },
  //                         { img: "../assets/img/bala.jpg" }
  //                       ],
  //                     clinic_timings:
  //                       [
  //                         { day: "Mon", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Tue", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Wed", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Thu", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Fri", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sat", time: "09:00 AM - 09:00 PM" },
  //                         { day: "Sun", time: "Closed" }
  //                       ],
  //                     clinic_address: "25/11, New Colony, 1st cross st, Chromepet.",
  //                     clinic_latlng: "12.9532|80.1416",
  //                     clinic_doctor_list:
  //                       [
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Bala",
  //                           doc_specialist: "Dental",
  //                           doc_fees: "300",
  //                           doc_like: "40%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Venkat",
  //                           doc_specialist: "Ortho",
  //                           doc_fees: "400",
  //                           doc_like: "80%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         },
  //                         {
  //                           doc_img: "../assets/img/bala.jpg",
  //                           doc_name: "Raja",
  //                           doc_specialist: "General",
  //                           doc_fees: "100",
  //                           doc_like: "20%",
  //                           doctor_deails:
  //                             [
  //                               {
  //                                 doctor_name: "Venkat",
  //                                 doctor_img: "../assets/img/bala.jpg",
  //                                 doctor_qualification: "MBBS,Diploma in Child Health",
  //                                 doctor_specialist: "Pediatrician,Neonatologist",
  //                                 doctor_experience: "18 yrs",
  //                                 doctor_like: "98%",
  //                                 doctor_votes: "473",
  //                                 doctor_fees: "400",
  //                                 doctor_clinic:
  //                                   [
  //                                     {
  //                                       clinic_name: "Fortis",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,chromepet",
  //                                       clinic_rating: "5",
  //                                       clinic_kms: "13.5 kms"
  //                                     },
  //                                     {
  //                                       clinic_name: "Malar",
  //                                       clinic_latlng: "80.15|12.95",
  //                                       clinic_address: "11/25,1st cross street,Velachery",
  //                                       clinic_rating: "4",
  //                                       clinic_kms: "10.1 kms"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_latlng: "80.5|12.95",
  //                                 doctor_feedback:
  //                                   [
  //                                     {
  //                                       customername: "Venkat",
  //                                       visited: "4 months ago",
  //                                       reason: "general checkup",
  //                                       message: "she is doing very good"
  //                                     },
  //                                     {
  //                                       customername: "Bala",
  //                                       visited: "2 months ago",
  //                                       reason: "General checkup",
  //                                       message: "very Friendly doctor"
  //                                     }
  //                                   ],
  //                                 doctor_clinic_img:
  //                                   [
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" },
  //                                     { img: "../assets/img/bala.jpg" }
  //                                   ],
  //                                 doctor_services:
  //                                   [
  //                                     { service: "New Room Care" },
  //                                     { service: "Nutritional Assessment" }
  //                                   ],
  //                                 doctor_specialization:
  //                                   [
  //                                     { specialization: "pideatriction" },
  //                                     { specialization: "Neonatologist" }
  //                                   ]
  //                               }
  //                             ]
  //                         }
  //                       ],
  //                     clinic_services:
  //                       [
  //                         { service: "pre and post delivery care" },
  //                         { service: "High-risk pregnancy care" },
  //                         { service: "Disease in pregnancy" }
  //                       ],
  //                     clinic_open: "Open Today"
  //                   }
  //                 ]
  //               }
  //             ],
  //             Doctors: [
  //               {
  //                 doc_img: "../assets/img/bala.jpg",
  //                 doc_like: "93%",
  //                 doc_votes: "700",
  //                 doc_name: "Dr. Padmanabhan",
  //                 doc_qualification: "MBBS,DGO",
  //                 doc_specialist: "Orthopedist",
  //                 doc_experience: "10",
  //                 doc_feedback: "742",
  //                 doc_fees: "400",
  //                 doc_available_date: "Fri, 14 Dec",
  //                 doc_available_location: "Nungabakkam",
  //                 doc_hospital: "Best Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               {
  //                 doc_img: "../assets/img/marty-avatar.png",
  //                 doc_like: "83%",
  //                 doc_votes: "200",
  //                 doc_name: "Dr. Venkatesh",
  //                 doc_qualification: "MBBS,DNB",
  //                 doc_specialist: "Dentist",
  //                 doc_experience: "7",
  //                 doc_feedback: "142",
  //                 doc_fees: "500",
  //                 doc_available_date: "Sat, 15 Dec",
  //                 doc_available_location: "Velachery",
  //                 doc_hospital: "Kamatchi Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]

  //               },
  //               {
  //                 doc_img: "../assets/img/ian-avatar.png",
  //                 doc_like: "63%",
  //                 doc_votes: "100",
  //                 doc_name: "Dr. Santhakumar",
  //                 doc_qualification: "MBBS,MD",
  //                 doc_specialist: "General Physician",
  //                 doc_experience: "5",
  //                 doc_feedback: "268",
  //                 doc_fees: "300",
  //                 doc_available_date: "Mon, 17 Dec",
  //                 doc_available_location: "Tambaram",
  //                 doc_hospital: "Fortis Hospital",
  //                 doctor_deails:
  //                   [
  //                     {
  //                       doctor_name: "Venkat",
  //                       doctor_img: "../assets/img/bala.jpg",
  //                       doctor_qualification: "MBBS,Diploma in Child Health",
  //                       doctor_specialist: "Pediatrician,Neonatologist",
  //                       doctor_experience: "18 yrs",
  //                       doctor_like: "98%",
  //                       doctor_votes: "473",
  //                       doctor_fees: "400",
  //                       doctor_clinic:
  //                         [
  //                           {
  //                             clinic_name: "Fortis",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,chromepet",
  //                             clinic_rating: "5",
  //                             clinic_kms: "13.5 kms"
  //                           },
  //                           {
  //                             clinic_name: "Malar",
  //                             clinic_latlng: "80.15|12.95",
  //                             clinic_address: "11/25,1st cross street,Velachery",
  //                             clinic_rating: "4",
  //                             clinic_kms: "10.1 kms"
  //                           }
  //                         ],
  //                       doctor_clinic_latlng: "80.5|12.95",
  //                       doctor_feedback:
  //                         [
  //                           {
  //                             customername: "Venkat",
  //                             visited: "4 months ago",
  //                             reason: "general checkup",
  //                             message: "she is doing very good"
  //                           },
  //                           {
  //                             customername: "Bala",
  //                             visited: "2 months ago",
  //                             reason: "General checkup",
  //                             message: "very Friendly doctor"
  //                           }
  //                         ],
  //                       doctor_clinic_img:
  //                         [
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" },
  //                           { img: "../assets/img/bala.jpg" }
  //                         ],
  //                       doctor_services:
  //                         [
  //                           { service: "New Room Care" },
  //                           { service: "Nutritional Assessment" }
  //                         ],
  //                       doctor_specialization:
  //                         [
  //                           { specialization: "pideatriction" },
  //                           { specialization: "Neonatologist" }
  //                         ]
  //                     }
  //                   ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //   ];

}
