import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavController, ModalController, ViewController, ActionSheetController, Platform} from 'ionic-angular';

import {MyPage} from "../../pages/my/my";
import {BoardComment} from "../../datas/board-comment";
import {BoardCommentService} from "../../services/board-comment.service";
import {MemberService} from "../../services/member.service";

@Component({
  selector: 'comment',
  templateUrl: 'comment.component.html'
})
export class CommentComponent{
  @Output()
  deleteCommentEvent = new EventEmitter();

  @Input()
  comment: BoardComment;

  constructor(private modalCtrl: ModalController,
              private actionSheetCtrl: ActionSheetController,
              private platform: Platform,
              private boardCommentService: BoardCommentService,
              private memberService: MemberService){}

  openHomeModal(){
    let modal = this.modalCtrl.create(MyPage, { isMe :false,  member: this.comment.member} );
    modal.present();
  }

  deleteComment(){
    if(this.memberService.myInfo.memberType.toString() == 'ADMIN' ||
       this.memberService.myInfo.memberId == this.comment.member.memberId){

      this.boardCommentService.deleteComment(this.comment.boardCommentId).subscribe(res => {
        let result = res.json();

        if(result.statusCode == 200){
          this.deleteCommentEvent.emit();
        }else if(result.statusCode == 401){
          alert(result.message);
          this.memberService.logout();
        }else{
          alert(result.message);
        }
      });

    }
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '수정하기',
          icon: !this.platform.is('ios') ? 'pricetag' : null,
          handler: () => {
            alert("준비중입니다.");
          }
        },
        {
          text: '삭제하기',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            var isRemove = confirm("삭제하시겠습니까?");
            if(isRemove){
              this.deleteComment();
            }
          }
        },
      ]
    });

    actionSheet.present();
  }
}
