import { Component } from '@angular/core';
import {NavController, ViewController, ModalController} from 'ionic-angular';

import {ItemComponent} from '../item/item.component';
import {BookBoard} from '../../datas/book-board';

@Component({
  selector: 'modal-detailview',
  templateUrl: 'detailview.component.html'
})
export class DetailViewComponent {

  //bookBoard: BookBoard;

  constructor(public viewCtrl: ViewController,
              public modalCtrl: ModalController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemComponent);
    modal.present();
  }

}
