import {Component} from '@angular/core';
import {Headers, Http} from "@angular/http";
import {LoadingController, ViewController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';

import {Member} from '../../../datas/member';
import {MemberService} from '../../../services/member.service';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  private member: Member = new Member();
  private password: string = "";
  private confirm: string = "";
  private loading;

  constructor(private viewCtrl: ViewController,
              private camera: Camera,
              private http: Http,
              private memberService: MemberService,
              private loadingCtrl: LoadingController){
    this.member.profileImg = this.memberService.myInfo.profileImg;
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
            this.dismiss();
          }else{
            alert(result.message);
          }
        });
  }

  selectPhoto() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      quality: 100,
      allowEdit:true,
      targetWidth: 800,
      targetHeight: 800
    }).then((imageData) => {
      this.loading = this.loadingCtrl.create({
        content: 'Uploading...'
      });
      this.loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.uploadPhoto(base64Image);
    }, (err) => {
      // alert(JSON.stringify(err));
    });
  }

  uploadPhoto(encodeImg){
    let params = {'encodeImg' : encodeImg};
    let headers = new Headers({'Content-Type': 'application/json',"Authorization":HttpService.AUTH});

    this.http
      .post(HttpService.BASE_URL + "/member/info/img", JSON.stringify(params), { headers: headers})
      .subscribe(res =>{
        let result = res.json();
        if(result.statusCode == 200){
          this.memberService.myInfo.profileImg = result.data;
          this.member.profileImg = result.data;
          this.loading.dismiss();
        }else{
          alert(result.message);
        }
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
