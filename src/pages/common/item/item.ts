import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-item',
  templateUrl: 'item.html'
})
export class ItemModal {
  constructor(public viewCtrl: ViewController) {}
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
