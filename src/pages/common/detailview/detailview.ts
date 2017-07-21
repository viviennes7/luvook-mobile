import { Component } from '@angular/core';
import {NavController, ViewController, ModalController} from 'ionic-angular';

import {ItemModal} from '../item/item';
@Component({
  selector: 'modal-detailview',
  templateUrl: 'detailview.html'
})
export class DetailviewModal {
  constructor(public viewCtrl: ViewController,
              public modalCtrl: ModalController) {}
              
  dismiss() {
    this.viewCtrl.dismiss();
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemModal);
    modal.present();
  }

}
