import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Http, Headers} from "@angular/http";

@Injectable()
export class BoardCommentService{
  constructor(private http: Http){}

  getComments(boardId) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', "Authorization": HttpService.AUTH});
    return this.http
      .get(HttpService.BASE_URL + /board/ + boardId + "/comments", {headers: headers})
  }

  deleteComment(commentId: number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
      .delete(HttpService.BASE_URL + "/board/comment/" + commentId, { headers:headers });
  }
}
