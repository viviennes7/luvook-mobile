import {Component, ViewChild} from '@angular/core';
import {Content, NavParams, ViewController} from 'ionic-angular';
import {BoardComment} from "../../datas/board-comment";
import {BoardCommentService} from "../../services/board-comment.service";
import {MemberService} from "../../services/member.service";

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  @ViewChild(Content)
  content: Content;

  boardId: number;
  comments: Array<BoardComment> = [];

  constructor(private params: NavParams,
              private commentService: BoardCommentService,
              private memberService: MemberService,
              private viewCtrl: ViewController) {
    this.boardId = params.get("boardId");
    this.getComments();
  }

  getComments(){
    this.commentService.getComments(this.boardId)
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
    //TODO: 댓글 달고난뒤에 내릴것!
    this.content.scrollToBottom();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
