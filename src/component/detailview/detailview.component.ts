import {Component, ViewChild} from '@angular/core';
import {NavController, ViewController, ModalController, NavParams, Content} from 'ionic-angular';

import {ItemComponent} from '../item/item.component';
import {BookBoard} from '../../datas/book-board';
import {BoardComment} from "../../datas/board-comment";
import {BoardCommentService} from "../../services/board-comment.service";
import {MemberService} from "../../services/member.service";

@Component({
  selector: 'modal-detailview',
  templateUrl: 'detailview.component.html'
})
export class DetailViewComponent {
  @ViewChild(Content)
  content: Content;

  bookBoard: BookBoard;
  comments: Array<BoardComment> = [];

  constructor(private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              private params: NavParams,
              private memberService: MemberService,
              private commentService: BoardCommentService) {
    this.bookBoard = params.get("bookBoard");
    this.getComments();
  }

  getComments(){
    this.commentService.getComments(this.bookBoard.boardId)
      .subscribe(res =>{
        let result = res.json();
        if(result.statusCode == 200){
          result.data.forEach((item, index) => {
            this.comments.push(item);
          });
        }else if(result.statusCode == 401){
          alert(result.message);
          this.memberService.logout();
        }else{
          alert(result.message);
        }
      });
  }

  deleteComment(index){
    this.comments.splice(index, 1);
  }

  reload(comment){
    this.comments.push(comment);

    //todo: 댓글 달고난뒤에 내릴것!
    this.content.scrollToBottom();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemComponent);
    modal.present();
  }

}
