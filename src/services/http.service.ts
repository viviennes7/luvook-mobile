import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class HttpService{
  static BASE_URL: string = 'http://192.168.0.3:8080';
  static AUTH: string = null;
  static BASIC_HEADERS: Headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(){
  }
}
