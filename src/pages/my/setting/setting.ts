import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Member } from '../../../datas/member';
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  member: Member = new Member();
  password: string;
  confirm: string;
  isNicknameUnique: boolean = true;

  constructor(public viewCtrl: ViewController,
              private camera: Camera) {

    this.member.profileImg = 'assets/sample/profile_ms.jpg';
    this.member.email = 'viviennes7@naver.com';
    this.member.nickname = '밍수';

  }
  updateProfile() {
    if(this.password != this.confirm){
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }else if( !this.isNicknameUnique ){
      alert("닉네임이 이미 존재합니다.");
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
