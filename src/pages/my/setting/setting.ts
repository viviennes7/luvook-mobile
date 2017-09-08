import { Component } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import { ViewController, LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { File, FileEntry } from '@ionic-native/file';

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
  private loading;

  constructor(private viewCtrl: ViewController,
              private camera: Camera,
              private http: Http,
              private memberService: MemberService,
              private settingService: SettingService,
              private loadingCtrl: LoadingController,
              private file: File) {
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
            this.viewCtrl.dismiss();
          }else{
            alert(result.message);
          }
        });
  }

  takePhoto() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      quality: 100
    }).then((imageData) => {
      this.member.profileImg = imageData;
      this.memberService.myInfo.profileImg = imageData;
      this.uploadPhoto(imageData);
    }, (err) => {
      console.log(err);
    });
  }

  private uploadPhoto(imageFileUri: any): void {
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...'
    });

    this.loading.present();

    this.file.resolveLocalFilesystemUrl(imageFileUri)
      .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
      .catch(err => alert("resolveError"));
  }

  private readFile(file: any) {
    alert("readFile");
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {type: file.type});
      formData.append('file', imgBlob, file.name);
      this.postData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  private postData(formData: FormData) {
    alert("postData")
    let headers = new Headers({'Content-Type':'multipart/form-data',"Authorization":HttpService.AUTH});
    this.http.post(HttpService.BASE_URL + "/member/info/img", formData, {headers : headers})
      .subscribe(res => {
        let result = res.json();

        if(result.statusCode == 200){
          alert("파일등록 성공");
        }else{
          alert("실패");
        }
      });
  }
}
