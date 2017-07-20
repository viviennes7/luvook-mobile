import { Component } from '@angular/core';
import { NavController, ViewController, ModalController  } from 'ionic-angular';

import{ TabsPage } from '../tabs/tabs';
import{ JoinModal } from './join/join';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController,
              private viewCtrl: ViewController,
              public modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  locateMainPage(){
    this.navCtrl.push(TabsPage);
  }

  openJoinModal() {
    let modal = this.modalCtrl.create(JoinModal);
    modal.present();
  }
}
