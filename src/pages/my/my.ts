import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';

import { SettingModal } from './setting/setting';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {}
  openJoinModal() {
    let modal = this.modalCtrl.create(SettingModal);
    modal.present();
  }

  logoutConfirm(){
    let confirm = this.alertCtrl.create({
      title: "로그아웃하시겠습니까?",
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            console.log("Yes");
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
