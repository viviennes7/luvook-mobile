import { Component, Input } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {DetailviewModal} from "../../component/detailview/detailview.component";
import {MyPage} from "../../pages/my/my";
import {ItemModal} from '../../component/item/item.component';
import {CommentPage} from '../../pages/comment/comment';

@Component({
  selector: 'page-board',
  templateUrl: 'board.component.html'
})
export class BoardPage {

  @Input() isDetail: boolean;
  isClickedHeart :boolean = false;
  heartShape : string = 'heart-outline';
  heartCount : number = 12;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {}

  openDetailviewModal(){
    if(!this.isDetail){
      let modal = this.modalCtrl.create(DetailviewModal);
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
    let modal = this.modalCtrl.create(ItemModal);
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
      this.heartCount--;
    }else{
      this.isClickedHeart = true;
      this.heartShape = 'heart';
      this.heartCount++;
    }
  }
}
