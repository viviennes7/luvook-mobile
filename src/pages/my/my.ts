import { Component, Injectable } from '@angular/core';
import { NavController, ModalController, AlertController, App,NavParams } from 'ionic-angular';

import { SettingPage } from './setting/setting';
import { DetailViewComponent } from "../../component/detailview/detailview.component";
import { LoginPage } from '../login/login';

import { PhotoViewerUtil } from '../../utils/photo-viewer';
import { JwtService } from '../../services/jwt.service';
import { MemberService } from '../../services/member.service';
import {SettingService} from './setting.service';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {
  isMe:boolean = true;

  constructor(public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public appCtrl: App,
              public params: NavParams,
              private jwtService: JwtService,
              private memberService: MemberService,
              private settingService: SettingService) {
                let isMe = params.get("isMe");
                isMe === undefined ? this.isMe = true : this.isMe = false;
                this.settingService.initializeMyPage();
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
            this.jwtService.set(null);
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
