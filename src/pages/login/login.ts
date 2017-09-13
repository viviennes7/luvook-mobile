import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

import{ TabsPage } from '../tabs/tabs';
import{ JoinPage } from './join/join';
import {LoginService} from "./login.service";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    email: string = '';
    password: string = '';

  constructor(private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              private loginService: LoginService
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
    this.loginService.login(this.email, this.password, null);
  }

  openJoinModal() {
    let modal = this.modalCtrl.create(JoinPage);
    modal.present();
  }
}
