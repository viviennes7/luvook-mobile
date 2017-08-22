import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, App,NavParams } from 'ionic-angular';

import { SettingPage } from './setting/setting';
import { DetailViewComponent } from "../../component/detailview/detailview.component";
import { LoginPage } from '../login/login';

import { PhotoViewerUtil } from '../../utils/photo-viewer';
import { StorageService } from '../../services/storage.service';

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
              public params: NavParams,
              private photoViewerUtil: PhotoViewerUtil,
              private storageService: StorageService) {
                let isMe = params.get("isMe");
                isMe === undefined ? this.isMe = true : this.isMe = false;
              }

  openJoinModal() {
    let modal = this.modalCtrl.create(SettingPage);
    modal.present();
  }

  openDetailViewModal(){
    let modal = this.modalCtrl.create(DetailViewComponent);
    modal.present();
  }

  logoutConfirm(){
    let confirm = this.alertCtrl.create({
      title: "로그아웃하시겠습니까?",
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.storageService.setJwt(null);
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
