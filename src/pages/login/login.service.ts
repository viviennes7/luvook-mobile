import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {App} from 'ionic-angular';

import {Member} from '../../datas/member';
import {JwtService} from "../../services/jwt.service";
import {HttpService} from "../../services/http.service"
import {MemberService} from "../../services/member.service";
import { Observable } from 'rxjs/Rx';

import{ TabsPage } from '../tabs/tabs';
import{JoinPage} from './join/join';;

@Injectable()
export class LoginService{
  constructor(private appCtrl: App,
              private http: Http,
              private jwtService: JwtService,
              private memberService: MemberService){}

  loginJwt(jwt: string){
    let params = "jwt="+jwt;
    this.http
        .post(HttpService.BASE_URL + "/member/signin/jwt", params, { headers:HttpService.HEADERS_BASIC})
        .subscribe(res =>{
          let result = res.json();
          if(result.statusCode == 200){
            let member = result.data;

            this.setBasicInfo(jwt, member);
            this.appCtrl.getRootNav().setRoot(TabsPage);
          }else{
            alert(result.message);
          }
        });
  }

  login(email:string, password:string, join:JoinPage){
    let params = JSON.stringify({email : email, password : password});

    this.http
        .post(HttpService.BASE_URL + "/member/signin", params, { headers:HttpService.HEADERS_JSON })
        .subscribe(res =>{
          let result = res.json();
          if(result.statusCode == 200){
            let jwt = res.headers.get("Authorization");
            let member = result.data;
            this.setBasicInfo(jwt, member);

            if(join){
              join.dismiss();
            }

            this.appCtrl.getRootNav().setRoot(TabsPage);
          }else{
            alert(result.message);
          }
        });
  }

  private setBasicInfo(jwt:string, member:Member){
    this.jwtService.set(jwt);
    HttpService.AUTH = jwt;
    MemberService.MY_INFO = member;
  }
}
