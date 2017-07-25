import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-item',
  templateUrl: 'item.component.html'
})
export class ItemComponent {
  constructor(public viewCtrl: ViewController) {}
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
