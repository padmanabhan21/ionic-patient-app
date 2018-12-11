import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListofdoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofdoctors',
  templateUrl: 'listofdoctors.html',
})
export class ListofdoctorsPage {

  public clinics:any=[
    {cli_img:"../assets/img/bala.jpg",cli_like:"99%",cli_votes:"475",cli_location:"Chromepet",cli_sponser:"SPONSERED",cli_name:"Better Half Clinic",cli_doc_count:"1",cli_fees:"500",cli_feedback:"210",cli_subimages1:"../assets/img/bala.jpg",cli_subimages2:"../assets/img/bala.jpg",cli_subimages3:"../assets/img/bala.jpg"},
    {cli_img:"../assets/img/marty-avatar.png",cli_like:"88%",cli_votes:"175",cli_location:"Nungabakkam",cli_sponser:"SPONSERED",cli_name:"Best Hospital",cli_doc_count:"2",cli_fees:"300",cli_feedback:"100",cli_subimages1:"../assets/img/sarah.jpeg",cli_subimages2:"../assets/img/bala.jpg",cli_subimages3:"../assets/img/marty-avatar.png"},
    {cli_img:"../assets/img/ian-avatar.png",cli_like:"80%",cli_votes:"150",cli_location:"Mylapur",cli_sponser:"SPONSERED",cli_name:"Medway Clinic",cli_doc_count:"3",cli_fees:"150",cli_feedback:"300",cli_subimages1:"../assets/img/sarah.jpeg",cli_subimages2:"../assets/img/bala.jpg",cli_subimages3:"../assets/img/marty-avatar.png"},  
  ]

  public doctors:any=[
    {doc_img:"../assets/img/bala.jpg",doc_like:"93%",doc_votes:"700",doc_name:"Dr. Padmanabhan",doc_qualification:"MBBS,DGO",doc_specialist:"Orthopedist",doc_experience:"10",doc_feedback:"742",doc_fees:"400",doc_available_date:"Fri, 14 Dec",doc_available_location:"Nungabakkam",doc_hospital:"Best Hospital"},
    {doc_img:"../assets/img/marty-avatar.png",doc_like:"83%",doc_votes:"200",doc_name:"Dr. Venkatesh",doc_qualification:"MBBS,DNB",doc_specialist:"Dentist",doc_experience:"7",doc_feedback:"142",doc_fees:"500",doc_available_date:"Sat, 15 Dec",doc_available_location:"Velachery",doc_hospital:"Kamatchi Hospital"},
    {doc_img:"../assets/img/ian-avatar.png",doc_like:"63%",doc_votes:"100",doc_name:"Dr. Santhakumar",doc_qualification:"MBBS,MD",doc_specialist:"General Physician",doc_experience:"5",doc_feedback:"268",doc_fees:"300",doc_available_date:"Mon, 17 Dec",doc_available_location:"Tambaram",doc_hospital:"Fortis Hospital"},

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofdoctorsPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }
}
