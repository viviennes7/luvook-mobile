import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {HttpService} from "./http.service";

@Injectable()
export class BoardService{
  constructor(private http: Http){}

  getBoards(page:number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
               .get(HttpService.BASE_URL + '/boards/' + page,  {headers:headers});
  }

  getBoardsByMember(memberId){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
               .get(HttpService.BASE_URL + "/member/" + memberId + "/boards", {headers:headers});
  }

  deleteBoard(boardId: number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
      .delete(HttpService.BASE_URL + "/board/" + boardId, { headers:headers });
  }

  toggleHeart(boardId: number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
               .post(HttpService.BASE_URL + "/board/" + boardId + "/heart", "", { headers:headers });
  }

}
