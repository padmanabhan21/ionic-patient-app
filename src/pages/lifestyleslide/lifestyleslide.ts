import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PatientServiceProvider } from '../../providers/patient-service/patient-service';
import { Storage } from '@ionic/storage';
import { SessionStorageService } from 'ngx-webstorage';


@IonicPage()
@Component({
  selector: 'page-lifestyleslide',
  templateUrl: 'lifestyleslide.html',
})
export class LifestyleslidePage {

  public lifestyle:any={
    "smoking":"",
    "alcohol":"",
    "active":"",
    "diet":"",
    "profession":""
  };

  public smokingbtn:any={
    "one":'light',
    "two":'light',
    "three":'light',
    "four":'light',
    "five":'light',
    "six":'light'
  }

  
  public alcoholbtn:any={
    "one":'light',
    "two":'light',
    "three":'light',
    "four":'light',
    "five":'light',
  }

  public lifestylebtn:any={
    "one":'light',
    "two":'light',
    "three":'light',
    "four":'light',
  }

  public dietbtn:any={
    "one":'light',
    "two":'light',
    "three":'light',
    "four":'light',
  }

  public professionbtn:any={
    "one":'light',
    "two":'light',
    "three":'light',
    "four":'light',
    "five":'light',
    "six":'light',
    "seven":'light'
  }

  public currentIndex=0;
  public showsave:boolean=false;

  @ViewChild('slides') slides: Slides;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public session: SessionStorageService,
              public api: PatientServiceProvider,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifestyleslidePage');
    this.storage.get('lifestyle-profile').then((val: any) => {
      if(val){
        this.lifestyle = JSON.parse(val);
      }
    })
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.currentIndex = currentIndex;
    if(this.currentIndex == 4){
      this.showsave = true;
    }else{
      this.showsave = false;
    }
  }

  closeModal(){
    this.navCtrl.pop();
  }

  smoking(param,check){
    this.smokingbtn.one='light';
    this.smokingbtn.two='light';
    this.smokingbtn.three='light';
    this.smokingbtn.four='light';
    this.smokingbtn.five='light';
    this.smokingbtn.six='light';

    if(check == '1'){
      this.smokingbtn.one = 'primary'; 
    }
    if(check == '2'){
      this.smokingbtn.two = 'primary'; 
    }
    if(check == '3'){
      this.smokingbtn.three = 'primary'; 
    }
    if(check == '4'){
      this.smokingbtn.four = 'primary'; 
    }
    if(check == '5'){
      this.smokingbtn.five = 'primary'; 
    }
    if(check == '6'){
      this.smokingbtn.six = 'primary'; 
    }
    this.lifestyle.smoking = param;
  }

  alcohol(param,check){
    this.lifestyle.alcohol = param;
    this.alcoholbtn.one='light';
    this.alcoholbtn.two='light';
    this.alcoholbtn.three='light';
    this.alcoholbtn.four='light';
    this.alcoholbtn.five='light';

    if(check == '1'){
      this.alcoholbtn.one = 'primary'; 
    }
    if(check == '2'){
      this.alcoholbtn.two = 'primary'; 
    }
    if(check == '3'){
      this.alcoholbtn.three = 'primary'; 
    }
    if(check == '4'){
      this.alcoholbtn.four = 'primary'; 
    }
    if(check == '5'){
      this.alcoholbtn.five = 'primary'; 
    }
  }

  lifeStyle(param,check){
    this.lifestyle.lifestyle = param;
    this.lifestylebtn.one='light';
    this.lifestylebtn.two='light';
    this.lifestylebtn.three='light';
    this.lifestylebtn.four='light';

    if(check == '1'){
      this.lifestylebtn.one = 'primary'; 
    }
    if(check == '2'){
      this.lifestylebtn.two = 'primary'; 
    }
    if(check == '3'){
      this.lifestylebtn.three = 'primary'; 
    }
    if(check == '4'){
      this.lifestylebtn.four = 'primary'; 
    }
  }

  consist(param,check){
    this.lifestyle.diet = param;
    this.dietbtn.one='light';
    this.dietbtn.two='light';
    this.dietbtn.three='light';
    this.dietbtn.four='light';

    if(check == '1'){
      this.dietbtn.one = 'primary'; 
    }
    if(check == '2'){
      this.dietbtn.two = 'primary'; 
    }
    if(check == '3'){
      this.dietbtn.three = 'primary'; 
    }
    if(check == '4'){
      this.dietbtn.four = 'primary'; 
    }
  }

  profission(param,check){
    this.lifestyle.profession = param;
    this.professionbtn.one='light';
    this.professionbtn.two='light';
    this.professionbtn.three='light';
    this.professionbtn.four='light';
    this.professionbtn.five='light';
    this.professionbtn.six='light';
    this.professionbtn.seven='light';

    if(check == '1'){
      this.professionbtn.one = 'primary'; 
    }
    if(check == '2'){
      this.professionbtn.two = 'primary'; 
    }
    if(check == '3'){
      this.professionbtn.three = 'primary'; 
    }
    if(check == '4'){
      this.professionbtn.four = 'primary'; 
    }
    if(check == '5'){
      this.professionbtn.five = 'primary'; 
    }
    if(check == '6'){
      this.professionbtn.six = 'primary'; 
    }
    if(check == '7'){
      this.professionbtn.seven = 'primary'; 
    }
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  save(){
    
    let body = {
      "mobile":this.session.retrieve('user_mobile'),	
      "smoking_habits":this.lifestyle.smoking,
      "alcohol_consumption":this.lifestyle.alcohol,
      "activity_level":this.lifestyle.lifestyle,
      "food_preference":this.lifestyle.diet,
      "occupation":this.lifestyle.profession
    }

    this.api.updateProfile(body)
    .subscribe((resp:any) =>{
      if(resp.Message_Code == "RUS"){
        this.storage.set('lifestyle-profile', JSON.stringify(body));
        this.showtoast('your profile has been updated');
        this.closeModal();
      }
    });
  }

  showtoast(message){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();   
  }
}
