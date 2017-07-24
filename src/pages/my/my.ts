import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, App,NavParams } from 'ionic-angular';

import { SettingPage } from './setting/setting';
import {DetailviewModal} from "../../component/detailview/detailview.component";
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  isMe:boolean = true;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public appCtrl: App,
              public params: NavParams) {
                let isMe = params.get("isMe");
                isMe === undefined ? this.isMe = true : this.isMe = false;
              }

  openJoinModal() {
    let modal = this.modalCtrl.create(SettingPage);
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
