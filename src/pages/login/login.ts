import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, App  } from 'ionic-angular';

import{ TabsPage } from '../tabs/tabs';
import{ JoinPage } from './join/join';
import {Http, RequestOptions, Headers} from "@angular/http";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    email: string;
    password: string;

  constructor(public navCtrl: NavController,
              private viewCtrl: ViewController,
              public modalCtrl: ModalController,
              private appCtrl: App,
              private http: Http
  ) {}

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  login(){
    if(!this.email){
      alert("이메일을 입력해주세요.");
      return;
    }else if(!this.password){
      alert("비밀번호를 입력해주세요.");
      return;
    }

    let params = JSON.stringify({email : this.email, password : this.password});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http
        .post("http://localhost:8080/member/signin", params, {headers:headers})
        .subscribe(data =>{
          let result = data.json();

          if(result.statusCode == 200){
            this.appCtrl.getRootNav().setRoot(TabsPage);
          }else{
            alert(result.message);
          }
        });
  }

  openJoinModal() {
    let modal = this.modalCtrl.create(JoinPage);
    modal.present();
  }
}
