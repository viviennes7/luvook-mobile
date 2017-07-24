import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PostContentsPage } from './contents/contents';
import { ItemModal } from '../../component/item/item.component';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {}

  locateContentsPage(){
    this.navCtrl.push(PostContentsPage);
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemModal);
    modal.present();
  }
}
