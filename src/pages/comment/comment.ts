import {Component, Input, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import {BoardComment} from "../../datas/board-comment";
import {HttpService} from "../../services/http.service";
import {Http, Headers} from "@angular/http";
import {BoardCommentService} from "../../services/board-comment.service";

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  @ViewChild(Content)
  content: Content;

  boardId: number;
  comments: Array<BoardComment> = [];

  constructor(private http: Http,
              private params: NavParams,
              private commentService: BoardCommentService) {
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

}
