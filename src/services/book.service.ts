import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import { HttpService } from "./http.service";
@Injectable()
export class BookService{

  constructor(private http: Http){}

  test(){
    this.http
        .get('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbminsoo61392239004&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901', { headers:HttpService.HEADERS_BASIC})
        .subscribe(res =>{
          //let result = res.json();
          console.log(res);
        });
  }

}
