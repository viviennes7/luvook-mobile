import { Component, Input } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {DetailViewComponent} from "../../component/detailview/detailview.component";
import {MyPage} from "../../pages/my/my";
import {ItemComponent} from '../../component/item/item.component';
import {CommentPage} from '../../pages/comment/comment';

@Component({
  selector: 'page-board',
  templateUrl: 'board.component.html'
})
export class BoardComponent {

  @Input() isDetail: boolean;
  isClickedHeart :boolean = false;
  heartShape : string = 'heart-outline';
  heartCount : number = 12;

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
    let modal = this.modalCtrl.create(ItemComponent);
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
