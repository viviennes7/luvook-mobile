import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PostContentsPage } from './contents/contents';
import { ItemComponent } from '../../component/item/item.component';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private bookService: BookService) {}

  locateContentsPage(){
    this.navCtrl.push(PostContentsPage);
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemComponent);
    modal.present();
  }
}
