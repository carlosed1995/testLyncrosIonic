import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform) {
    platform.registerBackButtonAction(() => {
      //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. 
      //just breathe, and have faith that everything will work out for the best.
    },1);
    
  }

  ionViewDidLoad() { 
  }

  goBack(){
    this.navCtrl.setRoot("DashboardPage");
    this.navCtrl.popToRoot(); 
  }

}
