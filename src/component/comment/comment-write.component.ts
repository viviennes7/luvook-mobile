import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Http, Headers} from "@angular/http";
import {BoardComment} from "../../datas/board-comment";

@Component({
  selector: 'page-comment-write',
  templateUrl: 'comment-write.component.html'
})

export class CommentWriteComponent{
  @Input()
  boardId: number;

  @Output()
  pushComment = new EventEmitter();

  contents: string = "";

  constructor(private http: Http){}

  saveComment(){
    if(this.contents == ""){
      alert("댓글을 입력해주세요.");
      return;
    }

    let urlSearchParmas = new URLSearchParams();
    urlSearchParmas.append("boardId", this.boardId.toString());
    urlSearchParmas.append("contents", this.contents);
    let params = urlSearchParmas.toString();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});

    this.http
        .post(HttpService.BASE_URL + "/board/" + this.boardId + "/comment", params, {headers: headers})
        .subscribe(res =>{
          let result = res.json();
          if(result.statusCode == 200){
            let comment = result.data;
            this.contents = "";
            this.pushComment.emit(comment);
          }else{
            alert(result.message);
          }
        });

  }



}
