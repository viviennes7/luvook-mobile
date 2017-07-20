import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'modal-detailview',
  templateUrl: 'detailview.html'
})
export class DetailviewModal {
  constructor(public viewCtrl: ViewController) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
