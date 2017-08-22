import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {App} from 'ionic-angular';

import {StorageService} from "../../services/storage.service";
import {HttpService} from "../../services/http.service"
import { Observable } from 'rxjs/Rx';

import{ TabsPage } from '../tabs/tabs';
import{JoinPage} from './join/join';;

@Injectable()
export class LoginService{
  constructor(private appCtrl: App,
              private http: Http,
              private storageService: StorageService){}

  login(email, password, join:JoinPage){
    let params = JSON.stringify({email : email, password : password});

    this.http
        .post(HttpService.BASE_URL + "/member/signin", params, { headers:HttpService.BASIC_HEADERS })
        .subscribe(data =>{
          let result = data.json();
          if(result.statusCode == 200){
            let jwt = data.headers.get("Authorization");
            this.storageService.setJwt(jwt);

            if(join){
              join.dismiss();
            }

            this.appCtrl.getRootNav().setRoot(TabsPage);
          }else{
            alert(result.message);
          }
        });
  }
}
