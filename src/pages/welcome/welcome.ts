import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  slides = [
    {
      title: "Welcome to the luVook!",
      description: " <b>luVook</b>에 오신 것을 환영합니다..",
      image: "assets/sample/ica-slidebox-img-1.png",
    },
    {
      title: "What is luVook?",
      description: "<b>luVook</b>은 책을 감상하고 평가할 수 있습니다.",
      image: "assets/sample/ica-slidebox-img-2.png",
    },
    {
      title: "How to use luVook?",
      description: "<b>luVook</b>는 일반 SNS처럼 사용하시면 됩니다.",
      image: "assets/sample/ica-slidebox-img-3.png",
    }
  ];
  constructor(public navCtrl: NavController,
              public appCtrl: App){}

  locateLoginPage() {
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
