import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class HttpService{
  // static BASE_URL: string = 'http://52.78.79.22:5000';
  static BASE_URL: string = 'http://192.168.0.3:5000';
  static AUTH: string = null;
  static HEADERS_BASIC:Headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  static HEADERS_JSON: Headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(){
  }
}
