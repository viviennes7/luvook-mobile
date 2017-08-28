import {Component, Input, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import {BoardComment} from "../../datas/board-comment";
import {HttpService} from "../../services/http.service";
import {Http, Headers} from "@angular/http";

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
              private params: NavParams) {
    this.boardId = params.get("boardId");
    this.getComments();
  }

  getComments(){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    this.http
        .get(HttpService.BASE_URL +/board/ + this.boardId + "/comment", {headers:headers})
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

  reload(comment){
    this.comments.push(comment);
    this.content.scrollToBottom()

    //todo: 아래코드 오작동!
    setTimeout(this.content.scrollToBottom(), 2 * 100);
  }

}
