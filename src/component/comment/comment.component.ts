import {Component, Input} from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {MyPage} from "../../pages/my/my";
import {BoardComment} from "../../datas/board-comment";

@Component({
  selector: 'comment',
  templateUrl: 'comment.component.html'
})
export class CommentComponent{

  @Input()
  comment: BoardComment;

  constructor(public modalCtrl: ModalController){}

  openHomeModal(){
    let modal = this.modalCtrl.create(MyPage, { isMe :false,  member: this.comment.member} );
    modal.present();
  }
}
