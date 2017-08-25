import { Component, Input } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {DetailViewComponent} from "../../component/detailview/detailview.component";
import {MyPage} from "../../pages/my/my";
import {ItemComponent} from '../../component/item/item.component';
import {CommentPage} from '../../pages/comment/comment';
import {BookBoard} from '../../datas/book-board';

@Component({
  selector: 'board',
  templateUrl: 'board.component.html'
})
export class BoardComponent {

  @Input()
  isDetail: boolean;

  @Input()
  bookBoard: BookBoard;

  private isClickedHeart :boolean = false;
  private heartShape : string = 'heart-outline';

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {}

  openDetailViewModal(){
    if(!this.isDetail){
      let modal = this.modalCtrl.create(DetailViewComponent);
      modal.present();
    }
  }

  openHomeModal(){
    let modal = this.modalCtrl.create(MyPage, { isMe :false } );
    modal.present();
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemComponent, { isbn13:this.bookBoard.isbn13 });
    modal.present();
  }

  openCommentModal(){
    let modal = this.modalCtrl.create(CommentPage);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickHeart(){
    if(this.isClickedHeart){
      this.isClickedHeart = false
      this.heartShape = 'heart-outline';
      this.bookBoard.heartCount--;
    }else{
      this.isClickedHeart = true;
      this.heartShape = 'heart';
      this.bookBoard.heartCount++;
    }
  }
}
