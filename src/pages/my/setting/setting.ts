import { Component } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import { ViewController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { Member } from '../../../datas/member';
import {MyPage} from '../my';
import {MemberService} from '../../../services/member.service';
import {HttpService} from '../../../services/http.service';
import {SettingService} from '../setting.service';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  private member: Member = new Member();
  private password: string = "";
  private confirm: string = "";

  constructor(private viewCtrl: ViewController,
              private camera: Camera,
              private http: Http,
              private memberService: MemberService,
              private settingService: SettingService) {
    this.member.setProfileImg(this.memberService.myInfo.getProfileImg());
    this.member.email = this.memberService.myInfo.email;
    this.member.nickname = this.memberService.myInfo.nickname;

  }

  updateProfile() {
    if(this.password != this.confirm){
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('nickname', this.member.nickname);
    urlSearchParams.append('password', this.password);
    let params = urlSearchParams.toString()
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});

    this.http
        .put(HttpService.BASE_URL + "/member/info", params, { headers: headers})
        .subscribe(res =>{
          let result = res.json();
          if(result.statusCode == 200){
            this.memberService.myInfo.nickname = this.member.nickname;
            this.viewCtrl.dismiss();
          }else{
            alert(result.message);
          }
        });

  }

  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      quality: 100
    }).then((imageData) => {
      this.member.setProfileImg('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      console.log(err);
    });
  }
}
