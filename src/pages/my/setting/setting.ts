import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  profileImg: string = 'assets/sample/profile_ms.jpg';

  constructor(public viewCtrl: ViewController,
              private camera: Camera) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }

  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.profileImg = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
