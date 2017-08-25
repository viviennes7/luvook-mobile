import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import { HttpService } from "./http.service";
import { Observable } from 'rxjs/Rx';
@Injectable()
export class BookService{

  constructor(private http: Http){}

  search(query:string, start:number){
    let params = "?start=" + start + "&maxResults=10"
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
               .get(HttpService.BASE_URL + '/books/TITLE/' + query + params,  {headers:headers});
  }

  get(itemId){
    let params = "?itemIdType=ISBN13" ;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});
    return this.http
               .get(HttpService.BASE_URL + '/books/' + itemId + params,  {headers:headers});
  }

}
