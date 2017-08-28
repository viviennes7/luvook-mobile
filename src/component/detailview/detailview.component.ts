import { Component } from '@angular/core';
import {NavController, ViewController, ModalController, NavParams} from 'ionic-angular';

import {ItemComponent} from '../item/item.component';
import {BookBoard} from '../../datas/book-board';

@Component({
  selector: 'modal-detailview',
  templateUrl: 'detailview.component.html'
})
export class DetailViewComponent {

  bookBoard: BookBoard;

  constructor(private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              private params: NavParams) {
    this.bookBoard = params.get("bookBoard");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemComponent);
    modal.present();
  }

}
