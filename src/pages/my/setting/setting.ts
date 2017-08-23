import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { Member } from '../../../datas/member';
import {MemberService} from '../../../services/member.service';
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  private member: Member = new Member();
  private password: string;
  private confirm: string;

  constructor(private viewCtrl: ViewController,
              private camera: Camera) {
    this.member.profileImg = MemberService.MY_INFO.profileImg;
    this.member.email = MemberService.MY_INFO.email;
    this.member.nickname = MemberService.MY_INFO.nickname;

  }

  updateProfile() {
    if(this.password != this.confirm){
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    this.viewCtrl.dismiss();
  }

  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.member.profileImg = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
