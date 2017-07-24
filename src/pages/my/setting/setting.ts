import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  constructor(public viewCtrl: ViewController) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
