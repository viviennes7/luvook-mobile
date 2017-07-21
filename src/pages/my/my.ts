import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, App } from 'ionic-angular';

import { SettingModal } from './setting/setting';
import {DetailviewModal} from "../common/detailview/detailview";
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public appCtrl: App) {}
              
  openJoinModal() {
    let modal = this.modalCtrl.create(SettingModal);
    modal.present();
  }

  openDetailviewModal(){
    let modal = this.modalCtrl.create(DetailviewModal);
    modal.present();
  }

  logoutConfirm(){
    let confirm = this.alertCtrl.create({
      title: "로그아웃하시겠습니까?",
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.appCtrl.getRootNav().setRoot(LoginPage);
          }
        },
        {
          text:'No',
          handler: () =>{
            console.log("No");
          }
        }
      ]
    });
    confirm.present();
  }
}
