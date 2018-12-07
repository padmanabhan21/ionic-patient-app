import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public specialist:any=[
    {name:"Women's Health",icon:"../assets/img/women's-health.png"},
    {name:"Skin & Hair",icon:"../assets/img/skin-hair.png"},
    {name:"Child Specialist",icon:"../assets/img/women's-health.png"},
    {name:"General Doctor",icon:"../assets/img/women's-health.png"},
    {name:"Dental Care",icon:"../assets/img/women's-health.png"},
    {name:"Ear Nose Throat",icon:"../assets/img/women's-health.png"},
    {name:"Homoeopathy",icon:"../assets/img/women's-health.png"},
    {name:"Bone and Joints",icon:"../assets/img/women's-health.png"},
    {name:"Sex Specialist",icon:"../assets/img/women's-health.png"},
    {name:"Eye specialist",icon:"../assets/img/women's-health.png"},
    {name:"Digestive Issues",icon:"../assets/img/women's-health.png"},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchdoctorPage');
  }
  spacialist(){
    alert("woking")
    console.log("clicked")
    
    // this.navCtrl.push("DoctorspacialistPage");
  }

}
