import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, App  } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import{ TabsPage } from '../tabs/tabs';
import{ JoinPage } from './join/join';
import {Http, RequestOptions, Headers} from "@angular/http";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    email: string = 'test';
    password: string = '456552';

  constructor(private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              private appCtrl: App,
              private http: Http,
              private storageService: StorageService
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

    this.appCtrl.getRootNav().setRoot(TabsPage); //임시

    let params = JSON.stringify({email : this.email, password : this.password});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http
        .post("http://192.168.0.134:8080/member/signin", params, { headers:headers })
        .subscribe(data =>{
          let result = data.json();

          if(result.statusCode == 200){
            let jwt = data.headers.get("Authorization");
            this.storageService.setJwt(jwt);
            //this.storageService.get("jwt").subscribe(data => alert("RX ::: " + data));

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
