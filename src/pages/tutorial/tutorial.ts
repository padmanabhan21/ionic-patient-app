import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  public slides:any[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, 
    public menu: MenuController, 
    translate: TranslateService, 
    public platform: Platform) {

    this.dir = platform.dir();
  }
  ionViewDidLoad() {
    this.slides = [
      {
        // title: values.TUTORIAL_SLIDE1_TITLE,
        description: "Book an appointment with the right doctor.",
        image: 'assets/img/bookappointment.png',
      },
      {
        // title: values.TUTORIAL_SLIDE2_TITLE,
        description: "Too busy to see a doctor?chat online instead.",
        image: 'assets/img/doctorchat.png',
      },
      {
        // title: values.TUTORIAL_SLIDE3_TITLE,
        description: "Get medicines delivered to your doorstep.",
        image: 'assets/img/getmedicine.png',
      }
    ];   
  }
  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
