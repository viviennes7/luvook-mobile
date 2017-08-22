import { Component, ViewChild  } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {HttpService} from "../../../services/http.service"
import {Http, RequestOptions, Headers} from "@angular/http";
import {LoginService} from "../login.service";
@Component({
  selector: 'page-join',
  templateUrl: 'join.html'
})
export class JoinPage {

  static regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  email: string;
  password: string;
  confirm: string;

  constructor(private viewCtrl: ViewController,
              private http: Http,
              private loginService: LoginService) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  join(){
    if(!this.email){
      alert("이메일을 입력해주세요.");
      return;
    }else if(!this.password){
      alert("비밀번호를 입력해주세요.");
      return;
    }else if(!this.confirm){
      alert("확인 비밀번호를 입력해주세요");
      return;
    }else if(this.password != this.confirm){
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }else if(!this.isEmailForm(this.email)){
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    let params = JSON.stringify({email : this.email, password : this.password});

    this.http
        .post(HttpService.BASE_URL + "/member/signup", params, { headers:HttpService.BASIC_HEADERS })
        .subscribe(data =>{
          let result = data.json();
          if(result.statusCode == 200){
            this.loginService.login(this.email, this.password,this)
          }else{
            alert(result.message);
          }
        });
  }

  isEmailForm(email): boolean{
    let result = false;
    if(JoinPage.regEmail.test(email)) {
        result = true;
    }
    return result
  }

}
