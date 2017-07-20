import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';

import{ TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {}
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  locateMainPage(){
    this.navCtrl.push(TabsPage);
  }
}
