import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-setting',
  templateUrl: 'setting.html'
})
export class SettingModal {
  constructor(public viewCtrl: ViewController) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
