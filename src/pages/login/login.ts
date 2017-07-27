import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, App  } from 'ionic-angular';

import{ TabsPage } from '../tabs/tabs';
import{ JoinPage } from './join/join';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController,
              private viewCtrl: ViewController,
              public modalCtrl: ModalController,
              private appCtrl: App) {}

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  locateMainPage(){
    this.appCtrl.getRootNav().setRoot(TabsPage);
  }

  openJoinModal() {
    let modal = this.modalCtrl.create(JoinPage);
    modal.present();
  }
}
