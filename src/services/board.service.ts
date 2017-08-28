import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {HttpService} from "./http.service";

@Injectable()
export class BoardService{
  constructor(private http: Http){}

  getBookBoards(page:number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
               .get(HttpService.BASE_URL + '/boards/' + page,  {headers:headers});
  }
}
