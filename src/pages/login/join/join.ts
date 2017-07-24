import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-join',
  templateUrl: 'join.html'
})
export class JoinPage {
  constructor(public viewCtrl: ViewController) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
