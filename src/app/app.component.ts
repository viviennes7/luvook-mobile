import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HttpService } from '../services/http.service';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome'
import {LoginPage} from "../pages/login/login";
import {TimelinePage} from "../pages/timeline/timeline";
import {LoginService} from "../pages/login/login.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private storage: Storage,
              private loginService: LoginService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.storage.get("jwt").then(jwt => {
        if(jwt == null){
          this.rootPage = LoginPage;
        }else{
          loginService.loginJwt(jwt);
        }
      });
    });
  }
}
